---
sidebar_position: 2
sidebar_label: Getting Started with ReportPortal
---

# Getting Started with ReportPortal

You have decided to get started with the ReportPortal. So what are your next steps?

This article helps you to navigate through the report portal documentation as a real guru and discover all capabilities of this tool.

So choose what you want to do firstly and get started with ReportPortal.

## A user without ReportPortal instance

### I want to explore ReportPortal without any installation steps

It is easy! Just visit our Demo instance and use for login default credentials:

```html
login: default
password: 1q2w3e
```
Or you can use a button "Login with GitHub" for login.

### I want to deploy my ReportPortal instance 

Visit our detailed documentation on how deploy ReportPortal:
* [with Kubernetes](/installation-steps/DeployReportPortalKubernetes)
* [with Docker on Linux/Mac](/installation-steps/DeployReportPortalDockerLinuxMac)
* [with Docker on Windows](/installation-steps/DeployWithDockerWindows)

Please also check the [technical requirements for your system](/installation-steps/OptimalPerformanceHardwareSetup)

## Novice user in ReportPortal

You have deployed ReportPortal and login as a 'superadmin' (or 'default') user. You can see an empty 'superadmin_personal' project... And magic did not happen. 

"Hmmm... What should I do the next?" - you may think.
We will help you to find out how everything should work.

### I want just look around and see how it works without any additional steps

You can generate demo data that could demonstrate how the launches, filter, and dashboard will look.
[How to generate demo data](/report-poral-configuration/ProjectConfiguration#demo-data)

###  I want to try to add test result to ReportPortal  

You have checked demo test results, dashboards and widgets, but it is boring. And you want to see your real data in ReportPortal.
We've got your point.
Please check a section with [Reporting details](/category/log-data-in-reportportal)

### I want to make use of ReportPortal

So far you have your launches successfully sent to ReportPortal. Next step is to triage failures to understand actual state of your product.

Let’s imagine that your project has 3 types of test suites:

* **Daily Smoke Suite** is running on a daily basis,
* **Weekly Full Regression Suite** is running every weekend,
* **API Tests** are running after each commit.

1) In the ReportPortal on “Launches” Tab you will see a list of corresponding launches. Each launch can be associated with a CI job or a testing session. Every launch will show you the statistics of Total, Passed, Failed or Skipped test cases. All failed (and skipped) test cases are initially marked with **“To investigate”** flag. Such test cases require the attention of an engineer in order to investigate the root cause of the failure.

[ ![ImageName](img/getting-started-novice1.png) ](img/getting-started-novice1.png)

2) To distinguish executions by type and focus only on required or related to your team today, you can use filters. Filters have “tab” capabilities, so you can easily navigate between different selections. You can filter by launch name, description, a number of failed or passed test cases and attributes.

[ ![ImageName](img/getting-started-novice2.png) ](img/getting-started-novice2.png)

3) The next step and the main goal for engineers is to Triage failed test cases. This means to open each test case, identify the root of the failure reason, and categorize/associate it with a particular defect type. We call this action [“Make decision”](/analysis/ManualAnalysis). There are 5 main groups of issues in ReportPortal: Product Bug, Automation Issue, System Issue, No Defect and To Investigate category. Please follow the [“Make decision”](/analysis/ManualAnalysis) instructions from here to get more details about it.

4) Once your team fully reviews the failed results and categorizes them accordingly, you will have a list of launches with more detailed information about the actual reasons of failure. This improves the visibility of both test automation status and the state of your software under test. The actual evidence of product issues vs automation issues gives you a clear picture of product stability, test automation validity or testing environment issues. The value of your test automation is the number of test cases that failed because of product bugs versus the number of test cases that failed because of other reasons.

[ ![ImageName](img/getting-started-novice4.png) ](img/getting-started-novice4.png)

5) Now, for the next step, let’s visualize your data for the entire team and managers. Since managers love charts, let’s build some self-updated charts! And let them see the actual statistics and value of your test automation along with you, at any given moment of the time, since dashboards and widgets will be updated in real-time as well.

The best widgets to start from could be:

* Investigated percentage – How well does the QA team analyze failures?
* Overall statistics – What is the overall distribution of failure reasons inside the execution?

In order to make it, the first step is to create a Dashboard.

[ ![ImageName](img/getting-started-novice5.png) ](img/getting-started-novice5.png)

6) Then pick a widget you need from a list of ready-to-go templates:

We recommend starting with the **“Investigated percentage of launches”** chart. Once you selected a template, you should select a filtering basis, which will filter out the data of executions you want to focus on.

The filter can be created on the "Launches" tab (see the screenshot for step#2) or right during the widget creation.

[ ![ImageName](img/getting-started-novice6.png) ](img/getting-started-novice6.png)

[ ![ImageName](img/getting-started-novice7.png) ](img/getting-started-novice7.png)

[ ![ImageName](img/getting-started-novice8.png) ](img/getting-started-novice8.png)

[ ![ImageName](img/getting-started-novice9.png) ](img/getting-started-novice9.png)

What we can see with this chart?

There are 2 launches that meet the conditions of our filter. The first launch is completely analyzed, and the second one still requires the attention of the QA team. If the triaging process is still in progress, then it’s all right, just give them some time. But if you know that the process of triaging (categorization) is completed, and you still have a few test cases with no resolution, then it’s a point of discussion with your team.

So, this chart helps to understand what your team is doing with failure categorization.

7) Once the work with triaging is done, you can consider this launch for detailed information. For instance,  you can create another widget with the summary – **“Overall statistics”** widget.

[ ![ImageName](img/getting-started-novice10.png) ](img/getting-started-novice10.png)

[ ![ImageName](img/getting-started-novice11.png) ](img/getting-started-novice11.png)

[ ![ImageName](img/getting-started-novice12.png) ](img/getting-started-novice12.png)

[ ![ImageName](img/getting-started-novice13.png) ](img/getting-started-novice13.png)

The chart above shows that most of the issues are marked as Product Bugs. Based on this data, you can make decisions on further steps to improve your product. For example, you can arrange a call with a Development Team Leader to discuss bug fixing. Moreover, ReportPortal allows you to post issues in just a few clicks using [Bug Tracking Systems plugins](/category/plugins).

[ ![ImageName](img/getting-started-novice14.png) ](img/getting-started-novice14.png)

>**NOTE**:
In case of many System Issues, you can ask a DevOps engineer to fix the environment or to review the testing infrastructure, and don’t waste your team's effort and time by receiving failed reports due to inconsistent environment.
In case you have many Automation Bugs, put more effort into the test case stabilization, and convert test automation (flaky) fails into valuable test cases, which will test your application for real.

### I want to join all my team to ReportPortal

Everything is awesome, and you have already fallen in love with ReportPortal. But you want to add your QA team to work together.
Open the link [Create a project and add members](/report-poral-configuration/CreationOfProjectAndAddingUsers) and start your collaborative work.
And do not forget to configure [E-mail server](/plugins/EmailServer).

## Advanced user in ReportPortal

If you know all the basic features it is time to explore more sophisticated functionality.

### I want ReportPortal to analyze test failures automatically

Configure [Auto-Analyzer](/analysis/AutoAnalysisOfLaunches) 

### I want post issue to BTS from ReportPortal

* [Jira Server](/plugins/JiraServer)
* [Jira Cloud](/plugins/JiraCloud)
* [Azure DevOps](/plugins/AzureDevOpsBTS)
* [Rally](/plugins/Rally)

### I want view video from SauceLabs in ReportPortal
* [Sauce Labs](/plugins/SauceLabs)

### I want to send a test run results on the e-mail
Configure  [E-mail server](/plugins/EmailServer). And add [notification rules](/report-poral-configuration/ProjectConfiguration#e-mail-notifications)

### I want to configure Auth

* [LDAP](/report-poral-configuration/authorization/LDAP)
* [Active Directory](/report-poral-configuration/authorization/ActiveDirectory)

### I want to have a beautiful report with graphs and tables

Configure dashboards with [Widgets](/dashboards-and-widgets/WidgetCreation)
