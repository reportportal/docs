---
sidebar_position: 1
sidebar_label: Version 26.0.3
---

# Version 26.0.3

![Component Update 26 0 3](https://github.com/user-attachments/assets/9b44a42b-5eca-4622-bdcc-d136c83d4384)


## 1. What's new:

**[Agentic testing results support](/work-with-reports/ViewLaunches/#launches-tab)**<br />
ReportPortal now supports ingestion of Agentic testing results. Each launch carries an execution type — AGENTIC or AUTOMATION — shown as a badge on the Launches page. Users can filter launches by execution type. 

## 2. Premium updates for subscribers:
**[Test Executions](/test-executions/#add-new-column):** 

* **Export with attachments:**<br />
XLS and PDF exports now support attachment inclusion. When Include attachments is enabled, the download is a ZIP archive containing the report file and any attachments. A second option controls structure: unchecked preserves a step-based folder hierarchy; checked places all attachments in a flat Attachments folder. 
Nested-step attachments are included under the same rules. 

* **New columns:**<br />
Two new optional columns are available via Customize Columns: Duration and Test ID. Both are hidden by default and included in XLS/PDF exports when selected.

* **90-day date range limit** <br />
The maximum custom date range for Launch start time on the Test Executions page is now 90 days (applies to both the header control and the All Filters panel). 

## 3. Performance improvements:
**Database size reduced by ~20%.**<br />
Several internal query optimizations allowed us to remove a number of large redundant indexes. As a result, the overall database size is reduced by approximately 20%, lowering storage footprint for all deployments.

## 4. Analyzer updates:
Added
- Removing HEX addresses on message processing as junk data, by @HardNorth
- `DISABLE_TRAIN` config flag to permanently disable re-train functionality, by @HardNorth

## 5. Small improvements:
**1. [Cumulative Trend Chart](/dashboards-and-widgets/CumulativeTrendChart): drill-down by status**<br />
Clicking a status segment in the Cumulative Trend Chart now correctly filters results: Passed shows only Passed tests; Failed shows Failed and Interrupted tests; Skipped shows only Skipped; defect type segments apply the corresponding defect filter.

**2. [Flaky Test Cases widget](/dashboards-and-widgets/FlakyTestCasesTableTop50): drill-down opens correct execution**<br />
Clicking a test case in the Flaky Test Cases widget now opens the most recent execution of that test case. If the test case was not present in the latest launch, ReportPortal redirects to the most recent launch where it exists — instead of opening an empty view.

**3. [Overall Statistics widget](/dashboards-and-widgets/OverallStatistics): configurable Interrupted test counting**<br />
The Overall Statistics widget now has a new checkbox: Consider interrupted tests as failed. Enabled by default — Interrupted tests are counted within Failed (preserving previous behavior). When unchecked, Interrupted tests are shown as a separate category. This setting affects only the Overall Statistics widget.

**4. [Test Case Search widget](/dashboards-and-widgets/TestCaseSearch): search behavior and result limits**<br />
Search now uses 'starts with' logic (previously 'contains'). Results are capped at 10 by default and 20 maximum.

## 6. Released services and plugins:
|Service Name|Repository|Tag|
|---|---| --- |
|API|reportportal/service-api|5.15.2|
|UI|reportportal/service-ui|5.15.3|
|Auto Analyzer|reportportal/service-auto-analyzer|5.15.2|
|Jobs|reportportal/service-jobs|5.15.1|
|Migrations|reportportal/migrations|5.15.2|


|Plugin Name|Repository|Tag|
|---|---| --- |
|Jira Cloud|reportportal/plugin-bts-jira-cloud|5.15.10|
|Test Executions||1.0.3|


**Rest of services and plugins have the same version as before:**
|Service Name|Repository|Tag|
|---|---| --- |
|Index|reportportal/service-index|5.15.0|
|Authorization|reportportal/service-authorization|5.15.0|

|Plugin Name|Repository|Tag|
|---|---| --- |
|Import Plugin (RobotFramework)|reportportal/plugin-import-robot|1.1.2|
|Rally|reportportal/plugin-bts-rally|5.13.1|
|Monday|reportportal/plugin-bts-monday|1.1.1|
|Azure|reportportal/plugin-bts-azure|5.13.2|
|Jira|reportportal/plugin-bts-jira|5.15.0|
|Gitlab Plugin|reportportal/plugin-bts-gitlab|5.13.1|
|Import Plugin (JUnit)|reportportal/plugin-import-robot|1.1.0|
|Telegram|reportportal/plugin-telegram|1.1.0|
|Slack|reportportal/plugin-slack|1.1.2|
|Sauce Labs|reportportal/plugin-saucelabs|5.13.1|
