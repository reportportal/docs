---
sidebar_position: 2
sidebar_label: Test cases
description: Learn how to work with test cases in the Test Case Library in our test results dashboard.
---

# Test cases

Test cases are structured test artifacts used to verify specific requirements, features, or system behaviors. They define the conditions, execution steps, expected results, and supporting information required to validate that the application functions as intended.

## Create test case

To create test case:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the "Create Test Case" button.
4. Fill necessary fields.
5. Click "Create" button.

<MediaViewer src={require('./img/CreateTestCase.png')} alt="Create Test Case button" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the folder.
4. Select "Create Test Case" option.
5. Fill necessary fields.
6. Click "Create" button.

<MediaViewer src={require('./img/CreateTestCaseFromFolder1.png')} alt="Create Test Case from folder menu" />

:::note
The test case ID is unique per project and follows the format TC65, where the numeric part represents the sequentially assigned test case number.
:::

When creating test cases, you can use one of the two available templates:

***Text based***

One set of instructions and one expected result for the whole test case (best for exploratory testing). Attachments apply to the case.

<MediaViewer src={require('./img/CreateTestCaseText.png')} alt="Create Test Case with Text template" />

***Steps based***

Instructions and an expected result for each step. Steps are numbered, reorderable, and can carry their own attachments. 

<MediaViewer src={require('./img/CreateTestCaseSteps.png')} alt="Create Test Case with Steps template" />

Fill in the following fields:

**Test case name (mandatory field)** – A short, clear, and unique name that describes the purpose of the test case. It should identify the functionality or scenario being validated.

**Folder (mandatory field)** – The logical container where the test case is stored.

**Priority** – The level of importance assigned to the test case execution. It determines the execution order and business impact of failures. Dropdown with the options: Unspecified, Blocker, Critical, High, Medium, Low.

**Description** – A high-level overview of the test objective, business logic, and functionality being verified. It provides context for the test case without detailing the execution steps.

**Tags** – keywords used to organize, categorize, and filter test cases.

Tags are simple labels that help you group and find test cases in the Test Management System. Add tags directly in the UI – no additional configuration is required.

Each tag is stored as an attribute with the key "tag". For example, the tag "smoke" is stored as "tag: smoke".

**Template** – Dropdown with the options: Text, Steps.

**Execution time** – Estimated time required to execute the test case. Used for test planning, scheduling, and effort estimation.

**Requirements** – References to business requirements, functional requirements, user stories, specifications, or tickets covered by the test case.

**Precondition** – The initial state, system configuration, test data, and environmental conditions required before executing the test case.

**Attachments** – Supporting files related to the test case, such as screenshots, mockups, test data files, logs. Supported image formats: JPEG, JPG, and PNG (up to 128 MB).

**Instructions** – Execution description of the test case. Can be written either as structured step-by-step instructions (Template Steps) or as a high-level scenario description (Template Text), depending on test design style.

**Expected result** – The expected system behavior or output after executing the test steps. It is used to determine whether the test passes or fails.

### How to create tags

To create tag:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Select "Create Test Case" option.
4. Click "Add" button near "Tags" field.
5. Enter the name.
6. Click "Create new" option.

<MediaViewer src={require('./img/CreateTag1.png')} alt="Add tags in Create Test Case form" />

<MediaViewer src={require('./img/CreateTag2.png')} alt="Create new tag option" />

## Import test cases

Admin, Manager or user with edit permissions can import test cases in CSV format.

Possible options:

1. import to empty library

Initial folder will be created automatically.

<MediaViewer src={require('./img/Import1.png')} alt="Import test cases to empty library" />

2. import to selected folder

<MediaViewer src={require('./img/Import2.png')} alt="Import test cases to selected folder" />

3. Import to the library with multiple folders

<MediaViewer src={require('./img/Import3-1.png')} alt="Import test cases - Create new root folder" />

<MediaViewer src={require('./img/Import3-2.png')} alt="Import test cases - Add to the existing folder" />

## Search test cases

Any user with project access can search test cases by name.

<MediaViewer src={require('./img/SearchTestCases.png')} alt="Search test cases by name" />

## Filter test cases

Any user with project access can filter test cases by priority and tags. 

<MediaViewer src={require('./img/Filter1.png')} alt="Filter test cases by priority and tags" />

<MediaViewer src={require('./img/Filter2.png')} alt="Active filters on Test Case Library" />

## View test case details

Any user with project access can view the list of all test cases.

To view test case details:

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list. 

<MediaViewer src={require('./img/TestCaseDetails1.png')} alt="View test case details from the list" />

or

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.

<MediaViewer src={require('./img/TestCaseDetails2.png')} alt="Open Details button" />

## Edit test case

To edit test case:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the test case.
4. Select "Edit test case" option. 

<MediaViewer src={require('./img/EditTestCase1.png')} alt="Edit test case option" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click the "More actions" (•••) button.
5. Select "Edit test case" option. 

<MediaViewer src={require('./img/EditTestCase2.png')} alt="Edit test case from selected item" />

## Duplicate test case

To duplicate test case:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the test case.
4. Select "Duplicate" option.

<MediaViewer src={require('./img/DuplicateTestCase1.png')} alt="Duplicate test case option" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click the "More actions" (•••) button.
5. Select "Duplicate" option.

<MediaViewer src={require('./img/DuplicateTestCase2.png')} alt="Duplicate test case from selected item" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click the "More actions" (•••) button.
6. Click "Duplicate" button.

<MediaViewer src={require('./img/DuplicateTestCase3.png')} alt="Duplicate test case from details" />

## Move test case

To move test case to another folder:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the test case.
4. Select "Move test case to" option.
5. Select "Move to existing folder" or "Create new folder".
6. Fill necessary fields.
7. Click "Move" button.

<MediaViewer src={require('./img/MoveTestCase1.png')} alt="Move test case to option" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click the "More actions" (•••) button.
5. Select "Move test case to" option.
6. Fill necessary fields.
7. Click "Move" button.

<MediaViewer src={require('./img/MoveTestCase2.png')} alt="Move test case from selected item" />

## View history of actions

To view the history of actions for selected test case:

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the test case.
4. Select "History of actions" option.

<MediaViewer src={require('./img/HistoryOfActions1.png')} alt="History of actions option" />

<MediaViewer src={require('./img/HistoryOfActions.png')} alt="History of actions page" />

or

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click the "More actions" (•••) button.
5. Select "History of actions" option.

<MediaViewer src={require('./img/HistoryOfActions2.png')} alt="History of actions from selected item" />

or

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click the "More actions" (•••) button.
6. Click "History of actions" button.

<MediaViewer src={require('./img/HistoryOfActions3.png')} alt="History of actions from details" />

## Add test case to launch

To add test case to launch:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Add to Launch" button.

<MediaViewer src={require('./img/AddTestCaseToLaunch1.png')} alt="Add to Launch button" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click "Add to Launch" button.

<MediaViewer src={require('./img/AddTestCaseToLaunch2.png')} alt="Add to Launch from details" />

:::important
Adding a test case to a Manual Launch creates a test execution, which is a snapshot of the test case at that point in time. Changes made later to the original test case are not reflected in existing test executions.
:::

## Add test case to test plan

To add test case to test plan:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Add to Test Plan" button.

<MediaViewer src={require('./img/AddTestCaseToTestPlan1.png')} alt="Add to Test Plan button" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click "Add to Test Plan" button.

<MediaViewer src={require('./img/AddTestCaseToTestPlan2.png')} alt="Add to Test Plan from details" />

## Edit scenario

To edit test case scenario:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click "Edit Scenario" button.
6. Make changes.
7. Click "Save" button.

<MediaViewer src={require('./img/EditScenario1.png')} alt="Edit Scenario button" />

<MediaViewer src={require('./img/EditScenario2.png')} alt="Editing test case scenario" />

## Delete test case

To delete test case:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the test case.
4. Select "Delete" option.

<MediaViewer src={require('./img/DeleteTestCase1.png')} alt="Delete test case option" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click the "More actions" (•••) button.
5. Select "Delete test case" option.

<MediaViewer src={require('./img/DeleteTestCase2.png')} alt="Delete test case from selected item" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click the "More actions" (•••) button.
6. Click "Delete" button.

<MediaViewer src={require('./img/DeleteTestCase3.png')} alt="Delete test case from details" />
