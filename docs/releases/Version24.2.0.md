---
sidebar_position: 14
sidebar_label: Version 24.2
---

# Version 24.2

<MediaViewer src={require('./img/24.2.png')} alt="Version 24.2 of our test automation metrics dashboard" />

:::important
To ensure that asynchronous reporting works correctly, please make sure the correct feature flag is enabled in RabbitMQ.
Open RabbitMQ Management, go to the Admin tab -> Feature Flags -> message_containers_deaths_v2. If it's disabled, enable it.
:::

:::important
Due to the transition to a new plugin mechanism when updating ReportPortal to version 24.2, all the plugins need to be reinstalled manually. 
Check out the updated plugins [UI development guides](/developers-guides/PluginDevelopersGuide/PluginUIDevelopersGuide).
:::

:::important
Double entry removed. Review changes by comparing GitHub releases in [Docker](
https://github.com/reportportal/reportportal/compare/v24.1...v24.2) or [Kubernetes](https://github.com/reportportal/kubernetes/compare/reportportal-24.1.0...reportportal-24.2.0).
:::

## 1. What's Changed:

1. **New features** - **[Extended launches retention policy](/configuration/LaunchesRetentionPolicy)**: <br/>
   We've introduced an extended launches retention policy to allow important launches to be preserved beyond the existing retention periods. Previously, all launches were automatically deleted after a set time to save storage. With this update, you can now mark specific launches as important, ensuring they are never deleted, as long as there is sufficient storage available. This feature is useful for retaining critical data for compliance, auditing, or historical analysis.

2. **New integrations** (Notifications) - **[Slack plugin](/plugins/notifications/Slack) and redesigned Notifications page**: <br/>
   Teams using Slack can now set up Slack integration to receive ReportPortal notifications on launch event right in their Slack channel.<br/>
   More details can be found in [Slack user guide](/plugins/notifications/Slack) and [blog post](https://reportportal.io/blog/report-test-results-in-real-time-to-slack).

3. **New integrations** (Bug Tracking Systems) - **[Monday plugin](/plugins/bug-tracking/Monday)**: <br/>
   Teams working with Monday as their BTS can now set up an integration to post and link issues from ReportPortal directly to Monday.  

4. **Import functionality moved to plugin**:  <br/> 
   To provide more flexibility for launch import, the feature has been moved from the core application to a plugin. Users can now choose between the Robot and JUnit import plugins developed by the ReportPortal team, or create their own plugins to import results from other test frameworks.<br/>
   More details about [JUnit import plugin](/plugins/import/JUnit).<br/>
   More details about [Robot Framework import plugin](/plugins/import/RobotFramework).<br/>
   [Guide on how to create import plugin](/developers-guides/PluginDevelopersGuide/DevelopACustomImportPlugin).

5. **Microseconds added to timestamps** for better test items sequence tracking:<br/>
   Microseconds have been added to timestamps to enable a more accurate sequence of logs, as some logs previously had identical timestamps at the millisecond level.

6. **LDAP integration improvements**:<br/>
- PBKDF2 encryption has been added to the list of possible encryptions for LDAP.<br/>
- LDAP integration can now be created either with Full name attribute mode or with separate fields for First name and Last name.

7. **Improved logic of [launch rerun](/developers-guides/RerunDevelopersGuide)**:<br/>
   User can report rerun of the specified launch with no attributes and the attributes for the initial launch will remain. If user reports rerun of the specified launch with attributes, only new attributes will be added to the launch.

8. **New language introduced:**<br/>
   Users can now utilize the interface in Spanish, and we encourage everyone to contribute to further translations or improve the existing ones.
   A special thank you to [@mg-diego](https://github.com/mg-diego) for his valuable contribution to the Spanish translation!

## 2. Technical improvements:

1. **Analyzer**:<br/>
 **Added:**<br/>
   Message-through logging with Correlation ID, to ease debugging and understanding of logs.<br/>
   **Updated:**<br/>
   Refactoring: data-preparation logic joined and put into common place.<br/>
   Refactoring: model train logic standardised and prepared for future join.<br/>
   Lots of type annotations added.<br/>
   **Fixed**<br/>
   Re-train logic. Custom re-trained models for big enough projects do not affect negatively auto-analysis now.

2. **Asynchronous Reporting**:<br/>
   ReportPortal now features 2x faster reporting under full load, thanks to a new asynchronous reporting approach. A key update includes switching from a Direct exchange to a Consistent-hashing exchange. The retry mechanism was also revamped to focus on handling messages related to the reporting order.<br/>
   Read our latest [blog post](https://reportportal.io/blog/boost-asynchronous-test-reporting-speed-by-2x).

:::important
To ensure that asynchronous reporting works correctly, please make sure the correct feature flag is enabled in RabbitMQ.<br/>
Open RabbitMQ Management, go to the Admin tab -> Feature Flags -> message_containers_deaths_v2. If it's disabled, enable it.
:::

3. Updated React to version 18.
4. PostgreSQL 16 support.
5. Updated Java to version 21 (Service-uat).

## 3. Bugs fixed:

1. **Saucelabs**:

- Issue with Mobile tests videos (run on real devices in SauceLabs) is solved.
- Error when opening "Sauce Labs" tab from log view is fixed.

2. **Jira Cloud**:

- Functionality to add Assignee for issue by typing its name or email (in case of full match) has been added.
- Bug with posting issue with "Parent" field is fixed.
- Bug with saving multi-select field as empty is fixed.
- Bug with creating Integration without predefine Issue Type is fixed.
- Possibility to add "None" value for fields with predefined values has been added.

3. **Quality Gates**:
- ‘'In progress' QG status doesn't change for merged launches, when 'New errors' rule is applied and no unique errors identified' is fixed.
- 'QG page is broken after editing Quality Gate, if it contains New failures/New error rules' is fixed.

4. TypeError occurring when switching between "New errors" and "Known errors" options on "Unique errors" page is solved.
5. "Unique bugs table" widget is fixed.
6. Bug with Retry reported as a separate step is fixed.

7. Issue with Resize widget functionality is solved.

:::important
We made some changes in how we handle Unique Errors. Thus behaviour on some stack traces might change.<br/>
We are going to review it in the upcoming updates to make sure that all cases are covered.
:::

## 4. Enhancements Based on Community Feedback:

- [#1914](https://github.com/reportportal/reportportal/issues/1914) Ability to exclude Skipped tests from statistics was added for Component health check widget (table view) and Component health check widget (table view).
- [#2168](https://github.com/reportportal/reportportal/issues/2168) The limit for the dashboards per project has been increased to 3000 dashboards.
- [#2219](https://github.com/reportportal/reportportal/issues/2219) On the Unique Errors page, error clusters have been introduced and sorted by size, allowing users to address the most impactful errors first.
- [#2249](https://github.com/reportportal/reportportal/issues/2249) Email configuration has been improved taking into account possible ReportPortal deployment to a specified path ensuring that the links in notifications and other emails are correct.
- [#2309](https://github.com/reportportal/reportportal/issues/2309), [#2245](https://github.com/reportportal/reportportal/issues/2245) Logics of importing empty suites has been adjusted: Launches with empty suites can now be imported successfully. Empty suite has status 'Passed’.
- [#1951](https://github.com/reportportal/reportportal/issues/1951) The issue with the launch description not being updated upon launch finish (when launch reporting started with no description and finished with any description) is fixed.
- [#2230](https://github.com/reportportal/reportportal/issues/2230) Issue with parent nested step turning in failed status if child nested step processed after it's finished and has status 'skipped' is solved.
- [#2120](https://github.com/reportportal/reportportal/issues/2120) Issue with broken links on filtered Launches page is solved.
- [#1020](https://github.com/reportportal/reportportal/issues/1020), [#36](https://github.com/reportportal/agent-js-jasmine/issues/36) Issue with logs sequence is solved.
## 5. CVE addressed:

**Service auto-analyser:**<br/>
[CVE-2023-45853](https://github.com/advisories/GHSA-mq29-j5xf-cjwr), [CVE-2023-6246](https://github.com/advisories/GHSA-p6rw-gvvh-q8v4), [CVE-2023-6779](https://github.com/advisories/GHSA-p5vr-h433-qhqr), [CVE-2023-6780](https://github.com/advisories/GHSA-jjr8-97p7-vmmg), [CVE-2023-49468](https://github.com/advisories/GHSA-6j48-hfg3-m4hg), [CVE-2023-49467](https://github.com/advisories/GHSA-x895-cm39-f6wq), [CVE-2023-49465](https://github.com/advisories/GHSA-xxjf-hhmr-jhmq)

**Service-api:**<br/>
[CVE-2024-1597](https://github.com/advisories/GHSA-24rp-q3w6-vc56), [CVE-2023-40827](https://github.com/advisories/GHSA-rvm8-j2cp-j592), [CVE-2023-40828](https://github.com/advisories/GHSA-cj8w-v588-p8wx), [CVE-2023-40826](https://github.com/advisories/GHSA-3r28-rgp9-qgv4), [CVE-2024-22243](https://github.com/advisories/GHSA-ccgv-vj62-xf9h), [CVE-2023-5072](https://github.com/advisories/GHSA-4jq9-2xhw-jpx7), [CVE-2022-45688](https://github.com/advisories/GHSA-3vqj-43w4-2q58), [CVE-2023-46589](https://github.com/advisories/GHSA-fccv-jmmp-qg76), [CVE-2024-24549](https://github.com/advisories/GHSA-7w75-32cg-r6g2), [CVE-2024-23672](https://github.com/advisories/GHSA-v682-8vv8-vpwr), [CVE-2024-25710](https://github.com/advisories/GHSA-4g9r-vxhx-9pgx), [CVE-2024-26308](https://github.com/advisories/GHSA-4265-ccf5-phj5), [CVE-2023-34050](https://github.com/advisories/GHSA-24f5-5fmf-pwmc), [CVE-2023-6378](https://github.com/advisories/GHSA-vmq6-5m68-f53m), [CVE-2023-6481](https://github.com/advisories/GHSA-gm62-rw4g-vrc4), [CVE-2023-6378](https://github.com/advisories/GHSA-vmq6-5m68-f53m), [CVE-2023-6481](https://github.com/advisories/GHSA-gm62-rw4g-vrc4), [CVE-2023-20883](https://github.com/advisories/GHSA-xf96-w227-r7c4)

**Service-authorization:**<br/>
[CVE-2023-20860](https://github.com/advisories/GHSA-7phw-cxx7-q9vq), [CVE-2024-1597](https://github.com/advisories/GHSA-24rp-q3w6-vc56), [CVE-2023-5072](https://github.com/advisories/GHSA-4jq9-2xhw-jpx7), [CVE-2022-45688](https://github.com/advisories/GHSA-3vqj-43w4-2q58), [CVE-2023-1370](https://github.com/advisories/GHSA-493p-pfq6-5258), [CVE-2023-46589](https://github.com/advisories/GHSA-fccv-jmmp-qg76), [CVE-2024-24549](https://github.com/advisories/GHSA-7w75-32cg-r6g2), [CVE-2024-23672](https://github.com/advisories/GHSA-v682-8vv8-vpwr), [CVE-2024-25710](https://github.com/advisories/GHSA-4g9r-vxhx-9pgx), [CVE-2024-26308](https://github.com/advisories/GHSA-4265-ccf5-phj5), [CVE-2023-34050](https://github.com/advisories/GHSA-24f5-5fmf-pwmc), [CVE-2023-6378](https://github.com/advisories/GHSA-vmq6-5m68-f53m), [CVE-2023-6481](https://github.com/advisories/GHSA-gm62-rw4g-vrc4), [CVE-2015-7501](https://github.com/advisories/GHSA-fjq5-5j5f-mvxh), [CVE-2015-4852](https://github.com/advisories/GHSA-7r6v-mxc2-pg49)

**Service-metrics-gatherer:**<br/>
[CVE-2023-45853](https://github.com/advisories/GHSA-mq29-j5xf-cjwr)

**Service-jobs:**<br/>
[CVE-2024-1597](https://github.com/advisories/GHSA-24rp-q3w6-vc56), [CVE-2023-46589](https://github.com/advisories/GHSA-fccv-jmmp-qg76), [CVE-2024-24549](https://github.com/advisories/GHSA-7w75-32cg-r6g2), [CVE-2024-23672](https://github.com/advisories/GHSA-v682-8vv8-vpwr), [CVE-2023-6378](https://github.com/advisories/GHSA-vmq6-5m68-f53m), [CVE-2023-6481](https://github.com/advisories/GHSA-gm62-rw4g-vrc4), [CVE-2024-22243](https://github.com/advisories/GHSA-ccgv-vj62-xf9h), [CVE-2024-25710](https://github.com/advisories/GHSA-4g9r-vxhx-9pgx), [CVE-2024-26308](https://github.com/advisories/GHSA-4265-ccf5-phj5), [CVE-2023-34050](https://github.com/advisories/GHSA-24f5-5fmf-pwmc), [CVE-2023-20883](https://github.com/advisories/GHSA-xf96-w227-r7c4)

**Service-ui:**<br/>
[CVE-2023-52425](https://github.com/advisories/GHSA-gh68-jm46-84rf), [CVE-2023-52426](https://github.com/advisories/GHSA-mp2w-hjcj-f5g9), [CVE-2024-25062](https://github.com/advisories/GHSA-x77r-6xxm-wjmx), [CVE-2023-45857](https://github.com/advisories/GHSA-wf5p-g6vw-rhxx)

## 6. Released versions:

|Service Name|Repository|Tag|
|---|---| --- |
|Index|reportportal/service-index|5.12.0|
|Authorization|reportportal/service-authorization|5.12.0|
|UI|reportportal/service-ui|5.12.0|
|API|reportportal/service-api|5.12.0|
|Jobs|reportportal/service-jobs|5.12.0|
|Migrations|reportportal/migrations|5.12.1|
|Auto Analyzer|reportportal/service-auto-analyzer|5.12.0-r1|
|Metrics Gatherer|reportportal/service-metrics-gatherer|5.12.0-r1|

## 7. [Migration Guide](https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v.24.2)
