---
sidebar_position: 3
description: Use .NET frameworks with ReportPortal for real-time test monitoring, trend tracking, failure management, result analysis, and test automation reports.
---

# .Net

By integrating .NET frameworks with ReportPortal, you can monitor test executions in real-time, identify trends, manage test failures, analyze test results and create test automation report.

ReportPortal supports seamless integration with the following dotnet testing test frameworks:

- [NUnit](/log-data-in-reportportal/test-framework-integration/Net/NUnit)<br />
One of the most popular unit testing frameworks in net projects, NUnit is highly customizable and supports a variety of test cases. With ReportPortal integration, NUnit test results can be visualized in real-time. This allows you to monitor the progress of your unit tests and quickly identify issues.

- [VSTest](/log-data-in-reportportal/test-framework-integration/Net/VSTest)<br />
The built-in test runner for Visual Studio, VSTest, is commonly used for running unit tests, integration tests, and functional tests. Integration VSTest with ReportPortal allows you to centralize test execution data, ensuring you have a complete view of your test suite.

- [SpecFlow](/log-data-in-reportportal/test-framework-integration/Net/SpecFlow)<br />
SpecFlow is a behavior-driven development (BDD) framework for .NET that enables collaboration between developers, testers, and business stakeholders by using Gherkin syntax for writing test scenarios. By integrating SpecFlow with ReportPortal, you can track and report on your BDD scenarios and feature files in real-time.

- [xUnit](/log-data-in-reportportal/test-framework-integration/Net/xUnit)<br />
A widely used unit testing framework in the .NET ecosystem, xUnit is favored for its flexibility and extensibility. With ReportPortal, you can capture real-time xUnit test execution results, visualize test trends, and quickly identify failure patterns, all within ReportPortal’s interactive test automation metrics dashboard.

- [Reqnroll](/log-data-in-reportportal/test-framework-integration/Net/Reqnroll)<br />
A relatively newer test automation framework for .NET, Reqnroll focuses on automation and reliability. ReportPortal integration with Reqnroll helps centralize test execution data, enabling comprehensive reporting and analysis for automation test cases, which improves test management and traceability.

If you need a sophisticated and full-featured integration with a test framework, you can configure it by your self.

Choose which combination of agent, client, and logger you need, and then follow the instructions provided for each agent.

All agents use [Rest api client](https://github.com/reportportal/client-net) or [Multi-threaded client](https://github.com/reportportal/commons-net).
