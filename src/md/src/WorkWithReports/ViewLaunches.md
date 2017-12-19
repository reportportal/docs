##View launches

### Viewing information about all launches

Launch is an object, which contains your data for certain execution. Inside the launches we have test items, structured in the same way like you have it in your automation.

Launches are present in two modes – the Default mode on the "Launches" tab
and the Debug mode on the "Debug" tab.

Although both modes share almost the same set of features, the "Debug" mode is
considered to be a more private one: it is not visible to the user with the
CUSTOMER role and all the filters created there cannot be saved to
"Filters". Filters are the base for building a widget, so widget charts are
not available for the launches from the "Debug" mode.

A typical Launch structure comprises the following elements: Suite \> Test
\> Step \> Log.

However, this hierarchy is flexible. Only one restriction is applied: a step can
be under a test only.

A suite may lie under another suite.

The data in the "Launches" section is present in a table. By default, the
user sees all runs.

The "Launches" grid contains the following columns:

>   Runs (at all launches level) – Launch name / Suite name / Class name
    (depends on a drill-down level).

>   Start time – a launch start time in the "time ago" format (e.g. "10
    minutes ago"); on mouse hover the system displays the accurate start time. 

>   Duration – the launch duration. For launches in progress remaining time is shown.

>   Total – the total number of issues. It is a sum of all items with the
    Passed, Failed, Skipped and Interrupted statuses.

>   Passed – the total number of issues that were completed with the
    Passed status.

>   Failed - the total number of issues that were completed with the
    Failed status.

>   Skipped - the total number of issues that were completed with the
    Skipped status. Any Report Portal user can investigate failed and skipped
    issues with one of the following values: Product Bug, Automation
    Bug, System Issue.

>   Product Bug - a product issues; this type is selected manually.

>   Auto Bug - an automation test issues; this type is selected manually.

>   System Issue - this type is selected manually if it's a System Bugs.

>   To investigate - total number of Failed and Skipped issues that
    are left to investigate.

### Viewing all launches / latest launches 
You have two options to browse all project launches. By default system displays all launches of the project in one list in order of start time.

Also you have possibility to optimize this list. If you choose **‘Latest Launches’** option  from the drop-down list (All Launches\ Latest Launches) at the top of the page, it will allow you to roll up the list  to latest launches only. 

In other words, when that option is turn on, you will see on a launches view only launches with unique names with the last increment (#number). 

*For example, there are launches with names ‘Demo#1’,   ‘Demo#2’, ‘Demo#3’ on a launches view. If you choose ‘Latest Launches’ option, the system will display ‘Demo#3’ launch only.*

In a Latest Launches view you may perform any regular actions: add filter, perform actions from Actions menu, edit tags, and edit description.


### Viewing launch statistics

The data in the "Launches" table is present as links in the following
columns:

>   Launch name – this link gives an opportunity to drill down a specific
>       launch.

>   *Total* – this link takes you to the Test Cases view and shows all test
>       cases within the launch in one table.

>   *Passed* - this link takes you to the Test Cases view and shows all passed
>       test cases within the launch in one table.

>   *Failed* - this link takes you to the Test Cases view and shows all failed
>       test cases within the launch in one table.

>   *Skipped* - this link takes you to the Test Cases view and shows all
>       skipped test cases within the launch in one table.

>   *Product Bug* - this link takes you to the Test Cases view and shows all
>       failed test cases marked as "Product Bugs" in the launch in one table.

>   *Automation Bug* - this link takes you to the Test Cases view and shows
>       all failed test cases marked as "Automation Bugs" in the launch in one table.

>   *System Issue* - this link takes you to the Test Cases view and shows all
>       failed test cases marked as "System Issues" in the launch in one table.

>   *To Investigate* - this link takes you to the Test Cases view and shows
>       all failed test cases with no selected defect type (marked as "To
>       Investigate") in the launch in one table.

To drill down your structure, click the name of an item or numbers in the
columns (Total, Passed, Failed, etc.), which will open the items, filtered
by the column criteria.

"To investigate" number - represents number of items, which should be review
in this particular run. This value incorporates all failed test cases and failed
preparation methods.

>   **Sum of number not equal?**

>   Total, Passed, Failed and Skipped columns counted in **TEST CASES**.

>   Product Bug (PB), Automation Bug (AB), System Issue (SI), To
>   investigate (TI) columns counted in **TEST ITEMS**.

>   The hierarchy is as follows: Test Item \> Test Case. Test item can be marked
>   with @Test Case annotation.

>   Test item includes: all preparation methods (all *Before* and *After*
>   methods), system methods, test cases.

>   Test case is just a single test case.

>   The values in the **Total** column:  Total = Passed + Failed +
>   Skipped.

>   PB + AB + SI + TI = Failed\_Test\_Cases + Skipped\_Test\_Cases +
>   other\_FAILED\_methods
 

### Navigate to items

You can navigate to certain items using clickable values and charts with the number of test
items with all statuses available within the system:
Total/Passed/Failed/Skipped/Production Bug/Automation Bug/System Issue/To
Investigate (list view).

Navigation is provided for both the "Launches" and the "Debug" modes.

The system shows all relevant test cases within the launch in one table,
filtered by the column criteria.

The system allows keeping track of your location in the hierarchical launch
structure, and navigating back to parent items you went through to get to the
current one (breadcrumb link).

Breadcrumbs representation in the system may be differ depending on a way the child
item was reached. In case the child item was reached going through all upper
levels sequentially, all the hierarchical elements are reflected in the
breadcrumbs.

In case a clickable number was used for navigation, then only the highest level
(Launch) and the lowest level (Step) are represented in the breadcrumbs.
But log view of any of last items will have full path in breadcrumbs in brackets.

One more useful functionality is collapsing not failed precondition methods. 
It could be setup on STEP view of any launch.
The switcher is located on the left hand of Name column header.

Be notify, that hidden items will not be visible on LOG view for 'Next'/'Previous' listing.

[ ![Image](Images/viewingData/viewing_data.png) ](https://youtu.be/CjfZYY1ulZY)


### Log view

**LOG MESSAGES**

All the related data for the test case (logs, screenshots) will be saved on Log level. To see table with log messages, navigate to the lowest level. 

Log object has the following levels:

>Fatal - includes Fatal logs and custom level logs with log number more than 50 thousands;

>Error - includes Error, Fatal logs and custom level logs with log number more than 40 thousands;

>Warn - includes Warn, Error, Fatal logs and custom level logs with log number more than 30 thousands;

>Info - includes Info, Warn, Error, Fatal logs and custom level logs with log number more than 20 thousands;

>Debug- includes Debug, Info, Warn, Error, Fatal logs and custom level logs with log number more than 10 thousands;

>Trace – includesTrace, Debug, Info, Warn, Error, Fatal logs and custom level logs with log number more than 5 thousands;

You can set a necessary log level using a slider. 


The table with log messages is painted in different colors depending on the log type:

>   red - for failed log steps

>   green - for log steps with positive validation made

>   blue - for system messages

Error logs are always highlighted in red. The others are highlighted on mouse 
hover only.

Logs with *Trace*, *Debug*, *Error* labels are collapsed, if the log has more
than 5 lines. You can expand log message clicking on special "Expand" icon.

You can use filter to specify the level.

Also you can use the logs sorting by time, and filtering logs to find the certain message in logs.

[ ![Image](Images/userGuide/logView/logMessages.png) ](https://youtu.be/Mcqh7ktK1Oc)

**NAVIGATE WITH NEXT ERROR**

This functionality allows to get to next page with error message on it.
It is useful in case you have big amount of log messages. And the navigation could be a bit difficult.

**STACK TRACE OF ERROR**

Fast redirection to the last error log message with stack trace available could be executed by 
click on link "Go to Stack Trace in Log Message" in 'STACK TRACE' section.
Note, the stack trace will be displayed here as well.

**ATTACHMENTS**

In case you are interested in logs with attachments only, check the corresponding checkbox.

Click on file in log opens the preview of attachment. 

The attachments could be rotate on preview screen if needed.

Report Portal provides the possibility of preview for such types of attachments as:
 - 'xml',
 - 'javascript', 
 - 'json', 
 - 'css', 
 - 'php' 

Other types of attachments will be opened in a new browser tab or downloaded.

The alternative way to view this files is using the Attachments.

To view data via Attachments section, perform the following steps:

1. Open Log view of launch for test items with attachments available

2. Click 'Attachments' tab

3. Select required file by clicking on it's thumbnail.

4. To expand the area, click the view on the main box.

[ ![Image](Images/userGuide/logView/screenshotGallery.png) ](https://youtu.be/8DUdwG-SdWA)


**NAVIGATE TO NEXT/PREVIOUS LOGS**

You can navigate from one log to the other using "Next"/"Previous" buttons on the Log view.


[ ![Image](Images/userGuide/logView/logNavigation.png) ](Images/userGuide/logView/logNavigation.png)


Navigation takes into account selected by user filter and hidden preconditions methods on Step view.

### Retried test case (retry)

In case you implement a retry logic for your tests in a test framework, the ReportPortal will reflect them as a retry test case. If there were a few invocations of an executions of the one test case, all these invocations will be shown as a one test case.

On a log view you can see all logs and all information about all invocations. But in statistics and auto-analysis the ReportPortal will take in account only the last invocation. So that a launch statistics will be more accurate.

The defect type can be set for the last invocation only.

On a Launch view you can see a label, that means that a launch includes retries.

[![Image](Images/userGuide/WorkWithReports/ViewLaunches/RetryLaunchLevel.png) ]( Images/userGuide/WorkWithReports/ViewLaunches/RetryLaunchLevel.png)

On a step view you can see the number of invocations and stake trace of each invocation.

[![Image](Images/userGuide/WorkWithReports/ViewLaunches/RetryStepLevel.png) ]( Images/userGuide/WorkWithReports/ViewLaunches/RetryStepLevel.png)

On a log view you can see the number of invocations and logs, attachments of each invocation.

[![Image](Images/userGuide/WorkWithReports/ViewLaunches/RetryLogLevel.png) ]( Images/userGuide/WorkWithReports/ViewLaunches/RetryLogLevel.png)

