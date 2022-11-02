# Tutorial: Learn how ReportPortal works

## Overview

The goal of this tutorial is to introduce all ReportPortal capabilities. Along the way, you'll learn how to use ReportPortal features and how to get the most out of them, as well as expert tips for using ReportPortal.

## How to explore ReportPortal without installation

One day you found ReportPortal which promises to simplify the analysis of failed tests and bring many more benefits.

“Really? I don’t believe it”, – your first reaction.

Do you just want to see how Reportportal works to make sure you need it? It is easy! Just visit our [Demo instance](https://demo.reportportal.io/ui/) and use default credentials for login:

```
login: default

password: 1q2w3e
```

Or you can use a button "Login with GitHub" to login.

## How to deploy ReportPortal instance

You tried the demo session. You are impressed with ReportPortal features / possibilities and decided to install a ReportPortal. Excellent! Visit our detailed documentation on how deploy ReportPortal:
* [with Kubernetes](https://reportportal.io/docs/Deploy-with-Kubernetes)
* [with Docker](https://reportportal.io/docs/Deploy-with-Docker)
* [with Docker on Windows](https://reportportal.io/docs/Deploy-with-Docker%3Edeploy-reportportal-with-docker-on-windows)

Please also check the [technical requirements for your system](https://reportportal.io/docs/Optimal-Performance-Hardware)

If you don’t want to deal with technical details, we will be happy to [assist you](https://reportportal.io/pricing).

## How to invite Team to ReportPortal

Finally, you logged into ReportPortal. And you see just empty tabs... Looks confusing for the first step. What can we do to get started?

Let’s start by inviting your team members. You can also do it as a final step, but it would be nice to investigate ReportPortal together.

In order to add other users to ReportPortal you can send invitations via email. To make sure that the Email service is configured, please follow the next steps (as an admin user): [E-mail server configuration](https://reportportal.io/docs/E-mail-server). Once emailing is configured, you can either [invite new users](https://reportportal.io/docs/Creation-of-project%3Einvite-a-user-to-a-project) or [create a new user](https://reportportal.io/docs/Creation-of-project%3Eadd-users-to-project) in the project.

After this step you will have emailing capabilities enabled, and several more users invited to ReportPortal.

[ ![ImageName](Images/userGuide/Tutorial/InviteUsers.png) ](Images/userGuide/Tutorial/InviteUsers.png)

## How to generate first data in ReportPortal

The main section for work with ReportPortal is Launches tab in the left menu. But Launches table is empty and it’s hard to understand what ReportPortal can do and what to do next.

[Generate demo data](https://reportportal.io/docs/Project-configuration%3Edemo-data) feature can help you with this, by generating a set of demo launches (test executions), filters and dashboards.

[ ![ImageName](Images/userGuide/Tutorial/GenerateFirstData.png) ](Images/userGuide/Tutorial/GenerateFirstData.png)

Once generated, you will see 5 launches (each Launch is equivalent to a testing session, or testing execution, or one Jenkins job). On the Filters tab you will find 1 filter. And Dashboards will have a Demo dashboard with visualizations/widgets built on top of the data from launches.

Let’s understand how ReportPortal works based on demo data, and later we can return to the upload of your actual data from your testing frameworks. You can [navigate to this section](https://reportportal.io/docs/Tutorial:-Learn-how>How-to-add) right now if you wish.

## How to triage test failures with ReportPortal

So far you have Demo launches in ReportPortal. You see the list of test executions on the Launches page with Total/Passed/Failed/Skipped numbers of test cases, and some of the issues are already sorted: Product Bug, Auto Bug, System Issue. But some issues required the attention of engineers, and they are marked with the “To Investigate” flag.

[ ![ImageName](Images/userGuide/Tutorial/TriageTestFailures.png) ](Images/userGuide/Tutorial/TriageTestFailures.png)

The next step and the main goal for QA engineers is to triage failed test cases. This means opening each test case, identifying the root of the failure reason, and categorizing/associating it with a particular defect type. We call this action [“Make decision”](https://reportportal.io/docs/Manual-Analysis%3E-make-decision-modal-redesign).

[ ![ImageName](Images/userGuide/Tutorial/MakeDecision.png) ](Images/userGuide/Tutorial/MakeDecision.png)

Based on test results, you can make decisions on further steps to improve your product. For example, you can arrange a call with a Development Team Leader to discuss bug fixing, if you have a lot of Product Bugs.

In case of a large number of System Issues, you can ask a DevOps engineer to fix the environment or to review the testing infrastructure. Thus, you won‘t waste your team's effort and time by receiving failed reports due to an inconsistent environment.

If you have a lot of Automation Bugs, put more effort into the test cases stabilization, and convert test automation (flaky) fails into valuable test cases, which will test your application for real.

Moreover, you can post and link issues in just a few clicks using Bug Tracking System plugins:

[Jira Server](https://reportportal.io/docs/Jira-Server)

[Jira Cloud](https://reportportal.io/docs/Jira-Cloud)

[Azure DevOps](https://reportportal.io/docs/Azure-DevOps-BTS)

[Rally](https://reportportal.io/docs/Rally)

[ ![ImageName](Images/userGuide/Tutorial/PostLink.png) ](Images/userGuide/Tutorial/PostLink.png)

## How to filter test executions in ReportPortal

To distinguish executions by type and focus only on required or related to your team today, you can use filters. Filters have “tab” capabilities, so you can easily navigate between different selections. You can filter by different criteria like launch name, description, number of failed or passed test cases, attributes, etc.

[ ![ImageName](Images/userGuide/Tutorial/FilterTestExecutions.png) ](Images/userGuide/Tutorial/FilterTestExecutions.png)

[ ![ImageName](Images/userGuide/Tutorial/Filters.png) ](Images/userGuide/Tutorial/Filters.png)

## How to add more attributes for filtering launches in ReportPortal

There is also a possibility to filter by attributes. You can find an example of setting attributes in your [profile](https://reportportal.io/docs/Edit-personal-information). You can include them in the parameters of automation, then additional attributes will appear under the Launch name, and you can filter test executions by these attributes as well.

[ ![ImageName](Images/userGuide/Tutorial/ProfileAttributes.png) ](Images/userGuide/Tutorial/ProfileAttributes.png)

[ ![ImageName](Images/userGuide/Tutorial/Attributes.png) ](Images/userGuide/Tutorial/Attributes.png)

## How to visualize test results in ReportPortal

So, you’ve separated your own test data from others. Now let’s visualize our test results. Navigate to the Dashboards tab and open the Demo Dashboard. Here you can see basic visualizations that will help you understand the state of the product.

You can also create new Dashboards. Since managers love charts, let’s practice building some self-updated charts! And let them see the actual statistics and value of your test automation along with you, at any given moment of the time, since dashboards and widgets will be updated in real-time.
The best widget to start from is [Investigated percentage of launches](https://reportportal.io/docs/Investigated-percentage-of) which shows how well the QA team analyzes failures.

[ ![ImageName](Images/userGuide/Tutorial/InvestigatedPercentage1.png) ](Images/userGuide/Tutorial/InvestigatedPercentage1.png)

[ ![ImageName](Images/userGuide/Tutorial/InvestigatedPercentage2.png) ](Images/userGuide/Tutorial/InvestigatedPercentage2.png)

Once QA team categorized all issues, we can understand why automation tests fail. Create [Launch statistics chart](https://reportportal.io/docs/Launch-statistics-chart) widget for that. It shows the reasons of failures, for example, broken environment, outdated tests, product bugs.

[ ![ImageName](Images/userGuide/Tutorial/LaunchStatisticsChart1.png) ](Images/userGuide/Tutorial/LaunchStatisticsChart1.png)

[ ![ImageName](Images/userGuide/Tutorial/LaunchStatisticsChart2.png) ](Images/userGuide/Tutorial/LaunchStatisticsChart2.png)

The next step can be creating the [Overall statistics chart](https://reportportal.io/docs/Overall-statistics) to define the Total test cases number and how many of them are Passed/Failed/Skipped. This widget can be applied for all launches or for the latest launches only.

[ ![ImageName](Images/userGuide/Tutorial/OverallStatistics1.png) ](Images/userGuide/Tutorial/OverallStatistics1.png)

[ ![ImageName](Images/userGuide/Tutorial/OverallStatistics2.png) ](Images/userGuide/Tutorial/OverallStatistics2.png)

We've reviewed basic widgets. How can I get some insights from launches? Our suggestion is to create a [Flaky test cases](https://reportportal.io/docs/Flaky-test-cases) table to find tests that often change status from passed to failed in different launches. These unstable tests do not give any confidence. The widget allows you to identify them so that you can pay special attention to them and fix them faster.

[ ![ImageName](Images/userGuide/Tutorial/FlakyTests1.png) ](Images/userGuide/Tutorial/FlakyTests1.png)

[ ![ImageName](Images/userGuide/Tutorial/FlakyTests2.png) ](Images/userGuide/Tutorial/FlakyTests2.png)

Next, you might want to understand how long it takes to pass each test case. [Most time-consuming test cases](https://reportportal.io/docs/Most-time-consuming-test) widget helps to find the longest scenarios.

[ ![ImageName](Images/userGuide/Tutorial/MostTime1.png) ](Images/userGuide/Tutorial/MostTime1.png)

[ ![ImageName](Images/userGuide/Tutorial/MostTime2.png) ](Images/userGuide/Tutorial/MostTime2.png)

## How to use ML power of ReportPortal

[ML suggestions](https://reportportal.io/docs/ML-Suggestions) feature prompts similar tests and defect types they have. In this way we don’t waste time re-reading the log but use ML hints instead.

ML suggestions analysis is running every time you enter "Make decision" editor. ML suggestions are executed for all test items no matter what defect type they currently have.

[ ![ImageName](Images/userGuide/Tutorial/MLSuggestions.png) ](Images/userGuide/Tutorial/MLSuggestions.png)

## How to use Pattern Analysis

[Pattern Analysis](https://reportportal.io/docs/Pattern-Analysis) feature helps to find static repeating patterns within automation. For example, you know that a 404 error in your application might be caused by a specific product bug. Create the rule with a problem phrase, launch a test run, and Pattern Analysis will find all failed items which have known patterns in error logs. This allows you to draw a quick conclusion.

[ ![ImageName](Images/userGuide/Tutorial/PatternAnalysis1.png) ](Images/userGuide/Tutorial/PatternAnalysis1.png)

[ ![ImageName](Images/userGuide/Tutorial/PatternAnalysis2.png) ](Images/userGuide/Tutorial/PatternAnalysis2.png)

[ ![ImageName](Images/userGuide/Tutorial/PatternAnalysis3.png) ](Images/userGuide/Tutorial/PatternAnalysis3.png)

[ ![ImageName](Images/userGuide/Tutorial/PatternAnalysis4.png) ](Images/userGuide/Tutorial/PatternAnalysis4.png)

[ ![ImageName](Images/userGuide/Tutorial/PatternAnalysis5.png) ](Images/userGuide/Tutorial/PatternAnalysis5.png)

[ ![ImageName](Images/userGuide/Tutorial/PatternAnalysis6.png) ](Images/userGuide/Tutorial/PatternAnalysis6.png)

## How to run Auto-Analysis in ReportPortal

ReportPortal has [Auto-Analysis](https://reportportal.io/docs/Auto-Analysis-of-launches) feature which makes it possible for the application to independently check and perform some of the routine tasks.

When you have test executions on the Launches page, you might need to analyze them automatically using ML. You can **switch ON Auto-Analysis in the settings** – then it will start as soon as any launch finishes. Auto-Analysis takes a part of your routine work and defines the reason for the test item failure based on the previous launches and sets: a defect type; a link to BTS (in case it exists); comment (in case it exists). As a result, you save time, and you can create new test cases instead of analyzing test results.

[ ![ImageName](Images/userGuide/Tutorial/AutoAnalysis1.png) ](Images/userGuide/Tutorial/AutoAnalysis1.png)

You can **run Auto-Analysis manually** as well.

[ ![ImageName](Images/userGuide/Tutorial/AutoAnalysis2.png) ](Images/userGuide/Tutorial/AutoAnalysis2.png)

[ ![ImageName](Images/userGuide/Tutorial/AutoAnalysis3.png) ](Images/userGuide/Tutorial/AutoAnalysis3.png)

When the test item is analyzed by ReportPortal, a label “AA” is set on the test item on a Step Level.

[ ![ImageName](Images/userGuide/Tutorial/AutoAnalysis4.png) ](Images/userGuide/Tutorial/AutoAnalysis4.png)

## How to see the historical trend of the causes of falls

And now let's build a more detailed “Launch statistics chart” widget with the historical changes in tests results. So, I can see how the results of my launches have changed over time.

**Use case**

Goal: Create a widget to show historical changes in Passed/Failed test cases in my API tests.

Follow the instructions below to create this [Launch statistics chart](https://reportportal.io/docs/Launch-statistics-chart).

[ ![ImageName](Images/userGuide/Tutorial/HistoricalTrends1.png) ](Images/userGuide/Tutorial/HistoricalTrends1.png)

Here you can see the historical distribution of your test results: there are Passed or Failed tests.

[ ![ImageName](Images/userGuide/Tutorial/HistoricalTrends2.png) ](Images/userGuide/Tutorial/HistoricalTrends2.png)

Instead of just Failed tests, you can see the dynamics of the total number of Product bugs, Automation bugs, System issues and No Defect.

[ ![ImageName](Images/userGuide/Tutorial/HistoricalTrends3.png) ](Images/userGuide/Tutorial/HistoricalTrends3.png)

In this way, you see the historical trend of the causes of falls.

[ ![ImageName](Images/userGuide/Tutorial/HistoricalTrends4.png) ](Images/userGuide/Tutorial/HistoricalTrends4.png)

## How to make automated test results part of my pipeline

ReportPortal supports Continuous Testing with built-in functionality – [Quality Gates](https://reportportal.io/docs/Quality-Gates) (enterprise feature). Quality Gate is a set of predefined criteria that should be met in order launch run to be considered as successful.

Firstly, navigate to Project settings and create a Quality Gate with the rules which will be applied to a specific launch that matches the conditions.

[ ![ImageName](Images/userGuide/Tutorial/QualityGate1.png) ](Images/userGuide/Tutorial/QualityGate1.png)

[ ![ImageName](Images/userGuide/Tutorial/QualityGate2.png) ](Images/userGuide/Tutorial/QualityGate2.png)

[ ![ImageName](Images/userGuide/Tutorial/QualityGate3.png) ](Images/userGuide/Tutorial/QualityGate3.png)

[ ![ImageName](Images/userGuide/Tutorial/QualityGate4.png) ](Images/userGuide/Tutorial/QualityGate4.png)

[ ![ImageName](Images/userGuide/Tutorial/QualityGate5.png) ](Images/userGuide/Tutorial/QualityGate5.png)

Finally, configure [integration with CI/CD](https://reportportal.io/docs/Integration-with-CI%2FCD) to send results to the pipeline.

## How to use nested steps and attributes in ReportPortal

Usually, you see the results of automation as a carpet of error logs, and only an automation engineer can understand what is happening inside. Adding nested steps ([Java](https://github.com/reportportal/client-java/wiki/Nested-steps), [Python](https://github.com/reportportal/client-Python/wiki/Nested-steps)) allows applying a one-time change in the test code to make a logical grouping of steps and make these error logs more readable for the whole team.

[ ![ImageName](Images/userGuide/Tutorial/NestedSteps.png) ](Images/userGuide/Tutorial/NestedSteps.png)

You can also use [attributes](https://github.com/reportportal/client-java/wiki/Test-item-attributes) on any level (launch/suite/test/step) to provide more contextual information.

[ ![ImageName](Images/userGuide/Tutorial/TestAttributes.png) ](Images/userGuide/Tutorial/TestAttributes.png)

## How to evaluate product health with ReportPortal

You can create a [“Component health check”](https://reportportal.io/docs/Component-health-check) widget based on attributes to understand which components do not work well, and which areas we need to pay more attention to.

**Use case 1**

**Goal:** define which features are affected by failed scenarios.

[ ![ImageName](Images/userGuide/Tutorial/UseCase1-1.png) ](Images/userGuide/Tutorial/UseCase1-1.png)

You can see scenarios on the first screenshot.

[ ![ImageName](Images/userGuide/Tutorial/UseCase1-2.png) ](Images/userGuide/Tutorial/UseCase1-2.png)

Select failed scenario to see which features were affected.

[ ![ImageName](Images/userGuide/Tutorial/UseCase1-3.png) ](Images/userGuide/Tutorial/UseCase1-3.png)

Finally, let’s see what is the priority of the failed test cases.

[ ![ImageName](Images/userGuide/Tutorial/UseCase1-4.png) ](Images/userGuide/Tutorial/UseCase1-4.png)

**Use case 2**

**Goal:** define the priority of failed test cases.

[ ![ImageName](Images/userGuide/Tutorial/UseCase2-1.png) ](Images/userGuide/Tutorial/UseCase2-1.png)

You can see that failures occurred in test cases with critical priority.

[ ![ImageName](Images/userGuide/Tutorial/UseCase2-2.png) ](Images/userGuide/Tutorial/UseCase2-2.png)

Select Critical to understand which operating system is having problems.

[ ![ImageName](Images/userGuide/Tutorial/UseCase2-3.png) ](Images/userGuide/Tutorial/UseCase2-3.png)

Next, select Android to see the list of features that need more attention.

[ ![ImageName](Images/userGuide/Tutorial/UseCase2-4.png) ](Images/userGuide/Tutorial/UseCase2-4.png)

**Use case 3**

**Goal:** define state of test cases on mobile devices.

[ ![ImageName](Images/userGuide/Tutorial/UseCase3-1.png) ](Images/userGuide/Tutorial/UseCase3-1.png)

On the screenshot below you can see that our trouble spot is Android.

[ ![ImageName](Images/userGuide/Tutorial/UseCase3-2.png) ](Images/userGuide/Tutorial/UseCase3-2.png)

You can go to the test cases level and see what problems they had.

[ ![ImageName](Images/userGuide/Tutorial/UseCase3-3.png) ](Images/userGuide/Tutorial/UseCase3-3.png)

## How to add test results to ReportPortal

You have checked demo test results, dashboards and widgets. And now you want to see your real data in ReportPortal.

ReportPortal is a system that integrates with your Test Framework, listens to events and visualizes test results. You cannot execute results right from ReportPortal, but you can [integrate ReportPortal with a Test Framework](https://reportportal.io/docs/Test-Framework-Integration) or [Implement own integration](https://reportportal.io/docs/Implement-own-integration).