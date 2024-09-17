# Plugin UI development guide

From version 5 the ReportPortal supports custom plugins that can be uploaded to the system as `.jar` files on _plugins_ page (_https://your_server/ui/#administrate/plugins_) or via API.

The described approach cover the UI part of the plugin engine starting from ReportPortal version 24.1.

To learn how deal with ReportPortal plugins from the Backend side, follow the [separate guide](). 

## The concept

The Service UI and Plugin UI are integrated in runtime using JavaScript and share the common dependencies via [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/).

### From Service UI side

The ReportPortal Service UI (the core UI - further in the text) is built with the React library and uses Redux for state management.
It has a list with extension points that can be used to extend the core UI with custom React components come from plugins. Extension points are described [here]().
The context (e.g. current user, project) from core UI is shared via Redux state and can be accessed in plugins. In addition to this, the core UI provides a set of common components and utils that can be used in plugins as well.

After uploading the plugin to the ReportPortal (see [how]()) and opening the application in browser, the core UI will load the descriptors file (`metadata.json`) from plugin to define the extension points implemented there.

Once the place with particular extension point opened in the application (e.g. Settings page), the core UI loads the React component from the Plugin UI files and render it in the appropriate place in application.

#### Libs sharing

The core UI shares its major dependencies via Webpack Module Federation plugin.
That means that libs can be safely reused in plugin without loading their duplicate to the browser if the version of the lib satisfies the plugin needs.

The list with shared libs from core UI:

Create table.

##### Shared extension props

After embedding into the core UI, each Plugin UI extension component receives the rich set of components and utils via props.
The complete set of such a props can be found [in the core UI](https://github.com/reportportal/service-ui/blob/develop/app/src/controllers/plugins/uiExtensions/createImportProps.js), some of them are described via TS definitions in the [plugin template repo](https://github.com/reportportal/plugin-template/tree/main/plugin/ui/src/types/extensionProps).

#### Extension points

The list with supported extension points by core UI:

| Extension type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| settingsTab           | Adds the new tab on project settings page (_https://your_server/ui/#{projectName}/settings/{tabName}_).                                                                                                                                                                                                                                                                                                                                                                  |
| modal                 | Adds the new modal component to the system (can be shown by calling `showModalAction` with corresponding modal `name`).                                                                                                                                                                                                                                                                                                                                                  |
| adminPage             | Adds the new page to the _administrate_ section.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| integrationFormFields | Provides the fields to the integration creation modal on project integrations page (_https://your_server/ui/#{projectName}/settings/integrations_).<br/>`IntegrationFormField` component from Core UI can be used here to simplify form building process.<br/>**Note:** Integration settings for the plugin will be available only if plugin provides `embedded` property in its `details`.                                                                              |
| integrationSettings   | Provides the integration settings component on project integrations page (_https://your_server/ui/#{projectName}/settings/integrations_).<br/> `IntegrationSettings` component from Core UI can be used here to reduce the time for building communication with API and follow common design and UX patterns as in other integrations.<br/>**Note:** Integration settings for the plugin will be available only if plugin provides `embedded` property in its `details`. |
| sidebarComponent      | Adds a component to the application sidebar.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| launchItemComponent   | Adds a component to the every launch entity on launches page (component will be displayed under the launch name).                                                                                                                                                                                                                                                                                                                                                        |

projectPage (if `icon` property exists, the link will be automatically added to the sidebar). Right now only SVG icons supported.

### From Plugin UI side

Webpack Module Federation

## How to create own plugin UI

### Prerequisites

### Descriptors file (metadata.json)
