---
sidebar_position: 1
sidebar_label: Test plan
description: Create, edit, duplicate, and delete test plans in Milestones to define testing scope and track coverage.
---

# Test Plan

A test plan defines the scope of testing within a specific milestone by grouping the test cases that need to be executed. It serves as a structured collection of test cases that helps teams organize, track, and manage testing activities for a particular release, feature, or testing cycle.

Test Plans enable teams to plan and manage execution scope and review test coverage.

## Create test plan

To create test plan:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the "More actions" (•••) icon next to the milestone.
4. Select "Create test plan" option.
5. Fill necessary fields.
6. Click "Create" button.

<MediaViewer src={require('./img/CreateTestPlan1.png')} alt="Create test plan option" />

<MediaViewer src={require('./img/CreateTestPlan1-2.png')} alt="Create Test Plan modal window" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click "Create test plan" button.
5. Fill necessary fields.
6. Click "Create" button.

<MediaViewer src={require('./img/CreateTestPlan2.png')} alt="Create Test Plan button in milestone" />

**Name (mandatory field)** – A descriptive name that identifies the test plan. The name should clearly reflect the product area, release, sprint, feature, or testing objective covered by the plan.

**Description (optional field)** – Provides a summary of the test plan purpose and scope. It can include the covered product area, testing goal, key constraints, assumptions, or references to related documentation.

:::note
The test plan ID is unique per project and follows the format TP17, where the numeric part represents the sequentially assigned test plan number.
:::

Any user with project access can view the list of test plans.

<MediaViewer src={require('./img/ViewListTestPlans.png')} alt="List of test plans in a milestone" />

***Test plan metrics***

**Covered / Total** – Number of covered tests out of the total number of tests included in the test plan. The value shows how many tests have been executed manually compared to the overall number of tests planned for execution.

**Coverage** – Test plan coverage percentage, calculated as the ratio of covered tests to the total number of tests included in the test plan. It reflects the overall execution progress of the test plan.

## Edit test plan

To edit test plan:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the "More actions" (•••) icon next to the test plan.
4. Select "Edit test plan" option.
5. Make changes.
6. Click "Save" button.

<MediaViewer src={require('./img/EditTestPlan1.png')} alt="Edit test plan option" />

<MediaViewer src={require('./img/EditTestPlan2.png')} alt="Edit test plan modal window" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the test plan name to view the test plan page with the list of scoped test cases.
5. Select "Edit test plan" option.

<MediaViewer src={require('./img/EditTestPlan2-1.png')} alt="Edit test plan option on Test Plan page" />

## Duplicate test plan

To duplicate test plan:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the "More actions" (•••) icon next to the test plan.
4. Select "Duplicate test plan" option.
5. Make changes.
6. Click "Duplicate" button.

<MediaViewer src={require('./img/DuplicateTestPlan1.png')} alt="Duplicate test plan option" />

<MediaViewer src={require('./img/DuplicateTestPlan2.png')} alt="Duplicate test plan modal window" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the test plan name to view the test plan page with the list of scoped test cases.
5. Select "Duplicate test plan" option.

<MediaViewer src={require('./img/DuplicateTestPlan2-2.png')} alt="Duplicate test plan option on Test Plan page" />

## Delete test plan

To delete test plan:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the "More actions" (•••) icon next to the test plan.
4. Select "Delete test plan" option.
5. Click "Delete" button.

<MediaViewer src={require('./img/DeleteTestPlan1.png')} alt="Delete test plan option" />

<MediaViewer src={require('./img/DeleteTestPlan2.png')} alt="Confirm action on Delete Test Plan modal window" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the test plan name to view the test plan page with the list of scoped test cases.
5. Select "Delete test plan" option.

<MediaViewer src={require('./img/DeleteTestPlan2-2.png')} alt="Delete test plan option on Test Plan page" />
