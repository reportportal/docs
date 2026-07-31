const FOLDER_RULES = [
  { folder: 'installation-steps', types: ['TechArticle', 'HowTo'] },
  { folder: 'installation-steps-advanced', types: ['TechArticle', 'HowTo'] },
  { folder: 'configuration', types: ['TechArticle'] },
  { folder: 'log-data-in-reportportal', types: ['TechArticle'] },
  { folder: 'external-integrations', types: ['TechArticle'] },
  { folder: 'plugins', types: ['TechArticle'] },
  { folder: 'developers-guides', types: ['TechArticle'] },
  { folder: 'issues-troubleshooting', types: ['TechArticle', 'FAQPage'] },
  { folder: 'FAQ', types: ['FAQPage'] },
];

const DEFAULT_TYPES = ['TechArticle'];
const HOMEPAGE_TYPES = ['SoftwareApplication'];

function readFrontMatterOverride(value) {
  if (!value) return null;
  const list = Array.isArray(value) ? value : String(value).split(',');
  const cleaned = list.map((item) => String(item).trim()).filter(Boolean);
  return cleaned.length ? cleaned : null;
}

function isHomepage({ permalink, frontMatter, baseUrl }) {
  return permalink === baseUrl || frontMatter.slug === '/';
}

function typesFromFolder(relativeFile) {
  const firstSegment = relativeFile.replace(/\\/g, '/').split('/')[0];
  const rule = FOLDER_RULES.find((r) => r.folder === firstSegment);
  return rule ? [...rule.types] : null;
}

export function resolveSchemaTypes({ relativeFile, frontMatter, permalink, baseUrl }) {
  const override = readFrontMatterOverride(frontMatter && frontMatter.schema);
  if (override) return override;

  if (isHomepage({ permalink, frontMatter, baseUrl })) return [...HOMEPAGE_TYPES];

  return typesFromFolder(relativeFile) || [...DEFAULT_TYPES];
}

export { FOLDER_RULES, DEFAULT_TYPES, HOMEPAGE_TYPES };
