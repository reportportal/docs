// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Report Portal Documentation',
  url: 'https://docs.reportportal.io',
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
            content: 'reportportal, reports, reporting, automation, documentation'
          }
      ],
      navbar: {
        title: 'ReportPortal.io',
        hideOnScroll: true,
        logo: {
          alt: 'ReportPortal logo',
          src: 'img/logo.svg',
          href: 'https://reportportal.io',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
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
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/reportportal',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/ReportPortal.io',
              },
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
                href: 'https://reportportal-slack-auto.herokuapp.com',
              }
            ],
          },
          {
            title: 'More',
            items: [
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
        copyright: `Copyright © ${new Date().getFullYear()} ReportPortal. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/tutorial',
            from: [
              '/Tutorial:-Learn-how',
              '/Overview',
              '/How-to-explore',
              '/How-to-deploy',
              '/How-to-invite',
              '/How-to-generate',
              '/How-to-triage',
              '/How-to-filter',
              '/How-to-add',
              '/How-to-visualize',
              '/How-to-use',
              '/How-to-run',
              '/How-to-see',
              '/How-to-make',
              '/How-to-evaluate',
            ],
          },
          {
            to: '/category/installation-steps',
            from: '/Installation-steps',
          },
          {
            to: '/category/reportportal-configuration',
            from: '/Report-Portal-Configuration',
          },
          {
            to: '/category/user-account',
            from: '/User-account',
          },
          {
            to: '/category/log-data-in-reportportal',
            from: '/Log-Data-in',
          },
          {
            to: '/category/work-with-reports',
            from: '/Work-with-reports',
          },
          {
            to: '/category/analysis',
            from: '/Analysis',
          },
          {
            to: '/category/saved-searches-filters',
            from: '/Saved-searches-(Filters)',
          },
          {
            to: '/category/dashboards-and-widgets',
            from: '/Dashboards-and-Widgets',
          },
          {
            to: '/category/quality-gates',
            from: '/Quality-Gates',
          },
          {
            to: '/category/management-board',
            from: '/Management-Board',
          },
          {
            to: '/category/plugins',
            from: '/Plugins',
          },
          {
            to: '/user-role-guides',
            from: [
              '/User-role-guides>administrator',
              '/User-role-guides>project-manager',
              '/User-role-guides>member',
              '/User-role-guides>operator',
              '/User-role-guides>customer',
            ],
          },
          {
            to: '/category/issues-troubleshooting',
            from: '/Issues-Troubleshooting',
          },
          {
            to: '/category/terms--conditions',
            from: '/Terms-&-Conditions',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
