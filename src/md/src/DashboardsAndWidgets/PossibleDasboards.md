## Possible Dasboards in ReportPortal

ReportPortal.io is a powerful tool that acquires a lot of analytics. With this manual, we are wanting to help you to configure simple and understandable reports for your teams.

Let's look on 3 possible dashboards which you can generate:
* Report for one Launch
* Report for Build (Version, Release, Sprint)
* Report for several streams

> **Precondition**

Let's assume that we have a Regression suite which contains:

- a suite with API test cases
- a suite with UI test cases
- a suite with integration test cases

The whole Regression is running against nightly build every day.
Different teams are responsible for different suites.

Which dashboard I can create in such conditions.


###  Report for one tests run

The goal for this report to show the status of the latest test run. For instance to see the latest results for launch with an API suite. 

[ ![ImageName](Images/userGuide/dashboards/Launch Report.png) ](Images/userGuide/dashboards/Launch Report.png)

You can configure:
**Passing rate widget** that shows a passing rate for a latest launch "API suite'

**Most popular pattern** track TOP-20 problems in the last and previous runs of this suite. 

> **Note:** For Most popular pattern table, you should you create a set of rules and run PAttern Analysis

With **Investigated percentage of launches** you can find out the status of failure investigations. You will be able to evaluate team performance and consistency of results.

**Failed cases trend chart** shows the history of failures in previous runs. 

**Duration chart** will be very helpful for those who track duration KPI and want to increase the speed of tests run. 

**Test growth trend chart** could show you to understand the speed of new test cases creation.

Also, you can create **"Most flaky test cases"** and **"Most failed test case"** and find the most unstable items which should be taken into account.

Let's assume that you have a lot of test results and a lot of teams.

You can create **Overall statistics** and **Launches table**, and now a team who is responsible for API suite has no need to go to the test results. It can use only this dashboard which gives enough information test failure management.



[ ![ImageName](Images/userGuide/dashboards/Launch Report.png) ](Images/userGuide/dashboards/Build Report.png)
[ ![ImageName](Images/userGuide/dashboards/Launch Report.png) ](Images/userGuide/dashboards/Project Report.png)


