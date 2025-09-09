---
sidebar_position: 34
sidebar_label: Version 4.2.0
description: ReportPortal v4.2.0 archived release notes with new features and enhanced test automation reporting tools capabilities.
---

# Version 4.2.0

## Features

* [#417](https://github.com/reportportal/reportportal/issues/417) Segregation of AA settings in a separate section
* [#417](https://github.com/reportportal/reportportal/issues/417) Added a possibility to configure ML;
* [#417](https://github.com/reportportal/reportportal/issues/417) Added a possibility to remove/generate ElasticSearch index (ML education);
* [#381](https://github.com/reportportal/reportportal/issues/381) Auto-Analysis: AA for the current launch  (analogue of our previous feature "Match issue);
* [#382](https://github.com/reportportal/reportportal/issues/382) Auto-Analysis: Possibility to chose which items should be auto-analysed in the launch ( With "To investigate", Already auto-analysed, analysed manually) ;
  *Documentation about auto-analysis is [here](/analysis/AutoAnalysisOfLaunches)*
* [#366](https://github.com/reportportal/reportportal/issues/366) Bulk operation for Unlink issues in BTS;

## Improvements
* [#103](https://github.com/reportportal/reportportal/issues/103) HAR viewer for attached .har files;
* [#326](https://github.com/reportportal/reportportal/issues/326) Clickable launch number on a history line;
* [#328](https://github.com/reportportal/reportportal/issues/328) Clickable History table;
* [#329](https://github.com/reportportal/reportportal/issues/329) Duration in format MM:SS
* [#384](https://github.com/reportportal/reportportal/issues/384) [#613](https://github.com/reportportal/service-ui/issues/613) Option for "Tag" filter - "Not contain"
* [#339](https://github.com/reportportal/reportportal/issues/339) OAuth App on GitHub requires the user scope instead of read:user
* "Load issue" has been renamed to "Link issue"
* Added infinite session in full-screen mode(for using ReportPortal dashboards on screens)

:::note
Before using the last function, please visit Profile page for the auto-generation of API token.
:::
## Bugs
* [#374](https://github.com/reportportal/reportportal/issues/374) Logs with level Error (40 000) and higher are considered in ElasticSearch
* [#376](https://github.com/reportportal/reportportal/issues/376) Unnecessary logging of all items in the run in case if run cannot be completed
* [#371](https://github.com/reportportal/reportportal/issues/371) Unable to connect ldap
* [#251](https://github.com/reportportal/reportportal/issues/251) Internal Server Error if no external system id is specified
* [#292](https://github.com/reportportal/reportportal/issues/292) Embedded cucumber log attachments are displayed incorrectly via reportportal
* [#380](https://github.com/reportportal/reportportal/issues/380)  Issue with retry: negative statistics [#380](https://github.com/reportportal/reportportal/issues/380)
* Fixed bug with disappearing numbers on mobile version of All launches

All issues and features are in milestone 4.2
