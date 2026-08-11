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
  buildFileName,
  buildSidebarLabel,
  transformBody,
  extractLabel,
  stripPrefix,
};
