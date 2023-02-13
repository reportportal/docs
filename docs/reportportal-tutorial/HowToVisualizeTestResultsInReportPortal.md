---
sidebar_position: 9
sidebar_label: 8. How to visualize test results in ReportPortal
---

# 8. How to visualize test results in ReportPortal

So, you’ve separated your own test data from others. Now let’s visualize our test results. Navigate to the Dashboards tab and open the Demo Dashboard. Here you can see basic visualizations that will help you understand the state of the product.

You can also create new Dashboards. Since managers love charts, let’s practice building some self-updated charts! And let them see the actual statistics and value of your test automation along with you, at any given moment of the time, since dashboards and widgets will be updated in real-time.
The best widget to start from is [Investigated percentage of launches](/dashboards-and-widgets/InvestigatedPercentageOfLaunches) which shows how well the QA team analyzes failures.

<media-view src={require('./img/InvestigatedPercentage1.png')} alt="Create Investigated percentage of launches widget" />

<media-view src={require('./img/InvestigatedPercentage2.png')} alt="Investigated percentage of launches example" />

Once QA team categorized all issues, we can understand why automation tests fail. Create [Launch statistics chart](/dashboards-and-widgets/LaunchStatisticsChart) widget for that. It shows the reasons of failures, for example, broken environment, outdated tests, product bugs.

<media-view src={require('./img/LaunchStatisticsChart1.png')} alt="Create Launch statistics chart widget" />

<media-view src={require('./img/LaunchStatisticsChart2.png')} alt="Launch statistics chart example" />

The next step can be creating the [Overall statistics chart](/dashboards-and-widgets/OverallStatistics) to define the Total test cases number and how many of them are Passed/Failed/Skipped. This widget can be applied for all launches or for the latest launches only.

<media-view src={require('./img/OverallStatistics1.png')} alt="Create Overall statistics chart widget" />

<media-view src={require('./img/OverallStatistics2.png')} alt="Overall statistics chart example" />

We've reviewed basic widgets. How can I get some insights from launches? Our suggestion is to create a [Flaky test cases](/dashboards-and-widgets/FlakyTestCasesTableTop20) table to find tests that often change status from passed to failed in different launches. These unstable tests do not give any confidence. The widget allows you to identify them so that you can pay special attention to them and fix them faster.

<media-view src={require('./img/FlakyTests1.png')} alt="Create Flaky test cases widget" />

<media-view src={require('./img/FlakyTests2.png')} alt="Flaky test cases example" />

Next, you might want to understand how long it takes to pass each test case. [Most time-consuming test cases](/dashboards-and-widgets/MostTimeConsumingTestCasesWidgetTop20) widget helps to find the longest scenarios.

<media-view src={require('./img/MostTime1.png')} alt="Create Most time-consuming test cases widget" />

<media-view src={require('./img/MostTime2.png')} alt="Most time-consuming test cases example" />
