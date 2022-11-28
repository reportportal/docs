---
sidebar_position: 5
sidebar_label: Launch statistics chart
---

# Launch statistics chart

The widget can be used in two modes - Launch mode and Timeline mode:

- The widget in Launch mode shows the growth trend in the number of test cases with each selected status from run to run,
- The widget in Timeline mode shows the sum of test cases with each selected status distributed by dates.

Also, you can choose a different view of this widget:  Area view or Bar view.
For a deeper investigation, you can use the Zoom widget area functionality.

**Widget's parameters:**

- Filter: At least one filter is required
- Items: 1-150. The default meaning is 50.
- Widget Criteria: All criteria are selected by default.
- Mode: Launch or Timeline.
- View: Area/ Bar
- Widget Criteria: All criteria are selected by default.

>**Note:**
If you choose **“Total Defect type”**, the system will show the grouped statistics of a chosen standard defect type (the summary of all custom types).  
If you check a single custom defect type, the system will show just the defect type that you have chosen.
If you choose “Total Defect type” and custom defect types, the system will show and grouped statistics and statistics of each custom defect types.

![Image](img/widget-types/launchStatisticsChart1.png)

**Widget view**

The widget contains agenda with selected statuses; you can click on a status to remove/add it to the chart.

The widget view in Launch mode:

- The X-axis shows launches numbers and launches names (on hover).
- Y-axis shows the sum of test cases with each selected statuses.

The tooltip on mouse hover over chart area shows launch details: launch name and number, launch start time and launch statistics.

Area view
![Image](img/widget-types/launchStatisticsChartArea.png)

Bar view
![Image](img/widget-types/launchStatisticsChartBar.png)

The widget view in Timeline mode:

- The X-axis shows dates and weekdays.
- Y-axis shows the sum of launches statistics with each selected statuses, distributed by weekdays.

The tooltip on mouse hover over the chart area shows details: date and total launches statistics.

The widget has clickable sections; when you click on a specified section in the widget, the system forwards you to launch view for appropriate selection.

Area view
![Image](img/widget-types/launchStatisticsChartArea1.png)

Bar view
![Image](img/widget-types/launchStatisticsChartBar1.png)

>**Note:**
The widget doesn't contain "IN PROGRESS" launches.