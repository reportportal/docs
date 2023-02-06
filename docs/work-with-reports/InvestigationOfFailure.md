---
sidebar_position: 4
sidebar_label: Investigation of failure
---

# Investigation of failure

## Set defect type

ReportPortal provides the possibility to investigate the results of your runs. The investigation includes setting the appropriate defect type of failed items, posting a defect for them or linking the ID of a defect that is already created in the bug tracking system.

Using [“Make decision” modal](/analysis/ManualAnalysis#make-decision-modal-redesign), you can choose the real reason of your failure and provide a comment for this fail.

When a defect is found in a test, it should be investigated and proper defect type should be assigned to it, in order to have accurate test runs statistics. You will be able to change a defect type for a test and mark it as a Product Bug/Automation Bug/System Issue/No Defect at any time.

The available defect types are described below:

***“To investigate”*** means that no investigation has been made on this defect yet.

***“Product bug”*** means that the defect was investigated and a production bug found as the reason for the failure of this test.

***“Automation bug”*** means that the defect was investigated and the automation test is not correct.

***“System issue”*** means that the defect was investigated and it turns out that a system-level issue, like an app crash, caused the test to fail.

***“No defect”*** means that the defect was investigated and was defined to be not a defect.

## Post bug to Bug Tracking System

ReportPortal allows us to connect some popular bug tracking systems and post a bug to them or link the ticket ID of the already posted defect to the test item in ReportPortal.

Before posting/linking a bug, make sure that the bug tracking systems are connected to the project on the project settings page. To check it, please, find the user guides below:

* [Jira Server](/plugins/JiraServer)
* [Jira Cloud](/plugins/JiraCloud)
* [Azure DevOps BTS](/plugins/AzureDevOpsBTS)
* [Rally](/plugins/Rally)