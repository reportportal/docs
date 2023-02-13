---
sidebar_position: 6
sidebar_label: 5. How to triage test failures with ReportPortal
---


# 5. How to triage test failures with ReportPortal

So far you have Demo launches in ReportPortal. You see the list of test executions on the Launches page with Total/Passed/Failed/Skipped numbers of test cases, and some of the issues are already sorted: Product Bug, Auto Bug, System Issue. But some issues required the attention of engineers, and they are marked with the “To Investigate” flag.

<media-view src={require('./img/TriageTestFailures.png')} alt="Triage Test Failures" />

The next step and the main goal for QA engineers is to triage failed test cases. This means opening each test case, identifying the root of the failure reason, and categorizing/associating it with a particular defect type. We call this action [“Make decision”](/analysis/ManualAnalysis).

<media-view src={require('./img/MakeDecision.png')} alt="Make Decision modal" />

Based on test results, you can make decisions on further steps to improve your product. For example, you can arrange a call with a Development Team Leader to discuss bug fixing, if you have a lot of Product Bugs.

In case of a large number of System Issues, you can ask a DevOps engineer to fix the environment or to review the testing infrastructure. Thus, you won‘t waste your team's effort and time by receiving failed reports due to an inconsistent environment.

If you have a lot of Automation Bugs, put more effort into the test cases stabilization, and convert test automation (flaky) fails into valuable test cases, which will test your application for real.

Moreover, you can post and link issues in just a few clicks using Bug Tracking System plugins:

[Jira Server](/plugins/JiraServer)

[Jira Cloud](/plugins/JiraCloud)

[Azure DevOps](/plugins/AzureDevOpsBTS)

[Rally](/plugins/Rally)

<media-view src={require('./img/PostLink.png')} alt="Post and Link issue" />