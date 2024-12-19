---
sidebar_position: 27
sidebar_label: Version 5.0.0
---

# Version 5.0.0

Finally we are glad to introduce a new release of ReportPortal.
In this version we have:

* Migrated to PostgreSQL
* Migrated to React JS
* Removed Consul
* Introduced RabbitMQ for asynchronous reporting\
* Introduced a plugin system
* Improved performance x3

## Installation details
- [with Docker](/installation-steps/DeployWithDocker)
- [with Kubernetes Helm chart](/installation-steps/DeployWithKubernetes) #362
- Manual set up [without Docker](/installation-steps/DeployWithoutDocker)
- [**v4 -> v5 data migration instruction**](https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v.5)
## Plugins
Jira, Rally, SauceLabs integration now will work through the plugin functionality. You need to download [latest JAR package](/plugins/ManagePlugins#upload-plugin) from our Bintray repository, and drag-n-drop it ReportPortal in Administrative section -> Plugins.

Available plugins to download:
- [Jira](/plugins/AtlassianJiraServer)
- [Rally](/plugins/Rally)
- [SauceLabs](/plugins/SauceLabs)
## Brand new features
-	[#275](https://github.com/reportportal/reportportal/issues/275) [#639](https://github.com/reportportal/reportportal/issues/639)  Nested steps
-	[#348](https://github.com/reportportal/reportportal/issues/348) Integration with SauceLabs
-	[#673](https://github.com/reportportal/reportportal/issues/673) [#486](https://github.com/reportportal/reportportal/issues/486) Pattern analysis
-	[#675](https://github.com/reportportal/reportportal/issues/675) Auto-updated wWidget based on launch attributes (Cumulative trend chart, Component Health Check)
-	15 sub-defects per defect type
-	[#41](https://github.com/reportportal/reportportal/issues/41) Sub-defects for “To investigate”
-	Replace tags with attributes (attributes = key:value)
-	[#680](https://github.com/reportportal/reportportal/issues/680) Implement a plugin system for integration with external systems (JIRA, Rally, SauceLabs, E-mail server)
-	A possibility to change status of test item
-	A view with a test item s list from different launch (Clickable area for Overall statistics, Component Health Check widget)

## Reporting updates
-	Reduced restriction for synchronous reporting
-	Fully asynchronous reporting  with `api/v2`
-	[#275](https://github.com/reportportal/reportportal/issues/275) [#639](https://github.com/reportportal/reportportal/issues/639) Reporting with Nested steps  (see section Agents Updates)
-	[#526](https://github.com/reportportal/reportportal/issues/526) [#444](https://github.com/reportportal/reportportal/issues/444) Logs/attachments for launch level  (see section Agents Updates)
-	[#571](https://github.com/reportportal/reportportal/issues/571) [#451](https://github.com/reportportal/reportportal/issues/451)  Finish launch with populated status
-	[#670](https://github.com/reportportal/reportportal/issues/670) Interruption children “in progress” when a parent has been finished
-	[#671](https://github.com/reportportal/reportportal/issues/671) [#548](https://github.com/reportportal/reportportal/issues/548) Reporting test code reference (see section Agents Updates)
-	[#490](https://github.com/reportportal/reportportal/issues/490) Reporting test into finished Parent Item
-	A possibility to report tests with Test Case ID (ID number from your test management system)

## Small and nice updates
-	[#453](https://github.com/reportportal/reportportal/issues/453)  Launch description and attributes on  the  suite view
-	[#606](https://github.com/reportportal/reportportal/issues/606) Markdown on the Log page (no need in !!!MARKDOWN MODE!!!)
-	Possibility to configure integrations (Jira/Rally/ E-mail-server/ SauceLabs) per project and for the whole instance
-	[#618](https://github.com/reportportal/reportportal/issues/618) Increase limitation for step name length from 256 to 1024
-	[#457](https://github.com/reportportal/reportportal/issues/457) Increase password length
-	Auto launch deleting
-	Increase the number of launches for widgets from 150 to 600


## Bug fixing
-	[#522](https://github.com/reportportal/reportportal/issues/522)  Defect comment is not updated during deleting
-	[#542](https://github.com/reportportal/reportportal/issues/542)  Issue with History line
-	[#542](https://github.com/reportportal/reportportal/issues/542) Unable to create a link to the result log page - page keeps reloading
-	[#563](https://github.com/reportportal/reportportal/issues/563) DOM XSS in rp.epam.com
-	[#564](https://github.com/reportportal/reportportal/issues/564) There is no possibility to enter login/password for email settings with RU local

## Administrative page updates
-	New design
-	Possibility to filter projects and users
-	Plugin system
-	[#364](https://github.com/reportportal/reportportal/issues/364)  Possibility to delete personal projects

## Agents update
-	Reporting with Nested steps (already updated TestNG)
-	Logs/attachments for launch level (already updated TestNG)
-	Reporting test code reference (already updated Java-based agents)
-	Reporting test case ID (already updated Java-based agents)

## Test frameworks integration
- The majority of test framework integrations (agents) of v4 supported by ReportPortal v5.0 backward compatibility. But do not use latest features, capabilities and performance upgrades (NestedSteps, Re-run, re-tries, etc.)
- Please take latest agents started with `5.*` in order to get full support of RPv5 features (work in progress, agents will be released soon)

## Dev guides
- [ReportPortal with APIv5](https://github.com/reportportal/documentation/blob/master/src/md/src/DevGuides/reporting.md)
- [API v5 vs v4 difference](https://github.com/reportportal/documentation/blob/master/src/md/src/DevGuides/api-differences.md)
- [Using Re-Run functionality for Launches](https://github.com/reportportal/documentation/blob/master/src/md/src/DevGuides/rerun.md)
- [Using Re-Run functionality for Launches](https://github.com/reportportal/documentation/blob/master/src/md/src/DevGuides/rerun.md)
- [Interaction with Analyzer](https://github.com/reportportal/documentation/blob/master/src/md/src/DevGuides/analyzer.md)
