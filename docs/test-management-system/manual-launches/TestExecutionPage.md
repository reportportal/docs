---
sidebar_position: 2
sidebar_label: Test execution page
description: Review a selected test execution, change its status, add comments, and post or link issues on the Test Execution page.
---

# Test execution page

The Test Execution page provides detailed information and controls for a selected test execution within a manual launch. It allows users to get familiar with the test case scenario, review and update the execution status, add or clear execution comments, and post or link issues to the test execution when marking it as failed.

## View selected test execution page

To view selected test execution page:

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Manual Launches" page.
3. Click on manual launch's name to open all test executions list.
4. Click on test execution name.

<MediaViewer src={require('./img/ViewSelectedTestExecution.png')} alt="Selected test execution page" />

## Change status of selected test execution

To change status of selected test execution:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Manual Launches" page.
3. Click on manual launch's name to open all test executions list.
4. Click on test execution name.
5. Select new status.

If the current status is "To Run", the "Run Test" button is displayed. Clicking it changes the test execution status to "In Progress" and makes three options available: "Passed", "Failed", and "Skipped".

<MediaViewer src={require('./img/ChangeStatusSelectedTestExecution1.png')} alt="Run Test button on the test execution page" />

<MediaViewer src={require('./img/ChangeStatusSelectedTestExecution2.png')} alt="Skipped, Failed, and Passed buttons on the test execution page" />

If current **status is "Passed"**, the following options are available in the "Change Status" dropdown:

* Mark as Failed
* Mark as Skipped
* Clear Status

If current **status is "Failed"**, the following options are available in the "Change Status" dropdown:

* Mark as Passed
* Mark as Skipped
* Clear Status

If current **status is "Skipped"**, the following options are available in the "Change Status" dropdown:

* Mark as Passed
* Mark as Failed
* Clear Status

<MediaViewer src={require('./img/TEpageMarkAsPassed.png')} alt="Confirm action on Mark as Passed modal window" />

<MediaViewer src={require('./img/TEpageMarkAsFailed1.png')} alt="Mark as Failed modal window with BTS integration configured" />

:::note
On the "Mark as Failed" modal, you can add a comment, attach files, link an existing issue, or create a new issue when marking a test execution as failed for the first time.
:::

<MediaViewer src={require('./img/TEpageMarkAsSkipped.png')} alt="Confirm action on Mark as Skipped modal window" />

<MediaViewer src={require('./img/TEpageClearStatus1.png')} alt="Clear status option in the execution status dropdown" />

<MediaViewer src={require('./img/TEpageClearStatus2.png')} alt="Confirm action on Clear Status modal window" />

## Add/clear execution comment

To add execution comment:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Manual Launches" page.
3. Click on manual launch's name to open all test executions list.
4. Click on test execution name.
5. Enter execution comment.
6. Click "Save" button.

<MediaViewer src={require('./img/AddExecutionComment.png')} alt="Execution comment field with Save button" />

To clear execution comment:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Manual Launches" page.
3. Click on manual launch's name to open all test executions list.
4. Click on test execution name.
5. Click "Clear Comment" button.
6. Click "Save" button.

<MediaViewer src={require('./img/ClearExecutionComment.png')} alt="Clear Comment button on the test execution page" />

## Post/link issue for test execution

To post or link issue for test execution:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Manual Launches" page.
3. Click on manual launch's name to open all test executions list.
4. Click on test execution name with "To Run" or "In Progress" status.
5. Click "Failed" button.
6. Check the "Post or link issue to BTS" checkbox.
7. Click "Mark as Failed" button.
8. Select "Post issue" or "Link issue".
9. Fill necessary fields.
10. Click "OK" button.

<MediaViewer src={require('./img/PostLinkIssue1.png')} alt="Mark as Failed modal with Post or link issue to BTS checked" />

<MediaViewer src={require('./img/PostIssue.png')} alt="Post issue form in the Post or link issue to BTS modal" />

<MediaViewer src={require('./img/LinkIssue.png')} alt="Link issue form in the Post or link issue to BTS modal" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Manual Launches" page.
3. Click on manual launch's name to open all test executions list.
4. Click on test execution name with "Failed" status.
5. Click "Post or Link Issue" link.
6. Fill necessary fields.
7. Click "OK" button.

<MediaViewer src={require('./img/PostLinkIssue2.png')} alt="Post or Link Issue button in the Linked to BTS section" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Manual Launches" page.
3. Click on manual launch's name to open all test executions list.
4. Click the status button next to the test execution.
5. Click "Change Status" button.
6. Select "Failed" status.
7. Check the "Post or link issue to BTS" checkbox.
8. Click "Mark as Failed" button.
9. Fill necessary fields.
10. Click "OK" button.

<MediaViewer src={require('./img/PostLinkIssue3.png')} alt="Mark as Failed modal from Change Status on the test executions list" />

:::note
To enable the Post/Link issue functionality, configure an integration with the BTS – global or project.
:::

### Post/Link issue modals

The fields available in the "Post Issue" and "Link Issue" modals are described below.

***Common fields***

**BTS** – The Bug Tracking System integration used to post or link an issue.

**Integration name** – The name of the selected BTS integration. The available options depend on the selected BTS.

:::note
If multiple BTS integrations are configured (global or project), the BTS and Integration name fields are displayed as dropdowns, allowing the user to select from the available integrations.
:::

***Post issue***

**Issue Type** – The type of issue to create in the selected BTS, for example, Defect. The available values and configuration depend on the selected integration.

**Summary** – A brief description or title of the issue to be created. Required field.

**Attachments checkbox** – Includes attachments associated with the test execution in the issue posted to the BTS.

**Logs checkbox** – Includes logs associated with the test execution in the issue posted to the BTS.

**Comments checkbox** – Includes comments associated with the test execution in the issue posted to the BTS.

***Link issue***

**Link to issue** – The URL of the existing issue to link to the test execution.

**Issue ID** – The identifier of the issue in the selected BTS, for example EXMPL-12345.

**Add New Issue** – Adds another pair of Link to issue and Issue ID fields, allowing multiple issues to be linked to the same test execution in a single action.
