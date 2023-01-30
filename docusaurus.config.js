// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Report Portal Documentation',
  url: 'https://documentation.reportportal.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'reportportal',
  projectName: 'documentation',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          // sidebarPath: require.resolve('./sidebars.js'), // TODO
          editUrl:
            'https://github.com/reportportal/documentation',
        },
        blog:  false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
            content: 'test automation dashboard, ReportPortal manual, ReportPortal guide, ReportPortal documentation, test results dashboard, Centralized test reporting, real time test results, Automated defect triaging, Testops, Test management system, Test automation reporting'
          }
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
                to: '/category/installation-steps',
              },
              {
                label: 'RP Configuration',
                to: '/category/reportportal-configuration',
              },
              {
                label: 'Developers Guide',
                to: '/category/developers-guides',
              }
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
              }
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
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ReportPortal. Sponsored by EPAM. <br> Licensed under Apache v2.0.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-MK7ZHTL',
      }
    ]
  ],
};

module.exports = config;
