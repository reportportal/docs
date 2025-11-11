---
sidebar_position: 1
sidebar_label: Version 25.1.12
---

# Version 25.1.12

## 1. Bugs fixed:
- Jira Cloud: Fixed 400 error when posting with Linked Issues/Affects versions; added proper support for array-type fields.
- Core Jobs: cleanLaunch now batches deletions to avoid PostgreSQL’s param limit, restoring reliable retention cleanup.

## 2. Released services and plugins:
|Service Name|Repository|Tag|
|---|---| --- |
|UI|reportportal/service-ui|5.14.6|
|Auto Analyzer|reportportal/service-auto-analyzer|5.14.6|
|Jobs|reportportal/service-jobs|5.14.1|


|Plugin Name|Repository|Tag|
|---|---| --- |
|Jira Cloud|reportportal/plugin-bts-jira-cloud|5.13.7|


## Rest of services and plugins have the same version as before:
|Service Name|Repository|Tag|
|---|---| --- |
|Authorization|reportportal/service-authorization|5.14.7|
|Api|reportportal/service-api|5.14.4|
|Migrations|reportportal/migrations|5.14.2|
|Index|reportportal/service-index|5.14.0|

|Plugin Name|Repository|Tag|
|---|---| --- |
|Rally|reportportal/plugin-bts-rally|5.13.1|
|Monday|reportportal/plugin-bts-monday|1.1.1|
|Azure|reportportal/plugin-bts-azure|5.13.2|
|Jira|reportportal/plugin-bts-jira|5.13.1|
|Import Plugin (JUnit)|reportportal/plugin-import-robot|1.1.0|
|Telegram|reportportal/plugin-telegram|1.1.0|
|Gitlab Plugin|reportportal/plugin-bts-gitlab|5.13.1|
|Sauce Labs|reportportal/plugin-saucelabs|5.13.1|
|Slack|reportportal/plugin-slack|1.1.2|
|Import Plugin (RobotFramework)|reportportal/plugin-import-robot|1.1.1|
