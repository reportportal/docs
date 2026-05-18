const fs = require('fs');
const path = require('path');

const SITE_ORIGIN = 'https://reportportal.io';
const SITE_BASE = '/docs/';
const SITE_TITLE = 'ReportPortal Documentation';
const SITE_DESCRIPTION =
  'ReportPortal is an open-source TestOps service for centralized test reporting, AI-powered failure analysis, and real-time test analytics.';

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const STATIC_DIR = path.join(ROOT, 'static');
const OUT_MD = path.join(STATIC_DIR, 'llms.txt');
const OUT_JSON = path.join(STATIC_DIR, 'ai-sitemap.json');

const SECTION_FALLBACK_POSITION = 999;
const PAGE_FALLBACK_POSITION = 999;

function walkDocs(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'img' || entry.name === 'resources') continue;
      walkDocs(full, acc);
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      acc.push(full);
    }
  }
  return acc;
}

function parseFrontMatter(text) {
  if (!text.startsWith('---')) return {};
  const end = text.indexOf('\n---', 3);
  if (end === -1) return {};
  const block = text.slice(3, end).trim();
  const data = {};
  for (const line of block.split('\n')) {
    const m = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (!m) continue;
    let value = m[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[m[1]] = value;
  }
  return data;
}

function readJsonSafe(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return null;
  }
}

function toNumber(v, fallback) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function titleFromFilename(name) {
  return name
    .replace(/\.(md|mdx)$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .trim();
}

function buildUrlPath(relPath, frontMatter) {
  if (frontMatter.slug) {
    const slug = frontMatter.slug.startsWith('/')
      ? frontMatter.slug.slice(1)
      : frontMatter.slug;
    return slug.endsWith('/') || slug === '' ? slug : `${slug}/`;
  }
  const noExt = relPath.replace(/\.(md|mdx)$/, '');
  const stripped = noExt.replace(/(^|\/)index$/, '$1');
  return stripped.endsWith('/') || stripped === '' ? stripped : `${stripped}/`;
}

function absoluteUrl(urlPath) {
  return `${SITE_ORIGIN}${SITE_BASE}${urlPath}`;
}

function loadPages() {
  const files = walkDocs(DOCS_DIR);
  return files.map((file) => {
    const rel = path.relative(DOCS_DIR, file).split(path.sep).join('/');
    const fm = parseFrontMatter(fs.readFileSync(file, 'utf8'));
    const baseName = path.basename(rel);
    const isIndex = /^index\.(md|mdx)$/.test(baseName);
    const sectionDir = rel.includes('/') ? rel.split('/')[0] : '';
    const urlPath = buildUrlPath(rel, fm);
    const depth = rel.split('/').length;
    const title =
      fm.title ||
      fm.sidebar_label ||
      (isIndex && sectionDir
        ? sectionDir.replace(/[-_]/g, ' ')
        : titleFromFilename(baseName));
    return {
      file,
      rel,
      depth,
      sectionDir,
      isIndex,
      isRoot: urlPath === '',
      title: title.trim(),
      description: (fm.description || '').trim(),
      position: toNumber(fm.sidebar_position, PAGE_FALLBACK_POSITION),
      url: absoluteUrl(urlPath),
    };
  });
}

function loadSections(pages) {
  const sections = new Map();
  for (const page of pages) {
    if (!page.sectionDir) continue;
    if (!sections.has(page.sectionDir)) {
      const categoryFile = path.join(
        DOCS_DIR,
        page.sectionDir,
        '_category_.json',
      );
      const category = readJsonSafe(categoryFile);
      sections.set(page.sectionDir, {
        dir: page.sectionDir,
        title: category?.label || null,
        position: toNumber(category?.position, null),
        pages: [],
      });
    }
    sections.get(page.sectionDir).pages.push(page);
  }
  for (const section of sections.values()) {
    const indexPage = section.pages
      .filter((p) => p.isIndex)
      .sort((a, b) => a.depth - b.depth)[0];
    if (!section.title) {
      section.title =
        indexPage?.title ||
        section.dir.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    }
    if (section.position == null) {
      section.position = indexPage?.position ?? SECTION_FALLBACK_POSITION;
    }
    section.description = indexPage?.description || '';
    section.url = indexPage?.url || null;
    section.pages.sort((a, b) => {
      if (a.isIndex !== b.isIndex) return a.isIndex ? -1 : 1;
      if (a.depth !== b.depth) return a.depth - b.depth;
      if (a.position !== b.position) return a.position - b.position;
      return a.title.localeCompare(b.title);
    });
  }
  return [...sections.values()].sort((a, b) => {
    if (a.position !== b.position) return a.position - b.position;
    return a.title.localeCompare(b.title);
  });
}

function escapeMd(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function renderMarkdown(rootPage, sections) {
  const lines = [];
  lines.push(`# ${SITE_TITLE}`);
  lines.push('');
  lines.push(`> ${rootPage?.description || SITE_DESCRIPTION}`);
  lines.push('');

  if (rootPage) {
    lines.push('## Overview');
    lines.push('');
    lines.push(
      `- [${rootPage.title}](${rootPage.url})${
        rootPage.description ? `: ${escapeMd(rootPage.description)}` : ''
      }`,
    );
    lines.push('');
  }

  for (const section of sections) {
    lines.push(`## ${section.title}`);
    lines.push('');
    for (const page of section.pages) {
      const suffix = page.description ? `: ${escapeMd(page.description)}` : '';
      lines.push(`- [${page.title}](${page.url})${suffix}`);
    }
    lines.push('');
  }

  lines.push('## Optional');
  lines.push('');
  lines.push(
    `- [AI Sitemap](${SITE_ORIGIN}${SITE_BASE}ai-sitemap.json): JSON content map of every documentation page.`,
  );
  lines.push('');

  return lines.join('\n');
}

function renderJson(rootPage, sections) {
  return {
    name: SITE_TITLE,
    url: `${SITE_ORIGIN}${SITE_BASE}`,
    description: rootPage?.description || SITE_DESCRIPTION,
    overview: rootPage
      ? {
          title: rootPage.title,
          url: rootPage.url,
          description: rootPage.description,
        }
      : null,
    sections: sections.map((section) => ({
      title: section.title,
      url: section.url,
      description: section.description,
      pages: section.pages.map((page) => ({
        title: page.title,
        url: page.url,
        description: page.description,
      })),
    })),
  };
}

function main() {
  if (!fs.existsSync(STATIC_DIR)) fs.mkdirSync(STATIC_DIR, { recursive: true });

  const pages = loadPages();
  const rootPage = pages.find((p) => p.isRoot) || null;
  const sections = loadSections(pages.filter((p) => p !== rootPage));

  const md = renderMarkdown(rootPage, sections);
  const json = renderJson(rootPage, sections);

  fs.writeFileSync(OUT_MD, md);
  fs.writeFileSync(OUT_JSON, `${JSON.stringify(json, null, 2)}\n`);

  const total = sections.reduce((sum, s) => sum + s.pages.length, 0) + (rootPage ? 1 : 0);
  console.log(
    `Wrote ${path.relative(ROOT, OUT_MD)} and ${path.relative(ROOT, OUT_JSON)} (${sections.length} sections, ${total} pages).`,
  );
}

main();
