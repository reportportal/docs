---
sidebar_position: 1
sidebar_label: Version 26.0.3
---

# Version 26.0.3

![Component Update 26 0 3](https://github.com/user-attachments/assets/9b44a42b-5eca-4622-bdcc-d136c83d4384)


# 1. **What's new:**

**[Agentic testing results support](https://reportportal.io/docs/log-data-in-reportportal/AgenticTestResults/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_3&utm_content=agentic_launch#merge-launches)**
As AI-driven testing becomes a core part of modern quality engineering, ReportPortal provides first-class support for agentic test results — outcomes produced by autonomous AI agents rather than traditional scripted test automation.

Starting from version 26.0.3, ReportPortal can receive and display results from AI agentic testing pipelines alongside classic automation results. This gives teams a unified view of their entire testing landscape — human-authored tests, automated regression suites, and AI agent sessions — in one place.

# 2. **Premium updates for subscribers:**
**[Test Executions](https://reportportal.io/docs/test-executions/#add-new-column/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_3&utm_content=tep-columns):** 

**-Export with attachments:**
XLS and PDF exports now support attachment inclusion. When Include attachments is enabled, the download is a ZIP archive containing the report file and any attachments. A second option controls structure: unchecked preserves a step-based folder hierarchy; checked places all attachments in a flat Attachments folder. 
Nested-step attachments are included under the same rules. 

**- New columns:**
Two new optional columns are available via Customize Columns: Duration and Test ID. Both are hidden by default and included in XLS/PDF exports when selected.

**- 90-day date range limit** 
The maximum custom date range for Launch start time on the Test Executions page is now 90 days (applies to both the header control and the All Filters panel). 

# 3. **Performance improvements:**
**Database size reduced by ~20%.**
Several internal query optimizations allowed us to remove a number of large redundant indexes. As a result, the overall database size is reduced by approximately 20%, lowering storage footprint for all deployments.

# 4. **Analyzer updates:**
Added
- Removing HEX addresses on message processing as junk data, by @HardNorth
- `DISABLE_TRAIN` config flag to permanently disable re-train functionality, by @HardNorth

# 5. **Small improvements:**
**1. [Cumulative Trend Chart](https://reportportal.io/docs/dashboards-and-widgets/CumulativeTrendChart/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_3&utm_content=cumulative_widget): drill-down by status**
Clicking a status segment in the Cumulative Trend Chart now correctly filters results: Passed shows only Passed tests; Failed shows Failed and Interrupted tests; Skipped shows only Skipped; defect type segments apply the corresponding defect filter.

**2. [Flaky Test Cases widget](https://reportportal.io/docs/dashboards-and-widgets/FlakyTestCasesTableTop50/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_3&utm_content=flaky_widget): drill-down opens correct execution**
Clicking a test case in the Flaky Test Cases widget now opens the most recent execution of that test case. If the test case was not present in the latest launch, ReportPortal redirects to the most recent launch where it exists — instead of opening an empty view.

**3. [Overall Statistics widget](https://reportportal.io/docs/dashboards-and-widgets/OverallStatistics/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_3&utm_content=overal_stat): configurable Interrupted test counting**
The Overall Statistics widget now has a new checkbox: Consider interrupted tests as failed. Enabled by default — Interrupted tests are counted within Failed (preserving previous behavior). When unchecked, Interrupted tests are shown as a separate category. This setting affects only the Overall Statistics widget.

**4. [Test Case Search widget](https://reportportal.io/docs/dashboards-and-widgets/TestCaseSearch/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_3&utm_content=search_widget): search behavior and result limits**
Search now uses 'starts with' logic (previously 'contains'). Results are capped at 10 by default and 20 maximum.

# 6. **Released services and plugins:**
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
|Gitlab Plugin|reportportal/plugin-bts-gitlab|5.13.2|
|Test Executions| Premium feature|1.0.3|


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
|Import Plugin (JUnit)|reportportal/plugin-import-robot|1.1.0|
|Telegram|reportportal/plugin-telegram|1.1.0|
|Slack|reportportal/plugin-slack|1.1.2|
|Sauce Labs|reportportal/plugin-saucelabs|5.13.1|
