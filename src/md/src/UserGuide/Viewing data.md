Viewing data
------------

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

>   The values in the **Total** column:  Total = Passed + Failed +
>   Skipped.

>   PB + AB + SI + TI = Failed\_Test\_Cases + Skipped\_Test\_Cases +
>   other\_FAILED\_methods
 

### Navigate to items

You can navigate to certain items using clickable values and charts with the number of test
items with all statuses available within the system:
Total/Passed/Failed/Skipped/Production Bug/Automation Bug/System Issue/To
Investigate.

Navigation is is provided for both the "Launches" and the "Debug" modes.

The system shows all relevant test cases within the launch in one table,
filtered by the column criteria.

The system allows keeping track of your location in the hierarchical launch
structure, and navigating back to parent items you went through to get to the
current one.

Breadcrumbs representation in the system may differ depending on a way the child
item was reached. In case the child item was reached going through all upper
levels sequentially, all the hierarchical elements are reflected in the
breadcrumbs.

In case a clickable number was used for navigation, then only the highest level
(Launch) and the lowest level (Step) are represented in the breadcrumbs.

User can hide precondition methods (except FAILED methods). Preconditions switcher is located on the table header on STEP level.

[ ![Image](Images/viewingData/viewing_data.png) ](https://youtu.be/CjfZYY1ulZY)