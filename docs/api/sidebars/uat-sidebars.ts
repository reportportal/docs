const {
  versionSelector,
  versionCrumb,
} = require('docusaurus-plugin-openapi-docs/lib/sidebars/utils');

const serviceUatVersions = require('../docs/api/service-uat/versions.json');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const uatSidebars = {
  // This is the sidebar for current version of the Service UAT
  serviceUat: [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(serviceUatVersions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`v5.10.0`),
    },
    {
      type: 'category',
      label: 'Service UAT',
      link: {
        type: 'generated-index',
        title: 'Service UAT',
        description: 'This is a generated index of the ReportPortal Authtorization API.',
        slug: '/category/api/service-uat',
      },
      items: require('../docs/api/service-uat/sidebar.ts'),
    },
  ],
  // This is the sidebar for versioned Service UAT
  'service-uat-5.10.0': [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(serviceUatVersions),
      className: 'version-button'
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`v5.10.0`)
    },
    {
      type: 'category',
      label: 'Service UAT',
      link: {
        type: 'generated-index',
        title: 'Service UAT',
        description: 'This is a generated index of the ReportPortal Authtorization API.',
        slug: '/category/api/service-uat/versioned/5.10'
      },
      items: require('../docs/api/service-uat/versioned/5.10/sidebar.ts')
    }
  ],
}

export default uatSidebars