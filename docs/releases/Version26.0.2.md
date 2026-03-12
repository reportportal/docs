---
sidebar_position: 1
sidebar_label: Version 26.0.2
---

# Version 26.0.2

![Component Update 26 0 2](https://github.com/user-attachments/assets/3b18e200-3f88-4319-bec2-47a033434923)

# 1.**What's new:**

**1. [Lock dashboards feature](https://reportportal.io/docs/dashboards-and-widgets/WorkWithDashboards/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_2&utm_content=lock_dashboard#lock-dashboard)**
Admins and Project Managers can now lock dashboards to prevent unwanted changes and keep important views consistent for the whole team. When a dashboard is locked, Members, Customers, and Operators can still view data, refresh widgets, and work with filters, but cannot edit or delete dashboards or widgets. Admins and Project Managers retain full control regardless of lock status.

**2. [Increased description filter limit](https://reportportal.io/docs/work-with-reports/FilteringLaunches/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_2&utm_content=filter_launch)**
Increased the Description filter limit to 256 characters across Launches, Suites, Tests, and Steps. This allows users to enter more detailed search criteria, making it easier to find relevant items with greater precision. 

**3. [Export report with nested step attachments](https://reportportal.io/docs/work-with-reports/OperationsUnderLaunches/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_2&utm_content=export_attach#export-with-attachments)**
Improved Launch Report export to include attachments from nested steps. This applies to all export formats when "Include Attachments" is enabled.

# 2.**Premium updates for subscribers:**
**1. [Premium feature (Subscribers-only): Test Executions page — statistics](https://reportportal.io/docs/test-executions/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_2&utm_content=test_execut_main)**
Added execution statistics to the Test Executions page to help users quickly understand the status distribution of the current search results without reviewing individual items one by one. Statistics update automatically whenever filters change, so the summary always reflects the latest search results. 

**2. [Premium feature (Subscribers-only): Test Executions page — saved filters](https://reportportal.io/docs/test-executions/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_2&utm_content=test_execut_main)**
Added Saved Filters to the Test Executions page so users can save frequently used filter combinations and switch between them faster without rebuilding search criteria each time. Saved filters are stored per user and per project, so each user can keep a personalized set of filters without affecting others.

# 3. **Released services and plugins:**
|Service Name|Repository|Tag|
|---|---| --- |
|API|reportportal/service-api|5.15.1|
|UI|reportportal/service-ui|5.15.2|
|Migrations|reportportal/migrations|5.15.1|


|Plugin Name|Repository|Tag|
|---|---| --- |
|Jira Cloud|reportportal/plugin-bts-jira-cloud|5.13.9|
|Import Plugin (RobotFramework)|reportportal/plugin-import-robot|1.1.2|


**Rest of services and plugins have the same version as before:**
|Service Name|Repository|Tag|
|---|---| --- |
|Index|reportportal/service-index|5.15.0|
|Authorization|reportportal/service-authorization|5.15.0|
|Auto Analyzer|reportportal/service-auto-analyzer|5.15.1|
|Jobs|reportportal/service-jobs|5.15.0|


|Plugin Name|Repository|Tag|
|---|---| --- |
|Rally|reportportal/plugin-bts-rally|5.13.1|
|Monday|reportportal/plugin-bts-monday|1.1.1|
|Azure|reportportal/plugin-bts-azure|5.13.2|
|Jira|reportportal/plugin-bts-jira|5.15.0|
|Gitlab Plugin|reportportal/plugin-bts-gitlab|5.13.1|
|Import Plugin (JUnit)|reportportal/plugin-import-robot|1.1.0|
|Telegram|reportportal/plugin-telegram|1.1.0|
|Slack|reportportal/plugin-slack|1.1.2|
|Sauce Labs|reportportal/plugin-saucelabs|5.13.1|
