---
sidebar_position: 2
sidebar_label: Test cases
description: Add, search, and remove test cases in a test plan, then add them to a manual launch from a milestone.
---

# Test cases

Test cases within a test plan are the execution scope for a milestone. They can be searched, reviewed, added from the Test Case Library, assigned to manual launches, or removed from the plan.

## Add tests from library to test plan

To add tests from library to test plan:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the new test plan name.
5. Click "Add Tests from Library" button.
6. Grab the drag handle next to the folder or subfolder.
7. Drop to the highlighted "Add to Test Plan" or "Add and create launch" area.

<MediaViewer src={require('./img/TestPlanEmpty.png')} alt="Add Tests from Library on empty Test Plan" />

<MediaViewer src={require('./img/AddToTestPlan1.png')} alt="Drag folder to Add to Test Plan drop zone" />

By dragging and dropping into "Add to Test Plan" area, the test cases are immediately added to the test plan.

By dragging and dropping into "Add and create launch" area, "Add to Launch" modal appears, and "Add to existing launch" option is selected by default. You can select an existing launch from the dropdown list.

<MediaViewer src={require('./img/DragAndDropExisting.png')} alt="Add to existing launch after drag and drop" />

By selecting the "Create new launch" option, you need to enter new launch name.

<MediaViewer src={require('./img/DragAndDropNew.png')} alt="Create new launch after drag and drop" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the test plan name to view the list of test cases.
5. Click "Add Tests from Library" button.
6. Bulk-select test cases.
7. Click "Add to Test Plan" or "Add & Create Launch".

<MediaViewer src={require('./img/AddToTestPlan2.png')} alt="Bulk-select test cases in Test Library" />

:::note
A test case can be added to multiple test plans.
:::

Any user with project access can view the list of test cases scoped for the selected test plan.

<MediaViewer src={require('./img/TestCasesTestPlan.png')} alt="Test cases scoped in a test plan" />

## Search test cases

To search test cases in the test plan:

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the test plan name to view the list of test cases.
5. Click on the "search" icon.
6. Enter search term.

<MediaViewer src={require('./img/SearchTestCases.png')} alt="Search test cases in a test plan" />

## Add test cases to manual launch

To add test case to launch:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the test plan name to view the list of test cases.
5. Click "Add to Launch" button.
6. Select "Add to existing launch" or "Create new launch".
7. Fill necessary fields.
8. Click "Add" button.

:::note
In this case, all test cases from this test plan will be added to the manual launch.
:::

<MediaViewer src={require('./img/AddToLaunch-ExistingLaunch.png')} alt="Add test plan to existing launch" />

<MediaViewer src={require('./img/AddToLaunch-CreateNewLaunch.png')} alt="Add test plan to a new launch" />

Launch attributes are custom key-value labels that can be assigned when creating a new launch while adding selected test cases from a test plan. Once assigned, they are attached to the launch (manual, automated, agentic) and can be used to organize test execution results in ReportPortal.

***Example use cases***

* **Environment** – Environment: QA, Environment: Staging, Environment: Production
* **Release** – Release: 2.5.0
* **Sprint** – Sprint: Sprint 12
* **Platform** – Platform: Web, Platform: Android, Platform: iOS
* **Browser** – Browser: Chrome, Browser: Firefox
* **Execution type** – Regression, Smoke, Sanity
* **Team or component** – Team: Payments, Component: Authentication

When **Add only uncovered test cases** is selected, only test cases that have not yet been executed manually will be added to the launch. Test cases that are already marked as Covered Manually are excluded from the launch. This option is useful when you want to continue testing without rerunning test cases that have already been executed.

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the test plan name to view the list of test cases.
5. Click the test case name to view its details.
6. Click "Add to Launch" button.

:::note
In this case, only this test case will be added to the manual launch.
:::

<MediaViewer src={require('./img/AddToLaunch2.png')} alt="Add to Launch from test case details" />

## Bulk-select and add test cases to manual launch

To bulk-select and add test cases to an existing or newly created launch:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the test plan name to view the list of test cases.
5. Bulk-select test cases.
6. Click "Add to Launch" button at the bottom of the page.
7. Select "Add to existing launch" or "Create new launch".
8. Fill necessary fields.
9. Click "Add" button.

<MediaViewer src={require('./img/BulkAdd-ExistingLaunch.png')} alt="Bulk-add selected test cases to existing launch" />

<MediaViewer src={require('./img/BulkAdd-CreateNewLaunch.png')} alt="Bulk-add selected test cases to a new launch" />

## Remove test case from test plan

To remove test case from test plan:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the test plan name to view the list of test cases.
5. Select test case.
6. Click the "More actions" (•••) icon next to the test case.
7. Select "Remove from Test Plan" option.

<MediaViewer src={require('./img/RemoveFromTestPlan1.png')} alt="Remove from Test Plan option" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the test plan name to view the list of test cases.
5. Click the test case name to view its details.
6. Select "Remove from Test Plan" option.

<MediaViewer src={require('./img/RemoveFromTestPlan2.png')} alt="Remove from Test Plan on test case details" />

## Bulk-select and bulk remove test cases from test plan

To bulk-select and remove test cases from the test plan:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the milestone name to view the list of test plans.
4. Click the test plan name to view the list of test cases.
5. Bulk-select test cases.
6. Click "Remove from Test Plan" button at the bottom of the page.
7. Click "Remove" button.

<MediaViewer src={require('./img/BulkRemove.png')} alt="Confirm bulk remove from Test Plan" />
