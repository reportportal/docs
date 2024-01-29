const {
  versionSelector,
  versionCrumb,
} = require('docusaurus-plugin-openapi-docs/lib/sidebars/utils');

const serviceApiVersions = require('./docs/api/service-api/versions.json');

const apiSidebar = require('./docs/api/service-api/sidebar.ts');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const apiSidebars = {
  // This is the sidebar for current version of the API Service
  serviceApi: [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(serviceApiVersions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`v5.10.1`),
    },
    {
      type: 'category',
      label: 'Service API',
      link: {
        type: 'generated-index',
        title: 'Service API',
        description: 'This is a generated index of the ReportPortal Service API v5.10.1.',
        slug: '/category/api/service-api',
      },
      items: apiSidebar,
    },
  ],
};

export default apiSidebars;
