import path from 'path';
import { promises as fs } from 'fs';
import fastGlob from 'fast-glob';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';

import { resolveSchemaTypes } from './mapping.js';
import { parseDoc } from './parser.js';

const PLUGIN_NAME = 'plugin-schema-org';
const DOCUSAURUS_DEFAULT_DOCS_DIR = 'docs';
const TYPES_THAT_NEED_AST = new Set(['FAQPage', 'HowTo', 'SoftwareApplication']);
const needsAst = (types) => types.some((t) => TYPES_THAT_NEED_AST.has(t));

function resolveDocsDir(siteConfig) {
  const presets = siteConfig.presets || [];
  const match = presets.find((p) => {
    const opts = Array.isArray(p) ? p[1] : null;
    return opts && opts.docs && opts.docs.path;
  });
  const options = Array.isArray(match) ? match[1] : null;

  return (options && options.docs.path) || DOCUSAURUS_DEFAULT_DOCS_DIR;
}

const markdownProcessor = unified().use(remarkParse);
const mdxProcessor = unified().use(remarkParse).use(remarkMdx);

function joinUrl(...segments) {
  const parts = segments.flatMap((segment) => String(segment || '').split('/')).filter(Boolean);
  return `/${parts.join('/')}/`;
}

function computePermalink({ relativeFile, frontMatter, baseUrl }) {
  const { dir, name } = path.parse(relativeFile);
  const fileName = name === 'index' ? '' : name;

  const rawSlug = frontMatter.slug;
  if (typeof rawSlug === 'string' && rawSlug.trim() !== '') {
    const slug = rawSlug.trim();
    return slug.startsWith('/')
      ? joinUrl(baseUrl, slug)
      : joinUrl(baseUrl, dir, slug);
  }

  return joinUrl(baseUrl, dir, fileName);
}

function isPublishable(frontMatter) {
  return frontMatter.draft !== true && frontMatter.unlisted !== true;
}

function parseToTree(content, isMdx) {
  const processor = isMdx ? mdxProcessor : markdownProcessor;
  try {
    return processor.parse(content);
  } catch {
    return markdownProcessor.parse(content);
  }
}

async function buildEntryForFile({ docsAbsDir, relativeFile, baseUrl }) {
  const rawFile = await fs.readFile(path.join(docsAbsDir, relativeFile), 'utf8');
  const { data: frontMatter, content } = matter(rawFile);

  if (!isPublishable(frontMatter)) return null;

  const permalink = computePermalink({ relativeFile, frontMatter, baseUrl });
  const initialTypes = resolveSchemaTypes({ relativeFile, frontMatter, permalink, baseUrl });
  if (!initialTypes.length) return null;

  if (!needsAst(initialTypes)) {
    return { permalink, data: { types: initialTypes } };
  }

  const tree = parseToTree(content, relativeFile.endsWith('.mdx'));
  const parsed = parseDoc({ tree, types: initialTypes, frontMatter });
  if (!parsed.types.length) return null;

  return {
    permalink,
    data: {
      types: parsed.types,
      faq: parsed.faq,
      howto: parsed.howto,
      softwareApplication: parsed.softwareApplication,
    },
  };
}

export default function pluginSchemaOrg(context, userOptions = {}) {
  const { siteDir, baseUrl, siteConfig } = context;
  const docsDir = userOptions.docsDir || resolveDocsDir(siteConfig);
  const docsAbsDir = path.resolve(siteDir, docsDir);

  return {
    name: PLUGIN_NAME,

    async loadContent() {
      const relativeFiles = await fastGlob(['**/*.md', '**/*.mdx'], {
        cwd: docsAbsDir,
        dot: false,
      });

      const entries = await Promise.all(
        relativeFiles.map((relativeFile) =>
          buildEntryForFile({ docsAbsDir, relativeFile, baseUrl }),
        ),
      );

      return entries.reduce((map, entry) => {
        if (entry) map[entry.permalink] = entry.data;
        return map;
      }, {});
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content || {});
    },
  };
}
