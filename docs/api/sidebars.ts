import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import designSidebar from './api-design/sidebar.ts';
import apiSidebars from './versioned_sidebars/api-sidebars.ts';
import uatSidebars from './versioned_sidebars/uat-sidebars.ts';

const apiSidebarsConfig: SidebarsConfig = {
  apiOverview: [
    {
      type: 'doc',
      id: 'api/intro',
      label: 'API Overview',
    },
    {
      type: 'link',
      href: '/category/api/service-api',
      label: 'Service API',
    },
    {
      type: 'link',
      href: '/category/api/service-uat',
      label: 'Authorization API',
    },
    {
      type: 'link',
      href: '/api/api-design/reportportal-api',
      label: 'API Design',
    },
  ],
  apiDesign: [
    {
      type: 'category',
      label: 'API Documentation',
      link: {
        type: 'generated-index',
        title: 'ReportPortal API',
        description: 'This is a generated index of the ReportPortal API Documentation.',
        slug: '/category/api/api-design',
      },
      items: designSidebar,
    },
  ],
  ...apiSidebars,
  ...uatSidebars,
};

export default apiSidebarsConfig;
