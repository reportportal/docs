Widget Creation
-------------

Widgets - special graphical control elements, that were designed to provide a simple and 
easy-to-use way of giving and analyzing trends of your automation.

Widgets can be added to dashboards on "Dashboards" tab. Widgets will be visible within the project, they are created.

### Create widget

To create a new widget, perform the following steps:

1. Navigate to "All Dashboards" page and create a new dashboard or choose the existing one.

2. Click "Add New Widget" button.

3. Widget Wizard will be opened. You should pass all steps to add a new widget.

4. Step1. Select the template of widget (detailed description is below).

5. Step2. Select filter from the list below or create a new filter. Search functionality helps to find the filter 
quicker.
  Select other widget options: Criteria, Items, Launch or Timeline mode (if applicable for selected widget template)

6. Step3. Enter a widget name, description and share a widget (if need). 
A widget name should be unique for a user on the project.

7. After you have completed all steps, click "Save" button. The new widget will be added to the dashboard on the top.

Widgets are automatically refreshed every minute.

[ ![Image](Images/userGuide/widgets/createWidget.png) ](https://youtu.be/uRY_ihUe_oU)

### Predefined widgets types

There are 15 widget templates in Report Portal as for now:
 
- Launch statistics line chart   
- Launch statistics trend chart 
- Overall statistics panel 
- Launches duration chart 
- Launch execution and issue statistic 
- Project activity panel 
- Test-Cases growth trend chart 
- Investigated percentage of launches 
- Launches table 
- Unique bugs table 
- Most failure test-cases table
- Failed cases trend chart 
- Non-Passed test-cases trend chart 
- Different launches comparison chart
- Product status widget

The description of them is provided below.


**LAUNCH STATISTICS LINE CHART**

The widget can be used in two modes - Launch mode and Timeline mode:

- widget in Launch mode shows the growth trend in the number of test cases with each selected statuses from run to run,
- widget in Timeline mode shows sum of test cases with each selected statuses distributed by dates.

**Widget's parameters:**

- Filter: required
- Items: 1-150. Default meaning is 50.
- Criteria for widget: all criteria are selected by default.
- Mode: Launch or Timeline.

**Widget view**

Widget contains agenda with selected statuses; you can click on a status to remove/add it to the chart.

Widget view in Launch mode:

- X-axis shows launches numbers and launches names (on hover).
- Y-axis shows sum of test cases with each selected statuses.

Tooltip on mouse hover over chart area shows launch details: launch name and number, launch start time and launch statistics.

[ ![Image](Images/userGuide/widgetTypes/launchStatisticsLineChart.png) ](Images/userGuide/widgetTypes/launchStatisticsLineChart.png)


Widget view in Timeline mode:

- X-axis shows dates and weekdays.
- Y-axis shows sum of launches statistics with each selected statuses, distributed by weekdays.

Tooltip on mouse hover over chart area shows details: date and total launches statistics. 

Widget has clickable sections; when you click on specified section in widget, the system forwards you to launch view for appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/launchStatisticsLineChartTimeline.png) ](Images/userGuide/widgetTypes/launchStatisticsLineChartTimeline.png)

>**Note:**
Widget doesn't contain IN PROGRESS launches.


**LAUNCH STATISTICS TREND CHART**

The widget can be used in two modes - Launch mode and Timeline mode:

- widget in Launch mode shows the growth trend in the number of test cases with each selected statuses from run to run,
- widget in Timeline mode shows sum of test cases with each selected statuses distributed by dates.

**Widget's parameters:**

- Filter: required
- Items: 1-150. Default meaning is 50.
- Criteria for widget: all criteria are selected by default.
- Mode: Launch or Timeline.Timeline.

**Widget view**

Widget contains agenda with selected statuses; you can click on a status to remove/add it to the chart.

Widget view in Launch mode:

- X-axis shows launches numbers and launches names on hover.
- Y-axis shows sum of test cases with each selected statuses.

Tooltip on mouse hover over chart area shows launch details: launch name and number, launch start time and launch statistics. 

[ ![Image](Images/userGuide/widgetTypes/launchStatisticsTrendChart.png) ](Images/userGuide/widgetTypes/launchStatisticsTrendChart.png)

Widget view in Timeline mode:

- X-axis shows dates and weekdays.
- Y-axis shows sum of launches statistics with each selected statuses, distributed by weekdays.

Tooltip on mouse hover over chart area shows details: date and total launches statistics. 

Widget has clickable sections, when you click on specified section in widget, the system forwards you to launch view for appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/launchStatisticsTrendChartTimeline.png) ](Images/userGuide/widgetTypes/launchStatisticsTrendChartTimeline.png)

>**Note:**
Widget doesn't contain IN PROGRESS launches.


**OVERALL STATISTICS PANEL**

Panel shows summary of test cases with each statuses in the selected launches.

**Widget's parameters:**

- Filter: required
- Items: 1-150. Default meaning is 50.
- Criteria for widget: all criteria are selected by default.
- Type of view: Panel view/ Donut view
- Mode All launches/ Latest launches


**Widget view**

Widget shows statistics of the All launches/or Latest launches in chosen filter. Statistics is divided into 2 sections:
-	Skipped, Passed, Failed
-	Product Bug, System Issue, Automation Bug, No Defect and To Investigate.

Statistics for every type is shown in percentage. On hover the exact number is shown for the curtain type.
Widget has clickable sections, when you click on specified section in widget, the system forwards you to launch view for appropriate selection.

If you chose *All launches* mode, widget will show statistic about all launches in the filter. To view only latest executions of each launch, you should choose *Latest launches*.

Widget can be viewed in two options as shown on pictures: Panel view 

[ ![Image](Images/userGuide/widgetTypes/PanelView.png) ](Images/userGuide/widgetTypes/PanelView.png)

or Donut view. 

[ ![Image](Images/userGuide/widgetTypes/DonutView.png) ](Images/userGuide/widgetTypes/DonutView.png)

>**Note:**
Widget doesn't contain IN PROGRESS launches.
 

**LAUNCHES DURATION CHART**

Launch duration chart shows the duration of the selected launches.

**Widget's parameters:**

- Filter: required
- Items: 1-150. Default meaning is 50
- Mode All launches/ Latest launches

**Widget view**

Widget shows the duration of the filtered launches.

- X-axis shows launches duration.
- Y-axis shows launches numbers and launches names on hover.

Tooltip on mouse hover over chart area shows launch details: launch name, number and duration. 

Widget has clickable sections, when you click on specified section in widget, the system forwards you to launch view for appropriate selection.

Widget has two states: All launches and Latest lunches. If you chose *All launches* mode, widget will show statistic about all launches in the filter. To view only latest executions of each launch, you should choose *Latest launches*.

[ ![Image](Images/userGuide/widgetTypes/launchesDurationChart.png) ](Images/userGuide/widgetTypes/launchesDurationChart.png)
 
>**Note:**
Widget doesn't contain IN PROGRESS launches.


**LAUNCH EXECUTION AND ISSUE STATISTIC**

Launch execution and issue statistic shows the status and issues statistics for last launch of specified range.

**Widget's parameters:**

- Filter: required

**Widget view**

Widget shows statistics of the last finished launch in chosen filter. Statistics is divided into 2 sections:

- Skipped, Passed, Failed
- Product Bug, System Issue, Automation Bug, No Defect (default and custom) and To Investigate.

Widget contains agenda with statuses, the user can click on a status to remove/add it to the chart.

Tooltip on mouse hover over chart area shows launch details: launch name, number and duration. 

Statistics for every type is shown in percentage. On hover the exact number is shown for the curtain type.

Widget has clickable sections, when you click on specified section in widget, the system forwards you to launch view for appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/launchExecutionAndIssueStatistic.png) ](Images/userGuide/widgetTypes/launchExecutionAndIssueStatistic.png)


**PROJECT ACTIVITY PANEL**

Widget shows all activities occurring on the project.

**Widget's parameters:**

- Actions for Widget: Update Project Settings, Update Defect Types, Delete Launch, Start Launch, Finish Launch, Share Widget, Dashboard, Unshare Widget, Dashboard, Post Issue to BTS, Add, Register User, Update BTS. By default all actions are checked.

- Items: 1-150. Default meaning is 50.

- Type user name: By default all user's activities. 

**Widget view**

Actions on the widget are present in a table, separated by days. Action messages have the following format:

>   *Member (name) did action.*  
>   *Time - displayed in 'time ago' format (i.e. "10 minutes ago"). On mouse hover, the system should display accurate action time.)*

[ ![Image](Images/userGuide/widgetTypes/projectActivityPanel.png) ](Images/userGuide/widgetTypes/projectActivityPanel.png)


**TEST-CASES GROWTH TREND CHART**

The widget can be used in two modes - Launch mode and Timeline mode:

- widget in Launch mode shows the increment of test-cases from run to run,
- widget in Timeline mode shows the increment of test-cases distributed by dates (in launches with the largest number of test-cases per day).

**Widget's parameters:**

- Filter: required.
- Items: 1-150. Default meaning is 50.
- Mode: Launch or Timeline.

**Widget view**

Widget view in Launch mode:

- X-axis shows launches numbers and launches names on hover.
- Y-axis shows the increment of test-cases.

Tooltip on mouse hover over chart area shows launch details: launch name and number, launch start time and launch statistics - total number of test cases and test cases growth.

[ ![Image](Images/userGuide/widgetTypes/testCasesGrowthTrendChart.png) ](Images/userGuide/widgetTypes/testCasesGrowthTrendChart.png)

Widget view in Timeline mode:

- X-axis shows dates and weekdays.
- Y-axis shows the increment of test-cases in launches with the largest number of test-cases per day.

Tooltip on mouse hover over chart area shows launch details: date and launch statistics - total number of test cases and test cases growth.

Widget has clickable sections, when you click on specific section in widget, the system forwards you to launch view for appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/testCasesGrowthTrendChartTimeline.png) ](Images/userGuide/widgetTypes/testCasesGrowthTrendChartTimeline.png)

>**Note:**
Widget doesn't contain IN PROGRESS launches.


**INVESTIGATED PERCENTAGE OF LAUNCHES**

The widget can be used in two modes - Launch mode and Timeline mode:

- widget in Launch mode shows percentage of "Investigated" and "To Investigate" items by launch to sum of (Product Bugs + Auto Bugs + System Issues + To Investigates).
- widget in Timeline mode shows percentage of "Investigated" and "To Investigate" items to sum of (Product Bugs + Auto Bugs + System Issues + To Investigates) in all runs per day, distributed by dates.

**Widget's parameters:**

- Filter: required
- Items: 1-150. Default meaning is 50.
- Mode: Launch or Timeline. Default meaning is Launch mode.

**Widget view**

Widget contains agenda with "To Investigate" and "Investigated" labels.

Widget view in Launch mode:

- X-axis shows launches numbers and launches names on hover.
- Y-axis shows percent of "Investigated" and "To Investigate" items to sum of (Product Bugs + Auto Bugs + System Issues + To Investigates).

Tooltip on mouse hover over chart area shows launch details: launch name and number, launch start time and percentage of "Investigated" or "To Investigate" items.

[ ![Image](Images/userGuide/widgetTypes/investigatedPercentageOfLaunches.png) ](Images/userGuide/widgetTypes/investigatedPercentageOfLaunches.png)

Widget view in Timeline mode:

- X-axis shows dates and weekdays.
- Y-axis shows percent of "Investigated" and "To Investigate" items to sum of (Product Bugs + Auto Bugs + System Issues + No Defects + To Investigates), distributed by dates.

Tooltip on mouse hover over chart area shows launch details: date and percentage of "Investigated" or "To Investigate" items.

Widget has clickable sections, when you click on specific section in widget, the system forwards you to launch view for appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/investigatedPercentageOfLaunchesTimeline.png) ](Images/userGuide/widgetTypes/investigatedPercentageOfLaunchesTimeline.png)

>**Note:**
Widget doesn't contain IN PROGRESS launches.


**LAUNCHES TABLE**

Widget shows the configurable table of launches.

**Widget's parameters:**

 - Criteria for widget: Total, Passed, Failed, Skipped, Product Bug, Automation Bug, System Issue, To Investigate, Tags, User, Description, Start time, Finish time. All criteria are selected by default. To specify them, uncheck unnecessary items in "Criteria for Widget".
 - Items: 1-150. Default meaning is 50.

**Widget view**

Widget has a table view.

Widget has clickable elements (launch name, owner, tags, number of items); when you click on specific element in widget, the system forwards you to launch view for appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/launchesTable.png) ](Images/userGuide/widgetTypes/launchesTable.png)

>**Note:**
Widget doesn't contain IN PROGRESS launches.


**UNIQUE BUGS TABLE**

Widget shows real identified bugs, posted to the Bug Tracking System from Report Portal, and existing bugs, that were added to the items on Report Portal.

**Widget's parameters:**

  - Filter: required.
  - Items: 1-150. Default meaning is 10.

**Widget view**

Widget has a table view, found bugs are sorted by the date they were posted or added.

Widget has the following data displayed:

- Bug ID  -  link to the issue in Bug Tracking System.
- Found in - link to the test item, to which the bug was posted/added.
- Submit date  - date the bug was submitted/added. Time is displayed in 'time ago' format (i.e. "10 minutes ago"). On mouse hover the system should display accurate action time.
- Submitter  - user, who submitted/added the bug.

[ ![Image](Images/userGuide/widgetTypes/uniqueBugsTable.png) ](Images/userGuide/widgetTypes/uniqueBugsTable.png)

>**Note:**
Bugs from launches IN PROGRESS are not shown on the widget.
In case the bug is provided for the few items, all of items will be listed in "Found in" column.


**MOST FAILURE TEST-CASES TABLE**

Widget contains table with statistical information about TOP-20 most problematic tests cases.

**Widget's parameters:**

 - Criteria for Widget: Failed, Skipped, Product Bug, Automation Bug, System Issue, No Defect. Failed is selected by default.

 - Launches count: 2-150. By default, "Launches count" is 30.

 - Launch name: required.

**Widget view**

Widget has a table view with the following data is displayed:

- Test Item name
- Find in last launch - link to the Step level of the last launch
- Failed - count of found failed results
- Last failure - date and time of last run, when the test item was failed, displayed in 'time ago' format (i.e. "10 minutes ago").
On mouse hover the system will display accurate start time.

[ ![Image](Images/userGuide/widgetTypes/mostFailureTestCasesTable.png) ](Images/userGuide/widgetTypes/mostFailureTestCasesTable.png)

>**Note:**
Widget contains statistic of most problematic tests cases in all launches, except IN PROGRESS and INTERRUPTED launches.


**FAILED CASES TREND CHART**

Widget shows the trend of growth in the number of failed test cases (Product Bugs + Auto Bugs + System Issues + No Defects + To Investigates) from run to run.

**Widget's parameters:**

 - Filter.
 - Items: 1-150. Default meaning is 50.

**Widget view**

Widget contains agenda: "Failed".

- X-axis shows launches numbers and launches names on hover.
- Y-axis shows number of Failed issues (sum of Product Bugs + Auto Bugs + System Issues + No Defects + To Investigates).

Tooltip on mouse hover over chart area shows launch details: launch name and number, launch start time and number of failed cases.

[ ![Image](Images/userGuide/widgetTypes/failedCasesTrendChart.png) ](Images/userGuide/widgetTypes/failedCasesTrendChart.png)

>**Note:**
Widget doesn't contain IN PROGRESS launches.


**NON-PASSED TEST-CASES TREND CHART**

Widget shows the percent ratio of non-passed test cases (Failed + Skipped) to "Total" cases from run to run.

**Widget's parameters:**

To configure the widget, click "Add New Widget" button on the dashboard header, select template and specify the following settings on the second step:

- Filter.
- Items: 1-150. Default meaning is 50
 
**Widget view**

Widget contains agenda: % (Failed + Skipped) / Total.

- X-axis shows launches numbers and launches names on hover.
- Y-axis shows percent of sum Failed + Skipped test cases to Total.

Tooltip on mouse hover over chart area shows launch details: launch name and number, launch start time and percentage of non-passed cases.

[ ![Image](Images/userGuide/widgetTypes/nonPassedTestCasesTrendChart.png) ](Images/userGuide/widgetTypes/nonPassedTestCasesTrendChart.png)

>**Note:**
Widget doesn't contain IN PROGRESS launches.


**DIFFERENT LAUNCHES COMPARISON CHART**

Widget allows to compare statistics for 2 last launches side by side.

**Widget's parameters:**

- Filter.

**Widget view**

- X-axis shows launches numbers and launches names on hover.
- Y-axis shows percentage of test-cases by statuses.

Widget contains agenda with statuses, the user can click on a status to remove/add it to the chart.

Tooltip on mouse hover over chart area shows launch details: launch name and number, launch start time and percentage of test cases of particular type.

Widget has clickable sections, when you click on specific section in widget, the system forwards you to launch view for appropriate selection.

[ ![Image](Images/userGuide/widgetTypes/differentLaunchesComparisonChart.png) ](Images/userGuide/widgetTypes/differentLaunchesComparisonChart.png)

>**Note:**
Widget doesn't contain IN PROGRESS launches.

**PRODUCT STATUS WIDGET**

The widget summarizes a product data in a table view widget by custom filters results. The widget shows the configurable table of launches.

[ ![Image](Images/userGuide/widgetTypes/productStatusWidget.png) ]

**Widget's parameters:**

-	Filter/s: you can choose several filters for that widget.

-	Criteria for the widget: Start time; Status; Product Bug; Auto Bug; System Issue;  To Investigate; No Defect.  All criteria are selected by default. To specify them, you can uncheck unnecessary items;

-	Number of items: 1-150. Default meaning is 10;

-	Custom column (column name/ tag prefix).  You can add custom column to view tags with chosen tag prefix.

-	 ‘Watch latest’ mode on/off: Watch latest mode is switched on by default.  

-	‘Group launches by filter’ mode  on/off:

In case of *‘Group launches by filter’ mode off*:   widget shows a list of all launches with unique names with the last increment from chosen filters only.  

In case of *‘Group launches by filter’ mode on*: system shows a list of filters.  Data of each filter is a sum of the values of latest launches that are included in certain filter.

**Widget view**
Widget has a table view. You can name the widget, add a description and share.  Widget has clickable elements, when you click on specific element in widget, the system forwards you to launch/filter view for the appropriate selection.

[ ![Video](Images/userGuide/widgetTypes/_________) ]

>**Note:**
Widget doesn't contain IN PROGRESS launches.
