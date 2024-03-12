---
sidebar_position: 1
sidebar_label: Version 24.1
---

# Version 24.1

## 1. What's Changed:

- **New feature – Immediate Auto-Analysis:**<br/>
  This feature employs Auto-Analysis based on specific test cases immediately after their completion for proactive issue investigation.<br/>
  Learn more about [Immediate Auto-Analysis](/analysis/ImmediateAutoAnalysis).

- **New feature – Immediate Pattern-Analysis:**  <br/>
  No more need to wait for the launch finish.<br/>
[Initiate Pattern Analysis immediately](/analysis/ImmediatePatternAnalysis) after completion of specific test cases.

- **New Integration – Gitlab Plugin:**<br/>
  [New BTS plugin](/plugins/GitLabBTS) expanding ReportPortal BTS integration options for streamlined bugs reporting, issues.

- **New feature – Retention Policy for Monitoring events**<br/>
  Set a custom retention period for monitoring events via environmental variables to tailor data management to your organizational needs.

- **Settings redesign**<br/>
  Project Settings were redesigned completely, setting the stage for a whole new ReportPortal experience.<br/>
  For an improved user experience, please ensure you are using the latest versions of ReportPortal plugins.

- **New language introduced**<br/>
  Users can now utilize the interface in Chinese and are encouraged to contribute to further translations or improve the existing ones.

## 2. Small Updates:

- Change in Base for AA:<br/>
  [New options](/analysis/AutoAnalysisOfLaunches#base-for-analysis) for Base for Auto Analysis have been introduced.

- Enhanced Monitoring:<br/>
  Improved Filtering on Monitoring page and expanded list of events being tracked


## 3. Technical Improvements:

- ElasticSearch has been replaced with OpenSearch.  <br/>
  Following ElasticSearch's re-licensing in version 7.11, we've transitioned to OpenSearch to uphold our focus on open-source compatibility.

:::important
Migration from ElasticSearch to OpenSearch is irrevocable.
:::

:::note
Some of the environmental variables names are still ElasticSearch specific, but it will be corrected in the future versions. `
:::

- Service-api migration to Java 21

- Introduced JCloud provider for local file access, replacing the existing filesystem implementation.

- Added support for providing a custom salt key using secret management tool to enhance security and flexibility.

- A new engine for the frontend part of the plugins was created based on Webpack Module Federation to simplify the process of plugins development.


## 4. Enhancements Based on Community Feedback:

- [#3132](https://github.com/reportportal/service-ui/issues/3132) Component Health Check widget improvements.

- [#308](https://github.com/reportportal/reportportal/issues/308) Ability to specify filter parameters in the URL has been added.

- [#2148](https://github.com/reportportal/reportportal/issues/2148) Duplicated error logs issue solved.

- [#2159](https://github.com/reportportal/reportportal/issues/2159) Option to either include skipped test into Flaky test cases table (TOP 50) widget added.

- [#520,](https://github.com/reportportal/reportportal/issues/520) [#2006](https://github.com/reportportal/reportportal/issues/2006) Launch import improvements.

- [#64,](https://github.com/reportportal/service-jobs/issues/64) [#315](https://github.com/reportportal/kubernetes/issues/315) Service-jobs issue fix.

- [#1841,](https://github.com/reportportal/service-api/pull/1841) [#1999](https://github.com/reportportal/reportportal/issues/1999) PR was rejected as it contained breaking changes. Instead new converter for openmetrics was added to configuration.

## 5. CVE addressed:
[CVE-2023-44487](https://github.com/advisories/GHSA-qppj-fm5r-hxr3), [CVE-2023-3978](https://github.com/advisories/GHSA-2wrh-6pvc-2jm9), [CVE-2023-1436](https://github.com/advisories/GHSA-q6g2-g7f3-rr83), [CVE-2022-1471](https://github.com/advisories/GHSA-mjmj-j48q-9wg2), [CVE-2022-42003](https://github.com/advisories/GHSA-jjjh-jjxp-wpff), [CVE-2020-36518](https://github.com/advisories/GHSA-57j2-w4cx-62h2), [CVE-2022-45688](https://github.com/advisories/GHSA-3vqj-43w4-2q58), [CVE-2023-5072](https://github.com/advisories/GHSA-4jq9-2xhw-jpx7), [CVE-2022-22965](https://github.com/advisories/GHSA-36p3-wjmg-h94x), [CVE-2023-20863](https://github.com/advisories/GHSA-wxqc-pxw9-g2p8), [CVE-2022-2297](https://github.com/advisories/GHSA-5rjr-j9m9-qpm9), [CVE-2022-1471](https://github.com/advisories/GHSA-mjmj-j48q-9wg2)

## 6. Released versions
|Service Name|Repository|Tag|
|---|---| --- |
|Index|reportportal/service-index|5.11.0|
|Authorization|reportportal/service-authorization|5.11.0|
|UI|reportportal/service-ui|5.11.0|
|API|reportportal/service-api|5.11.0|
|Jobs|reportportal/service-jobs|5.11.0|
|Migrations|reportportal/migrations|5.11.0|
|Auto Analyzer|reportportal/service-auto-analyzer|5.11.0|
|Metrics Gatherer|reportportal/service-metrics-gatherer|5.11.0|

## 7. Link to Migration Guide:
https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v24.1
