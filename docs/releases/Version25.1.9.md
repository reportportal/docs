---
sidebar_position: 6
sidebar_label: Version 25.1.9
---

# Version 25.1.9

## 1. What's changed:

**1. Improved XLS Export Format**<br />
Redesigned XLS export template with removed merged cells and proper numeric data formatting. Numeric values are now exported as true numeric cell types, enabling proper calculations, sorting, and filtering operations while maintaining visual readability.

**2. New Tab Navigation:**<br />
Test case links in the ["Most Failed Test-Cases (TOP-50)" widget](/dashboards-and-widgets/MostFailedTestCasesTableTop50) now open in new browser tabs with visual arrow indicators on hover, providing seamless navigation without losing your current context.

**3. History Table Improvement - Cell Preview Options:**<br />
Introduced new monitoring capabilities in the History table with customizable cell preview options. Users can now:
- Monitor custom performance metrics and response rates
- Track any measurable attribute relevant to their workflow
- Set threshold-based highlighting to identify items that fall outside acceptable parameters
- Make data-driven decisions based on historical patterns and trend analysis

Learn more about [cell preview improvements](/work-with-reports/HistoryOfLaunches#cell-preview-options).

**4. Amazon Application Load Balancer (ALB) Support**<br />
We are excited to announce that our [Helm chart](https://github.com/reportportal/kubernetes) now supports deployment with Amazon Application Load Balancer (ALB). This enhancement makes it easier to integrate ReportPortal with AWS environments using ALB. For setup instructions, check out our [ALB deployment guide](https://github.com/reportportal/kubernetes/blob/master/docs/alb-deployment-guide.md)

## 2. Bugs fixed:

**1. Navigation improvements:**<br />
Fixed "Set up Own Integration" link to properly open in new browser tab instead of replacing current page.

**2. Import & Export Fixes:**
- Fixed missing attachment file extensions in exported ZIP files, ensuring attachments can be opened correctly.
- Resolved issue where attachment names were missing from exported reports when including attachments
- Corrected export functionality for launches owned by deleted users - files now export properly with data instead of returning empty files with 500 errors.
- Resolved screenshot display issue for XML reports in RobotFramework import plugin.
- Fixed unnecessary error display when importing empty (0 MB) RobotFramework XML files.

**3. User Authentication**
- Resolved password validation issue that incorrectly rejected valid special characters like underscore (_) and colon (:).
- Fixed API Key authentication issue for keys containing two dots in the name.

**4. Performance & Integration Fixes:**
- Resolved Unique Errors Analysis failures for launches with large logs by addressing RabbitMQ message size limit constraints.
- Fixed JIRA Cloud integration issue preventing successful ticket posting (tickets are now created properly without error messages).


## 3. Released services and plugins:

|Service Name|Repository|Tag|
|---|---| --- |
|Api|reportportal/service-api|5.14.4|
|UI|reportportal/service-ui|5.14.5|
|Authorization|reportportal/service-authorization|5.14.6|
|Auto Analyzer|reportportal/service-auto-analyzer|5.14.5|


|Plugin Name|Repository| Tag    |
|---|---|--------|
|Jira Cloud|reportportal/plugin-bts-jira-cloud| 5.13.5 |


**Rest of services and plugins have the same version as before:**
|Service Name|Repository|Tag|
|---|---| --- |
|Migrations|reportportal/migrations|5.14.2|
|Index|reportportal/service-index|5.14.0|
|Jobs|reportportal/service-jobs|5.14.0|


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
|Slack|reportportal/plugin-slack|1.1.1|
|Import Plugin (RobotFramework)|reportportal/plugin-import-robot|1.1.1|
