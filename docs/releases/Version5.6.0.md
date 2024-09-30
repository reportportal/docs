---
sidebar_position: 13
sidebar_label: Version 5.6.0
---

# Version 5.6.0

[Migration guide](https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v.5.6)

## New features
- [#1094](https://github.com/reportportal/reportportal/issues/1094) Filter by Attributes

## Small and nice update
- Change status from the Log View
- Add Test Case ID to the log view

## Analyzer updates
- Cleaning Job for Elastic Search
- "All big log messages should match
- Add the to investigate group except To Investigate itself to be used in Auto-analysis and suggestions
- Add a field with test item name while indexing logs/auto-analysis/suggestions
- Add configuration to check strictly all log message while analysis
- When demo data is generated, the user should click "generating index" for analyzer himself
- Adding launch name/message info into custom retrained models
- Add checking by Exceptions and releasing the min should match for search/cluster operations to 95%
- Add checking by Exceptions and releasing the min should match for search/cluster operations to 95%
- Adding launch name/message info into custom retrained models
- Changed the logic for No defect and custom TI defect types for auto-analysis
- Create a similar for searching by similar TI items as for AA logic for treating short/long messages
- The users complained that some older test items still can be used by Auto-analysis, so I decided to add discounting for the ES scores in case they are farther from the start_time of the test item.

## Bugfixing
- Performance fixes
- Fixed issue with deadlocks by retries refactoring
- [#1474](https://github.com/reportportal/reportportal/issues/1474)  SAML. Add "callbackUrl" field to SAML configuration
- Failed cases trend chart. Send only "statistics$executions$failed" field in "contentFields"
- [#1502](https://github.com/reportportal/reportportal/issues/1502) Email configurations. Change field "Username" to "Sender email"

## What's Changed
* Release 5.6.0 by @Cyberglamdring [in #1583](https://github.com/reportportal/reportportal/pull/1583)
* [Full Changelog](https://github.com/reportportal/reportportal/compare/5.5.0...5.6.0)
