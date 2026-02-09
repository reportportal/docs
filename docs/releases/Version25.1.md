---
sidebar_position: 15
sidebar_label: Version 25.1
description: ReportPortal v25.1 release notes with Spring Boot 3 upgrade, enhanced test execution reporting, and improved performance.
---

# Version 25.1

**Action Required 1 - Update all the plugins on the instance:**<br />
In ReportPortal 25.1, we've upgraded to Spring Boot 3. Starting with this version, only plugins built with Spring Boot 3 are supported. Please install the latest plugin versions specified in the 25.1 release notes.

**Action Required 2 - Change API key format:**<br />
API keys containing special characters are no longer supported and will not function correctly.<br />
If your API keys contain special characters, please regenerate them to ensure continued access. The updated format supports only these characters: ```[a-zA-Z0-9-._~+/]```

**Action Required 3 - Update your SAML integration:**<br />
Please update your existing SAML integration to use the new standard callback URL format: ```/uat/login/saml2/sso/{saml-provider-name}```<br />
This ensures compatibility with the latest updates and improved security practices.<br />
More details can be found in our [SAML documentation](/plugins/authorization/SamlProviders/Overview/).

**Important Compatibility Notice:**<br />
Java agents released prior to 2022 may experience compatibility issues with ReportPortal 25.1. Please verify agent compatibility and consider upgrading to newer agent versions to ensure full functionality.

## 1. What's Changed:

1. **[Footer link updates](/admin-panel/ServerSettings#links--branding)**:<br />
   Admin users can now customize footer links in ReportPortal by adding new links, naming them, and rearranging their order. This allows users to easily access important shortcuts relevant to their organization.

2. **Dashboard sorting**:<br />
   Dashboards are now sorted by creation date (newest first) in the UI. You can also sort the dashboard list by creation date via the API.

3. **New system notifications**:<br />
   System notifications no longer overlap actionable items or block other elements. We've reworked them to be shorter (not full width) and added an 'x' button for easy dismissal.

4. **Project Activity Panel update**:<br />A new criteria "Update test item" has been added to the Project Activity Panel widget. This displays activity when a user changes an item's defect type or status, or when Auto Analysis changes an item's defect type.

6. **SCIM user filtering:**<br />
   For users of our enterprise "[SCIM server](/features/SCIMServerFeature)" feature, we've added the ability to filter SCIM-type users.


## 2. Technical improvements:

1. **Spring Boot 3:**<br />
   ReportPortal and all plugins have migrated to Spring Boot 3.
2. **Improved launch importing mechanism for RobotFramework and JUnit:**<br />
   Now the launch import is handling like a regular launch reporting using the asynchronous endpoints, that increases stability and durability of the service-API and speeds up the import processing.
3. **New environment variable for JUnit import plugin:**<br />
   Introduced a new environment variable to regulate the loading of the default import plugin (JUnit import plugin) at startup.
4. **Analyzer updates:**<br />

Added:
- AMQP_MAX_RETRY_TIME, AMQP_INITIAL_RETRY_INTERVAL, AMQP_BACKOFF_FACTOR, AMQP_HEARTBEAT_INTERVAL environment variables to configure AMQP client
- ANALYZER_ENABLE_MEMORY_DUMP environment variable to print memory dump on healthcheck calls for debugging purpose
- ES_BOOST_MA environment variable to boost manually analyzed test cases in ES

Changed:
- AMQP client was rewritten to better handle connection issues
- uWSGI version updated to 2.0.29
- Improved the way of URL and path extraction on data preparation stage
- AMQP exchange declaration now performs on every connection, to avoid issues with exchange not being declared on RabbitMQ restarts
- ES_BOOST_AA environment variable default value changed to 0.0
- ES_TIME_WEIGHT_DECAY environment variable default value changed to 0.999
- flask-cors dependency updated to 6.0.0 to address vulnerabilities

Fixed:
- 22 Sonar issues

## 3. Bugs fixed:
1. **Dashboard cloning update**:<br />
   We've updated the UX flow for creating dashboards based on pasted configurations to ensure  its smooth work.

2. **Slack/Telegram notification timing fix**:<br />
   Fixed an issue where Slack and Telegram notifications were sent with incorrect defect type data before Auto Analysis completed. Notifications now wait for Auto Analysis to finish, ensuring accurate defect type information is included.

3. **Dashboard management after page reload fix**: <br />Fixed an issue where newly created dashboards would disappear after page reload, making them impossible to manage. Dashboards now remain accessible and manageable after page refresh.

4.  **Slack Integration:**<br />
    Fixed launch finish issue when invalid webhook URL is configured, preventing 400/403 errors during launch finish.

5. **Notifications:**<br />
   Fixed display of placeholder labels in Slack/Telegram notifications when launch has no attributes.

6. **Jira Cloud issue:**<br />
   Fixed Jira Cloud integration validation issue where valid BTS links were incorrectly rejected.

7. **Attributes:**<br />
   Fixed attribute key/value truncation when colon ":" symbol is present - attributes now display complete text as saved in database.

8. **Timestamps issue:**<br />
   Fixed test reporting issue with incorrect timestamps where tests were not reported correctly due to "startTime" timestamp errors in V24.2 .Net integration.

## 4. Enhancements Based on Community Feedback:

[#80](https://github.com/reportportal/reportportal/issues/80): Jira Cloud Plugin: Fixed URL validation preventing connections to *.jira.com domains.<br />
[#2488](https://github.com/reportportal/reportportal/issues/2488): GitHub Authorization: Fixed organization membership validation preventing valid organization members from logging in.<br />
[#2454](https://github.com/reportportal/reportportal/issues/2454): JIRA Server Sub-task Creation Error: Fixed paren)t issue data formatting that prevented creating sub-tasks in JIRA Server integration.

## 5. CVE addressed:

**Service-api:**
[CVE-2024-38816](https://github.com/advisories/GHSA-cx7f-g6mp-7hqm), [CVE-2024-38819](https://github.com/advisories/GHSA-g5vr-rgqm-vf78), [CVE-2025-22228](https://github.com/advisories/GHSA-mg83-c7gq-rv5c), [CVE-2024-38827](https://github.com/advisories/GHSA-q3v6-hm2v-pw99), [CVE-2023-24998](https://github.com/advisories/GHSA-hfrx-6qgj-fp6c), [CVE-2023-3635](https://github.com/advisories/GHSA-w33c-445m-f8w7), [CVE-2023-34036](https://github.com/advisories/GHSA-7m5c-fgwf-mwph), [CVE-2023-46120](https://github.com/advisories/GHSA-mm8h-8587-p46h), [CVE-2024-12798](https://github.com/advisories/GHSA-pr98-23f8-jwxv)

**Service-authorization:**
[CVE-2025-22228](https://github.com/advisories/GHSA-mg83-c7gq-rv5c), [CVE-2024-38816](https://github.com/advisories/GHSA-cx7f-g6mp-7hqm), [CVE-2024-38819](https://github.com/advisories/GHSA-g5vr-rgqm-vf78), [CVE-2023-24998](https://github.com/advisories/GHSA-hfrx-6qgj-fp6c), [CVE-2023-3635](https://github.com/advisories/GHSA-w33c-445m-f8w7), [CVE-2023-34036](https://github.com/advisories/GHSA-7m5c-fgwf-mwph), [CVE-2023-46120](https://github.com/advisories/GHSA-mm8h-8587-p46h), [CVE-2023-0833](https://github.com/advisories/GHSA-8fhc-q55v-jvx2), [CVE-2024-38829](https://github.com/advisories/GHSA-mqvr-2rp8-j7h4), [CVE-2024-38827](https://github.com/advisories/GHSA-q3v6-hm2v-pw99), [CVE-2023-1932](https://github.com/advisories/GHSA-x83m-pf6f-pf9g), [CVE-2024-12798](https://github.com/advisories/GHSA-pr98-23f8-jwxv), [CVE-2023-1370](https://github.com/advisories/GHSA-493p-pfq6-5258), [CVE-2024-38808](https://github.com/advisories/GHSA-9cmq-m9j5-mvww), [CVE-2023-34055](https://github.com/advisories/GHSA-jjfh-589g-3hjx), [CVE-2025-24970](https://github.com/advisories/GHSA-4g8c-wm8x-jfhw), [CVE-2020-13936](https://github.com/advisories/GHSA-59j4-wjwp-mw9m)

**Service-jobs:**
[CVE-2024-12798](https://github.com/advisories/GHSA-pr98-23f8-jwxv)


## 6. Released services:
|Service Name|Repository| Tag    |
|---|---|--------|
|Index|reportportal/service-index| 5.14.0 |
|Authorization|reportportal/service-authorization| 5.14.0 |
|UI|reportportal/service-ui| 5.14.1 |
|API|reportportal/service-api| 5.14.0 |
|Jobs|reportportal/service-jobs| 5.14.0 |
|Migrations|reportportal/migrations| 5.14.0 |
|Auto Analyzer|reportportal/service-auto-analyzer| 5.14.1 |

**Released plugins:**
|Plugin Name|Repository|Tag|
|---|---| --- |
|Import Plugin (JUnit)|reportportal/plugin-import-robot|1.1.0|
|Import Plugin (RobotFramework)|reportportal/plugin-import-robot|1.1.0|
|Jira Cloud|reportportal/plugin-bts-jira-cloud|5.13.1|
|Saucelabs|reportportal/plugin-saucelabs|5.13.0|
|Monday|reportportal/plugin-bts-monday|1.1.0|
|Rally|reportportal/plugin-bts-rally|5.13.0|
|Jira|reportportal/plugin-bts-jira|5.13.0|
|Telegram|reportportal/plugin-telegram|1.1.0|
|Gitlab Plugin|reportportal/plugin-bts-gitlab|5.13.0|
|Azure|reportportal/plugin-bts-azure|5.13.0|
|Slack|reportportal/plugin-slack|1.1.0|


## 7. Migration Guide.
- [How to migrate to Reportportal v25.1](https://github.com/reportportal/reportportal/wiki/%F0%9F%9A%80--Migration-guide-(NEW)#migration-to-251)
