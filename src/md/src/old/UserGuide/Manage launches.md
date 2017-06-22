Manage launches
---------------

### Edit launch tags and description

The system allows to edit tags and description for the launch on the "Launches" and "Debug" modes.

In order to edit a launch, perform the following steps:

1. Navigate to the "Launches" page.

2. Select "Edit" option in the context menu next to the selected launch.

3. The launch editor will be opened with the following options.

6. Make the required changes and click "Save" button.

[ ![Image](Images/userGuide/manageLaunches/edit_launch.png) ](https://youtu.be/87dTCdsFD-I)

>**Note:** The following users have permissions to edit launch tags and description:
- Administrator
- User with one of Project Role {PROJECT MANAGER, LEAD} on the project
- User with one of Project Role {MEMBER, CUSTOMER} on the project - Launch Owner


### Edit test item tags and description

The system allows to edit tags and description for the test items on the "Launches" and "Debug" pages.

In order to edit a test item, perform the following steps:

1. Navigate to the "Launches" page.

2. Drill down to the test level of any item.

3. Select "Edit" option in the context menu next to the selected test item.

4. The test item editor will be opened with the following options.

5. Make the required changes and click "Save" button.

[ ![Image](Images/userGuide/manageLaunches/edit_item.png) ](https://youtu.be/7PZIowd9III)

>**Note:** The following users have permissions to edit test items:
- Administrator
- User with one of Project Role {PROJECT MANAGER, LEAD} on the project
- User with one of Project Role {MEMBER, CUSTOMER} on the project - Launch Owner


### Delete launch

The system allows to delete launches on the "Launches" and "Debug" pages.

In order to delete a launch, perform the following steps:

1. Navigate to the "Launches" page.

2. Select "Delete" option in the context menu next to the selected launch.

3. The warning popup will be opened.

4. Check "I am sure I want to delete launch". "Yes" button will become available. Click "Yes" button.

5.  The launch will be deleted from Report Portal. All related content will be deleted: test items, logs, screenshots.

[ ![Image](Images/userGuide/manageLaunches/delete_launch.png) ](https://youtu.be/DNy9aqPz3NQ)

>**Notes:**
1. Its impossible to delete launches IN PROGRESS - "Delete" launch option will be disabled.
2. The following users have permissions to delete launch:
 - Administrator
 - User with one of Project Role {PROJECT MANAGER, LEAD} on the project
 - User with one of Project Role {MEMBER, CUSTOMER} on the project - Launch Owner


### Delete test item

The system allows to delete test items in all levels of launch in the "Launches" and "Debug" pages.

In order to delete a test item, perform the following steps:

1. Navigate to the "Launches" page

2. Drill down to the test level of any item

3. Select "Delete" option in the context menu next to the selected test item.

4. The warning popup will be opened.

5. Check "I am sure I want to delete test item". "Yes" button will become available. Click "Yes" button.

6. The test item with all related content (logs, screenshots) will be deleted from Report Portal.

[ ![Image](Images/userGuide/manageLaunches/delete_items.png) ](https://youtu.be/r2r5OHwVt-U)

>**Notes:**
1. Its impossible to delete test items in launches IN PROGRESS - "Delete" test item option is disabled for test items in launches IN PROGRESS.
2. The following users have permissions to delete test item:
 - Administrator
 - User with one of Project Role {PROJECT MANAGER, LEAD} on the project
 - User with one of Project Role {MEMBER, CUSTOMER} on the project - Launch Owner


### Move launches to Debug/Launches

The "Debug" section is used to hide incorrect launches from CUSTOMER view.

A user with the CUSTOMER role cannot see the "Debug" section and move
launches there.

In order to move a launch to the "Debug" section, select the "Move to
Debug" option from the launch context menu.

To return the launch to the "Launches" section, navigate to the "Debug" section and select the
"Move to All Launches" from the drop-down list.

[ ![Image](Images/userGuide/manageLaunches/move_to_debug-launches.png) ](https://youtu.be/UW1oMNy1-qo)

>**Note:** The following users have permissions to move launches to "Debug"/"Launches" mode:
- Administrator
- User with one of Project Role {PROJECT MANAGER, LEAD}
- User with {MEMBER} Project Role  - Launch Owner


### Force finish launches

The system allows to finish launches on the "Launches" and the "Debug"
pages.

In order to finish a launch, perform the following steps:

1. Navigate to the "Launches" page.

2. Select the "Force Finish" option in the context menu next to the
    selected launch "In progress".

3. The warning popup will be opened.

4. Check "I am sure I want to finish launch". "Yes" button will become
    available. Click "Yes" button.

5. The launch will be stopped and shown in the launches table with the
    "Stopped" tag and the *"Stopped"* description. All the statistics
    collected by this time will be displayed.

[ ![Image](Images/userGuide/manageLaunches/force_finish.png) ](https://youtu.be/nI1u4ZvKX1Y)

>**Note:** The following users have permissions to finish launches:
- Administrator
- User with one of Project Role {PROJECT MANAGER, LEAD}
- User with one of Project Role {MEMBER, CUSTOMER} - Launch Owner


### Export launches reports

The system allows to export launches reports on the "Launches" and the "Debug"
modes. You can export launch report in the following formats: PDF, XML, HTML.

In order to export a launch, perform the following steps:

1. Navigate to the "Launches" page.

2. Select the "Export" option in the context menu next to the
    selected launch.

3. The launch report in selected format will be opened.

[ ![Image](Images/userGuide/manageLaunches/export_launch.png) ](https://youtu.be/NZIolEFI7zc)


### Merge launches

Merge launches feature can help you to merge the existing launches into one.
If your project has the really huge number of regression suites and they cannot be in one particular launch, so, they divided in parts.
As soon as they completed, they merged in one separate launch to represent this data on dashboards and create reports.

In order to merge launches, perform the following steps:

1. Navigate to the "Launches" page.

2. Click "Merge" button.

3. Select at least 2 launches on the current page and click "Merge launches" button.

4. The Merge Launches popup will be opened. "Merge Launches" window contains:

5. Make changes and click "Merge" button on the "Merge Launches" window.
    After the merge, a new run will be shown on the common launches list.


The following launches cannot be merged:
- Launches in progress
- Launches with active "Analysis" process
- Launches with active "Match issues in launch" process

[ ![Image](Images/userGuide/manageLaunches/merge.png) ](https://youtu.be/tGTGFO0cGCM)

>**Note:** The following users have permissions to merge launches:
- Administrator
- User with one of Project Role {PROJECT MANAGER, LEAD} on the project
- User with one of Project Role {MEMBER, CUSTOMER} on the project - Launch Owner


### Compare launches

Compare launches feature can help you to compare launches side by side to define differences between them.

In order to compare launches, perform the following steps:

1. Navigate to the "Launches" page.

2. Click "Compare" button.

3. Select at least 2 launches on the current page.

4. Click "Compare" button on the top of the page.

5.  The system shows a window where a widget with bars is displayed, reflecting the
Passed/Failed/Skipped and Product Bug/Automation Bug/System Issue/To
Investigate tests.

[ ![Image](Images/userGuide/manageLaunches/compare_launches.png) ](https://youtu.be/1MjgTxbRH5c)

