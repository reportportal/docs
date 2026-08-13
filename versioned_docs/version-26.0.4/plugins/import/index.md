---
sidebar_label: Import
description: Import JUnit and RobotFramework results to centralize analysis in ReportPortal. Simplify reporting, reduce manual work, and keep your automation test report current.
---

# Import

Import plugins are designed to help you bring test results from testing frameworks into your reporting system quickly and easily. They support popular formats like **JUnit XML** and **Robot Framework** output files, making it simple to centralize your test data.

This feature can be useful if:

* there is no agent available for your test framework
* your CI/CD system cannot send requests to the ReportPortal instance for some reason

You can **import CI/CD results into ReportPortal** both manually or via API calls.

With the **JUnit XML** import plugin, you can import results from unit and integration tests written in Java or other languages that use the JUnit XML format. The plugin reads the test report files and saves it as a launch in ReportPortal.

The **RobotFramework** import plugin works in a similar way. You can upload RobotFramework output files, and the plugin will automatically extract the test results and make them available for reporting and analysis.

These import plugins save time, reduce manual effort, and make it easier to track results from different sources in one place. Whether you’re using JUnit XML, RobotFramework, or both, the import plugins help you stay organized and keep your test data up to date.

import DocCardList from '@theme/DocCardList';

<DocCardList />
