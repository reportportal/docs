---
sidebar_position: 5
sidebar_label: Version 25.1.8
description: "Explore ReportPortal Version 25.1.8 release notes: enhanced Auto-Analysis settings, improved retry handling, and updated service and plugin versions."
---

# Version 25.1.8

## 1. What's changed:
ReportPortal now lets you choose whether to analyze the latest retry or the longest retry for more accurate defect assignment.
Available in Auto-Analysis settings. Admins and Project Managers can modify; others can view.

Docs updated:
- [Auto-Analysis Settings](/analysis/AutoAnalysisOfLaunches#defect-assignment-based-on-the-longest-retry)
- [Manual Auto-Analysis](/analysis/AutoAnalysisOfLaunches#manual-analysis)
- [Immediate Auto-Analysis](/analysis/ImmediateAutoAnalysis)

## 2. Released services:
|Service Name|Repository|Tag|
|---|---| --- |
|Api|reportportal/service-api|5.14.3|
|UI|reportportal/service-ui|5.14.4|
|Authorization|reportportal/service-authorization|5.14.5|
|Migrations|reportportal/migrations|5.14.2|
|Auto Analyzer|reportportal/service-auto-analyzer|5.14.4|


**Released plugins:**
|Plugin Name|Repository|Tag|
|---|---| --- |
|Azure|reportportal/plugin-bts-azure|5.13.2|
|Jira|reportportal/plugin-bts-jira|5.13.1|
|Jira Cloud|reportportal/plugin-bts-jira-cloud|5.13.4|
|Rally|reportportal/plugin-bts-rally|5.13.1|
|Monday|reportportal/plugin-bts-monday|1.1.1|


**Rest of services and plugins have the same version as before:**
|Service Name|Repository|Tag|
|---|---| --- |
|Index|reportportal/service-index|5.14.0|
|Jobs|reportportal/service-jobs|5.14.0|


|Plugin Name|Repository|Tag|
|---|---| --- |
|Import Plugin (JUnit)|reportportal/plugin-import-robot|1.1.0|
|Telegram|reportportal/plugin-telegram|1.1.0|
|Gitlab Plugin|reportportal/plugin-bts-gitlab|5.13.1|
|Sauce Labs|reportportal/plugin-saucelabs|5.13.1|
|Slack|reportportal/plugin-slack|1.1.1|
|Import Plugin (RobotFramework)|reportportal/plugin-import-robot|1.1.1|
