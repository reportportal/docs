# API differences between v4 and v5

## New endpoints

### Activity controller

GET `/v1/{projectName}/activity/{activityId}` - Get activity by id.

---

### Dashboard controller

PUT `/v1/{projectName}/dashboard/{dashboardId}/{widgetId}}` - Add specified widget to dashboard.

DELETE `/v1/{projectName}/dashboard/{dashboardId}/{widgetId}` - Delete specified widget from dashboard.

---

### Launch controller

Note: Tags from v4 was replaced by attributes in v5.
Attribute contains key and value. It may have null key, but non-null value.
Attribute with null value is analog for v4 tag.

GET `/v1/{projectName}/launch/attribute/keys` - Retrieve all unique attribute keys of project launches.

GET `/v1/{projectName}/launch/attribute/values` - Retrieve all unique attribute values of project launches.

GET `/v1/{projectName}/launch/status` - Get launches statuses.

GET `/v1/{projectName}/launch/uuid/{launchUuid}` - Get launch by uuid.

Note: Response from start(create) launch request contains object with key `id` and string value (example: `id="33fa80b9-8ec9-4d52-8cb7-68b7bb4070f1"`).
It is not physical `id` in database. It is UUID (virtual id of launch, part of asynchronous reporting implementation).
Using request above you can retrieve physical `id` from database of just reported launch and use it in next queries for items, filters etc.

PUT `/v1/{projectName}/launch/info` - Bulk update launches attributes and descriptions.

---

### Log controller

New functionality in v5 - [nested steps](https://github.com/reportportal/client-java/wiki/Nested-steps).

GET `/v1/{projectName}/log/nested/{parentId}` - Get nested steps with logs for the parent test item.

GET `/v1/{projectName}/log/uuid/{logUuid}` - Get log by uuid.

POST `/v1/{projectName}/log/search/{itemId}` - Search test items with similar error logs.

---

### Plugin controller

GET `/v1/plugin` - Get all available plugins.

POST `/v1/plugin` - Upload new plugin.

PUT `/v1/plugin/{pluginId}` - update specified plugin.

DELETE `/v1/plugin/{pluginId}` - delete specified plugin.

---

### Project controller

GET `/v1/project/analyzer/status` - Get indexing logs status for project.

GET `/v1/project/export` - Export information about all projects.

GET `/v1/project/list` - Retrieve info about all projects by filer.

GET `/v1/project/names` - Get all project names.

GET `/v1/project/names/search` - Search project names.

GET `/v1/project/{projectName}/widget/{widgetCode}` - Get project widget by code.

PUT `/v1/project/{projectName}/notification` - Update project notifications configuration.

PUT `/v1/project/{projectName}/preference/{login}/{filterId}` - Add specified filter to user preference.

DELETE `/v1/project/{projectName}/preference/{login}/{filerId}` - Remove specified filter from user preference.

---

### Project setting controller

POST `/v1/{projectName}/settings/pattern` - Create pattern template for item's log messages pattern analysis.

PUT `/v1/{projectName}/settings/pattern/{id}` - Update specified pattern template for item's log messages pattern analysis.

DELETE `/v1/{projectName}/settings/pattern/{id}` - Delete specified pattern template for item's log messages pattern analysis.

---

### Test item controller

Note: Tags from v4 was replaced by attributes in v5.
Attribute contains key and value. It may have null key, but non-null value.
Attribute with null value is analog for v4 tag.

GET `/v1/{projectName}/item/attribute/keys` - Retrieve all unique attributes keys of specified launch.

GET `/v1/{projectName}/item/attribute/keys/all` - Retrieve all unique attributes keys of specified launch.

GET `/v1/{projectName}/item/attribute/values` - Retrieve all unique attributes values of specified launch.

GET `/v1/{projectName}/item/ticket/ids` - Get tickets that contains a term as a part inside for specified launch.

GET `/v1/{projectName}/item/uuid/{itemId}` - Get test item by uuid.

Note: Response from start(create) test item request contains object with key `id` and string value (example: `id="1f8233b0-6a2d-4a82-989b-a33463287130"`).
It is not physical `id` in database. It is UUID (virtual id of test item, part of asynchronous reporting implementation).
Using request above you can retrieve physical `id` from database of just reported test item and use it in next queries for items, logs etc.

PUT `/v1/{projectName}/item/info` - Bulk update items attributes and descriptions.

PUT `/v1/{projectName}/item/issue/link` - Link external issue for specified test items.

PUT `/v1/{projectName}/item/issue/unlink` - Unlink external issue for specified test items.

---

### User controller

GET `/v1/user/export` - Export information about all users.

GET `/v1/user/registration` - Get user bid info.

GET `/v1/user/registration/info` - Validate user login and/or email.

GET `/v1/user/search` - Search users by term.

GET `/v1/user/{userName}/projects` - Retrieve all user projects.

DELETE `/v1/user` - Delete specified users by ids.

---

### Widget controller
 
New group of widgets that may have few levels
 
GET `/v1/{projectName}/widget/multilevel/{widgetId}` - Get multilevel widget by id.

---

## New controllers

#### Bug tracking system controller - replacement of  external system controller.

GET `/v1/bts/{integrationId}/fields-set` - Get list of fields required for posting ticket.

GET `/v1/bts/{integrationId}/issue_types` - Get list of allowable issue types for bug tracking system.

GET `/v1/bts/{projectName}/ticket/{ticketId}` - Get ticket from the bts integration.

GET `/v1/bts/{projectName}/{integrationId}/fields-set` - Get list of fields required for posting ticket (project integration).

GET `/v1/bts/{projectName}/{integrationId}/issue_types` - Get list of allowable issue types for bug tracking system (project integration).

POST - `/v1/bts/{projectName}/{integrationId}/ticket` - Post ticket to the bts integration.

---

#### Integration controller

GET `/v1/integration/global/all` - Get available global integrations.

GET `/v1/integration/global/all/{pluginName}` - Get available global integrations for plugin.

GET `/v1/integration/project/{projectName}/all` - Get available project integrations.

GET `/v1/integration/project/{projectName}/all/{pluginName}` - Get available project integrations for plugin.

GET `/v1/integration/{integrationId}` - Get specified global integration by id.

GET `/v1/integration/{integrationId}/connection/test` - Test connection to the global integration.

GET `/v1/integration/{projectName}/{integrationId}/connection/test` - Test connection to the integration through the project config.

GET `/v1/integration/{projectName}/{integrationId}` - Get specified project integration by id.

PUT `/v1/integration/{projectName}/{integrationId}` - Update specified project integration by id.

PUT `/v1/integration/{integrationId}` - Update specified global integration by id.

PUT `/v1/integration/{projectName}/{integrationId}/{command}` - Execute command to the integration instance.

POST `/v1/integration/{pluginName}` - Create global integration.

POST `/v1/integration/{projectName}/{pluginName}` - Create project integration instance.

DELETE `/v1/integration/all/{type}` - Delete all global integrations by type.

DELETE `/v1/integration/{projectName}/all/{type}` - Delete all project integrations by type.

DELETE `/v1/integration/{integrationId}` - Delete specified global integration by id.

DELETE `/v1/integration/{projectName}/{integrationId}` - Delete specified project integration by id.

---

#### Launch asynchronous controller

POST `/v2/{projectName}/launch` - Start launch for specified project.

POST `/v2/{projectName}/launch/merge` - Merge set of specified launches in common one.

PUT `/v2/{projectName}/launch/{launchId}/finish` - Finish launch for specified project.

---

#### Test item asynchronous controller

POST `/v2/{projectName}/item` - Start root test item.

POST `/v2/{projectName}/item/{parentItem}` - Start child test item.

PUT `/v2/{projectName}/item/{testItemId}` - Finish test item.

---

#### Log asynchronous controller

POST `/v2/{projectName}/log` - Create log.

---

## Differences in reporting

### Launch rerun
[Rerun developers guide](/src/md/src/DevGuides/rerun.md)

### Nested steps
[Nested steps wiki](https://github.com/reportportal/client-java/wiki/Nested-steps)