const fs = require('fs');
const path = require('path');

const RELEASES_API_URL =
  process.env.RELEASES_URL ||
  'https://api.github.com/repos/reportportal/reportportal/releases';
const RELEASES_PER_PAGE = 100;
const RELEASES_DIR = path.join(__dirname, '..', 'docs', 'releases');

async function main() {
  const releases = await fetchAllReleases();

  const published = releases.filter((r) => !r.draft);

  published.sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at),
  );

  const scope = (process.env.SYNC_SCOPE || 'latest').trim().toLowerCase();
  const filtered = applyScope(published, scope);
  console.log(`Scope: "${scope}" -> checking ${filtered.length} of ${published.length} releases.\n`);

  fs.mkdirSync(RELEASES_DIR, { recursive: true });

  const existingFiles = new Set(
    fs.readdirSync(RELEASES_DIR).map((f) => f.toLowerCase()),
  );

  let created = 0;

  for (let i = 0; i < filtered.length; i++) {
    const release = filtered[i];
    const name = release.name?.trim();
    if (!name) {
      console.log(`Skipping release id=${release.id} - empty name`);
      continue;
    }

    const fileName = buildFileName(name);

    if (existingFiles.has(fileName.toLowerCase())) {
      console.log(`Already exists: ${fileName}`);
      continue;
    }

    const sidebarLabel = buildSidebarLabel(name);
    const body = transformBody(release.body || '');
    const position = i + 1;

    const content = [
      '---',
      `sidebar_position: ${position}`,
      `sidebar_label: ${sidebarLabel}`,
      '---',
      '',
      `# ${sidebarLabel}`,
      '',
      body,
      '',
    ].join('\n');

    const filePath = path.join(RELEASES_DIR, fileName);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Created: ${fileName}`);
    created++;
  }

  console.log(
    `\nDone. ${created} new file(s) created, ${filtered.length - created} already existed or skipped.`,
  );

  if (created > 0) {
    fs.writeFileSync(
      path.join(__dirname, '..', '.releases-updated'),
      String(created),
    );
  }
}

function applyScope(releases, scope) {
  if (scope === 'all') return releases;

  if (scope === 'latest') return releases.slice(0, 1);

  const lastN = scope.match(/^last-(\d+)$/);
  if (lastN) return releases.slice(0, parseInt(lastN[1], 10));

  if (scope === 'last-month') {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - 1);
    return releases.filter((r) => new Date(r.published_at) >= cutoff);
  }

  console.warn(`Unknown scope "${scope}", falling back to "latest".`);
  return releases.slice(0, 1);
}

async function fetchAllReleases() {
  const all = [];
  let page = 1;

  while (true) {
    const url = `${RELEASES_API_URL}?per_page=${RELEASES_PER_PAGE}&page=${page}`;
    const headers = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'reportportal-docs-sync',
    };

    if (process.env.GH_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GH_TOKEN}`;
    } else {
      console.warn('GH_TOKEN not set - using unauthenticated API (60 req/hr limit)');
    }

    console.log(`Fetching releases page ${page}...`);
    const res = await fetch(url, { headers });

    if (!res.ok) {
      throw new Error(`GitHub API ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) break;

    all.push(...data);
    if (data.length < RELEASES_PER_PAGE) break;
    page++;
  }

  console.log(`Fetched ${all.length} releases total.\n`);
  return all;
}

function transformBody(body) {
  let result = body;

  result = result.replace(/\r\n/g, '\n');

  result = result.replace(/<img\b[^>]*>/gi, (tag) => {
    const srcMatch = tag.match(/src="([^"]+)"/i);
    const altMatch = tag.match(/alt="([^"]*)"/i);
    const src = srcMatch ? srcMatch[1] : '';
    const alt = altMatch ? altMatch[1] : 'image';
    return src ? `![${alt}](${src})` : '';
  });

  result = result.replace(
    /(?<!["\(])(?<!\]\()https?:\/\/[^\s)<>\]]+/g,
    (url) => `[${extractLabel(url)}](${url})`,
  );

  return result;
}

function extractLabel(url) {
  try {
    const parts = new URL(url).pathname.split('/').filter(Boolean);
    return parts.length > 0 ? parts[parts.length - 1] : url;
  } catch {
    return url;
  }
}

function buildFileName(name) {
  let v = stripPrefix(name);

  if (/^BETA/i.test(v)) {
    const nums = v.match(/[\d.]+/);
    return nums ? `Version${nums[0]}RC.md` : `Version${v.replace(/\s+/g, '')}.md`;
  }

  v = v.replace(/\s+(Final|RC|Beta|Alpha)$/i, '').trim();

  return `Version${v}.md`;
}

function buildSidebarLabel(name) {
  let v = stripPrefix(name);

  if (/^BETA/i.test(v)) {
    const nums = v.match(/[\d.]+/);
    return nums ? `Version ${nums[0]} RC` : `Version ${v}`;
  }

  return `Version ${v}`;
}

function stripPrefix(name) {
  return name
    .replace(/^Release\s+/i, '')
    .replace(/^ReportPortal\s+/i, '')
    .replace(/^v\.?\s*/i, '')
    .trim();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
