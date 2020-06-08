## History of launches

### Historical trend of executions

The historical trend of executions represents your history view for the list of test items. This feature can help you to find 
the most unstable test cases in your suites/ launches/ builds.

To see a table of the historical trend of executions, navigate to the "Launches" page and drill down to launch structure/ or launch statistics.

### History table: Test Case ID or Unique ID

Report Portal acquires a lot of results and you can choose by which parameter you want the history of test results to get defined.
There are 2 options:

* by [Unique ID](https://reportportal.io/docs/Unique-ID-(deprecated/ )
* by [Test Case ID](https://reportportal.io/docs/Test-case-ID) 

#### Difference between Test Case ID  and Unique ID

Please find the description of what Test Case ID and Unique  by the links:
* [UUID](https://reportportal.io/docs/Unique-ID-(deprecated/ )
* [Test Case ID](https://reportportal.io/docs/Test-case-ID) 

They are both a unique identifiers of executions uniquness.

But Unique ID generates on the base a launch name where test execution is situated.
And Test Case ID usually doesn't contain a test execution name. 

So that the main difference between a history table based on Unique ID and Tets Case ID is that:

* History on UUID: history shows only executions from launches with the same name
* History on Test Case ID: history shows executions from all launches.

#### Unique ID history

1. Take the ReportPortal release version 5.2.2 or higher. docker-compose.yml

2. Add an environment variable to the service-API service:

```
RP_ENVIRONMENT_VARIABLE_HISTORY_OLD=true
```

3. Redeploy ReportPortal

#### Test Case ID history

Run ReportPortal without env variable.


### History table

Where you can find History table.

Drill down to the Step view (test executions list). 

Click the "History" button.

You will see a historical trend in a table.

History trends have the following color scheme:

   * Red - indicates the launches with failed or interrupted cases

   * Green - indicates passed launches

   * Yellow – indicates the launches with several equal test items present within a required level

   * Grey - indicates the test item with no descendants in this run.

   * Animated - still without state [in progress]

You can select the depth of history: 3, 5, 10, 15, 20, 25 or 30 launches from the "History
Depth" drop-down menu. 

There are two options for a History table:

- history for all launches
- history for launches with the same name

The history table is based on the [Test Case ID](https://reportportal.io/docs/A-test-item%3Euniqueid)

#### History for all launches

**How you can open a history table with execution from all launches?**

- Open All launches tab
- Click on the Launch name/ Total/ Passed/ Failed/ Skipped /Product Bug/ Auto Bug/ System Issues/ To investigate statistics
- Click on the button 'History'
- Choose the option '**All launches'** in the drop-down 'BASE'

**What information is shown on the table?**

On the history table, you can see the first 20 test cases their last 10 (or 3/5/10/15/20/25/30) executions from all launches on the project.
Each column on the history table is equaled to a number of the execution.

Let's see an example.

>**Use case:** You have a test suite for the regression. You want to perform regression testing in different environments. For those reasons, you are running your regression suite on macOS, Windows, and Linux. 
After test runs finish, you will be able to see on the All launches tab on ReportPortal 3 launches with different names: *Regression_MacOS, Regression_Win, Regression_Linux*.
If you click on the Total statistic for  the launch *Regression_MacOS* and click on the 'History' button, you will see a History table with all test cases in the suite and their 10 last executions from all launches on the project (e.g. from *Regression_MacOS, Regression_Win, Regression_Linux*)
>
> 
> | Test case name  | Execution #3 | Execution #2 | Execution #1|
> | ------------- | ------------- |------------- |------------- |
> | Test 1 | Passed  |Failed   |Passed  |
> | Test 2  | Failed  |Passed |Passed  |
> | Test 3  | Failed |Passed  |Passed  |
>
> When you hover one of the cells on the table, you will be able to see to what launch this execution belongs to.

[ ![HistoryTable](Images/userGuide/historyExecution/HistoryTable.png) ](https://youtu.be/WYytkzpzJps)


#### History table for launches with the same name

**How you can open a history table with execution from all launches?**

- Open All launches tab
- Click on the Launch name/ Total/ Passed/ Failed/ Skipped /Product Bug/ Auto Bug/ System Issues/ To investigate statistics
- Click on the button 'History'
- Choose the option **'Launches with the same name'** in the drop-down 'BASE'

**What information is shown on the table?**

On the history table, you can see the first 20 test cases their last 10 (or 3/5/10/15/20/25/30) executions from only launches with the same name on the project.
Each column on the history table is equaled to a number of the execution.

Let's see an example.

>**Use case:** You have a test suite for the regression. You want to perform regression testing in different environments. For those reasons, you are running your regression suite on macOS, Windows, and Linux. 
After test runs finish, you will be able to see on the All launches tab on ReportPortal 3 launches with different names: *Regression_MacOS, Regression_Win, Regression_Linux*.
If you click on the Total statistic for the launch *Regression_MacOS* and click on the 'History' button, you will see a History table with all test cases in the suite and their 10 last executions from all launches on the project (e.g. from *Regression_MacOS, Regression_Win, Regression_Linux*). When you choose the option **'Launches with the same name'**, you will see executions only from launches with name *Regression_MacOS*.
>
> 
> | Test case name  | Execution #2|
> | ------------- | ------------- |
> | Test 1 |Passed  |
> | Test 2  | Passed  |
> | Test 3  | Passed  |
>

[ ![HistoryTable](Images/userGuide/historyExecution/HistoryTable.png) ](https://youtu.be/Y5eXSa3bA8w)

#### Actions 

From the History table you will be able to perform the next actions:

- edit items
- [edit defect](https://reportportal.io/docs/Investigation-of-failure%3Edefect-types-and-comments)
- [post issue](https://reportportal.io/docs/Investigation-of-failure%3Epost-bug-to-bug-tracking-system)
- [link / unlink issue](https://reportportal.io/docs/Investigation-of-failure%3Eadd-link-of-existed-defect-)
- delete items

For that:
- Hover the cell on the history table
- Click on the checkbox
- Check needed item 
- Click on the button 'Action'
- Choose needed action

### Compare launch results with the filter

You can add a custom column with the latest filter results to the History table. 

>**Use case:** You have a test suite for the regression. You run this suite for different versions (version 1, version2, version 3).
When you run tests for the new version you need to find out if new bugs appeared in it in comparison with the previous version.
You can create a filter that includes test executions for the previous version (version 2).
Then you can open a history table for the launch with results for version 3 and add a custom column with the filter 'Version 2'.
The system adds the latest executions from filter 'Version 2' and you will be able to compare the latest results for version 2 and version 3.

[ ![HistoryTable](Images/userGuide/historyExecution/HistoryTable.png) ](https://youtu.be/hr4IQ5UBpM8)


### Historical line of executions

The historical line of executions represents the statuses of the current test case in history.

You can see the historical line of executions at the Log level. History is shown only for the 
current item and there are 10 items max in history. 
You can click on the item in the history and check the results in previous executions, read 
the comments, find the bugs, posted to this fail.
This feature will save you time and help you to understand the reason for your failure.

History line has the following color scheme:

 * Red - failed or interrupted. Contains a link to a related bug (it has it)

 * Grey - skipped. Contains a link to a related bug (it has it)

 * Green - passed. Contains only execution number

 * White with cross symbol - absent in particular run

 * Orange - a few items with the same name are present

 * Animated - still without state [in progress]

You can mark the current method or case with a defect type, and write a comment
using the defect editor block.

To come into a certain execution of an appropriate launch, hit a launch number 
above the item.

[ ![Image](Images/userGuide/historyExecution/historicalLine.png) ](https://youtu.be/cmpORmbGAds)

Also on a History line, you can see an "i" label, it means that the item with this label has a defect comment or/and a link to the Bug Tracking System.


### Test Item actions history

Test Item actions history will show you the history of actions, which have been made to a
certain test item. You can see the kind of activity, and who performed it.

The following actions are shown on the history of actions:

>   user changed defect type of test item

>   user posted a comment to the test item

>   user posted a bug to the Bug Tracking System or added a link to the existing in Bug Tracking System issue.

>   analyzer changed defect type of test item based on the item (where "item" is a link to a log view of an item which has been chosen by Analyzer as the most relevant result)

>   analyzer posted a comment to the test item

>   analyzer posted a bug to the Bug Tracking System or added a link to the existing in the Bug Tracking System issue. 

To see the history of actions, navigate to a certain child item. By default you
will see the last action in one line.

Use spoiler to maximize actions history:

[ ![Image](Images/userGuide/historyExecution/actionHistory.png) ](https://youtu.be/Z-gPwjxWHTQ)
