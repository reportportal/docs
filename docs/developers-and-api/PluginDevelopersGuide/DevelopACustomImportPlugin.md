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
4. **Event-Based Reporting**: Understand event-based interactions in ReportPortal through [service-api](https://github.com/reportportal/service-api/blob/develop/src/main/java/com/epam/reportportal/base/reporting/event/EventBasedReporting.java).
5. **Event Objects**: Familiarize with event objects used in reporting at [GitHub](https://github.com/reportportal/service-api/tree/develop/src/main/java/com/epam/reportportal/base/infrastructure/events).
6. **Start Import Endpoint**: Learn how to initiate importing through the UI at [GitHub](https://github.com/reportportal/service-api/blob/develop/src/main/java/com/epam/reportportal/base/ws/controller/PluginController.java).
7. **Plugin commands**: Learn how plugin commands are implemented with `AbstractExtensionCommand` in the [Plugin API development guide](./PluginAPIDevelopersGuide.mdx#plugin-commands).

## Step-by-Step Plugin Development Guide

### Step 1: Clone the Plugin Template
Begin by using the [plugin template](https://github.com/new?template_name=plugin-template&template_owner=reportportal) to create a new repository and get the required boilerplate code.

### Step 2: Rename and Configure the Template
Update the naming from 'template' to something specific to your plugin need. Modify the `gradle.properties` to set your `pluginId`, which should be a key word without special symbols. The plugin manifest is generated from these properties in [build.gradle](https://github.com/reportportal/plugin-template/blob/main/build.gradle) (see [Base plugin configuration](./PluginAPIDevelopersGuide.mdx#base-plugin-configuration)).

### Step 3: Implement the Plugin EntryPoint
Create your main class (or use from the template) annotated with `@Extension` that implements `ReportPortalExtensionPoint` ([TemplatePluginExtension](https://github.com/reportportal/plugin-template/blob/main/src/main/java/com/epam/reportportal/extension/template/TemplatePluginExtension.java)).
This class should contain all logic for integrating the new plugin with the ReportPortal system.

The import command doesn't require an integration, so it should be registered as a common command in `getCommonExtensionCommands()`.
For correct representation on the UI, there should be added specific parameters to the plugin, and the integration group should be `IMPORT`:

```java
  private final Supplier<Map<String, ExtensionCommand<?>>> commonExtensionCommandMapping =
      new MemoizingSupplier<>(this::getCommonExtensionCommandMapping);

  @Override
  public Map<String, ?> getPluginParams() {
    Map<String, Object> params = new HashMap<>();
    params.put(ALLOWED_COMMANDS, new ArrayList<>());
    params.put(COMMON_COMMANDS, new ArrayList<>(commonExtensionCommandMapping.get().keySet()));
    params.put(DESCRIPTION_KEY, DESCRIPTION);
    params.put(METADATA, Map.of(IS_INTEGRATIONS_ALLOWED, false));
    params.put("maxFileSize", MAX_FILE_SIZE);
    params.put("acceptFileMimeTypes", List.of("application/zip", "application/xml", "text/xml"));
    return params;
  }

  @Override
  public IntegrationGroupEnum getIntegrationGroup() {
    return IntegrationGroupEnum.IMPORT;
  }

  @Override
  public Map<String, ExtensionCommand<?>> getCommonExtensionCommands() {
    return commonExtensionCommandMapping.get();
  }

  private Map<String, ExtensionCommand<?>> getCommonExtensionCommandMapping() {
    var importCommand = new ImportCommand(new RequestEntityConverter(objectMapper),
        eventPublisher,
        projectRepository,
        organizationUserRepository,
        organizationRepository,
        projectUserRepository);
    return Map.of(importCommand.getName(), importCommand);
  }
```

The legacy `getCommonCommand()` and `getIntegrationCommand()` methods are deprecated and should return `null`.

### Step 4: Define the Import Command
Create a class for the 'import' command that extends [AbstractExtensionCommand](https://github.com/reportportal/service-api/blob/develop/src/main/java/com/epam/reportportal/extension/command/AbstractExtensionCommand.java).
`AbstractExtensionCommand` validates the user's permissions before the command is invoked, so the command should declare the minimum required roles in the constructor.
The command should:
- Specify the command name in the `getName()` method, which must return "import".
- Handle the import logic in the `invokeCommand(PluginCommandRQ pluginCommandRq)` method that includes file parsing and publishing launch reporting events.

```java
public class ImportCommand extends AbstractExtensionCommand<StartLaunchRS> {

  private static final String FILE_PARAM = "file";
  private static final String PROJECT_NAME = "projectName";

  private final RequestEntityConverter requestEntityConverter;
  private final ApplicationEventPublisher eventPublisher;

  public ImportCommand(RequestEntityConverter requestEntityConverter,
      ApplicationEventPublisher eventPublisher,
      ProjectRepository projectRepository,
      OrganizationUserRepository organizationUserRepository,
      OrganizationRepository organizationRepository,
      ProjectUserRepository projectUserRepository) {
    super(projectRepository, organizationUserRepository, organizationRepository, projectUserRepository);
    this.requestEntityConverter = requestEntityConverter;
    this.eventPublisher = eventPublisher;

    // Set required permission levels
    this.minProjectRole = ProjectRole.EDITOR;
    this.minOrgRole = OrganizationRole.MANAGER;
    this.minUserRole = UserRole.ADMINISTRATOR;
  }

  @Override
  public String getName() {
    return "import";
  }

  @Override
  protected StartLaunchRS invokeCommand(PluginCommandRQ pluginCommandRq) {
    Map<String, Object> params = pluginCommandRq.getArguments();

    LaunchImportRQ launchImportRq = Optional.ofNullable(params.get(ENTITY_PARAM))
        .map(it -> requestEntityConverter.getEntity(ENTITY_PARAM, params, LaunchImportRQ.class))
        .orElseGet(LaunchImportRQ::new);

    MultipartFile file = (MultipartFile) Optional.ofNullable(params.get(FILE_PARAM))
        .orElseThrow(() -> new ReportPortalException(BAD_REQUEST_ERROR, "File for import wasn't provided"));

    String projectName = Optional.ofNullable(params.get(PROJECT_NAME)).map(String::valueOf)
        .orElseThrow(() -> new ReportPortalException(BAD_REQUEST_ERROR, "Project name wasn't provided"));

    // parse the file and publish reporting events
    String launchUuid = importLaunch(file, projectName, launchImportRq);

    StartLaunchRS response = new StartLaunchRS();
    response.setId(launchUuid);
    return response;
  }
}
```

The import request is sent by the UI to the `POST /api/v1/plugin/{projectKey}/{pluginName}/import` endpoint as `multipart/form-data`.
ReportPortal checks the project permissions and executes the plugin `import` command with the following `PluginCommandRQ`:

- `context` - organization and project identifiers;
- `arguments`:
  - `file` - uploaded file (`MultipartFile`);
  - `entity` - `LaunchImportRQ` with the launch parameters (name, description, attributes, etc.);
  - `projectName` - project key;
  - `projectId` - project identifier.

When working with a loaded file, it's necessary to trigger events in ReportPortal. For instance, if the report contains specific step information, you need to generate a StartTestItemRQ and publish a StartChildItemRqEvent:

```java
  private String startTestItem(ItemInfo itemInfo) {
    StartTestItemRQ rq = buildStartItemRq(itemInfo);
    eventPublisher.publishEvent(
        new StartChildItemRqEvent(projectName, items.peek().getUuid(), rq));
    return rq.getUuid();
  }
```

The same approach used for other requests as well. The complete implementation can be found in the
[JUnit import plugin](https://github.com/reportportal/plugin-import-junit/blob/develop/src/main/java/com/epam/reportportal/extension/importing/command/XUnitImportCommand.java).

### Step 5: Build plugin jar

Build plugin executable jar using standard gradle commands after implementation of the plugin is finished. 
```
./gradlew clean build
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
- **FinishItemRqEvent**: To finish a test item.
- **SaveLogRqEvent**: For saving logs which may include file attachments.
- **FinishLaunchRqEvent**: To finish the launch.

By following these steps and using the available resources, you can build an import plugin that is customized to your reporting requirements and integrates smoothly with ReportPortal.
