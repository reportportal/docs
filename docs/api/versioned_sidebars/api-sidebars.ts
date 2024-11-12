import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { versionSelector, versionCrumb } from 'docusaurus-plugin-openapi-docs/lib/sidebars/utils';
import serviceApiVersions from '../service-api/versions.json';

const apiSidebars: SidebarsConfig = {
  // This is the sidebar for current version of the API Service
  serviceApi: [
    {
      type: 'html',
      defaultStyle: false,
      value: versionSelector(serviceApiVersions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: false,
      value: versionCrumb(`v5.12`),
      className: 'version-crumb',
    },
    {
      type: 'category',
      label: 'Service API',
      link: {
        type: 'generated-index',
        title: 'Service API',
        description: 'This is a generated index of the ReportPortal Service API',
        slug: '/category/api/service-api',
      },
      items: require('../service-api/sidebar.ts'),
    },
  ],
  // This is the sidebar for versioned Service API
  'service-api-5.11': [
    {
      type: 'html',
      defaultStyle: false,
      value: versionSelector(serviceApiVersions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: false,
      value: versionCrumb(`v5.11`),
      className: 'version-crumb',
    },
    {
      type: 'category',
      label: 'Service API',
      link: {
        type: 'generated-index',
        title: 'Service API',
        description: 'This is a generated index of the ReportPortal Service API.',
        slug: '/category/api/service-api-5.11'
      },
      items: require('../service-api/versions/5.11/sidebar.ts')
    }
  ],
  'service-api-5.10': [
    {
      type: 'html',
      defaultStyle: false,
      value: versionSelector(serviceApiVersions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: false,
      value: versionCrumb(`v5.10`),
      className: 'version-crumb',
    },
    {
      type: 'category',
      label: 'Service API',
      link: {
        type: 'generated-index',
        title: 'Service API',
        description: 'This is a generated index of the ReportPortal Service API.',
        slug: '/category/api/service-api-5.10'
      },
      items: require('../service-api/versions/5.10/sidebar.ts')
    }
  ],
};

export default apiSidebars;
