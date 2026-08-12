const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const RELEASES_DIR = path.join(ROOT_DIR, 'docs', 'releases');
const VERSIONS_FILE = path.join(ROOT_DIR, 'versions.json');

function sanitizeFileToken(value) {
  return value
    .replace(/[\\/:*?"<>|]/g, '-')
    .replace(/\.\.(\/|\\)?/g, '')
    .trim();
}

function getLatestDocsVersion() {
  if (!fs.existsSync(VERSIONS_FILE)) {
    throw new Error(`versions.json not found at ${VERSIONS_FILE}`);
  }

  const versions = JSON.parse(fs.readFileSync(VERSIONS_FILE, 'utf-8'));
  if (!Array.isArray(versions) || versions.length === 0 || !versions[0]) {
    throw new Error('versions.json must contain a non-empty array of version strings');
  }

  return String(versions[0]);
}

function getVersionedReleasesDir() {
  const latestVersion = getLatestDocsVersion();
  const versionedReleasesDir = path.join(
    ROOT_DIR,
    'versioned_docs',
    `version-${latestVersion}`,
    'releases',
  );

  console.log(`Latest docs version: ${latestVersion}`);
  return versionedReleasesDir;
}

function mirrorReleaseToVersioned(fileName, { onlyIfMissing = false } = {}) {
  const sourcePath = path.join(RELEASES_DIR, fileName);
  if (!fs.existsSync(sourcePath)) {
    console.warn(
      `Warning: cannot mirror, source missing: ${path.relative(ROOT_DIR, sourcePath)}`,
    );
    return false;
  }

  const versionedDir = getVersionedReleasesDir();
  const targetPath = path.join(versionedDir, fileName);

  if (onlyIfMissing && fs.existsSync(targetPath)) {
    return false;
  }

  fs.mkdirSync(versionedDir, { recursive: true });
  fs.copyFileSync(sourcePath, targetPath);
  console.log(`Mirrored to: ${path.relative(ROOT_DIR, targetPath)}`);
  return true;
}

function deleteVersionedRelease(fileName) {
  const versionedDir = getVersionedReleasesDir();
  const filePath = path.join(versionedDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.warn(
      `Warning: versioned release file not found, nothing to delete: ${path.relative(ROOT_DIR, filePath)}`,
    );
    return false;
  }

  fs.unlinkSync(filePath);
  console.log(`Deleted: ${path.relative(ROOT_DIR, filePath)}`);
  return true;
}

function parseReleaseVersion(fileName) {
  const match = fileName.match(/^Version(\d+(?:\.\d+)*)(RC)?\.md$/i);
  if (!match) return null;

  return {
    parts: match[1].split('.').map((part) => parseInt(part, 10)),
    isRc: Boolean(match[2]),
  };
}

function compareReleaseVersionsDesc(fileA, fileB) {
  const a = parseReleaseVersion(fileA);
  const b = parseReleaseVersion(fileB);
  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;

  const length = Math.max(a.parts.length, b.parts.length);
  for (let i = 0; i < length; i++) {
    const av = a.parts[i] || 0;
    const bv = b.parts[i] || 0;
    if (av !== bv) return bv - av;
  }

  // same numbers: final release before RC
  if (a.isRc !== b.isRc) return a.isRc ? 1 : -1;
  return 0;
}

function syncReleasePositions(publishedReleases) {
  const seen = new Set();
  const files = [];

  for (const release of publishedReleases) {
    const name = release.name?.trim();
    if (!name) continue;

    const fileName = buildFileName(name);
    if (seen.has(fileName)) continue;
    if (!fs.existsSync(path.join(RELEASES_DIR, fileName))) continue;

    seen.add(fileName);
    files.push(fileName);
  }

  files.sort(compareReleaseVersionsDesc);

  const changed = [];

  files.forEach((fileName, index) => {
    const position = index + 1;
    const filePath = path.join(RELEASES_DIR, fileName);
    const text = fs.readFileSync(filePath, 'utf-8');
    const match = text.match(/^sidebar_position:\s*(\d+)/m);
    const current = match ? parseInt(match[1], 10) : null;

    if (current === position) return;

    const updated = match
      ? text.replace(/^sidebar_position:\s*\d+/m, `sidebar_position: ${position}`)
      : text.replace(/^---\n/, `---\nsidebar_position: ${position}\n`);

    fs.writeFileSync(filePath, updated, 'utf-8');
    console.log(`Position ${fileName}: ${current ?? 'none'} -> ${position}`);
    mirrorReleaseToVersioned(fileName);
    changed.push(fileName);
  });

  return changed;
}

function buildFileName(name) {
  let v = sanitizeFileToken(stripPrefix(name));

  if (/^BETA/i.test(v)) {
    const nums = v.match(/[\d.]+/);
    return nums ? `Version${nums[0]}RC.md` : `Version${sanitizeFileToken(v).replace(/\s+/g, '')}.md`;
  }

  v = v.replace(/\s+(Final|RC|Beta|Alpha)$/i, '').trim();

  return `Version${sanitizeFileToken(v)}.md`;
}

function buildSidebarLabel(name) {
  let v = stripPrefix(name);

  if (/^BETA/i.test(v)) {
    const nums = v.match(/[\d.]+/);
    return nums ? `Version ${nums[0]} RC` : `Version ${v}`;
  }

  return `Version ${v}`;
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

function stripPrefix(name) {
  return name
    .replace(/^Release\s+/i, '')
    .replace(/^ReportPortal\s+/i, '')
    .replace(/^v\.?\s*/i, '')
    .trim();
}

module.exports = {
  RELEASES_DIR,
  getLatestDocsVersion,
  getVersionedReleasesDir,
  mirrorReleaseToVersioned,
  deleteVersionedRelease,
  syncReleasePositions,
  compareReleaseVersionsDesc,
  buildFileName,
  buildSidebarLabel,
  transformBody,
  extractLabel,
  stripPrefix,
};
