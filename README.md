# ReportPortal documentation portal

The documentation built with [Docusaurus](https://docusaurus.io).

The search is implemented using [Algolia DocSearch](https://docsearch.algolia.com).

The OpenAPI documentation is generated using
[PaloAltoNetworks docusaurus-openapi-docs plugin](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs).

## Running locally

1. Install the dependencies
```console
npm install
```

2. Run application in development mode
```console
npm run start
```

3. For production ready build use the next commands:
```console
npm run gen-all
npm run build
```

*Note:* To serve the documentation on base path other than `/docs/` follow the next steps:
1. create a file `.env` in the project root
2. Add `DOCS_BASE_URL=/` with your preferred base path.

## Deployment

Each changes pushing (direct pushing or via merging a Pull Request) to the:

- `develop` branch will trigger the deployment to the dev environment to AWS S3 bucket.
- `master` branch will trigger the deployment to the prod environment to GitHub Pages (https://reportportal.io/docs).

## Contribution

If you would like to contribute to the docs, feel free to open your Pull Requests to the default branch.
