/**
 * Normalises each client redirect `from` path to its trailing-slash form and
 * deduplicates the list. With trailingSlash: true, both /path and /path/ produce
 * the same build/index.html — emitting both causes an EEXIST conflict in the
 * redirect plugin. Non-trailing-slash requests are handled by Amplify's
 * directory-index lookup (no-dot paths) or the S3 stub CI step (dot paths).
 *
 * @param {Array<{ to: string, from: string | string[] }>} redirects
 * @returns {Array<{ to: string, from: string[] }>}
 */
export function expandRedirectFromVariants(redirects) {
  return redirects.map((r) => {
    const fromList = Array.isArray(r.from) ? r.from : [r.from];
    const expanded = new Set();
    for (const f of fromList) {
      for (const v of slashVariantsForFrom(f)) {
        expanded.add(v);
      }
    }
    return { to: r.to, from: [...expanded] };
  });
}

/**
 * @param {string} pathname
 * @returns {string[]}
 */
function slashVariantsForFrom(pathname) {
  if (typeof pathname !== 'string' || !pathname.startsWith('/')) {
    return [pathname];
  }
  const hashIndex = pathname.indexOf('#');
  const pathPart = hashIndex === -1 ? pathname : pathname.slice(0, hashIndex);
  const hash = hashIndex === -1 ? '' : pathname.slice(hashIndex);

  if (pathPart === '/' && hash) {
    return [`/${hash}`];
  }
  if (pathPart === '/') {
    return ['/'];
  }

  const without = pathPart.replace(/\/+$/, '') || '/';
  const withSlash = without === '/' ? '/' : `${without}/`;
  // Only emit the trailing-slash variant. With trailingSlash: true, both forms
  // produce the same build/index.html output — emitting both causes an EEXIST
  // conflict in the redirect plugin. Non-trailing-slash requests are handled by
  // Amplify's directory-index lookup (no-dot paths) or the S3 stub step (dot paths).
  return [`${withSlash}${hash}`];
}
