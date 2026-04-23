import { toString as mdastToString } from 'mdast-util-to-string';

const MIN_FAQ_ENTRIES = 2;
const MIN_HOWTO_STEPS = 2;
const MIN_LIST_ITEMS_FOR_STEPS = 3;
const MAX_ANSWER_LENGTH = 1200;
const STEP_NAME_MAX_LENGTH = 110;

const FAQ_HEADING_DEPTHS = [3, 4];
const HOWTO_HEADING_DEPTHS_IN_ORDER = [3, 2];

const QUESTION_STARTERS = /^(how|what|why|when|where|who|which|can|do|does|did|is|are|should|will)\b/i;
const STEP_HEADING = /^(step\s*\d*\b|\d+\.\s+)/i;

const IGNORABLE_NODE_TYPES = new Set([
  'code',
  'html',
  'thematicBreak',
  'mdxjsEsm',
  'mdxFlowExpression',
  'mdxTextExpression',
  'mdxJsxFlowElement',
  'mdxJsxTextElement',
]);

function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/\s+/g, ' ')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .trim();
}

function truncate(text, maxLength = MAX_ANSWER_LENGTH) {
  if (!text || text.length <= maxLength) return text || '';
  const head = text.slice(0, maxLength);
  const lastSpace = head.lastIndexOf(' ');
  const safe = lastSpace > maxLength * 0.6 ? head.slice(0, lastSpace) : head;
  return `${safe.trimEnd()}...`;
}

function nodeToText(node) {
  if (!node) return '';
  try {
    return cleanText(mdastToString(node));
  } catch {
    return '';
  }
}

function headingText(node) {
  return cleanText(nodeToText(node));
}

function collectSectionText(siblings, startIndex, currentDepth) {
  const parts = [];
  for (let i = startIndex; i < siblings.length; i++) {
    const node = siblings[i];
    if (node.type === 'heading' && node.depth <= currentDepth) break;
    if (IGNORABLE_NODE_TYPES.has(node.type)) continue;

    const text = nodeToText(node);
    if (text) parts.push(text);
  }
  return cleanText(parts.join(' '));
}

function looksLikeQuestion(text) {
  if (!text) return false;
  return text.endsWith('?') || QUESTION_STARTERS.test(text);
}

export function extractFaqs(tree) {
  const siblings = tree.children || [];

  return siblings.reduce((acc, node, i) => {
    if (node.type !== 'heading' || !FAQ_HEADING_DEPTHS.includes(node.depth)) return acc;

    const question = headingText(node);
    if (!looksLikeQuestion(question)) return acc;

    const answer = truncate(collectSectionText(siblings, i + 1, node.depth));
    if (answer) {
      acc.push({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      });
    }
    return acc;
  }, []);
}

function looksLikeStepHeading(text) {
  return !!text && STEP_HEADING.test(text);
}

function buildStep(position, name, text) {
  return {
    '@type': 'HowToStep',
    position,
    name,
    text: text || name,
  };
}

function extractStepsFromHeadings(tree) {
  const siblings = tree.children || [];

  return HOWTO_HEADING_DEPTHS_IN_ORDER.reduce((found, depth) => {
    if (found.length >= MIN_HOWTO_STEPS) return found;

    let position = 1;
    const steps = siblings.reduce((acc, node, i) => {
      if (node.type === 'heading' && node.depth === depth) {
        const name = headingText(node);
        if (looksLikeStepHeading(name)) {
          const text = truncate(collectSectionText(siblings, i + 1, node.depth));
          acc.push(buildStep(position++, name, text));
        }
      }
      return acc;
    }, []);

    return steps.length >= MIN_HOWTO_STEPS ? steps : found;
  }, []);
}

function extractStepsFromOrderedList(tree) {
  const siblings = tree.children || [];
  const firstOrderedList = siblings.find(
    (n) =>
      n.type === 'list' &&
      n.ordered &&
      Array.isArray(n.children) &&
      n.children.length >= MIN_LIST_ITEMS_FOR_STEPS,
  );
  if (!firstOrderedList) return [];

  return firstOrderedList.children.map((item, index) => {
    const fullText = truncate(nodeToText(item));
    const firstSentence = fullText.split(/\.\s/)[0];
    const name = cleanText(firstSentence).slice(0, STEP_NAME_MAX_LENGTH) || `Step ${index + 1}`;
    return buildStep(index + 1, name, fullText);
  });
}

export function extractHowTo(tree, frontMatter) {
  let steps = extractStepsFromHeadings(tree);
  if (steps.length < MIN_HOWTO_STEPS) steps = extractStepsFromOrderedList(tree);
  if (steps.length < MIN_HOWTO_STEPS) return null;

  return {
    '@type': 'HowTo',
    name: cleanText(frontMatter.title || frontMatter.sidebar_label || 'Guide'),
    step: steps,
  };
}

function firstParagraphText(tree) {
  const firstParagraph = (tree.children || []).find((n) => n.type === 'paragraph');
  return firstParagraph ? truncate(nodeToText(firstParagraph)) : '';
}

export function parseDoc({ tree, types, frontMatter }) {
  const result = { types: [...types] };

  if (result.types.includes('FAQPage')) {
    const faqs = extractFaqs(tree);
    if (faqs.length >= MIN_FAQ_ENTRIES) {
      result.faq = faqs;
    } else {
      result.types = result.types.filter((t) => t !== 'FAQPage');
    }
  }

  if (result.types.includes('HowTo')) {
    const howto = extractHowTo(tree, frontMatter);
    if (howto) {
      result.howto = howto;
    } else {
      result.types = result.types.filter((t) => t !== 'HowTo');
    }
  }

  if (result.types.includes('SoftwareApplication')) {
    const description = firstParagraphText(tree);
    result.softwareApplication = description ? { description } : {};
  }

  return result;
}
