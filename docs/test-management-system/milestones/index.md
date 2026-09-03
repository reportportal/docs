---
title: Milestones
description: Plan testing around releases, sprints, and features in the our qa metrics dashboard.
---

# Milestones

Milestones provide a structured framework for organizing and managing testing activities within a project, enabling teams to plan, track, and coordinate test execution while reviewing coverage and preparing test cases for manual launches.

"Milestones" page can be accessible using sidebar on the project level.

<MediaViewer src={require('./img/Milestones.png')} alt="Milestones in the sidebar" />

Milestones are the planning hub of Test Management System. After your team prepares reusable test cases in the Test Case Library, the next step is to organize execution scope in Milestones and Test Plans.

In practical terms:

* Milestone defines the time frame and planning context
* Test Plan defines testing scope to execute inside that context

The Milestones page lets you:

* create, edit, duplicate, and delete milestones
* manage milestone status
* create, edit, duplicate, and remove test plans within milestones
* browse and search test cases in test plans
* review test case details and open test cases in the Test Case Library
* add individual or multiple test cases to manual launches
* remove individual or multiple test cases from test plans

How to get started with Milestones? Just create milestone.

<MediaViewer src={require('./img/MilestonesEmpty.png')} alt="Empty state of Milestones page" />

## Create milestone

To create milestone:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click on the "Create Milestone" button.
4. Fill necessary fields.
5. Click "Create" button.

<MediaViewer src={require('./img/CreateMilestone1.png')} alt="Create Milestone button" />

<MediaViewer src={require('./img/CreateMilestone2.png')} alt="Create Milestone modal window" />

**Name (mandatory field)** – A descriptive name that identifies the milestone. The name should clearly reflect the project phase, release, sprint, feature, or testing objective associated with the milestone.

**Type (mandatory field)** – Defines the purpose and category of the milestone. The selected type helps organize milestones according to the project's testing workflow. Available options include:

* **Release** – Represents a major software version or product release.
* **Sprint** – Represents a time-boxed development iteration in Agile projects.
* **Plan** – Represents a strategic testing or delivery milestone used for planning activities.
* **Feature** – Represents testing activities focused on a specific feature or functionality.
* **Other** – Represents a custom milestone for project-specific needs.

**Start date (mandatory field)** – The date when the milestone becomes active. It defines the beginning of the planned testing or delivery period and is used for scheduling and progress tracking.

**Deadline (mandatory field)** – The target completion date for the milestone. It defines when all planned testing activities associated with the milestone should be completed and is for tracking progress.

Any user with project access can view the list of milestones.

<MediaViewer src={require('./img/ViewListMilestones.png')} alt="List of milestones" />

***Milestone metrics***

**The percentage of coverage** – Overall milestone coverage, calculated from the coverage of all associated test plans. Test plan coverage is based on the percentage of tests executed manually (Covered Manually).

**Days left** – Number of calendar days remaining until the milestone end date.

**Plans** – Number of test plans associated with the milestone.

***Action buttons***

**Scheduled** – The milestone is planned and ready for testing.

**Testing** – The milestone is open for test execution. Set this status when the team is ready to start running test cases.

**Completed** – Testing is finished, and the milestone is complete.

## Edit milestone

To edit milestone:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the "More actions" (•••) icon next to the milestone.
4. Select "Edit milestone" option.
5. Make changes.
6. Click "Save changes" button.

<MediaViewer src={require('./img/EditMilestone1.png')} alt="Edit milestone option" />

<MediaViewer src={require('./img/EditMilestone2.png')} alt="Edit Milestone modal window" />

## Duplicate milestone

To duplicate milestone:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the "More actions" (•••) icon next to the milestone.
4. Select "Duplicate milestone" option.
5. Make changes (if necessary).
6. Click "Duplicate" button.

<MediaViewer src={require('./img/DuplicateMilestone1.png')} alt="Duplicate milestone option" />

<MediaViewer src={require('./img/DuplicateMilestone2.png')} alt="Duplicate Milestone modal window" />

## Delete milestone

To delete milestone:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Milestones" page.
3. Click the "More actions" (•••) icon next to the milestone.
4. Select "Delete milestone" option.
5. Type "delete".
6. Click "Delete" button.

<MediaViewer src={require('./img/DeleteMilestone1.png')} alt="Delete milestone option" />

<MediaViewer src={require('./img/DeleteMilestone2.png')} alt="Confirm action on Delete Milestone modal window" />

import DocCardList from '@theme/DocCardList';

<DocCardList />
