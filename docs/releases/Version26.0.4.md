---
sidebar_position: 1
sidebar_label: Version 26.0.4
last_update:
  date: '2026-08-04'
---

# Version 26.0.4

![Component Update 26 0 4](https://github.com/user-attachments/assets/f7bf25f6-b4b3-4f43-a45d-be47f7cb1eee)


## 1. Premium updates for subscribers:

**[Test Executions](https://reportportal.io/docs/test-executions/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_4&utm_content=tep):**

- **Latest executions only** — New toggle in All Filters: show every execution, or only the latest execution per test name. Export reflects the toggle; when the mode is on, the UI warns about view limitations (statistics, sorting, pagination, export).

- **Launch owner** — Filter by launch owner in the side panel; optional **Launch owner** column (sortable) in Customize Columns; included in XLS/PDF exports.

- **Statistics display mode** — Switch statistics between **Counts**, **Percentages**, and **Counts & Percentages** (default remains Counts).

- **Attribute presence column** — Custom column that shows Yes/No for a chosen attribute (value only, or key + value). Included in exports when selected.

- **Test Case ID & UUID columns** — Optional **Test Case ID** column from test item details. The former **Test ID** column is renamed to **UUID**. Both are available in Customize Columns and in exports when selected.

## 2. What's new:

**[Component Health Check widget](https://reportportal.io/docs/dashboards-and-widgets/ComponentHealthCheck/?utm_source=trigger&utm_medium=github&utm_campaign=rel_26_0_4&utm_content=widget_chc): Owner grouping**  
The Component Health Check widget can now use **Owner** as a grouping level alongside attribute keys. You can build hierarchies such as Owner → platform → feature, or mix Owner at any level. Drill-down to test items respects the Owner grouping.

## 3. Bugs fixed:

1. **Filters** — Filtering test items by a non-numeric `testCaseId` no longer returns HTTP 500 ([GitHub #2688](https://github.com/reportportal/reportportal/issues/2688)).

2. **SCIM** — Personal project is removed when the user is deprovisioned from Azure.

3. **Plugins** — Fixed plugin upload / enable / uninstall failures when using SeaweedFS storage (plugins with spaces in the plugin ID).

## 4. CVE addressed:

Security vulnerabilities fixed in **Service API**, **Authorization**, **Jobs**, **Index**, and **Migrations**.

## 5. Released services and plugins:

| Service Name | Repository | Tag |
| --- | --- | --- |
| API | reportportal/service-api | 5.15.3 |
| Authorization | reportportal/service-authorization | 5.15.1 |
| Jobs | reportportal/service-jobs | 5.15.2 |
| Index | reportportal/service-index | 5.15.1 |
| UI | reportportal/service-ui | 5.15.4 |
| Migrations | reportportal/migrations | 5.15.3 |
| Auto Analyzer | reportportal/service-auto-analyzer | 5.15.5 |

| Plugin Name | Repository | Tag |
| --- | --- | --- |
| Test Executions | Premium feature | 1.0.4 |

Rest of services and plugins have the same version as in 26.0.3:

| Plugin Name | Repository | Tag |
| --- | --- | --- |
| Jira Cloud | reportportal/plugin-bts-jira-cloud | 5.15.10 |
| Gitlab Plugin | reportportal/plugin-bts-gitlab | 5.13.2 |
| Import Plugin (RobotFramework) | reportportal/plugin-import-robot | 1.1.2 |
| Rally | reportportal/plugin-bts-rally | 5.13.1 |
| Monday | reportportal/plugin-bts-monday | 1.1.1 |
| Azure | reportportal/plugin-bts-azure | 5.13.2 |
| Jira | reportportal/plugin-bts-jira | 5.15.0 |
| Import Plugin (JUnit) | reportportal/plugin-import-robot | 1.1.0 |
| Telegram | reportportal/plugin-telegram | 1.1.0 |
| Slack | reportportal/plugin-slack | 1.1.2 |
| Sauce Labs | reportportal/plugin-saucelabs | 5.13.1 |
