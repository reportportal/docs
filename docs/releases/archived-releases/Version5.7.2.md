---
sidebar_position: 5
sidebar_label: Version 5.7.2
description: "Discover ReportPortal 5.7.2: introduces dual logging to ElasticSearch, new Jira and Azure DevOps plugins, enhanced UI, and performance improvements."
---

# Version 5.7.2

## What's Changed:

ReportPortal Release 5.7.2 aimed on enabling log messages to be saved into ElasticSearch
- We now save logs into 2 sources: DB and Elastic (via DataStreams)

## New features
- A possibility to see all unique errors for a launch (click the launch name and see tab Unique Errors on the top
- [#1268](https://github.com/reportportal/reportportal/issues/1268). Support of Azure SAML authorization

## New plugins
- [Jira Cloud](https://github.com/reportportal/plugin-bts-jira-cloud/packages/1366483) plugin for posting new bugs into Jira Cloud
- [Azure DevOps](https://github.com/reportportal/plugin-bts-azure/packages/1366495) plugin for posting new bugs into ADO Bug tracking

## Small but nice updates
- New design for Make decision modal (previously Edit defect modal)
- Help & Support functionality for newly deployed instances
- Additional configuration for Similar “To Investigate” functionality (“Min Should Match”)
- Default State for Auto-Analysis is ON

## Technical updates
- Performance improvements (powerful as a hell)
- Functionality to configure virtual hosts in RabbitMQ for Analyzer

## Logs into Elastic
With the version 5.7.2 we bring a fundamental change for ReportPortal to store and manage test logs inside Elastic (via Data Streams).
The transition of full logging to elastic will consist of 2 steps:
- version 5.7.2 introduces double logging: both in PG Database and Elastic in parallel
- version 5.8 switch off database logging for logs and will store logs only inside Elastic

The release timeline between 5.7.2 and 5.8 will be about 3 months.
this period will be enough for the vast of project to generate enough logs history inside elastic, and by switching to version 5.8 after 5.7.2 will eliminate the need for the data migration efforts.
Which means, that if you update to version 5.7.2, use it for 3-4 months before version 5.8, and then update to version 5.8 once it available, there will no  any effort required to do the migration. Since all logs will already be stored in Elastic.
Along with version 5.8 we will distribute migration script and instructions for data migration. So that you can easily migration from early 5.x version.
The reason of the switch and performance results will be a subject of separate article.
In a few words: it reduces the DB footprint in almost x10 times, improves speed of logging, and minimizes computation power to clean-up data. And  also brings Full text search capabilities.

## New Contributors
* @raikbitters made their first contribution in [#1749](https://github.com/reportportal/reportportal/pull/1749)
* @tsteenbe made their first contribution in [#1757](https://github.com/reportportal/reportportal/pull/1757)

**Full Changelog**: [5.7.1...5.7.2](https://github.com/reportportal/reportportal/compare/5.7.1...5.7.2)

## Bugfixing:
Bug connected to filtering by attributes with "any" and "without any" conditions was fixed
