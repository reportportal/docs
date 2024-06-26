---
sidebar_position: 8
sidebar_label: Test case ID
---

# Test case ID 

## What is it: Test case ID

If you are using any of the Test Management System (such as TestRail, Jira, ALM, and any others), you have a unique identification of test cases in it.

Starts from version 5.1 you can report test cases with TestCase ID from your TMS. That gives you an ability to link a source of the test case in TMS and its executions in ReportPortal. 

The benefit of this feature is that you will be able to see **the real history of your test cases**. 

>**Definition:** Test Case ID:
It is a unique identifier from your source test management system which help ReportPortal.io to identify the uniqueness of a test case

## Where Test Case ID is using?

Test case id is using for:
- The history line 
- The history table 

You can find a test case ID in the 'Edit' modal.

## How you can report items with Test case ID?

You can [report test case id via agents](https://github.com/reportportal/client-java/wiki/Test-case-ID). 

If the test execution has test parameters, a test case ID will be generated on the base of:

> Test case id in ReportPortal = reported 'TestCaseID + all test parameters

## What does happen if you do not report items with Test case ID?

In case a user doesn't report tests with Test Case ID, the system generates it automatically:

* Auto-generation based on 'Code reference' and 'Parameters'
If users do not report test case ID, it is generated automatically on the base of:

> Test case id in ReportPortal = 'Code reference' + all test parameters

* Automatically based on Test Execution name, All parents name, Parameters
If users do not report Test Case ID and Code reference, then test case ID is generated on the base of:

> Test case id in ReportPortal = Test Case Name + All parents Name (except Launch name) + All parameters
