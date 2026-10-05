const fs = require('fs');
const path = require('path');
const {
  RELEASES_DIR,
  ARCHIVED_RELEASES_DIR,
  listReleaseFiles,
} = require('./release-utils');

const ROOT_DIR = path.join(__dirname, '..');
const RELEASE_REDIRECTS_PATH = path.join(ROOT_DIR, 'release-redirects.json');
const RELEASE_ALIASES_PATH = path.join(ROOT_DIR, 'release-aliases.json');

function versionSlug(fileName) {
  return fileName.replace(/\.md$/, '');
}

function shortVersion(fileName) {
  return versionSlug(fileName).replace(/^Version/i, '');
}

function docsTarget(fileName, archived) {
  const slug = versionSlug(fileName);
  const prefix = archived ? '/docs/releases/archived-releases' : '/docs/releases';
  return `${prefix}/${slug}/`;
}

function addPair(rules, sourceBase, target) {
  rules.push({ source: sourceBase, target, status: '301' });
  rules.push({ source: `${sourceBase}/`, target, status: '301' });
}

function buildCanonicalMap() {
  const map = new Map();

  listReleaseFiles(RELEASES_DIR).forEach((fileName) => {
    map.set(versionSlug(fileName), { fileName, archived: false });
  });

  listReleaseFiles(ARCHIVED_RELEASES_DIR).forEach((fileName) => {
    const slug = versionSlug(fileName);
    if (map.has(slug)) {
      throw new Error(
        `Release ${slug} exists in both releases/ and releases/archived-releases/`,
      );
    }
    map.set(slug, { fileName, archived: true });
  });

  return map;
}

function generateRedirects(canonicalMap, aliases) {
  const rules = [];
  const seen = new Set();

  const push = (sourceBase, target) => {
    if (seen.has(sourceBase)) {
      throw new Error(`Duplicate redirect source: ${sourceBase}`);
    }
    seen.add(sourceBase);
    addPair(rules, sourceBase, target);
  };

  for (const { fileName, archived } of canonicalMap.values()) {
    const target = docsTarget(fileName, archived);
    const short = shortVersion(fileName);

    push(`/docs/releases/${short}`, target);

    if (archived) {
      push(`/docs/releases/${versionSlug(fileName)}`, target);
    }
  }

  for (const [aliasSlug, canonicalSlug] of Object.entries(aliases)) {
    const entry = canonicalMap.get(canonicalSlug);
    if (!entry) {
      throw new Error(
        `Alias "${aliasSlug}" points to missing release "${canonicalSlug}"`,
      );
    }
    push(`/docs/releases/${aliasSlug}`, docsTarget(entry.fileName, entry.archived));
  }

  return rules;
}

function main() {
  const aliases = JSON.parse(fs.readFileSync(RELEASE_ALIASES_PATH, 'utf-8'));
  const canonicalMap = buildCanonicalMap();
  const rules = generateRedirects(canonicalMap, aliases);

  fs.writeFileSync(RELEASE_REDIRECTS_PATH, `${JSON.stringify(rules, null, 2)}\n`, 'utf-8');
  console.log(`Wrote ${rules.length} redirect rules to release-redirects.json`);
}

main();
