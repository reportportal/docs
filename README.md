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

## Versioning

The documentation uses [Docusaurus versioning](https://docusaurus.io/docs/versioning). Available versions are listed in `versions.json`; the first entry is always the latest and is served at the site root (`/docs/`).

> **Note:** The `docs/` folder contains unreleased content for the next version. It is hidden from the public version dropdown in production builds, but is available locally at `/next/` when running the dev server (`npm run start`).

### Releasing a new version

When `docs/` is ready to be published, run:

```console
npm run version <version>
```

For example:

```console
npm run version 26.2
```

This snapshots the current `docs/` folder as version `26.2` and automatically publishes it as the latest. No other changes are needed.

### Versioned files

| Path | Description |
|---|---|
| `versions.json` | Ordered list of all versions — managed by `npm run version`. To limit which versions are built or shown, use [`onlyIncludeVersions`](https://docusaurus.io/docs/versioning#controlling-versions-included-in-the-build) in `docusaurus.config.js` instead of editing this file directly |
| `versioned_docs/version-<N>/` | Snapshot of `docs/` at release time — edit here to fix or update content for a specific version |
| `versioned_sidebars/version-<N>-sidebars.json` | Sidebar config for that version — auto-generated, rarely needs manual changes |

## Contribution

If you would like to contribute to the docs, feel free to open your Pull Requests to the default branch.
