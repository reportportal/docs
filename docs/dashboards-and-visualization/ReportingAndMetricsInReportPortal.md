---
sidebar_position: 2
sidebar_label: Reporting and metrics in ReportPortal
description: With ReportPortal, you can boost your software quality by obtaining detailed test automation reports to monitor test execution, identify issues, and analyze trends for continuous enhancement.
---

# Reporting and metrics in ReportPortal

## Test automation reports in ReportPortal

With ReportPortal, you can boost your software quality by obtaining detailed
test automation reports to monitor test execution, identify issues, and analyze trends for continuous enhancement through collaborative dashboards in test reporting.

| Report                        | Description | Widget |
|-------------------------------| --|-------------|
| **Summary report**            | An overview of test execution: tests run, passed, and failed. | [Overall statistics](../OverallStatistics) <br/> <br/> [Launches table](../LaunchesTable) <br/> <br/> [Passing rate summary](../PassingRateSummary) |
| **Detailed test case report** | Specific details about individual test cases: status (Passed/Failed), execution time, and associated issues/errors. | [Most failed test-cases table (TOP-50)](../MostFailedTestCasesTableTop50) <br/> <br/> [Flaky test cases table (TOP-50)](../FlakyTestCasesTableTop50) <br/> <br/> [Unique bugs table](../UniqueBugsTable) |
| **Trend analysis report**     | The trends in test results over time. | [Most failed test-cases table (TOP-50)](../MostFailedTestCasesTableTop50) <br/> <br/> [Flaky test cases table (TOP-50)](../FlakyTestCasesTableTop50) <br/> <br/> [Failed cases trend chart](../FailedCasesTrendChart)<br/> <br/> [Passing rate summary](../PassingRateSummary) |
| **Failure analysis report**   | The failed test cases and their details. | [Most failed test-cases table (TOP-50)](../MostFailedTestCasesTableTop50) <br/> <br/> [Flaky test cases table (TOP-50)](../FlakyTestCasesTableTop50) <br/> <br/> [Failed cases trend chart](../FailedCasesTrendChart)<br/> <br/> [Most popular pattern table (TOP-20)](../MostPopularPatternTableTop20) |
| **Execution history report**  | The historical data of test runs. | [Passing rate summary](../PassingRateSummary) <br/> <br/> [Launches duration chart](../LaunchesDurationChart) <br/> <br/> [Investigated percentage of launches](../InvestigatedPercentageOfLaunches) <br/> <br/> [Test-cases growth trend chart](../TestCasesGrowthTrendChart) |

## QA and test automation metrics in ReportPortal

ReportPortal provides various metrics for improving quality assurance and the overall effectiveness of the testing process.

| Metric                            | Description | Widget |
|-----------------------------------| --|------------|
| **Passed/Failed rates**               | The percentage of test cases that are passing or failing during test execution. | [Passing rate per launch](../PassingRatePerLaunch) <br/> <br/> [Passing rate summary](../PassingRateSummary) <br/> <br/> [Launch statistics chart](../LaunchStatisticsChart) <br/> <br/> [Overall statistics](../OverallStatistics) <br/> <br/> [Launch execution and issue statistic](../LaunchExecutionAndIssueStatistic) |
| **Execution time**                | The time it takes to execute test suites or individual test cases. | [Launches duration chart](../LaunchesDurationChart) <br/> <br/> [Most time-consuming test cases widget (TOP-20)](../MostTimeConsumingTestCasesWidgetTop20) |
| **Defect density**                | The number of defects found per unit of code or test case provides a quantitative perspective on the software quality of a given system under test. | [Component health check](../ComponentHealthCheck) |
| **Test case success rate**        | The percentage of successful test cases out of the total executed highlights the reliability of the test. | [Passing rate per launch](../PassingRatePerLaunch) <br/> <br/> [Passing rate summary](../PassingRateSummary) <br/> <br/> [Launch statistics chart](../LaunchStatisticsChart) <br/> <br/> [Overall statistics](../OverallStatistics) <br/> <br/> [Launch execution and issue statistic](../LaunchExecutionAndIssueStatistic) |
| **Regression test effectiveness** | The capability of regression tests to detect new defects or issues. | [Overall statistics](../OverallStatistics), with special defect type for issues found in regression.  <br/> <br/> [Unique bugs table](../UniqueBugsTable), with special defect type for issues found in regression. |
| **Error/failure distribution**    | The frequency and distribution of test failures across defined components or modules within a given system under test. | [Component health check](../ComponentHealthCheck) |
