---
sidebar_position: 3
sidebar_label: Version 25.1.6
description: Explore ReportPortal Version 25.1.6 release notes: PostgreSQL 17 upgrade, enhanced launch exports, improved RobotFramework imports, and analyzer updates.
---

# Version 25.1.6

:::important
**Action Required - Upgrade PostgreSQL:**<br />
We have upgraded PostgreSQL to version 17.
- Create a full database dump from the current PostgreSQL instance.
- Restore the dump into a PostgreSQL 17 instance.
- Follow the official [migration guide](https://github.com/reportportal/reportportal/wiki/Upgrading-PostgreSQL-for-ReportPortal).
:::


## 1. What's changed:
**1. [Launch export improvements](/work-with-reports/OperationsUnderLaunches#export-launches-reports):**<br />
We've improved the launch report export functionality with new attachment support, better user experience, and enhanced file formatting. These changes make it easier to share comprehensive test reports with stakeholders while providing better visibility into the export process.

- **Export reports with attachments:**<br />
  Added the ability to include attachments when exporting launch reports
- **New export modal:**<br />
  Redesigned export interface with clear options for file format selection and attachment inclusion
- **Structured archive format:**<br />
  When attachments are included, reports are exported as ZIP files with organized folder structure matching the test hierarchy (Launch → Suite → Test → Step levels)
- **Flexible export formats:**<br />
  Choose from PDF, XLS, or HTML formats, with or without attachments
- **Real-time export progress notifications:**<br />
  Added notification banner and system notifications showing export generation status
- **Continuous layout:**<br />
  Removed page breaks from XLS and HTML export templates for better readability

**2. [Important Launches feature management](/admin-panel/ServerSettings#features):**<br />
Administrators can now control the Important Launches functionality at the server level through a new toggle in Server Settings. When disabled, all launches are converted to regular launches and the 'Mark as Important' option is removed from launch menus across all projects.

**3. RobotFramework import improvements:**
- Enhanced RobotFramework import to properly display HTML screenshots with security restrictions on file paths and attachment types.
- Added support for RobotFramework V7 XML reports with schema version 5, including ISO-8601 timestamps, start/elapsed time format, and updated attribute names (library → owner, timestamp → time).

**4. Analyzer improvements:**<br />
Added:<br />
- Ability to use different ML models for Suggestions
- Ability to switch ML model for Suggestions with ML_MODEL_FOR_SUGGESTIONS environment variable

Changed:<br />
- Handling of AMQP messages now moved to separate processes: "train" (only for model training) and "main" (for all other messages)
- Handling of AMQP messages now performed in two separate queues: train and all
- Handling of AMQP messages now performed in in strict order
- Analyzer exchange type is changed to fanout
- Many logging messages were refactored and improved
- Choosing custom/global ML model now performed by Launch ID hash only

Fixed:<br />
- 11 Sonar issues

Removed:<br />
- analyzer-train service, as it is no longer needed


## 2. Bugs fixed:
1. Fixed widget navigation issue where clicking on test items in the "Most failed test-cases table (TOP-50)" widget incorrectly redirected to the latest launch instead of the specific launch where the test item was last executed.
2. Fixed screenshot display issue for XML reports in RobotFramework import plugin.
3. Fixed Slack and Telegram notification toggle setting persistence issue where the enabled state would not save properly and would revert to disabled after page reload or navigation.
4. Fixed project assignment dialog scrolling issue where the "Project" field and "Role" dropdown were not visible when adding new projects to users with more than 5 existing project assignments.
6. Fixed missing "deleted_user" label issue where launches owned by deleted users would show no owner information instead of displaying the appropriate "deleted_user" label.
7.  Fixed password validation issue where special symbols like underscore (_) and colon (:) were incorrectly rejected during user creation and password changes, despite being valid special characters.
8. Fixed unnecessary error display when importing empty (0 MB) RobotFramework XML files that would import successfully but show false error messages.
9. Fixed missing success notification when updating dashboard names.
10. Updated duplicate filter naming pattern to use consistent "_copy" and "_copy_N" suffixes, handling filters that already contain these suffixes in their names.
11. Fixed Safari browser error message when copying dashboard configuration to clipboard, now shows success notification instead of false permission error.
12. Added UI validation to prevent creating dashboards with duplicate names.
13. Fixed RobotFramework plugin date parsing error that prevented successful import of XML files.

## 3. Enhancements Based on Community Feedback
[#2326](https://github.com/reportportal/service-api/issues/2326) Fixed Prometheus metrics export functionality restoring the /api/prometheus endpoint.

## 4. Released services and plugins:
|Service Name|Repository|Tag|
|---|---| --- |
|Api|reportportal/service-api|5.14.2|
|UI|reportportal/service-ui|5.14.3|
|Migrations|reportportal/migrations|5.14.1|
|Authorization|reportportal/service-authorization|5.14.4|
|Auto Analyzer|reportportal/service-auto-analyzer|5.14.2|

|Plugin Name|Repository|Tag|
|---|---| --- |
|Azure|reportportal/plugin-bts-azure|5.13.1|
|Gitlab Plugin|reportportal/plugin-bts-gitlab|5.13.1|
|Sauce Labs|reportportal/plugin-saucelabs|5.13.1|
|Slack|reportportal/plugin-slack|1.1.1|
|Import Plugin (RobotFramework)|reportportal/plugin-import-robot|1.1.1|

**Rest of services and plugins have the same version as before:**
|Service Name|Repository|Tag|
|---|---| --- |
|Index|reportportal/service-index|5.14.0|
|Jobs|reportportal/service-jobs|5.14.0|


|Plugin Name|Repository|Tag|
|---|---| --- |
|Import Plugin (JUnit)|reportportal/plugin-import-robot|1.1.0|
|Monday|reportportal/plugin-bts-monday|1.1.0|
|Rally|reportportal/plugin-bts-rally|5.13.0|
|Jira|reportportal/plugin-bts-jira|5.13.0|
|Jira Cloud|reportportal/plugin-bts-jira-cloud|5.13.3|
|Telegram|reportportal/plugin-telegram|1.1.0|
