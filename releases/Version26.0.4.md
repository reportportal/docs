---
sidebar_position: 2
sidebar_label: Version 26.0.4
last_update:
  date: '2026-08-04'
---

# Version 26.0.4

![Component Update 26 0 4](https://github.com/user-attachments/assets/f7bf25f6-b4b3-4f43-a45d-be47f7cb1eee)


## 1. Premium updates for subscribers:

**[Test Executions](/test-executions/):**

* **Latest executions only**<br />
New toggle in All Filters: show every execution, or only the latest execution per test name. Export reflects the toggle; when the mode is on, the UI warns about view limitations (statistics, sorting, pagination, export).

* **Launch owner**<br />
Filter by launch owner in the side panel; optional **Launch owner** column (sortable) in Customize Columns; included in XLS/PDF exports.

* **Statistics display mode**<br />
Switch statistics between **Counts**, **Percentages**, and **Counts & Percentages** (default remains Counts).

* **Attribute presence column**<br />
Custom column that shows Yes/No for a chosen attribute (value only, or key + value). Included in exports when selected.

* **Test Case ID & UUID columns**<br />
Optional **Test Case ID** column from test item details. The former **Test ID** column is renamed to **UUID**. Both are available in Customize Columns and in exports when selected.

## 2. What's new:

**[Component Health Check widget](/dashboards-and-widgets/ComponentHealthCheck/): Owner grouping**  
The Component Health Check widget can now use **Owner** as a grouping level alongside attribute keys. You can build hierarchies such as Owner → platform → feature, or mix Owner at any level. Drill-down to test items respects the Owner grouping.

## 3. Bugs fixed:

1. **Filters**<br />
Filtering test items by a non-numeric `testCaseId` no longer returns HTTP 500 ([GitHub #2688](https://github.com/reportportal/reportportal/issues/2688)).

2. **SCIM**<br />
Personal project is removed when the user is deprovisioned from Azure.

3. **Plugins**<br />
Fixed plugin upload / enable / uninstall failures when using SeaweedFS storage (plugins with spaces in the plugin ID).

## 4. CVE addressed:

### Service-api
[CVE-2026-42584](https://github.com/advisories/GHSA-57rv-r2g8-2cj3), [CVE-2026-42585](https://github.com/advisories/GHSA-38f8-5428-x5cv), [CVE-2026-42581](https://github.com/advisories/GHSA-xxqh-mfjm-7mv9), [CVE-2026-42580](https://github.com/advisories/GHSA-m4cv-j2px-7723), [CVE-2026-41417](https://github.com/advisories/GHSA-v8h7-rr48-vmmv), [CVE-2026-42583](https://github.com/advisories/GHSA-mj4r-2hfc-f8p6),  
[CVE-2026-42587](https://github.com/advisories/GHSA-f6hv-jmp6-3vwv), [CVE-2026-41284](https://github.com/advisories/GHSA-gx5v-xp9w-j4cg), [CVE-2026-41293](https://github.com/advisories/GHSA-r29c-68gh-xp6x), [CVE-2026-43514](https://github.com/advisories/GHSA-9m89-8frq-c98c), [CVE-2026-43515](https://github.com/advisories/GHSA-5m62-pw8w-7w9f), [CVE-2026-43513](https://github.com/advisories/GHSA-5mp6-jrq3-r938),  
[CVE-2026-42498](https://github.com/advisories/GHSA-fv25-8xcx-gqjc), [CVE-2020-29582](https://github.com/advisories/GHSA-cqj8-47ch-rvvq), [CVE-2026-1225](https://github.com/advisories/GHSA-qqpg-mvqg-649v)

### Service-authorization
[CVE-2026-40971](https://github.com/advisories/GHSA-9vc8-qppq-wvxc), [CVE-2026-40974](https://github.com/advisories/GHSA-mqvw-jfmh-93qq), [CVE-2026-22746](https://github.com/advisories/GHSA-vxf7-qj7q-83fh), [CVE-2026-22751](https://github.com/advisories/GHSA-x2wq-9x2f-fhj7), [CVE-2026-22748](https://github.com/advisories/GHSA-cvc6-q2cp-2xhw), [CVE-2026-22752](https://github.com/advisories/GHSA-h9v6-4cv4-ghhq),  
[CVE-2026-22732](https://github.com/advisories/GHSA-mf92-479x-3373), [CVE-2026-5588](https://github.com/advisories/GHSA-wg6q-6289-32hp), [CVE-2026-0636](https://github.com/advisories/GHSA-c3fc-8qff-9hwx), [CVE-2026-22733](https://github.com/advisories/GHSA-mgvc-8q2h-5pgc), [CVE-2026-22731](https://github.com/advisories/GHSA-8hfc-fq58-r658), [CVE-2026-42584](https://github.com/advisories/GHSA-57rv-r2g8-2cj3),  
[CVE-2026-42585](https://github.com/advisories/GHSA-38f8-5428-x5cv), [CVE-2026-42581](https://github.com/advisories/GHSA-xxqh-mfjm-7mv9), [CVE-2026-42580](https://github.com/advisories/GHSA-m4cv-j2px-7723), [CVE-2026-41417](https://github.com/advisories/GHSA-v8h7-rr48-vmmv), [CVE-2026-33870](https://github.com/advisories/GHSA-pwqr-wmgm-9rr8), [CVE-2025-67735](https://github.com/advisories/GHSA-84h7-rjj3-6jx4),  
[CVE-2026-42583](https://github.com/advisories/GHSA-mj4r-2hfc-f8p6), [CVE-2026-42587](https://github.com/advisories/GHSA-f6hv-jmp6-3vwv), [CVE-2026-33871](https://github.com/advisories/GHSA-w9fj-cfpg-grvv), [CVE-2026-43512](https://github.com/advisories/GHSA-h6fc-48rj-7qqh), [CVE-2026-43513](https://github.com/advisories/GHSA-5mp6-jrq3-r938), [CVE-2026-43514](https://github.com/advisories/GHSA-9m89-8frq-c98c),  
[CVE-2026-43515](https://github.com/advisories/GHSA-5m62-pw8w-7w9f), [CVE-2025-66614](https://github.com/advisories/GHSA-fpj8-gq4v-p354), [CVE-2026-34483](https://github.com/advisories/GHSA-rv64-5gf8-9qq8), [CVE-2026-42498](https://github.com/advisories/GHSA-fv25-8xcx-gqjc), [CVE-2026-42198](https://github.com/advisories/GHSA-98qh-xjc8-98pq), [CVE-2026-22737](https://github.com/advisories/GHSA-4773-3jfm-qmx3),  
[CVE-2026-22741](https://github.com/advisories/GHSA-wg35-8jpf-2xv3), [CVE-2026-22740](https://github.com/advisories/GHSA-5843-p793-ghmm), [CVE-2026-22745](https://github.com/advisories/GHSA-6p4f-wcwh-5vvm), [CVE-2026-40973](https://github.com/advisories/GHSA-wwpq-f5c3-7hvx), [CVE-2026-40977](https://github.com/advisories/GHSA-5368-6h4h-gr29), [CVE-2026-1225](https://github.com/advisories/GHSA-qqpg-mvqg-649v)

### Service-jobs
[CVE-2026-42584](https://github.com/advisories/GHSA-57rv-r2g8-2cj3), [CVE-2026-42585](https://github.com/advisories/GHSA-38f8-5428-x5cv), [CVE-2026-42581](https://github.com/advisories/GHSA-xxqh-mfjm-7mv9), [CVE-2026-42580](https://github.com/advisories/GHSA-m4cv-j2px-7723), [CVE-2026-42583](https://github.com/advisories/GHSA-mj4r-2hfc-f8p6), [CVE-2026-42587](https://github.com/advisories/GHSA-f6hv-jmp6-3vwv),  
[CVE-2026-43512](https://github.com/advisories/GHSA-h6fc-48rj-7qqh), [CVE-2026-41284](https://github.com/advisories/GHSA-gx5v-xp9w-j4cg), [CVE-2026-41293](https://github.com/advisories/GHSA-r29c-68gh-xp6x), [CVE-2026-43515](https://github.com/advisories/GHSA-5m62-pw8w-7w9f), [CVE-2026-43513](https://github.com/advisories/GHSA-5mp6-jrq3-r938), [CVE-2026-43514](https://github.com/advisories/GHSA-9m89-8frq-c98c),  
[CVE-2026-42498](https://github.com/advisories/GHSA-fv25-8xcx-gqjc)

### Service-index
[CVE-2026-39821](https://github.com/advisories/GHSA-w2q5-6q6x-x959), [CVE-2026-33814](https://nvd.nist.gov/vuln/detail/CVE-2026-33814), [CVE-2025-69725](https://github.com/advisories/GHSA-mqqf-5wvp-8fh8)

### Migrations
[CVE-2026-33816](https://github.com/advisories/GHSA-9jj7-4m8r-rfcm), [CVE-2026-33815](https://github.com/advisories/GHSA-xgrm-4fwx-7qm8), [CVE-2026-41889](https://github.com/advisories/GHSA-j88v-2chj-qfwx), [CVE-2026-39821](https://github.com/advisories/GHSA-w2q5-6q6x-x959), [CVE-2026-33186](https://github.com/advisories/GHSA-p77j-4mvh-x3m3),  
[CVE-2026-33814](https://nvd.nist.gov/vuln/detail/CVE-2026-33814), [CVE-2025-22868](https://github.com/advisories/GHSA-6v2p-p543-phr9)

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
