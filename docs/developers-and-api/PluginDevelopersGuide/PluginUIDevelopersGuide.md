---
sidebar_label: Plugin UI development guide
description: Learn how to develop plugin UI components for ReportPortal test automation reporting tools with modern frontend technologies.
---

# Plugin UI development guide

The described approach covers the UI part of the plugin engine starting from ReportPortal version 24.1. It also reflects the **organizations** model: instance, organization, and project levels have separate layouts, sidebars, and settings.

To learn how to deal with ReportPortal plugins from the Backend side, follow the [Plugin API development guide](./PluginAPIDevelopersGuide.mdx).

Start from the [plugin template](https://github.com/reportportal/plugin-template/tree/feature/organizations). Bundled UI (webpack, `metadata.json`, extension points) lives in [`ui/`](https://github.com/reportportal/plugin-template/tree/feature/organizations/ui).

## The concept

The Service UI and Plugin UI are integrated at runtime using JavaScript and share common dependencies via [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/).

### From Service UI side

The ReportPortal Service UI (the **core UI** – further in the text) is built with React library and uses Redux for state management.
It has a list with **extension points** that can be used to extend the core UI with custom React components come from plugins. Extension points are described [here](#extension-points).

The context (e.g. current user, organization, project) from core UI is shared via Redux state and can be accessed in plugins. In addition to this, the core UI provides a set of common components and utils that can be used in plugins as well.

After uploading the plugin to the ReportPortal (see [how](../../integrations/ManagePlugins.mdx#upload-plugin)) and opening the application in browser, the core UI will load the descriptors file (`metadata.json`) from plugin to define the extension points implemented there.

When the user opens a place that matches an extension point (e.g. organization or project settings), the core UI loads the React component from the Plugin UI files and render it in the appropriate place in application.

The plugin details page under **Administrate → Plugins** is built by the core UI, not by your plugin UI. To hide **Add integration** there, set `isIntegrationsAllowed=false` in the plugin manifest (`gradle.properties`).

### `metadata.json` and webpack exposes

Each UI extension is declared in `ui/src/metadata.json` and must match a webpack Module Federation `exposes` entry.

Typical fields:

| Field | Role |
| ----- | ---- |
| `scope` | Must equal the webpack federation `name` (in the template: `plugin_name`). It is not the same as `extensions[].name` or `package.json` name. |
| `extensions[].type` | Extension point, prefixed with `uiExtension:` (for example `uiExtension:settingsTab`). |
| `extensions[].name` | Tab / route key used by the host (for settings tabs this is the URL `settingsTab` segment). For `projectPage`, used as the URL segment if `slug` is omitted. |
| `extensions[].moduleName` | Federated module, for example `./projectSettingsTab`. Must match `exposes`. |
| `extensions[].title` | Optional title shown in the host UI (settings tab label, sidebar label). |
| `extensions[].slug` | Optional. For `projectPage`: this is the URL segment (`.../plugin/(slug)/...`). If omitted, the URL uses `name`. |
| `extensions[].icon` | Optional. For `projectPage`: `{ "type": "svg", "content": "<svg ...>" }`. If present, a project sidebar link is added. Only SVG is supported. |
| `extensions[].menuOrder` | Optional. For `projectPage`: position of the sidebar item among other project sidebar links. |
| `extensions[].iconName` | Optional short id for sidebar click analytics (`projectPage` and organization sidebar). |

Each exposed module must `export default` the root component: the core UI loads it with `React.lazy`, which expects a default export.

If a sidebar button navigates to a settings tab, its `settingsTab` payload must use the same `name`.

Optional top-level `overrides.disablePluginPopupContent` is a map of locale codes to body text for the “disable plugin” confirmation. Omit `overrides` to keep the host default wording.

Example (from the template; names like `template` are placeholders):

```json
{
  "scope": "plugin_name",
  "extensions": [
    {
      "name": "template",
      "type": "uiExtension:adminPage",
      "title": "Template plugin — instance admin",
      "moduleName": "./instanceAdminPage"
    },
    {
      "name": "orgSettingsTemplate",
      "type": "uiExtension:organizationSettingsTab",
      "title": "Template plugin — organization settings",
      "moduleName": "./organizationSettingsTab"
    },
    {
      "name": "projectSettingsTemplate",
      "type": "uiExtension:settingsTab",
      "title": "Template plugin — project settings",
      "moduleName": "./projectSettingsTab"
    }
  ]
}
```

### Shared libraries

The core UI shares major dependencies via Webpack Module Federation. Plugins can reuse them without loading a second copy in the browser when versions are compatible. Keep `shared` / `externals` in the plugin webpack config aligned with the ReportPortal UI you target. `redux` is typically listed under webpack `externals` so the host supplies a single store.

Shared libraries from the core UI:

| Package | Notes |
| ------- | ----- |
| `react` | Singleton |
| `react-dom` | Singleton |
| `react-redux` | Singleton |
| `react-intl` | Singleton |
| `redux-form` | Singleton |
| `redux-first-router` | Routing |
| `@reportportal/ui-kit` | Design system |
| `react-tracking` | Analytics |
| `classnames` | |
| `prop-types` | |
| `moment` | |
| `html-react-parser` | Used for sidebar SVG icons |
| `history` | |
| `fast-deep-equal` | |
| `react-copy-to-clipboard` | |
| `react-dnd` | |
| `react-dnd-html5-backend` | |

### Shared extension props

After embedding into the core UI, each extension root receives components, selectors, actions, and utils via props (built in `createImportProps` and spread by `FederatedExtensionLoader`).

The full set is defined in [`createImportProps.js`](https://github.com/reportportal/service-ui/blob/develop/app/src/controllers/plugins/uiExtensions/createImportProps.js). In the plugin, you can type these props with the interfaces from the [plugin template](https://github.com/reportportal/plugin-template/tree/feature/organizations/ui/src/types/extensionProps).

Typical groups: `lib`, `components`, `componentLibrary`, `constants`, `actions`, `selectors`, `utils`, `validators`, `icons`, `HOCs`, `portalRootIds`.

Organization-aware pieces injected for plugins include, among others:

- selectors: `urlOrganizationSlugSelector`, `urlProjectSlugSelector`, `urlOrganizationAndProjectSelector`, `activeOrganizationSelector`, `organizationIntegrationsSelector`
- constants: `ORGANIZATION_SETTINGS_TAB_PAGE`, `ORGANIZATION_PROJECTS_PAGE`, `ORGANIZATIONS_PAGE`, `PLUGIN_UI_EXTENSION_ADMIN_PAGE`, `PROJECT_SETTINGS_TAB_PAGE`

Call plugin API commands with `utils.fetch` and `utils.URLS` from these props. The template hook `useCommandExecutor` posts to `pluginsCommandsCommon`; `PLUGIN_NAME` must match `pluginId` in `gradle.properties`.

To open a host modal, dispatch `actions.showModalAction` (there is no separate `uiExtension:modal` type).

### Extension points

`type` in `metadata.json`. These are the points a custom plugin can use after upload. The [plugin template](https://github.com/reportportal/plugin-template/tree/feature/organizations) covers the navigation and settings types.

| Extension type | Description |
| -------------- | ----------- |
| `uiExtension:adminPage` | Full page at `https://your_server/ui/#plugin/(pluginPage)/...`. Pair with `adminSidebarComponent` for a sidebar link. |
| `uiExtension:adminSidebarComponent` | Item in the instance sidebar. |
| `uiExtension:organizationSettingsTab` | Tab on organization settings: `.../organizations/(organizationSlug)/settings/(tabName)`. `name` is the `settingsTab` segment. There is no org `/plugin/...` page. |
| `uiExtension:organizationSidebarComponent` | Item in the organization sidebar. Does not open its own page; link it to a settings tab. Optional `iconName` for click analytics. |
| `uiExtension:settingsTab` | Tab on project settings: `.../projects/(projectSlug)/settings/(tabName)`. `name` is the `settingsTab` segment. |
| `uiExtension:sidebarComponent` | Item in the project sidebar. You render the control (for example `SidebarButton`). |
| `uiExtension:projectPage` | Full page at `.../projects/(projectSlug)/plugin/(pluginPage)/...`. `pluginPage` is `slug`, or `name` if `slug` is omitted. Sidebar link only if an SVG `icon` is set (`title`, `menuOrder`, `iconName`). |
| `uiExtension:launchItemComponent` | Extra content under each launch name on the Launches page (not on test items). |
| `uiExtension:integrationFormFields` | Fields in the integration create/edit modal (instance, organization, and project). Use `IntegrationFormField` from the core UI. The plugin must set `isEmbedded=true` in `gradle.properties` (`details.metadata.embedded`). |
| `uiExtension:integrationSettings` | Integration details on instance, organization, and project Integrations. Use `IntegrationSettings` from the core UI. Same `embedded` requirement as above. |

Other types (login, Unique Errors, Make Decision, Post issue, and similar) are for specialized plugins. Declaring them in `metadata.json` is not enough unless the plugin matches what core UI expects. Full list: [`constants.js`](https://github.com/reportportal/service-ui/blob/develop/app/src/controllers/plugins/uiExtensions/constants.js).

### Sidebar icons

Host `SidebarButton` expects `icon` as an **SVG string** (parsed with `html-react-parser`). In the template, import `.svg` files from `ui/src/icons/` via `svg-inline-loader`.

To match ReportPortal sidebars:

- Use `width="48"` `height="40"` and `viewBox="0 0 48 40"`.
- Prefer `fill="currentColor"` on shapes so hover/active colors apply.
- Prefer `path` / `rect` / `polygon` over `circle` / `ellipse` for the active state (host CSS recolors those elements).

## Localization

Plugin translations are shipped in the plugin artifact and merged into ReportPortal at runtime. Declare them in `metadata.json`:

```json
"localization": { "messages": "locale-{lang}.json" }
```

Without this section the plugin falls back to core strings and `defaultMessage`.

The template workflow mirrors Service UI: `defineMessages` in code → `npm run manage:translations` → committed `ui/src/locales/{ru,uk,be,zh,es}.json` → webpack copies them to `locale-{lang}.json`. Use a unique message id prefix (for example `PluginTemplate.*`); it does not have to equal `pluginId`.

Details can be found [here](https://github.com/reportportal/plugin-template/blob/feature/organizations/ui/README.md#localization-translations-shipped-with-the-plugin).

## Local development

Preconditions: Node.js 20+.

Then run the commands from the plugin frontend directory (in the template this is `ui/`):

```bash
npm install
npm run dev    # webpack watch
npm run start  # serve built files (port 9090 in the template)
```

**Option 1** — override in the browser console (resets on reload). Available from ReportPortal 24.1:

```javascript
window.RP.overrideExtension('{pluginName}', 'http://localhost:9090');
```

**Option 2** — webpack proxy in Service UI (survives reloads). In `service-ui/app/webpack/dev.config.js`, add before the existing `/api/` rule:

```javascript
{
  context: ['/api/v1/plugin/public/{pluginName}/'],
  target: 'http://localhost:9090',
  changeOrigin: true,
  pathRewrite: { '^/api/v1/plugin/public/{pluginName}/file': '' },
},
```

In both options, replace `{pluginName}` with `pluginId` from `gradle.properties`. Then restart the Service UI dev server if you used the proxy.

Build the UI source code: `npm run build`.
