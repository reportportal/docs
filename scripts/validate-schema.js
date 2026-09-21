const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const fastGlob = require('fast-glob');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const MAX_REPORTED_ERRORS = 100;
const MIN_HOWTO_STEPS = 2;
const MIN_FAQ_QUESTIONS = 2;

const REQUIRED_FIELDS_BY_TYPE = {
  TechArticle: ['headline', 'description', 'url', 'author', 'publisher'],
  Article: ['headline', 'description', 'url', 'author', 'publisher'],
  HowTo: ['name', 'description', 'step'],
  FAQPage: ['mainEntity'],
  SoftwareApplication: ['name', 'description', 'applicationCategory', 'operatingSystem', 'offers'],
  BreadcrumbList: ['itemListElement'],
};

const toArray = (value) => [].concat(value ?? []);

function newErrorCollector() {
  const errors = [];
  return {
    report(file, message) {
      errors.push(`${path.relative(BUILD_DIR, file)}: ${message}`);
    },
    get list() {
      return errors;
    },
  };
}

function newStats() {
  return { pagesWith: 0, pagesWithout: 0, countsByType: {} };
}

function checkRequiredFields(node, typeName, errors, file) {
  const required = REQUIRED_FIELDS_BY_TYPE[typeName];
  if (!required) return;
  required.forEach((field) => {
    if (!node[field]) {
      errors.report(file, `${typeName} missing "${field}"`);
    }
  });
}

function checkHowTo(node, errors, file) {
  const steps = toArray(node.step);
  if (steps.length < MIN_HOWTO_STEPS) {
    errors.report(file, `HowTo must have at least ${MIN_HOWTO_STEPS} steps`);
  }
  steps.forEach((step, index) => {
    if (!step || typeof step !== 'object') {
      errors.report(file, `HowTo step[${index}] is not an object`);
      return;
    }
    if (step['@type'] !== 'HowToStep')
      errors.report(file, `HowTo step[${index}] @type != HowToStep`);
    if (!step.name) errors.report(file, `HowTo step[${index}] missing name`);
    if (!step.text) errors.report(file, `HowTo step[${index}] missing text`);
  });
}

function checkFaqPage(node, errors, file) {
  const questions = toArray(node.mainEntity);
  if (questions.length < MIN_FAQ_QUESTIONS) {
    errors.report(file, `FAQPage must have at least ${MIN_FAQ_QUESTIONS} questions`);
  }
  questions.forEach((question, index) => {
    if (!question || question['@type'] !== 'Question') {
      errors.report(file, `FAQPage mainEntity[${index}] @type != Question`);
    }
    if (!question || !question.name) {
      errors.report(file, `FAQPage mainEntity[${index}] missing name`);
    }
    const answer = question && question.acceptedAnswer;
    if (!answer || answer['@type'] !== 'Answer' || !answer.text) {
      errors.report(file, `FAQPage mainEntity[${index}].acceptedAnswer invalid`);
    }
  });
}

function checkSoftwareApplication(node, errors, file) {
  const { offers } = node;
  if (!offers || typeof offers !== 'object') {
    errors.report(file, 'SoftwareApplication.offers must be an object');
    return;
  }
  if (offers.price === undefined) errors.report(file, 'SoftwareApplication.offers.price missing');
  if (!offers.priceCurrency)
    errors.report(file, 'SoftwareApplication.offers.priceCurrency missing');
}

function checkBreadcrumbList(node, errors, file) {
  const items = toArray(node.itemListElement);
  if (items.length === 0) {
    errors.report(file, 'BreadcrumbList must have at least one itemListElement');
    return;
  }
  items.forEach((item, index) => {
    if (!item || item.position === undefined) {
      errors.report(file, `BreadcrumbList itemListElement[${index}] missing position`);
    }
    if (!item || !item.name) {
      errors.report(file, `BreadcrumbList itemListElement[${index}] missing name`);
    }
  });
}

const TYPE_CHECKERS = {
  HowTo: checkHowTo,
  FAQPage: checkFaqPage,
  SoftwareApplication: checkSoftwareApplication,
  BreadcrumbList: checkBreadcrumbList,
};

function validateNode(node, errors, file) {
  if (!node || !node['@type']) {
    errors.report(file, 'JSON-LD block missing @type');
    return;
  }
  toArray(node['@type']).forEach((typeName) => {
    checkRequiredFields(node, typeName, errors, file);
    const extraCheck = TYPE_CHECKERS[typeName];
    if (extraCheck) extraCheck(node, errors, file);
  });
}

function extractJsonLdBlocks(html) {
  const $ = cheerio.load(html);
  return $('script[type="application/ld+json"]')
    .map((_, el) => $(el).contents().text())
    .get();
}

function validateHtmlFile(file, errors, stats) {
  const rawBlocks = extractJsonLdBlocks(fs.readFileSync(file, 'utf8'));
  if (rawBlocks.length === 0) {
    stats.pagesWithout += 1;
    return;
  }
  stats.pagesWith += 1;

  rawBlocks.forEach((rawBlock) => {
    let parsed;
    try {
      parsed = JSON.parse(rawBlock);
    } catch (e) {
      errors.report(file, `invalid JSON in JSON-LD block: ${e.message}`);
      return;
    }
    toArray(parsed).forEach((node) => {
      const graphChildren = node && node['@graph'] ? toArray(node['@graph']) : [node];
      graphChildren.forEach((child) => validateNode(child, errors, file));

      const typeKey = toArray(node && node['@type']).join(',') || '(no @type)';
      stats.countsByType[typeKey] = (stats.countsByType[typeKey] || 0) + 1;
    });
  });
}

function printReport(totalFiles, stats, errors) {
  console.log(`\nValidated ${totalFiles} HTML files.`);
  console.log(`  Pages with JSON-LD: ${stats.pagesWith}`);
  console.log(`  Pages without JSON-LD: ${stats.pagesWithout}`);
  console.log('  Types emitted:');
  Object.entries(stats.countsByType)
    .sort()
    .forEach(([typeName, count]) => {
      console.log(`    ${typeName}: ${count}`);
    });

  if (errors.list.length === 0) {
    console.log('\nAll JSON-LD blocks look valid.\n');
    return;
  }

  console.error(`\n${errors.list.length} validation error(s):`);
  errors.list.slice(0, MAX_REPORTED_ERRORS).forEach((error) => {
    console.error(`  - ${error}`);
  });
  if (errors.list.length > MAX_REPORTED_ERRORS) {
    console.error(`  ...and ${errors.list.length - MAX_REPORTED_ERRORS} more`);
  }
}

async function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error(`Build directory not found: ${BUILD_DIR}`);
    console.error('Run `npm run build` first.');
    process.exit(1);
  }

  const htmlFiles = await fastGlob(['**/*.html'], { cwd: BUILD_DIR, absolute: true });
  const errors = newErrorCollector();
  const stats = newStats();

  htmlFiles.forEach((file) => validateHtmlFile(file, errors, stats));

  printReport(htmlFiles.length, stats, errors);
  if (errors.list.length > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
