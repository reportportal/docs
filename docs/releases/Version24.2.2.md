---
sidebar_position: 16
sidebar_label: Version 24.2.2
---

# Version 24.2.2

## 1. What's Changed:
1. **New Features - SCIM Server Integration:**<br/>
   The [SCIM Server feature](https://reportportal.io/docs/features/SCIMServerFeature) has been introduced as part of our enterprise-level support services. If you're interested in enabling SCIM for your setup, please [reach out](https://reportportal.io/contact-us/general) to us for more information.

2. **New Features - Instance Invitation Control:**<br/>
   A new feature allows administrators to enable or disable [instance invitations](https://reportportal.io/docs/admin-panel/ServerSettings). You can now disable manual invitations for external users, ensuring that users can only access ReportPortal through an identity provider configured for the instance.

3. **Minor Improvements - [Unique Errors Analysis](https://reportportal.io/docs/analysis/UniqueErrorAnalysis):**<br/>
   Clusters with no tests are now filtered out and no longer displayed in the UI.

## 2. Technical improvements:

1. Service Jobs has been updated to Spring Boot 3.
2. Gitlab, Import plugin (RobotFramework), Import plugin (JUnit), Monday, Slack, Azure, Gitlab, Jira Cloud, Jira Server, Saucelabs, Rally plugins have been updated to Java 21.

## 3. Bugs fixed:
1. Fixed an issue that caused an empty file to be downloaded when exporting a launch in PDF format.
2. Resolved an issue with log display in the Unique Error Analysis section.
3. Fixed a bug preventing users with a dot in their username from being added to the "Recipients" field in notification rules.

## 4. Enhancements Based on Community Feedback:

[#2389](https://github.com/reportportal/reportportal/issues/2389): Adjusted Email Server integration settings to support usernames (e.g., SendGrid and others).<br/>
[#2381](https://github.com/reportportal/reportportal/issues/2381): Fixed incorrect sorting in the "Launch Statistics Chart" widget.<br/>
[#2361](https://github.com/reportportal/reportportal/issues/2361): Enabled the "Show" button for fatal and error logs in nested steps.<br/>
[#2405](https://github.com/reportportal/reportportal/issues/2405): Fixed issue with Time format support in .NET agents, and other agents.

## 5. Released services and plugins:

Released services:
|Service Name|Repository|Tag|
|---|---| --- |
|Authorization|reportportal/service-authorization|5.13.0|
|UI|reportportal/service-ui|5.12.1|
|API|reportportal/service-api|5.13.1|
|Index|reportportal/service-index|5.13.0|
|Jobs|reportportal/service-jobs|5.13.0|
|Migrations|reportportal/migrations|5.13.0|
|Auto Analyzer|reportportal/service-auto-analyzer|5.13.0|
|Metrics Gatherer|reportportal/service-metrics-gatherer|5.13.0|

Released plugins:
|Plugin Name|Repository|Tag|
|---|---| --- |
|Gitlab Plugin|reportportal/plugin-bts-gitlab|5.12.1|
|Import Plugin (RobotFramework)|reportportal/plugin-import-robot|1.0.1|
|Import Plugin (JUnit)|reportportal/plugin-import-robot|1.0.2|
|Monday|reportportal/plugin-bts-monday|1.0.1|
|Slack|reportportal/plugin-slack|1.0.1|
|Azure|reportportal/plugin-bts-azure|5.12.1|
|Jira|reportportal/plugin-bts-jira|5.12.1|
|Jira Cloud|reportportal/plugin-bts-jira-cloud|5.12.1|
|Saucelabs|reportportal/plugin-saucelabs|5.12.1|
|Rally|reportportal/plugin-bts-rally|5.12.2|
