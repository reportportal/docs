const fs = require('fs');
const path = require('path');
const { buildFileName, buildSidebarLabel, transformBody } = require('./release-utils');

const RELEASES_DIR = path.join(__dirname, '..', 'docs', 'releases');
const BASE_API_URL = 'https://api.github.com/repos/reportportal/reportportal/releases/tags';

async function main() {
  const releaseName = process.env.RELEASE_NAME?.trim();
  const releaseTag = process.env.RELEASE_TAG?.trim();

  if (!releaseName || !releaseTag) {
    throw new Error('RELEASE_NAME and RELEASE_TAG env vars are required');
  }

  const release = await fetchReleaseByTag(releaseTag);

  const fileName = buildFileName(releaseName);
  const filePath = path.join(RELEASES_DIR, fileName);

  const sidebarPosition = readExistingSidebarPosition(filePath);
  const sidebarLabel = buildSidebarLabel(releaseName);
  const body = transformBody(release.body || '');

  const content = [
    '---',
    `sidebar_position: ${sidebarPosition}`,
    `sidebar_label: ${sidebarLabel}`,
    '---',
    '',
    `# ${sidebarLabel}`,
    '',
    body,
    '',
  ].join('\n');

  fs.mkdirSync(RELEASES_DIR, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated: ${fileName}`);
}

function readExistingSidebarPosition(filePath) {
  if (!fs.existsSync(filePath)) return 1;
  const text = fs.readFileSync(filePath, 'utf-8');
  const match = text.match(/^sidebar_position:\s*(\d+)/m);
  return match ? parseInt(match[1], 10) : 1;
}

async function fetchReleaseByTag(tag) {
  const url = `${BASE_API_URL}/${encodeURIComponent(tag)}`;
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

  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
