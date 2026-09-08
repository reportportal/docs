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

function syncReleasePositions() {
  const files = fs
    .readdirSync(RELEASES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && parseReleaseVersion(entry.name))
    .map((entry) => entry.name)
    .sort(compareReleaseVersionsDesc);

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

function normalizeReportPortalLinks(text) {
  return text.replace(
    /\]\((https:\/\/reportportal\.io(?:\([^()]*\)|[^()])*)\)/g,
    (match, rawUrl) => {
      try {
        const url = new URL(rawUrl);

        if (url.hostname !== 'reportportal.io') {
          return match;
        }

        // 1. Strip utm_ params from the query string
        for (const key of [...url.searchParams.keys()]) {
          if (key.toLowerCase().startsWith('utm_')) url.searchParams.delete(key);
        }

        // 2. Strip utm_ params that ended up in the hash by mistake
        if (/utm_/i.test(url.hash)) {
          url.hash = url.hash.replace(/[?&]utm_[^&]*/gi, '');
        }

        // 3. Convert /docs links to relative paths
        if (url.pathname === '/docs' || url.pathname.startsWith('/docs/')) {
          const suffix = url.pathname.slice('/docs'.length).replace(/^\/+/, '');
          const relativePath = `/${suffix}`;
          return `](${relativePath}${url.search}${url.hash})`;
        }

        return `](${url.toString()})`;
      } catch {
        return match;
      }
    },
  );
}

function matchFence(line) {
  // Matches both ``` and ~~~ style fences, capturing the marker character and length
  // so a closing fence can be required to use the same character and be at least as long.
  const match = line.match(/^\s*(`{3,}|~{3,})/);
  if (!match) return null;
  const marker = match[1];
  return { char: marker[0], length: marker.length };
}

function isIndentedCodeLine(line) {
  // CommonMark: 4+ spaces or a tab, indented code (can't interrupt a paragraph).
  return /^(\t| {4,})\S/.test(line);
}

function isThematicBreak(line) {
  // CommonMark thematic break: 3+ of the same -, *, or _ character, optionally
  // separated by spaces, e.g. "---", "***", "- - -".
  return /^\s{0,3}([-*_])( *\1){2,} *$/.test(line);
}

function isStructuralLine(line) {
  const t = line.trim();
  if (t === '') return true;
  if (/^#{1,6}\s/.test(t)) return true;
  if (/^[*+-]\s+/.test(t)) return true;
  if (/^\d+[.)]\s+/.test(t)) return true;
  if (/^\|.*\|$/.test(t)) return true;
  if (/^>/.test(t)) return true;
  if (isThematicBreak(t)) return true;
  return false;
}

// Tracks whether each line, in order, sits inside a fenced or indented code
// block, so the transforms below can leave that content untouched.
function createCodeBlockTracker() {
  let openFence = null; // { char, length } of the fence currently open, or null
  let inIndentedCode = false;
  let afterBlank = true;

  return function isProtected(line) {
    const fence = matchFence(line);
    if (fence) {
      const closesOpenFence =
        openFence && fence.char === openFence.char && fence.length >= openFence.length;
      openFence = closesOpenFence ? null : (openFence || fence);
      afterBlank = false;
      return true;
    }
    if (openFence) {
      afterBlank = line.trim() === '';
      return true;
    }

    if (line.trim() === '') {
      afterBlank = true;
      return inIndentedCode;
    }

    if (inIndentedCode) {
      if (!isIndentedCodeLine(line)) inIndentedCode = false;
    } else if (isIndentedCodeLine(line) && afterBlank) {
      inIndentedCode = true;
    }
    afterBlank = false;

    return inIndentedCode;
  };
}

function normalizeHeadings(lines) {
  const isProtected = createCodeBlockTracker();

  return lines.map((line) => {
    if (isProtected(line)) return line;

    const match = line.match(/^(#{1,6})(\s+)(.*)$/);
    if (!match) return line;

    let [, hashes, spacing, rest] = match;
    rest = rest.replace(/\*\*(.*?)\*\*/g, '$1');
    if (hashes.length === 1) hashes = '##';

    return `${hashes}${spacing}${rest}`;
  });
}

function convertListMarkers(lines) {
  const isProtected = createCodeBlockTracker();

  return lines.map((line) => {
    if (isProtected(line)) return line;

    // Skip horizontal rules such as "---" or "- - -" so they aren't mistaken for list items.
    if (isThematicBreak(line)) return line;

    return line.replace(/^(\s*)-(\s+)/, '$1*$2');
  });
}

function insertLineBreaks(lines) {
  const isProtected = createCodeBlockTracker();

  return lines.map((line, index) => {
    if (isProtected(line)) return line;
    if (isStructuralLine(line)) return line;
    // Already has a hard break: two+ trailing spaces, an explicit <br/>, or a trailing backslash.
    if (/(\s{2}|<br\s*\/?>|\\)$/.test(line)) return line;

    const nextLine = lines[index + 1];
    if (nextLine === undefined || isStructuralLine(nextLine)) return line;

    return `${line.replace(/\s+$/, '')}<br />`;
  });
}

function transformBody(body) {
  let result = body;

  result = result.replace(/\r\n/g, '\n');

  result = normalizeHeadings(result.split('\n')).join('\n');
  result = convertListMarkers(result.split('\n')).join('\n');
  result = insertLineBreaks(result.split('\n')).join('\n');

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

  result = normalizeReportPortalLinks(result);

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
  normalizeReportPortalLinks,
  extractLabel,
  stripPrefix,
};
