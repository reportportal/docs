const ORGANIZATION = {
  name: 'ReportPortal',
  url: 'https://reportportal.io',
  logoPath: '/docs/img/logo.svg',
};

const LICENSE_URL = 'https://www.apache.org/licenses/LICENSE-2.0';
const SCHEMA_CONTEXT = 'https://schema.org';

const SOFTWARE_APPLICATION_DEFAULTS = {
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'Test Automation Reporting',
  operatingSystem: 'Linux, macOS, Windows',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

const MIN_FAQ_ENTRIES = 2;
const MIN_HOWTO_STEPS = 2;

function absoluteUrl(siteConfig, pathname) {
  const origin = ((siteConfig && siteConfig.url) || '').replace(/\/$/, '');
  const wantsTrailingSlash = !siteConfig || siteConfig.trailingSlash !== false;

  let cleanPath = pathname || '/';
  const hasFileExtension = /\.[a-zA-Z0-9]{1,5}$/.test(cleanPath);
  if (wantsTrailingSlash && !cleanPath.endsWith('/') && !hasFileExtension) {
    cleanPath += '/';
  }
  return `${origin}${cleanPath}`;
}

function toIsoDate(value) {
  if (value === undefined || value === null || value === '') return undefined;
  const date = typeof value === 'number' ? new Date(value * 1000) : new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

function organizationNode(siteConfig) {
  return {
    '@type': 'Organization',
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(siteConfig, ORGANIZATION.logoPath),
    },
  };
}

function resolveDateModified(metadata, frontMatter) {
  return (
    toIsoDate(metadata.lastUpdatedAt) ||
    toIsoDate(metadata.lastUpdatedAtFormatted) ||
    toIsoDate(frontMatter && frontMatter.last_update && frontMatter.last_update.date)
  );
}

function normalizeKeywords(frontMatter) {
  const raw = frontMatter && frontMatter.keywords;
  if (Array.isArray(raw) && raw.length) return raw.join(', ');
  if (typeof raw === 'string' && raw.trim()) return raw.trim();
  return undefined;
}

function buildSharedFields({ siteConfig, metadata, frontMatter }) {
  const pageUrl = absoluteUrl(siteConfig, metadata.permalink);
  const description =
    (frontMatter && frontMatter.description) || metadata.description || metadata.title;
  const dateModified = resolveDateModified(metadata, frontMatter);
  const datePublished = toIsoDate(frontMatter && frontMatter.date) || dateModified;
  const inLanguage = (siteConfig && siteConfig.i18n && siteConfig.i18n.defaultLocale) || 'en';
  const organization = organizationNode(siteConfig);
  const version = (frontMatter && frontMatter.version) || metadata.version;
  const keywords = normalizeKeywords(frontMatter);

  const fields = {
    headline: metadata.title,
    name: metadata.title,
    description,
    url: pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    inLanguage,
    author: organization,
    publisher: organization,
  };

  if (dateModified) fields.dateModified = dateModified;
  if (datePublished) fields.datePublished = datePublished;
  if (version && version !== 'current') fields.version = String(version);
  if (keywords) fields.keywords = keywords;

  return fields;
}

function buildArticle(context, schemaType) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': schemaType,
    ...buildSharedFields(context),
  };
}

function buildHowTo(context) {
  const shared = buildSharedFields(context);
  const howto = (context.entry && context.entry.howto) || {};
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'HowTo',
    name: howto.name || shared.name,
    description: shared.description,
    url: shared.url,
    inLanguage: shared.inLanguage,
    author: shared.author,
    publisher: shared.publisher,
    ...(shared.dateModified ? { dateModified: shared.dateModified } : {}),
    ...(shared.datePublished ? { datePublished: shared.datePublished } : {}),
    step: Array.isArray(howto.step) ? howto.step : [],
  };
}

function buildFaqPage(context) {
  const shared = buildSharedFields(context);
  const questions = (context.entry && context.entry.faq) || [];
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'FAQPage',
    name: shared.name,
    description: shared.description,
    url: shared.url,
    inLanguage: shared.inLanguage,
    publisher: shared.publisher,
    ...(shared.dateModified ? { dateModified: shared.dateModified } : {}),
    mainEntity: questions,
  };
}

function buildSoftwareApplication(context) {
  const shared = buildSharedFields(context);
  const extras = (context.entry && context.entry.softwareApplication) || {};
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'SoftwareApplication',
    name: ORGANIZATION.name,
    alternateName: context.metadata.title,
    description: extras.description || shared.description,
    url: shared.url,
    inLanguage: shared.inLanguage,
    author: shared.author,
    publisher: shared.publisher,
    license: LICENSE_URL,
    softwareHelp: { '@type': 'CreativeWork', url: shared.url },
    ...SOFTWARE_APPLICATION_DEFAULTS,
    ...(shared.dateModified ? { dateModified: shared.dateModified } : {}),
  };
}

const BUILDERS = {
  TechArticle: (ctx) => buildArticle(ctx, 'TechArticle'),
  Article: (ctx) => buildArticle(ctx, 'Article'),
  HowTo: buildHowTo,
  FAQPage: buildFaqPage,
  SoftwareApplication: buildSoftwareApplication,
};

function resolveTypes(entry, frontMatter) {
  if (entry && Array.isArray(entry.types) && entry.types.length) return entry.types;

  const fromFrontMatter = frontMatter && frontMatter.schema;
  if (Array.isArray(fromFrontMatter) && fromFrontMatter.length) return fromFrontMatter;
  if (typeof fromFrontMatter === 'string') {
    const parts = fromFrontMatter.split(/[,\s]+/).filter(Boolean);
    if (parts.length) return parts;
  }

  return ['TechArticle'];
}

function hasEnoughContent(type, entry) {
  if (type === 'FAQPage') {
    return !!(entry && Array.isArray(entry.faq) && entry.faq.length >= MIN_FAQ_ENTRIES);
  }
  if (type === 'HowTo') {
    return !!(
      entry &&
      entry.howto &&
      Array.isArray(entry.howto.step) &&
      entry.howto.step.length >= MIN_HOWTO_STEPS
    );
  }
  return true;
}

export function buildJsonLd({ siteConfig, metadata, frontMatter, entry }) {
  if (!metadata || !metadata.permalink) return [];

  const context = { siteConfig, metadata, frontMatter, entry };
  const types = resolveTypes(entry, frontMatter).map((t) => String(t).trim());

  return types
    .filter((type) => BUILDERS[type] && hasEnoughContent(type, entry))
    .map((type) => BUILDERS[type](context));
}
