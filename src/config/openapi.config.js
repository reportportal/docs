module.exports = (baseUrl) => ({
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
      specPath: 'apis/service-api.json', // path or URL to the OpenAPI spec
      outputDir: 'docs/api/service-api', // output directory for generated *.mdx and sidebar.js files
      sidebarOptions: {
        groupPathsBy: 'tag', // generate a sidebar.js slice that groups operations by tag
        categoryLinkSource: 'tag',
      },
      version: '5.12',
      label: 'v5.12',
      baseUrl: `${baseUrl}category/api/service-api`, // base URL for the API docs,
      versions: {
        5.11: {
          specPath: 'apis/5.11/service-api.yaml',
          outputDir: 'docs/api/service-api/versions/5.11',
          label: 'v5.11',
          baseUrl: `${baseUrl}category/api/service-api-5.11`,
        },
        '5.10': {
          specPath: 'apis/5.10/service-api.yaml',
          outputDir: 'docs/api/service-api/versions/5.10',
          label: 'v5.10',
          baseUrl: `${baseUrl}category/api/service-api-5.10`,
        },
      },
    },
    serviceUat: {
      specPath: 'apis/service-uat.json',
      outputDir: 'docs/api/service-uat',
      sidebarOptions: {
        groupPathsBy: 'tag',
        categoryLinkSource: 'tag',
      },
      version: '5.12',
      label: 'v5.12',
      baseUrl: `${baseUrl}category/api/service-uat`,
      versions: {
        5.11: {
          specPath: 'apis/5.11/service-uat.yaml',
          outputDir: 'docs/api/service-uat/versions/5.11',
          label: 'v5.11',
          baseUrl: `${baseUrl}category/api/service-uat-5.11`,
        },
        '5.10': {
          specPath: 'apis/5.10/service-uat.yaml',
          outputDir: 'docs/api/service-uat/versions/5.10',
          label: 'v5.10',
          baseUrl: `${baseUrl}category/api/service-uat-5.10`,
        },
      },
    },
  },
});
