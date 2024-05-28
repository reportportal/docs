// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from 'prism-react-renderer';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

require('dotenv').config();

// the default baseUrl is for production deployment, for dev running specify it via DOCS_BASE_URL environment variable
const baseUrl = process.env.DOCS_BASE_URL || '/docs/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ReportPortal Documentation',
  url: 'https://reportportal.io',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',

  organizationName: 'reportportal',
  projectName: 'documentation',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: 'weekly',
          ignorePatterns: ['/docs/search'],
          filename: 'sitemap.xml',
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/reportportal/docs/blob/develop',
          docRootComponent: '@theme/DocRoot',
          docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-MK7ZHTL',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content:
            'test automation dashboard, ReportPortal manual, ReportPortal guide, ReportPortal documentation, test results dashboard, Centralized test reporting, real time test results, Automated defect triaging, Testops, Test management system, Test automation reporting',
        },
      ],
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'ReportPortal logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          href: '/',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'dropdown',
            label: 'APIs',
            position: 'left',
            items: [
              {
                label: 'Overview',
                to: '/api/intro',
              },
              {
                label: 'Service API',
                to: '/category/api/service-api',
              },
              {
                label: 'Service UAT',
                to: '/category/api/service-uat',
              },
              {
                label: 'API Design',
                to: '/api/api-design/reportportal-api',
              },
            ],
          },
          {
            href: 'https://reportportal.io/',
            label: 'ReportPortal.io',
            position: 'right',
          },
          {
            href: 'https://github.com/reportportal',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'What is ReportPortal?',
                to: '/',
              },
              {
                label: 'ReportPortal Tutorial',
                to: '/reportportal-tutorial/',
              },
              {
                label: 'Installation steps',
                to: '/installation-steps',
              },
              {
                label: 'RP Configuration',
                to: '/reportportal-configuration',
              },
              {
                label: 'Developers Guide',
                to: '/developers-guides',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ReportPortal_io',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/c/ReportPortal',
              },
              {
                label: 'Slack',
                href: 'https://slack.epmrpp.reportportal.io/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'ReportPortal.io',
                href: 'https://reportportal.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/reportportal',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms & Conditions',
                href: 'https://reportportal.io/legal/terms',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ReportPortal. Sponsored by EPAM. <br> Licensed under Apache v2.0.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'bash',
          'diff',
          'json',
          'java',
          'python',
          'yaml',
          'http',
          'javascript',
          'typescript',
          'go',
          'docker',
          'csharp',
          'git',
          'ini',
          'sql',
          'plsql',
          'jsx',
        ],
      },
      algolia: {
        appId: 'CRZVCU6DFV',
        apiKey: 'd8b54d5902dab4d50e4fba6321fb01a7',
        indexName: 'reportportal',
        replaceSearchResultPathname: {
          from: '/docs/',
          to: baseUrl, // To suggest URLs correctly for local and dev deployment
        },
        searchPagePath: 'search',
      },
    }),

  themes: ['docusaurus-theme-openapi-docs'], // exports ApiItem and ApiDemoPanel

  plugins: [
    './plugins/plugin-cookie-pro',
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic', // e.g. "classic" or the plugin-content-docs id
        config: {
          designApi: {
            specPath:
              'https://raw.githubusercontent.com/reportportal/reportportal-common-api/main/api/openapi/reportportal.yaml',
            outputDir: 'docs/api/api-design',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          serviceApi: {
            // "serviceApi" is considered the <id> that you will reference in the CLI
            specPath: 'apis/service-api.yaml', // path or URL to the OpenAPI spec
            outputDir: 'docs/api/service-api', // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: 'tag', // generate a sidebar.js slice that groups operations by tag
              categoryLinkSource: 'tag',
            },
            version: '5.11',
            label: 'v5.11',
            baseUrl: `${baseUrl}category/api/service-api`, // base URL for the API docs,
            versions: {
              '5.10': {
                specPath: 'apis/5.10/service-api.yaml',
                outputDir: 'docs/api/service-api/versions/5.10',
                label: 'v5.10',
                baseUrl: `${baseUrl}category/api/service-api-5.10`,
              },
            },
          },
          serviceUat: {
            specPath: 'apis/service-uat.yaml',
            outputDir: 'docs/api/service-uat',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
            version: '5.11',
            label: 'v5.11',
            baseUrl: `${baseUrl}category/api/service-uat`,
            versions: {
              '5.10': {
                specPath: 'apis/5.10/service-uat.yaml',
                outputDir: 'docs/api/service-uat/versions/5.10',
                label: 'v5.10',
                baseUrl: `${baseUrl}category/api/service-uat-5.10`,
              },
            },
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/installation-steps',
            from: '/category/installation-steps',
          },
          {
            to: '/features',
            from: '/category/features',
          },
          {
            to: '/releases',
            from: '/category/releases',
          },
          {
            to: '/reportportal-configuration',
            from: '/category/reportportal-configuration',
          },
          {
            to: '/user-account',
            from: '/category/user-account',
          },
          {
            to: '/log-data-in-reportportal',
            from: '/category/log-data-in-reportportal',
          },
          {
            to: '/developers-guides',
            from: '/category/developers-guides',
          },
          {
            to: '/work-with-reports',
            from: '/category/work-with-reports',
          },
          {
            to: '/analysis',
            from: '/category/analysis',
          },
          {
            to: '/saved-searches-filters',
            from: '/category/saved-searches-filters',
          },
          {
            to: '/dashboards-and-widgets',
            from: '/category/dashboards-and-widgets',
          },
          {
            to: '/admin-panel',
            from: '/category/admin-panel',
          },
          {
            to: '/plugins',
            from: '/category/plugins',
          },
          {
            to: '/external-integrations',
            from: '/category/external-integrations',
          },
          {
            to: '/quality-gates',
            from: '/category/quality-gates',
          },
          {
            to: '/issues-troubleshooting',
            from: '/category/issues-troubleshooting',
          },
          {
            to: '/case-studies',
            from: '/category/case-studies',
          },
          {
            to: '/terms-and-conditions',
            from: '/category/terms--conditions',
          },
          {
            to: '/installation-steps/deploy-with-kubernetes',
            from: '/installation-steps/DeployWithKubernetes',
          },
          {
            to: '/installation-steps/DeployWithDocker',
            from: '/installation-steps/DeployWithDockerOnLinuxMac',
          },
          {
            to: '/installation-steps/DeployWithDocker',
            from: '/Deploy-with-Docker',
          },
          {
            to: '/category/saml-providers',
            from: '/reportportal-configuration/authorization/SAMLProvider',
          },
          {
            to: '/reportportal-configuration/authorization/SamlProviders/OktaSaml',
            from: '/reportportal-configuration/authorization/SAMLProvider/OktaSAML',
          },
          {
            to: '/installation-steps/SetupTSLSSLInTraefik2.0.x',
            from: '/Setup-TLS(SSL)-in',
          },
          {
            to: '/reportportal-configuration/authorization/SamlProviders/AzureSaml',
            from: '/reportportal-configuration/authorization/SAMLProvider/AzureSAML',
          },
          {
            to: '/installation-steps/DeployWithDocker',
            from: '/installation-steps/DeployWithDockerOnWindows',
          },
          {
            to: '/issues-troubleshooting/ResolveAnalyzerKnownIssues',
            from: '/Resolve-Analyzer-Known',
          },
          {
            to: '/issues-troubleshooting',
            from: '/How-to-resolve',
          },
          {
            to: '/log-data-in-reportportal/ImportDataToReportPortal',
            from: '/Import-data-to',
          },
          {
            to: '/log-data-in-reportportal',
            from: '/Log-Data-in',
          },
          {
            to: '/installation-steps/MaintainCommandsCheatSheet',
            from: '/Maintain-commands-Cheat',
          },
          {
            to: '/installation-steps/deploy-with-kubernetes',
            from: '/Deploy-with-Kubernetes',
          },
          {
            to: '/log-data-in-reportportal/test-framework-integration',
            from: '/Test-Framework-Integration',
          },
          {
            to: '/reportportal-configuration/authorization/SamlProviders/AzureSaml',
            from: '/Azure-SAML-Integration',
          },
          {
            to: '/category/saml-providers',
            from: '/SAML-integration',
          },
          {
            to: '/analysis/AutoAnalysisOfLaunches',
            from: '/Auto-Analysis-of-launches',
          },
          {
            to: '/issues-troubleshooting/IssuesWithLDAPSHowToResolve',
            from: '/Issues-with-LDAPS',
          },
          {
            to: '/plugins/SauceLabs',
            from: '/Sauce-Labs-integration',
          },
          {
            to: '/category/authorization',
            from: '/reportportal-configuration/authorization',
          },
          {
            to: '/installation-steps/DeployWithoutDocker',
            from: '/Deploy-ReportPortal-without',
          },
          {
            to: '/reportportal-configuration/authorization/ActiveDirectory',
            from: '/Active-Directory-Auth',
          },
          {
            to: '/log-data-in-reportportal/ImportDataToReportPortal',
            from: '/Log-data-import',
          },
          {
            to: '/work-with-reports/ViewLaunches',
            from: '/View-launches',
          },
          {
            to: '/dashboards-and-widgets/FlakyTestCasesTableTop50',
            from: '/dashboards-and-widgets/FlakyTestCasesTableTop20',
          },
          {
            to: '/plugins/AtlassianJiraServer',
            from: '/plugins/JiraServer',
          },
          {
            to: '/dashboards-and-widgets/ComponentHealthCheck',
            from: '/Component-health-check',
          },
          {
            to: '/installation-steps/DeployWithoutDocker',
            from: '/Deploy-Without-Docker',
          },
          {
            to: '/installation-steps/DeployWithAWSECSFargate',
            from: '/Deploy-with-AWS',
          },
          {
            to: '/work-with-reports/ViewLaunches#markdown-mode-on-logs-view',
            from: '/How-to-activate',
          },
          {
            to: '/installation-steps/OptimalPerformanceHardwareSetup',
            from: '/Optimal-Performance-Hardware',
          },
          {
            to: '/reportportal-configuration',
            from: '/Report-Portal-Configuration',
          },
          {
            to: '/dashboards-and-widgets/TableComponentHealthCheck',
            from: '/Table-Component-health',
          }
        ],
      },
    ],
  ],
};

export default config;
