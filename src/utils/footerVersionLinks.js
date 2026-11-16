const FOOTER_LINKS_BY_VERSION = {
  '26.0.7': {
    '/': '/26.0.7/',
    '/getting-started/Tutorial': '/26.0.7/tutorial/',
    '/installation-and-deployment/installation-steps/': '/26.0.7/installation-steps/',
    '/configuration/': '/26.0.7/configuration/',
    '/developers-and-api/': '/26.0.7/developers-guides/',
  },
};

export const resolveFooterLink = (to, versionName) =>
  FOOTER_LINKS_BY_VERSION[versionName]?.[to] ?? to;
