---
sidebar_position: 32
sidebar_label: Version 5.0RC
---

# Version 5.0RC

This is the Beta release.

## Brand new features
-	[#275](https://github.com/reportportal/reportportal/issues/275) [#639](https://github.com/reportportal/reportportal/issues/639)  Nested steps
-	[#348](https://github.com/reportportal/reportportal/issues/348) Integration with SauceLabs
-	[#673](https://github.com/reportportal/reportportal/issues/673) [#486](https://github.com/reportportal/reportportal/issues/486) Pattern analysis
-	[#675](https://github.com/reportportal/reportportal/issues/675) Widget based on launch attributes (Cumulative trend chart)
-	15 sub-defects per defect type
-	[#41](https://github.com/reportportal/reportportal/issues/41) Sub-defects for “To investigate”
-	Replace tags with attributes (attributes = key:value)
-	[#680](https://github.com/reportportal/reportportal/issues/680) Implement a plugin system for integration with external systems (JIRA, Rally, SauceLabs, E-mail server)

## Reporting updates
-	Reduced restriction for synchronous reporting (beta)
-	Fully asynchronous reporting (beta)
-	[#275](https://github.com/reportportal/reportportal/issues/275) [#639](https://github.com/reportportal/reportportal/issues/639) Reporting with Nested steps  (see section Agents Updates)
-	[#526](https://github.com/reportportal/reportportal/issues/526) [#444](https://github.com/reportportal/reportportal/issues/444) Logs/attachments for launch level  (see section Agents Updates)
-	[#571](https://github.com/reportportal/reportportal/issues/571) [#451](https://github.com/reportportal/reportportal/issues/451)  Finish launch with populated status
-	[#670](https://github.com/reportportal/reportportal/issues/670) Interruption children “in progress” when a parent has been finished
-	[#671](https://github.com/reportportal/reportportal/issues/671) [#548](https://github.com/reportportal/reportportal/issues/548) Reporting test code reference (see section Agents Updates)
-	[#490](https://github.com/reportportal/reportportal/issues/490) Reporting test into finished Parent Item

## Small and nice updates
-	[#453](https://github.com/reportportal/reportportal/issues/453) Launch description and attributes on  the  suite view
-	[#606](https://github.com/reportportal/reportportal/issues/606) Markdown on the Log page
-	Possibility to configure integrations (Jira/Rally/ E-mail-server/ SauceLabs) per project and for the whole instance
-	[#618](https://github.com/reportportal/reportportal/issues/618) Increase limitation for step name length from 256 to 1024
-	[#457](https://github.com/reportportal/reportportal/issues/457) Increase password length
-	Auto launch deleting
-	Increase the number of launches for widgets


## Bug fixing
-	[#522](https://github.com/reportportal/reportportal/issues/522)  Defect comment is not updated during deleting
-	[#542](https://github.com/reportportal/reportportal/issues/542)  Issue with History line
-	[#542](https://github.com/reportportal/reportportal/issues/542) Unable to create a link to the result log page - page keeps reloading
-	[#563](https://github.com/reportportal/reportportal/issues/563) DOM XSS in rp.epam.com
-	[#564](https://github.com/reportportal/reportportal/issues/564) (BUG) There is no possibility to enter login/password for email settings with RU local

## Administrative page updates
-	New design
-	Possibility to filter projects and users
-	Plugin system
-	[#364](https://github.com/reportportal/reportportal/issues/364) Possibility to delete personal projects

## Agents update
-	Reporting with Nested steps (already updated TestNG)
-	Logs/attachments for launch level (already updated TestNG)
-	Reporting test code reference (already updated Java-based agents)

## Integration with Java Test Frameworks
- [Java TestNG](/log-data-in-reportportal/test-framework-integration/Java/TestNG)
- [JUnit](/log-data-in-reportportal/test-framework-integration/Java/JUnit4)
- [JUNit5](/log-data-in-reportportal/test-framework-integration/Java/JUnit5)
- [Cucumber](/log-data-in-reportportal/test-framework-integration/Java/Cucumber)
- [Jbehave](/log-data-in-reportportal/test-framework-integration/Java/JBehave)

## Dev guides
- [How to report results to ReportPortal](https://github.com/ihar-kahadouski/dev-guide/blob/master/reporting.md)
