---
sidebar_position: 24
sidebar_label: Version 5.1.0
---

# Version 5.1.0

>**Important**: We are constantly improving ReportPortal. And in version 5.1 we have changed a way we encrypt your personal data. Please be aware, that for successful interaction with version 5.1 you need to change a password at the first login.
> **Please read instructions below**.
>
> Thank you for being with us, ReportPortal team

## Brand new features
- [#893](https://github.com/reportportal/reportportal/issues/893) Improved ML in Аuto-Autoanalysis 2.0
- [#894](https://github.com/reportportal/reportportal/issues/894) History line improvements
- [#896](https://github.com/reportportal/reportportal/issues/896) History table for the whole Launch/Filter
- [#899](https://github.com/reportportal/reportportal/issues/899) Possibility to compare results from: Launch/Launch; Launch/Filter; Filter/Filter
- Java 11 introduced

## Reporting updates
- [#895](https://github.com/reportportal/reportportal/issues/895) Explicit declaration of Test Case ID: Possibility to report execution with Test Case ID from your Test Case Management system

## Small and nice updates
- [#586](https://github.com/reportportal/reportportal/issues/586) Clickable area for widgets:
  *  Overall statistics bar view
  *  Failed case trend chart
  *  Non-passed test cases trend chart
  *  Passing rate per filter
  *  Cumulative trend chart
  *  Most popular pattern table (TOP-20)
- Added a launch UUID in the modal "Edit Launch"
- Added a possibility to resize the Cumulative trend chart widget.
- Refactored auto-complete component
- Introduced Java 11 for API
- [#744](https://github.com/reportportal/reportportal/issues/744) Migrated to Traefik 2

## Bug fixing

- Added a considering of nested steps logs in an auto-analysis procedure
- [#741](https://github.com/reportportal/reportportal/issues/741) Added a possibility to collapse/expand additional launch info on Launches Table widget.
- [#870](https://github.com/reportportal/reportportal/issues/870)  Fixed a possibility to send link to BTS on an item finish
- [#447](https://github.com/reportportal/reportportal/issues/447) Fixed launch inactivity scripts
- Fixed launch/attachments/screenshots deleting scripts
- [#746](https://github.com/reportportal/reportportal/issues/746) Backward compatibilities for !!!MARKDOWN!!! in logs
- [#768](https://github.com/reportportal/reportportal/issues/768) Added markdown support for video links in logs
- [#740](https://github.com/reportportal/reportportal/issues/740) Fixed a possibility to view a full launch name in widgets tooltips
- [#749](https://github.com/reportportal/reportportal/issues/749) Fixed a scroll in full-screen mode for widgets

## Known issues
LDAP returns Code 500 when the integration configuration is not correct

## How to migrate to the latest version 5.1
Details can be found [here](https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v.5.1)
