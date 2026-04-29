function sanitizeFileToken(value) {
  return value
    .replace(/[\\/:*?"<>|]/g, '-')
    .replace(/\.\.(\/|\\)?/g, '')
    .trim();
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

module.exports = { buildFileName, buildSidebarLabel, transformBody, extractLabel, stripPrefix };
