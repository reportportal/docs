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
            label: 'APIs',
            position: 'left',
            to: 'https://github.com/reportportal', //TODO: replace with actual link
            target: '_self',
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
                to: '/tutorial/',
              },
              {
                label: 'Installation steps',
                to: '/installation-steps',
              },
              {
                label: 'RP Configuration',
                to: '/configuration',
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
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/installation-steps',
            from: ['/category/installation-steps', '/Installation-steps'],
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
            to: '/user-account',
            from: '/category/user-account',
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
            to: '/case-studies',
            from: '/category/case-studies',
          },
          {
            to: '/terms-and-conditions',
            from: '/category/terms--conditions',
          },
          {
            to: '/installation-steps/DeployWithDocker',
            from: ['/installation-steps/DeployWithDockerOnLinuxMac', '/Deploy-with-Docker', '/installation-steps/DeployWithDockerOnWindows', '/Installation/Docker'],
          },
          {
            to: '/plugins/authorization/SamlProviders',
            from: ['/reportportal-configuration/authorization/SAMLProvider', '/SAML-integration'],
          },
          {
            to: '/plugins/authorization/SamlProviders/OktaSaml',
            from: ['/reportportal-configuration/authorization/SAMLProvider/OktaSAML', '/reportportal-configuration/authorization/SamlProviders/OktaSaml'],
          },
          {
            to: '/installation-steps-advanced/SetupTSLSSLInTraefik2.0.x',
            from: ['/Setup-TLS(SSL)-in', '/installation-steps/SetupTSLSSLInTraefik2.0.x'],
          },
          {
            to: '/plugins/authorization/SamlProviders/AzureSaml',
            from: ['/reportportal-configuration/authorization/SAMLProvider/AzureSAML', '/Azure-SAML-Integration', '/reportportal-configuration/authorization/SamlProviders/AzureSaml'],
          },
          {
            to: '/issues-troubleshooting/ResolveAnalyzerKnownIssues',
            from: '/Resolve-Analyzer-Known',
          },
          {
            to: '/issues-troubleshooting',
            from: ['/How-to-resolve', '/category/issues-troubleshooting'],
          },
          {
            to: '/log-data-in-reportportal/ImportDataToReportPortal',
            from: ['/Import-data-to', '/Log-data-import'],
          },
          {
            to: '/log-data-in-reportportal',
            from: ['/Log-Data-in', '/category/log-data-in-reportportal'],
          },
          {
            to: '/installation-steps-advanced/MaintainCommandsCheatSheet',
            from: ['/Maintain-commands-Cheat', '/installation-steps/MaintainCommandsCheatSheet'],
          },
          {
            to: '/installation-steps/DeployWithKubernetes',
            from: ['/Deploy-with-Kubernetes', '/installation-steps/deploy-with-kubernetes'],
          },
          {
            to: '/log-data-in-reportportal/test-framework-integration',
            from: '/Test-Framework-Integration',
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
            to: '/plugins/authorization',
            from: '/reportportal-configuration/authorization',
          },
          {
            to: '/installation-steps/DeployWithoutDocker',
            from: ['/Deploy-ReportPortal-without', '/Deploy-Without-Docker'],
          },
          {
            to: '/plugins/authorization/ActiveDirectory',
            from: ['/Active-Directory-Auth', '/reportportal-configuration/authorization/ActiveDirectory'],
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
            to: '/installation-steps-advanced/DeployWithAWSECSFargate',
            from: ['/Deploy-with-AWS', '/installation-steps/DeployWithAWSECSFargate'],
          },
          {
            to: '/work-with-reports/ViewLaunches#markdown-mode-on-logs-view',
            from: '/How-to-activate',
          },
          {
            to: '/installation-steps/HardwareRequirements',
            from: ['/Optimal-Performance-Hardware', '/installation-steps/OptimalPerformanceHardwareSetup'],
          },
          {
            to: '/configuration',
            from: ['/Report-Portal-Configuration', '/reportportal-configuration', '/category/reportportal-configuration'],
          },
          {
            to: '/dashboards-and-widgets/TableComponentHealthCheck',
            from: '/Table-Component-health',
          },
          {
            to: '/developers-guides',
            from: ['/category/dev-guides', '/category/developers-guides'],
          },
          {
            to: '/developers-guides/APIDifferencesBetweenV4AndV5',
            from: '/dev-guides/APIDifferencesBetweenV4AndV5',
          },
          {
            to: '/developers-guides/AsynchronousReporting',
            from: '/dev-guides/AsynchronousReporting',
          },
          {
            to: '/developers-guides/AttachmentsGuide',
            from: '/dev-guides/AttachmentsGuide',
          },
          {
            to: '/developers-guides/BackEndJavaContributionGuide',
            from: '/dev-guides/BackEndJavaContributionGuide',
          },
          {
            to: '/developers-guides/InteractionsBetweenAPIAndAnalyzer',
            from: '/dev-guides/InteractionsBetweenAPIAndAnalyzer',
          },
          {
            to: '/developers-guides/PluginDevelopersGuide',
            from: '/dev-guides/PluginDevelopersGuide',
          },
          {
            to: '/developers-guides/ReportPortalAPI',
            from: '/dev-guides/ReportPortalAPI',
          },
          {
            to: '/developers-guides/ReportingDevelopersGuide',
            from: '/dev-guides/ReportingDevelopersGuide',
          },
          {
            to: '/developers-guides/RerunDevelopersGuide',
            from: '/dev-guides/RerunDevelopersGuide',
          },
          {
            to: '/developers-guides/RetriesReporting',
            from: '/dev-guides/RetriesReporting',
          },
          {
            to: '/installation-steps-advanced/ComponentsOverview',
            from: '/reportportal-configuration/ComponentsOverview',
          },
          {
            to: '/installation-steps-advanced/BasicMonitoringConfiguration',
            from: '/installation-steps/BasicMonitoringConfiguration',
          },
          {
            to: '/installation-steps-advanced/JobsConfiguration',
            from: '/reportportal-configuration/ReportPortalJobsConfiguration',
          },
          {
            to: '/installation-steps-advanced/BackupRestoreGuide',
            from: '/reportportal-configuration/ReportPortalBackupRestoreGuide',
          },
          {
            to: '/installation-steps-advanced/AdditionalConfigurationParameters',
            from: '/installation-steps/AdditionalConfigurationParameters',
          },
          {
            to: '/installation-steps-advanced/MigrateOneInstanceToAnother',
            from: '/installation-steps/MigrateOneInstanceToAnother',
          },
          {
            to: '/installation-steps-advanced/FileStorageOptions',
            from: '/installation-steps/ReportPortal23.1FileStorageOptions',
          },
          {
            to: '/installation-steps-advanced/ScalingReportPortalServices',
            from: '/installation-steps/ScalingUpReportPortalAPIService',
          },
          {
            to: '/installation-steps-advanced/AmazonALBNGINXIngressController',
            from: '/installation-steps/deploy-with-kubernetes/AmazonALBNGINXIngressController',
          },
          {
            to: '/installation-steps-advanced/QuickStartWithGCPGKE',
            from: '/installation-steps/deploy-with-kubernetes/QuickStartWithGCPGKE',
          },
          {
            to: '/tutorial',
            from: ['/reportportal-tutorial','/What-is-ReportPortal'],
          },
          {
            to: '/glossary',
            from: '/reportportal-glossary',
          },
          {
            to: '/log-data-in-reportportal/HowToGetAnAccessTokenInReportPortal',
            from: '/reportportal-configuration/HowToGetAnAccessTokenInReportPortal',
          },
          {
            to: '/plugins/AzureDevOps',
            from: '/plugins/AzureDevOpsBTS',
          },
          {
            to: '/plugins/GitLab',
            from: '/plugins/GitLabBTS',
          },
          {
            to: '/plugins/authorization/GitHub',
            from: '/reportportal-configuration/authorization/GitHub',
          },
          {
            to: '/plugins/authorization/LDAP',
            from: '/reportportal-configuration/authorization/LDAP',
          },
          {
           to: '/plugins/authorization/SamlProviders/Overview',
           from: '/reportportal-configuration/authorization/SamlProviders/Overview',
          },
          {
            to: '/configuration/IntegrationViaPlugin',
            from: '/reportportal-configuration/IntegrationViaPlugin',
          },
          {
            to: '/configuration/ProjectSettings',
            from: ['/configuration/ProjectConfiguration', '/reportportal-configuration/ProjectConfiguration'],
          },
          {
            to: '/admin-panel/AllProjectsPage',
            from: ['/configuration/CreationOfProjectAndAddingUsers', '/reportportal-configuration/CreationOfProjectAndAddingUsers'],
          },
          {
            to: '/installation-steps-advanced/ScalingReportPortalServices',
            from: '/installation-steps-advanced/ScalingUpReportPortalAPIService',
          },
          {
            to: '/plugins/authorization',
            from: '/category/authorization',
          },
          {
             to: '/plugins/authorization/SamlProviders',
             from: '/category/saml-providers',
          },
          {
             to: '/work-with-reports/TestCaseId#what-does-happen-if-you-do-not-report-items-with-test-case-id',
             from: '/Test-case-ID>what-does-happen-if-you-do-not-report-items-with-test-case-id-',
          },
          {
             to: '/work-with-reports/TestCaseId#what-is-it-test-case-id',
             from: '/Test-case-ID>what-is-it-test-case-id',
          },
          {
             to: '/dashboards-and-widgets/CumulativeTrendChart',
             from: '/Cumulative-trend-chart',
          },
        ],
      },
    ],
  ],
};

export default config;
