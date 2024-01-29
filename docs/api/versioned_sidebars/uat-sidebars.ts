import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { versionSelector, versionCrumb } from 'docusaurus-plugin-openapi-docs/lib/sidebars/utils';
import serviceUatVersions from '../service-uat/versions.json';

const uatSidebars: SidebarsConfig = {
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
      value: versionCrumb(`v5.10`),
    },
    {
      type: 'category',
      label: 'Service Authorization',
      link: {
        type: 'generated-index',
        title: 'Service Authorization',
        description: 'This is a generated index of the ReportPortal Authtorization API.',
        slug: '/category/api/service-uat',
      },
      items: require('../service-uat/sidebar.ts'),
    },
  ],
  // This is the sidebar for versioned Service UAT
  // TODO: Uncomment this when we have a versioned Service UAT
  // 'service-uat-5.10': [
  //   {
  //     type: 'html',
  //     defaultStyle: true,
  //     value: versionSelector(serviceUatVersions),
  //     className: 'version-button'
  //   },
  //   {
  //     type: 'html',
  //     defaultStyle: true,
  //     value: versionCrumb(`v5.10`)
  //   },
  //   {
  //     type: 'category',
  //     label: 'Service Authorization',
  //     link: {
  //       type: 'generated-index',
  //       title: 'Service Authorization',
  //       description: 'This is a generated index of the ReportPortal Authtorization API.',
  //       slug: '/category/api/service-uat/versioned/5.10'
  //     },
  //     items: require('../service-uat/versioned/5.10/sidebar.ts')
  //   }
  // ],
}

export default uatSidebars