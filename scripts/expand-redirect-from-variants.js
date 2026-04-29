/**
 * Expands each client redirect `from` to include both trailing-slash forms so
 * the static HTML redirect pages Docusaurus emits work for /path and /path/.
 * See @docusaurus/plugin-client-redirects (one emitted file per `from` pathname).
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
  if (withSlash === without) {
    return [`${withSlash}${hash}`];
  }
  // Amplify treats path segments with dots as file requests and won't serve
  // their directory index — skip the no-trailing-slash variant for those paths.
  const lastSegment = without.split('/').filter(Boolean).pop() ?? '';
  if (lastSegment.includes('.')) {
    return [`${withSlash}${hash}`];
  }
  return [`${without}${hash}`, `${withSlash}${hash}`];
}
