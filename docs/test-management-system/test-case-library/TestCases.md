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

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the folder.
4. Select "Create Test Case" option.
5. Fill necessary fields.
6. Click "Create" button.

:::note
The test case ID is unique per project and follows the format TC65, where the numeric part represents the sequentially assigned test case number.
:::

When creating test cases, you can use one of the two available templates:

***Text based***

One set of instructions and one expected result for the whole test case (best for exploratory testing). Attachments apply to the case.

***Steps based***

Instructions and an expected result for each step. Steps are numbered, reorderable, and can carry their own attachments. 

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

## Import test cases

Admin, Manager or user with edit permissions can import test cases in CSV format.

Possible options:

1. import to empty library

Initial folder will be created automatically.

2. import to selected folder

3. Import to the library with multiple folders

## Search test cases

Any user with project access can search test cases by name.

## Filter test cases

Any user with project access can filter test cases by priority and tags. 

## View test case details

Any user with project access can view the list of all test cases.

To view test case details:

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list. 

or

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.

## Edit test case

To edit test case:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the test case.
4. Select "Edit test case" option. 

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click the "More actions" (•••) button.
5. Select "Edit test case" option. 

## Duplicate test case

To duplicate test case:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the test case.
4. Select "Duplicate" option.

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click the "More actions" (•••) button.
5. Select "Duplicate" option.

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click the "More actions" (•••) button.
6. Click "Duplicate" button.

## Move test case

To move test case to another folder:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the test case.
4. Select "Move test case to" option.
5. Select "Move to existing folder" or "Create new folder".
6. Fill necessary fields.
7. Click "Move" button.

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click the "More actions" (•••) button.
5. Select "Move test case to" option.
6. Fill necessary fields.
7. Click "Move" button.

## View history of actions

To view the history of actions for selected test case:

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the test case.
4. Select "History of actions" option.

or

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click the "More actions" (•••) button.
5. Select "History of actions" option.

or

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click the "More actions" (•••) button.
6. Click "History of actions" button.

## Add test case to launch

To add test case to launch:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Add to Launch" button.

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click "Add to Launch" button.

:::important
Adding a test case to a Manual Launch creates a test execution, which is a snapshot of the test case at that point in time. Changes made later to the original test case are not reflected in existing test executions.
:::

Add test case to test plan (H2)

To add test case to test plan:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Add to Test Plan" button.

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click "Add to Test Plan" button.

## Edit scenario

To edit test case scenario:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click "Edit Scenario" button.
6. Make changes.
7. Click "Save" button.

## Delete test case

To delete test case:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click the "More actions" (•••) icon next to the test case.
4. Select "Delete" option.

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click the "More actions" (•••) button.
5. Select "Delete test case" option.

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Test Case Library" page.
3. Click on the test case in the list.
4. Click "Open Details" button.
5. Click the "More actions" (•••) button.
6. Click "Delete" button.
