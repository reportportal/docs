## Widget Creation

Widgets - contain special graphical control elements that were designed to provide a simple and 
easy-to-use way of displaying and analyzing your automation trends and data.

The widgets can be added to dashboards on the "Dashboards" tab. Widgets will be visible within the project, they are created.

### Create widget

To create a new widget, perform the following steps:

1. Navigate to the "All Dashboards" page and create a new dashboard or choose the existing one.

2. Click "Add New Widget" button.

3. The Widget Wizard will be opened. In order to  add a new widget, you need to pass all required steps.

    • Step 1. Select the template of widget (detailed description is below).

    • Step 2. Select filter from the list below or create a new filter. Search functionality helps to find the filter 
      quicker. Select other widget options: Criteria, Items, Launch or Timeline mode (if applicable for selected widget template)

    • Step 3. Enter a widget name, description and share a widget (if need). 
      A widget name should be unique for a user on the project.

4. After you have completed all steps, click the "Save" button. The new widget will be added to the dashboard on the top.

Widgets are automatically refreshed every minute.

[ ![Image](Images/userGuide/widgets/createWidget.png) ](https://youtu.be/uRY_ihUe_oU)

### Predefined widgets types

There are 15 widget templates in ReportPortal as for now:
 
- Launch statistics chart 
- Overall statistics panel 
- Launches duration chart 
- Launch execution and issue statistic 
- Project activity panel 
- Test-Cases growth trend chart 
- Investigated percentage of launches 
- Launches table 
- Unique bugs table 
- Most failed test cases table
- Failed cases trend chart 
- Non-Passed test-cases trend chart 
- Different launches comparison chart
- Flaky test cases table (TOP-20)

The template descriptions are provided below.


**LAUNCH STATISTICS CHART**

The widget can be used in two modes - Launch mode and Timeline mode:

- The widget in Launch mode shows the growth trend in the number of test cases with each selected status from run to run,
- The widget in Timeline mode shows the sum of test cases with each selected status distributed by dates.

Also you can choose different view of this widget:  Area view or Bar view.
For a deeper investigation you can use Zoom widget area functionality.

**Widget's parameters:**

- Filter: At least one filter is required
- Items: 1-150. Default meaning is 50.
- Widget Criteria: All criteria is selected by default.
- Mode: Launch or Timeline.
- View: Area/ Bar
- Widget Criteria: All criteria is selected by default.

>**Note:**
If you choose **“Total Defect type”**, the system will show the grouped statistics of a chosen standard defect type (the summary of all custom types).  
If you check a single custom defect types, the system will show just the defect type that you have chosen.
If you choose “Total Defect type” and custom defect types, the system will show and  a grouped statistics and statistic of each custom defect types.

[ ![Image](Images/userGuide/widgetTypes/launchStatisticsChart1.png) ](Images/userGuide/widgetTypes/launchStatisticsChart1.png)


**Widget view**

The widget contains agenda with selected statuses; you can click on a status to remove/add it to the chart.

The widget view in Launch mode:

- X-axis shows launches numbers and launches names (on hover).
- Y-axis shows sum of test cases with each selected statuses.

The tooltip on mouse hover over chart area shows launch details: launch name and number, launch start time and launch statistics.

Area view
[ ![Image](Images/userGuide/widgetTypes/launchStatisticsChartArea.png) ](Images/userGuide/widgetTypes/ Images/userGuide/widgetTypes/launchStatisticsChartArea.png)

Bar view
[ ![Image](Images/userGuide/widgetTypes/launchStatisticsChartBar.png) ](Images/userGuide/widgetTypes/ Images/userGuide/widgetTypes/launchStatisticsChartBar.png)

The widget view in Timeline mode:

- X-axis shows dates and weekdays.
- Y-axis shows sum of launches statistics with each selected statuses, distributed by weekdays.

The tooltip on mouse hover over the chart area shows details: date and total launches statistics. 

The widget has clickable sections; when you click on a specified section in widget, the system forwards you to launch view for appropriate selection.

Area view
[ ![Image](Images/userGuide/widgetTypes/launchStatisticsChartArea1.png) ](Images/userGuide/widgetTypes/ Images/userGuide/widgetTypes/launchStatisticsChartArea1.png)

Bar view
[ ![Image](Images/userGuide/widgetTypes/launchStatisticsChartBar1.png) ](Images/userGuide/widgetTypes/ Images/userGuide/widgetTypes/launchStatisticsChartBar1.png)

>**Note:**
The widget doesn't contain "IN PROGRESS" launches.

**OVERALL STATISTICS PANEL**

The panel shows a summary of test cases with each status for each selected launch.

**Widget's parameters:**

- Filter: At least one filter is required
- Items: 1-150. Default meaning is 50.
- Widget Criteria: All criteria is selected by default.
- Type of view: Panel view/ Donut view
- Mode All launches/ Latest launches


**Widget view**

The widget shows statistics of the All launches/or Latest launches for the chosen filter. Statistics are divided into the following sections:
-	Skipped, Passed, Failed
-	Product Bug, System Issue, Automation Bug, No Defect and To Investigate.

The statistics for every type are shown in percentage. On hover the exact number is shown for each type.
The Widget has clickable sections, when you click on specified section in widget, the system forwards you to launch view for appropriate selection.

If you chose *All launches* mode, the widget will show the statistics about all launches in the filter. To view only latest executions of each launch, you should choose *Latest launches*.

The widget can be viewed in two options as shown on pictures: Panel view 

[ ![Image](Images/userGuide/widgetTypes/PanelView.png) ](Images/userGuide/widgetTypes/PanelView.png)

or Donut view. 

[ ![Image](Images/userGuide/widgetTypes/DonutView.png) ](Images/userGuide/widgetTypes/DonutView.png)

>**Note:**
The widget doesn't contain "IN PROGRESS" launches.
 

**LAUNCHES DURATION CHART**

The Launch Duration Chart shows the duration of the selected launches.

**Widget's parameters:**

- Filter: At least one filter is required
- Items: 1-150. Default meaning is 50
- Mode All launches/ Latest launches

**Widget view**

The widget shows the duration of the filtered launches.

- X-axis shows launches duration.
- Y-axis shows launches numbers and launches names on hover.

Tooltip on mouse hover over chart area shows launch details: launch name, number and duration. 

The Widget has clickable sections, when you click on specified section in widget, the system forwards you to launch view for appropriate selection.

The Widget has two states: All launches and Latest lunches. If you chose *All launches* mode, widget will show statistic about all launches in the filter. To view only latest executions of each launch, you should choose *Latest launches*.

[ ![Image](Images/userGuide/widgetTypes/launchesDurationChart.png) ](Images/userGuide/widgetTypes/launchesDurationChart.png)
 
>**Note:**
The widget doesn't contain "IN PROGRESS" launches.


**LAUNCH EXECUTION AND ISSUE STATISTIC**

The Launch Execution and Issue Statistic chart shows the status and issues statistics for last launch of a specified range.

**Widget's parameters:**

- Filter: required

**Widget view**

The widget shows statistics of the last finished launch for the chosen filter. The statistics are divided into the following sections:

- Skipped, Passed, Failed
- Product Bug, System Issue, Automation Bug, No Defect (default and custom) and To Investigate.

The widget contains agenda with statuses, the user can click on a status to remove/add it to the chart.

Tooltip on mouse hover over chart area shows launch details: launch name, number and duration. 

The statistics for every type is shown in percentage. On hover the exact number is shown for each type.

The widget has clickable sections, when you click on a specified section in the widget, the system forwards you to the launch view for the appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/launchExecutionAndIssueStatistic.png) ](Images/userGuide/widgetTypes/launchExecutionAndIssueStatistic.png)


**PROJECT ACTIVITY PANEL**

The widget shows all activities occurring on the project.

**Widget's parameters:**

- The actions for widget are as follows: Update Project Settings, Update Defect Types, Delete Launch, Start Launch, Finish Launch, Share Widget, Dashboard, Unshare Widget, Dashboard, Post Issue to BTS, Add, Register User, Update BTS. By default all actions are checked.

- Items: 1-150. Default meaning is 50.

- Type user name: By default all user's activities. 

**Widget view**

The actions on the widget are present in a table, separated by days. Action messages have the following format:

>   *Member (name) did action.*  
>   *Time - displayed in 'time ago' format (i.e. "10 minutes ago"). On mouse hover, the system should display accurate action time.)*

[ ![Image](Images/userGuide/widgetTypes/projectActivityPanel.png) ](Images/userGuide/widgetTypes/projectActivityPanel.png)


**TEST-CASES GROWTH TREND CHART**

The widget can be used in two modes - Launch mode and Timeline mode:

- The widget in the Launch mode shows the increment of test-cases from run to run,
- The widget in the Timeline mode shows the increment of test-cases distributed by dates (in launches with the largest number of test-cases per day).

**Widget's parameters:**

- Filter: At least one filter is required
- Items: 1-150. Default meaning is 50.
- Mode: Launch or Timeline.

**Widget view**

The widget view in Launch mode:

- X-axis shows launches numbers and launches names on hover.
- Y-axis shows the increment of test-cases.

The tooltip on mouse hover over the chart area shows launch details: launch name and number, launch start time and launch statistics - total number of test cases and test cases growth.

[ ![Image](Images/userGuide/widgetTypes/testCasesGrowthTrendChart.png) ](Images/userGuide/widgetTypes/testCasesGrowthTrendChart.png)

The widget view in Timeline mode:

- X-axis shows dates and weekdays.
- Y-axis shows the increment of test-cases in launches with the largest number of test-cases per day.

The tooltip on mouse hover over the chart area shows launch details: date and launch statistics - total number of test cases and test cases growth.

The widget has clickable sections, when you click on a specific section in the widget, the system forwards you to the launch view for the appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/testCasesGrowthTrendChartTimeline.png) ](Images/userGuide/widgetTypes/testCasesGrowthTrendChartTimeline.png)

>**Note:**
The widget doesn't contain "IN PROGRESS" launches.


**INVESTIGATED PERCENTAGE OF LAUNCHES**

The widget can be used in two modes - Launch mode and Timeline mode:

- The widget in the Launch mode shows the percentage of "Investigated" and "To Investigate" items by launch to sum (Product Bugs + Auto Bugs + System Issues + To Investigates).
- The widget in the Timeline mode shows the percentage of "Investigated" and "To Investigate" items to sum (Product Bugs + Auto Bugs + System Issues + To Investigates) in all runs per day, distributed by dates.

**Widget's parameters:**

- Filter: At least one filter is required.
- Items: 1-150. Default meaning is 50.
- Mode: Launch or Timeline. Default meaning is Launch mode.

**Widget view**

The widget contains agenda with "To Investigate" and "Investigated" labels.

The widget view in Launch mode:

- X-axis shows launches numbers and launches names on hover.
- Y-axis shows percent of "Investigated" and "To Investigate" items to sum. (Product Bugs + Auto Bugs + System Issues + To Investigates)

The tooltip on mouse hover over the chart area shows launch details: launch name, number, launch start time and "percentage of "Investigated" or "To Investigate" items.

[ ![Image](Images/userGuide/widgetTypes/investigatedPercentageOfLaunches.png) ](Images/userGuide/widgetTypes/investigatedPercentageOfLaunches.png)

The widget view in Timeline mode:

- X-axis shows dates and weekdays.
- Y-axis shows a percent of "Investigated" and "To Investigate" items to sum (Product Bugs + Auto Bugs + System Issues + No Defects + To Investigates) distributed by dates.

The tooltip on mouse hover over the chart area shows launch details: date and percentage of "Investigated" or "To Investigate" items.

The widget has clickable sections, when you click on a specific section in the widget, the system forwards you to the launch view for the appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/investigatedPercentageOfLaunchesTimeline.png) ](Images/userGuide/widgetTypes/investigatedPercentageOfLaunchesTimeline.png)

>**Note:**
The widget doesn't contain "IN PROGRESS" launches.


**LAUNCHES TABLE**

The widget shows a configurable table of launches.

**Widget's parameters:**

 - The widget criteria is as follows: Total, Passed, Failed, Skipped, Product Bug, Automation Bug, System Issue, To Investigate, Tags, User, Description, Start time, Finish time. All criteria is selected by default. To specify them, uncheck unnecessary items in "Criteria for Widget".
 - Items: 1-150. Default meaning is 50.

**Widget view**

The widget has a table view.

The widget has clickable elements "launch name", "owner", "tags", and "number of items"; when you click on specific elements in the widget, the system forwards you to the launch view for the appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/launchesTable.png) ](Images/userGuide/widgetTypes/launchesTable.png)

>**Note:**
The widget doesn't contain "IN PROGRESS" launches.


**UNIQUE BUGS TABLE**

The widget shows real identified bugs, posted to the Bug Tracking System from ReportPortal, and existing bugs, that were added to the items on ReportPortal.

**Widget's parameters:**

  - Filter: At least one filter is required
  - Items: 1-150. Default meaning is 10.

**Widget view**

The widget has a table view and bugs that are found are then sorted by the date they were posted or added.

The widget has the following data displayed:

- Bug ID  -  links to the issue in Bug Tracking System.
- Found in - links to the test item, to which the bug was posted/added.
- Submit date  - date the bug was submitted/added. Time is displayed in 'time ago' format (i.e. "10 minutes ago"). On mouse hover the system should display accurate action time.
- Submitter  - user, who submitted/added the bug.

[ ![Image](Images/userGuide/widgetTypes/uniqueBugsTable.png) ](Images/userGuide/widgetTypes/uniqueBugsTable.png)

>**Note:**
The bugs from launches "IN PROGRESS" are not shown on the widget.
In case a bug is found in multiple items, all of items will be listed in "Found in" column.


**MOST FAILED TEST-CASES TABLE**

The widget contains a table with statistical information about the TOP-20 most problematic test cases.

**Widget's parameters:**

 - The widget criteria is as follows: Failed, Skipped, Product Bug, Automation Bug, System Issue, No Defect. Failed is selected by default.

 - Launches count: 2-150. By default, "Launches count" is 30.

 - Launch name: Is required.
 
 - Include /Exclude  Before and After methods

**Widget view**

The widget has a table view with the following data displayed:

- Test Item name - link to the Step level of the last launch
- Failed - count of found failed results
- Last failure - date and time of last run, when the test item was failed, displayed in 'time ago' format (i.e. "10 minutes ago").
On mouse hover the system will display accurate start times.

[ ![Image](Images/userGuide/widgetTypes/mostFailureTestCasesTable.png) ](Images/userGuide/widgetTypes/mostFailureTestCasesTable.png)

>**Note:**
The widget contains statistics of the most problematic tests cases in all launches, except "IN PROGRESS" and "INTERRUPTED" launches.


**FAILED CASES TREND CHART**

The widget shows the trend of growth in the number of failed test cases (Product Bugs + Auto Bugs + System Issues + No Defects + To Investigates) from run to run.

**Widget's parameters:**

 - Filter.
 - Items: 1-150. Default meaning is 50.

**Widget view**

The widget contains agenda: "Failed".

- X-axis shows launches numbers and launches names on hover.
- Y-axis shows number of Failed issues (sum of Product Bugs + Auto Bugs + System Issues + No Defects + To Investigates).

The tooltip on mouse hover over the chart area shows launch details: launch name and number, launch start time and number of failed test cases.

[ ![Image](Images/userGuide/widgetTypes/failedCasesTrendChart.png) ](Images/userGuide/widgetTypes/failedCasesTrendChart.png)

>**Note:**
The widget doesn't contain "IN PROGRESS" launches.


**NON-PASSED TEST-CASES TREND CHART**

The widget shows the percent ratio of non-passed test cases "Failed + Skipped" and "Total" cases from run to run.

**Widget's parameters:**

To configure the widget, click "Add New Widget" button on the dashboard header, then select a template and specify the following settings on the second step:

- Filter.
- Items: 1-150. Default meaning is 50
 
**Widget view**

The widget contains agenda: % (Failed + Skipped) / Total.

- X-axis shows launches numbers and launches names on hover.
- Y-axis shows percent of sum Failed + Skipped test cases to Total.

The tooltip on mouse hover over the chart area shows launch details: launch name and number, launch start time and percentage of non-passed cases.

[ ![Image](Images/userGuide/widgetTypes/nonPassedTestCasesTrendChart.png) ](Images/userGuide/widgetTypes/nonPassedTestCasesTrendChart.png)

>**Note:**
The widget doesn't contain "IN PROGRESS" launches.


**DIFFERENT LAUNCHES COMPARISON CHART**

The widget allows you to compare statistics for the 2 last launches side by side.

**Widget's parameters:**

- Filter.

**Widget view**

- X-axis shows launches numbers and launches names on hover.
- Y-axis shows percentage of test-cases by statuses.

The widget contains agenda with statuses, the user can click on a status to remove/add it to the chart.

The tooltip on mouse hover over the chart area shows launch details: launch name and number, launch start times and percentage of test cases of a particular type.

The widget has clickable sections, when you click on specific sections in widget, the system forwards you to the launch view for the appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/differentLaunchesComparisonChart.png) ](Images/userGuide/widgetTypes/differentLaunchesComparisonChart.png)

>**Note:**
The widget doesn't contain 'IN PROGRESS" launches.

**FLAKY TEST CASES TABLE (TOP-20)**
Shows the TOP-20 the most flaky test cases within the specified previous launches. The widget defines test cases with the most high percentage of switching their status in the execution. So that you can click on the test cases and be redirected to the last test item in execution to check the reasons. 

**Widget's parameters:**

- Launches count: 2-150. Default meaning is 30.

- Launch name. Is required

- Include /Exclude  Before and After methods

**Widget view**

The widget has a table view with the following data displayed:

- Test Item name - link to the Step level of the last launch

- Switches - count of found results with often switches;

- % of Switches - the per cent of the fact switches and the possible;

- Last switch - date and time of a last run, when the test item switches the status, displayed in 'time ago' format (i.e. "10 minutes ago").

On mouse hover the system will display accurate start times.

[ ![Image](Images/userGuide/widgetTypes/flakyTestCasesTableWidget.png) ]( Images/userGuide/widgetTypes/flakyTestCasesTableWidget.png)


