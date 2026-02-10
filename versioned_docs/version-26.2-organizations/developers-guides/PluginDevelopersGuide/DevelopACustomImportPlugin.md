---
sidebar_label: Develop a custom import plugin
description: Learn how to develop custom import plugins for ReportPortal test automation reporting tools using PF4J framework.
---

# Develop a custom import plugin

This documentation guides on creating a custom import plugin for ReportPortal, using the PF4J plugin framework.

## Prerequisites
Before starting the development of a new import plugin, ensure you review these essential resources:

1. **PF4J Plugin Framework**: Learn about PF4J, which is the core framework for ReportPortal plugins system at [pf4j.org](https://pf4j.org).
2. **Plugin Template**: Start with the standard plugin template available on [GitHub](https://github.com/reportportal/plugin-template).
3. **Examples**: Examine existing plugins for importing:
   - JUnit: [GitHub repo](https://github.com/reportportal/plugin-import-junit)
   - RobotFramework: [GitHub repo](https://github.com/reportportal/plugin-import-robot).
4. **Event-Based Reporting**: Understand event-based interactions in ReportPortal through [service-api](https://github.com/reportportal/service-api/blob/develop/src/main/java/com/epam/ta/reportportal/reporting/event/EventBasedReporting.java).
5. **Event Objects**: Familiarize with event objects used in reporting at [GitHub](https://github.com/reportportal/commons/tree/develop/src/main/java/com/epam/reportportal/events).
6. **Start Import Endpoint**: Learn how to initiate importing through the UI at [GitHub](https://github.com/reportportal/service-api/blob/6d40590d21fef3299ed5b7e009b1cc7130863c21/src/main/java/com/epam/ta/reportportal/ws/controller/PluginController.java#L140).

## Step-by-Step Plugin Development Guide

### Step 1: Clone the Plugin Template
Begin by using the [plugin template](https://github.com/new?template_name=plugin-template&template_owner=reportportal) to create a new repository and get the required boilerplate code.

### Step 2: Rename and Configure the Template
Update the naming from 'template' to something specific to your plugin need. Modify the `gradle.properties` to set your `pluginId`, which should be a key word without special symbols. Update the manifest appropriately [here](https://github.com/reportportal/plugin-template/blob/698a17a862eb4a8d52274242a9f8e4ec9e6ab799/plugin/build.gradle#L101).

### Step 3: Implement the Plugin EntryPoint
Create your main class (or use from the template) annotated with `@Extension` that implements `ReportPortalExtensionPoint` ([TemplatePluginExtension](https://github.com/reportportal/plugin-template/blob/main/plugin/src/main/java/com/epam/reportportal/extension/template/TemplatePluginExtension.java)).
This class should contain all logic for integrating the new plugin with the ReportPortal system. Implement the necessary methods as shown in the earlier example snippet.

For correct representation on the UI, there should be added specific parameters to the plugin:

```java
  @Override
  public Map<String, ?> getPluginParams() {
    Map<String, Object> params = new HashMap<>();
    params.put(ALLOWED_COMMANDS, new ArrayList<>(pluginCommandMapping.get().keySet()));
    params.put(COMMON_COMMANDS, new ArrayList<>(commonPluginCommandMapping.get().keySet()));
    params.put(DESCRIPTION_KEY, DESCRIPTION);
    params.put(METADATA, Map.of(IS_INTEGRATIONS_ALLOWED, false));
    params.put("maxFileSize", MAX_FILE_SIZE);
    params.put("acceptFileMimeTypes", "List of acceptFileMimeTypes"));
    return params;
  }

  @Override
  public IntegrationGroupEnum getIntegrationGroup() {
    return IntegrationGroupEnum.IMPORT;
  }
```

### Step 4: Define the Import Command
Create a class for the 'import' command that must implement the [CommonPluginCommand](https://github.com/reportportal/plugin-api/blob/develop/src/main/java/com/epam/reportportal/extension/CommonPluginCommand.java) interface. This should:
- Specify the command name in the `getName()` method, which must return "import".
```java
    @Override
    public String getName() {
      return "import";
    }
```

- Handle the import logic in the `executeCommand(Map<String, Object> params)` method that includes file parsing and publishing launch reporting events.
```java
  @Override
  public OperationCompletionRS executeCommand(Map<String, Object> params) {}
```

When working with a loaded file, it's necessary to trigger events in ReportPortal. For instance, if the report contains specific step information, you need to generate a StartTestItemRQ and publish a StartChildItemRqEvent:

```java
  private String startTestItem(ItemInfo itemInfo) {
    StartTestItemRQ rq = buildStartItemRq(itemInfo);
    eventPublisher.publishEvent(
        new StartChildItemRqEvent(this, projectName, items.peek().getUuid(), rq));
    return rq.getUuid();
  }
```

The same approach used for other requests as well.

### Step 5: Build plugin jar

Build plugin executable jar using standard gradle commands after implementation of the plugin is finished. 
```
gradle clean build
```
More information about the assembling of plugins can be found in [PluginDevelopersGuide](./PluginAPIDevelopersGuide.mdx#assemble-plugin)

### Step 6: Verify the plugin UI

Provide the info, mentioned in [step 3](#step-3-implement-the-plugin-entrypoint). This will help the ReportPortal UI understand the plugin's capabilities and limitations.
Once the step is completed, the plugin will be available for selection in the ReportPortal UI Launch import modal. No further actions required from the plugin UI to make the import process work. 

#### Add custom UI extensions if needed

The plugin template also provides a way to add custom extensions to the ReportPortal UI via plugin.
This setup isn't required for import process work, but can be used to provide additional pages/sections in the ReportPortal UI via React components.
For more information, see the [Plugin Developers Guide](./PluginUIDevelopersGuide.md).

## Events to Manage
- **StartLaunchRqEvent**: To start a new launch.
- **StartRootItemRqEvent**: To begin a root item just below the launch.
- **StartChildItemRqEvent**: For starting a child item, requiring a parent UUID.
- **SaveLogRqEvent**: For saving logs which may include file attachments.

By following these steps and using the available resources, you can build an import plugin that is customized to your reporting requirements and integrates smoothly with ReportPortal.
