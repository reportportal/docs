---
title: Manual launches
description: Organize and manage manual testing activities with Manual Launches. Learn how to search, filter, view, edit, and delete launches.
---

# Manual launches

Manual launches are collections of test executions created to organize and manage manual testing activities within a project. They represent a specific set of test cases selected for execution and allow users to track testing progress, and manage execution statuses.

"Manual launches" page can be accessible using sidebar on project level.

The "Manual launches" page lets you:

* view available manual launches
* search and filter manual launches
* view manual launch details
* edit manual launch
* delete manual launch
* bulk-delete manual launches

<MediaViewer src={require('./img/ManualLaunches.png')} alt="Manual Launches in the sidebar" />

**How to get started with manual launches?**

Create a new manual launch from the Test Case Library or from a Test Plan (which is part of a Milestone).

<MediaViewer src={require('./img/ManualLaunchesEmpty.png')} alt="Initial state of Manual Launches" />

:::note
The manual launch ID is unique per project and follows the format ML5, where the numeric part is the sequentially assigned manual launch number within the project.
:::

Any user with project access can view the list of available manual launches.

<MediaViewer src={require('./img/ListManualLaunches.png')} alt="List of available manual launches" />

## Search manual launches

Any user with project access can search the list of available manual launches.

<MediaViewer src={require('./img/SearchManualLaunches.png')} alt="Search manual launches" />

## Filter manual launches

Any user with project access can apply filter for the list of manual launches.

You can filter manual launches by test execution status, launch completion, start time, Test Plan, and launch attributes.

<MediaViewer src={require('./img/FilterManualLaunches1.png')} alt="Filter icon on Manual Launches page" />

<MediaViewer src={require('./img/FilterManualLaunches2.png')} alt="Filter panel for manual launches" />

## View manual launch details

To view the details (sidebar) of a selected manual launch:

1. Log in as Admin, Manager or any user with project access.
2. Navigate to "Manual Launches" page.
3. Click anywhere in the launch row to open the details panel.

:::note
The launch name, "To Run" button, and "More actions" (•••) trigger their own actions and won't open the panel.
:::

<MediaViewer src={require('./img/ViewManualLaunchDetails1.png')} alt="Select a manual launch to view details" />

<MediaViewer src={require('./img/ViewManualLaunchDetails2.png')} alt="Manual launch details side panel" />

At the bottom of the side panel, the following buttons are available:

* **Open details** – Opens the list of all test executions included in the manual launch.
* **Edit launch** – Opens the manual launch in edit mode, allowing you to update its details and settings.
* **Show To Run {'{count}'}** – Displayed when one or more test executions are in the "To Run" status. Opens the list of test executions filtered to show only those pending execution.
* **Done** – Displayed in disabled state when no test executions remain in the "To Run" status, indicating that all test executions in the manual launch have been completed.

## Edit manual launch

To edit manual launch:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Manual Launches" page.
3. Click the "More actions" (•••) icon next to the manual launch.
4. Select "Edit launch" option.
5. Make changes.
6. Click "Save" button.

<MediaViewer src={require('./img/EditManualLaunches1.png')} alt="Edit launch option" />

<MediaViewer src={require('./img/EditManualLaunches1-2.png')} alt="Edit Launch modal" />

or

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Manual Launches" page.
3. Click row highlight for the selected manual launch.
4. Click "Edit launch" button in the opened side panel with launch details.
5. Make changes.
6. Click "Save" button.

<MediaViewer src={require('./img/EditManualLaunch2.png')} alt="Edit launch button in the details panel" />

## Delete manual launch

To delete manual launch:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Manual Launches" page.
3. Click the "More actions" (•••) icon next to the manual launch.
4. Select "Delete launch" option.
5. Click "Delete" button.

<MediaViewer src={require('./img/DeleteManualLaunch1.png')} alt="Delete launch option" />

<MediaViewer src={require('./img/DeleteManualLaunch2.png')} alt="Confirm action on Delete Launch modal window" />

## Bulk-delete manual launches

To bulk-delete manual launches:

1. Log in as Admin, Manager or user with edit permissions.
2. Navigate to "Manual Launches" page.
3. Bulk-select manual launches.
4. Click "Delete" button.
5. Confirm action.

<MediaViewer src={require('./img/BulkDelete1.png')} alt="Bulk-select manual launches" />

<MediaViewer src={require('./img/BulkDelete2.png')} alt="Confirm action on Delete Launches modal window" />

import DocCardList from '@theme/DocCardList';

<DocCardList />
