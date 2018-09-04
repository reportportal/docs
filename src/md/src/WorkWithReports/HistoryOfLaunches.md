##History of launches

### Historical trend of executions

Historical trend of executions represents you history view for list of test items. This feature can help you to find 
the most unstable test cases in your suites.

To see a table of historical trend of executions, navigate to the "Launches" page and drill down to launch structure.

Then click the "History" button.

You will see a historical trend in a table.

History trends have the following color scheme:

   * Red - indicates the launches with failed or interrupted cases

   * Green - indicates passed launches

   * Yellow – indicates the launches with several equal test items present within a required level

   * Grey - indicates the test item with no descendants in this run.

   * Animated - still without state [in progress]

You can select the depth of history: 3, 5, 10, 15, 20, 25 or 30 launches from the "History
Depth" drop-down menu. 

>**Note:**

>In case of several equal test items are present within the required level the icon with corresponding tooltip will be shown.

>Description and tags are not displayed for items in the History table but can be visible in item's tooltip.

[ ![Image](Images/userGuide/historyExecution/historicalTrend.png) ](https://youtu.be/p_rUnOArZjk)


### Historical line of executions

Historical line of executions represents you the statuses of current test case in history.

You can see the historical line of executions at the Log level. History is shown only for the 
current item, and there are 10 items max in history. 
You can click on the item in the history and check the results in previous executions, read 
the comments, find the bugs, posted to this fail.
This feature will save your time and help you to understand the reason of your fail.

History line has the following color scheme:

 * Red - failed or interrupted. Contains link to related bug (if has it)

 * Grey - skipped. Contains link to related bug (if has it)

 * Green - passed. Contains only execution number

 * White with cross symbol - absent in particular run

 * Orange - a few items with the same name are present

 * Animated - still without state [in progress]

You can mark the current method or case with a defect type, and write a comment
using the defect editor block.

To see the test case duration, hover the mouse over the panel on the historical
line.

To come into a certain execution of an appropriate launch, hit a launch number 
above the item.

[ ![Image](Images/userGuide/historyExecution/historicalLine.png) ](https://youtu.be/cmpORmbGAds)

Also on a History line you can see a "i" label, it means that the item with this label has a defect comment or/and a link to the Bug Tracking System.

In case of one of executions of test case have a possitive growth of duration a label with percentage of growth is shown on History line as well. A duration growth is calculated as:

(Duration of an actual test case /Duration of the previous one)* 100% - 100%

Duration growth is calculated only for test cases with status Passed or Failed that are available on history line (without eye-symbol on the panel). When previous execution/s is/are absent (or has eye-symbol, or has status Skipped/In progress), the duration growth should be calculated as:

(Duration of an actual test case /Duration of the last test case with Passed or Failed status before absent (or eye-symbol, or Skipped/In progress) test case/s) * 100% - 100%

A tooltip in a mouse hover show the full value, in case a value growth has more than five symbol.

[ ![Image](Images/userGuide/historyExecution/DurationFluctuation.png) ](Images/userGuide/historyExecution/DurationFluctuation.png)

### Test Item actions history

Test Item actions history will show you the history of actions, which have been made to a
certain test item. You can see the kind of activity, and who performed it.

The following actions are shown on history of actions:

>   user changed defect type of test item

>   user posted a comment to the test item

>   user posted a bug to the Bug Tracking System or added link to the existing in Bug Tracking System issue.

>   analyzer changed defect type of test item

>   analyzer posted a comment to the test item

>   analyzer posted a bug to the Bug Tracking System or added link to the existing in Bug Tracking System issue. 

To see the history of actions, navigate to a certain child item. By default you
will see last action in one line.

Use spoiler to maximize actions history:

[ ![Image](Images/userGuide/historyExecution/actionHistory.png) ](https://youtu.be/Z-gPwjxWHTQ)
