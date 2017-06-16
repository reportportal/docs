Analyze launches
----------------

### Defect types and comments

Using defect editor you can choose the real reason of your fail and provide the comment for this fail.

When a defect is found in a test, it should be investigated and proper defect
type should be assigned to it, in order to have accurate statistics on test
runs. You will be able to change a defect type for a test and mark it as
Product Bug/Automation Bug/System Issue/No Defect at any time.

To change a defect type, perform the following steps:

1. Login into Report Portal instance as project member with any project role.

2. Navigate to the Step level of the launch.

3. Click on the defect label in the "Defect Type" column or small pencil icon.

4. You will see the defect editor block. After clicking on the defect icon, the current defect type will be shown in
    a combo-box. A new defect type can be selected from the drop-down. Also, you
    can add a comment here, which should be not more than 255 symbols long.

5. The available defect types are described below:

>   *To investigate* - means that no investigation was performed on this defect
>   yet.

>   *Product bug* (default and custom) - defect was investigated and production bug found as a
>   cause for this test failure.

>   *Automation bug* (default and custom) - defect was investigated and automation test is not
>   correct.

>   *System issue* (default and custom) - defect was investigated and it turns out that system-level
>   issue, like app crash, caused test to fail.

>   *No defect* (default and custom) - defect was investigated and defined, that its not a defect.



After clicking on the tick button, the comment and the defect type will be saved
for a selected item.

Report Portal allows to edit defects in bulk.

In this case all changes will be applied to all selected defects. If you want to
keep original defects comments, you should uncheck "Replace comments" check-box. In
this case new comment will be saved for the defect, for which the editor is
opened.

Also you can change a defect type at the logs level.

[ ![Image](Images/userGuide/analyzeLaunches/analyze_launches.png) ](https://youtu.be/Nf60EPDX3Co)

### Auto-Analysis 

Say, user has run first launch and investigated all "To Investigate" issues.

During the next run, it's necessary to investigate all failed issues again, and
here is where the "Auto-Analysis" functionality is helpful.

As a launch finishes, the System runs "Auto-Analysis" process in background only
for launches in the "Launches" mode.

This process analyzes the current launch failures and finds the same failures in
five previously investigated launches.

As a result you see the following: the System sets [AUTO-SYSTEM] comment to
identify it was processed by "Auto-Analysis" process.


#### "Auto-Analysis" algorithm

"Auto-Analysis" algorithm is based on previous user-investigated results for failed
items (SKIPPED or FAILED). Means user should investigate failed items at least
once to create initial issues scope. Next launches with the same name will have
base material for logs comparison.

If any issue appears in the next run (launch with the same name) then specified
Report Portal service remembers failed item and launch, and saves it as comparison
candidate. "Auto-analysis" starts its routine on the finish launch event:

1. "Auto-Analysis" creates history for current launch (with 4th launches in
    depth by now).

2. "Auto-Analysis" looking ALL investigated items in history, means all items
    with user specified comments, issue types and external system IDs (JIRA, for
    example).

Then "Auto-Analysis" going to process all remembered failed items from current
launch:

- "Auto-Analysis" took first item from remembered list and start to looking in history list
    investigated item with the same count of *ERROR* logs. If this item found then
    error log strings start comparing one with others via calculating
    Levenshtein distance. All digit chars are excluded from comparison to avoid
    date, numbers and code line number differences in stack-traces.

- If total ratio more or equals 95% (it will be configurable in future per
    project) then "Auto-Analysis" setup all attributes from investigated item in
    history to current failed item, and switching on next one failed item.

[ ![Image](Images/userGuide/analyzeLaunches/Auto-Analysis.png) ](Images/userGuide/analyzeLaunches/Auto-Analysis-full.png)


#### Using "Auto-Analysis"

To activate the "Auto-Analysis" functionality in a project, perform the following
steps:

1. Login into Report Portal instance as Administrator or project member with PROJECT MANAGER or LEAD role on the project.

2. Select ON from the "Auto-Analysis" drop-down.

3. Click the "Submit" button. Now "Auto-Analysis" will start as soon as any launch finishes.

[ ![Image](Images/userGuide/analyzeLaunches/add_auto_analiz.png) ](https://youtu.be/6FzkHOLuuaM)


#### Using manual "Analysis"

To start the analysis manually, perform the following steps:

1. Navigate to the "Launches" page.

2. Select "Analysis" option from the context menu next to the selected
    launch name.

3. Launch with an active analyzing process will be marked the "Analysis"
    label.

[ ![Image](Images/userGuide/analyzeLaunches/manual_analiz.png) ](https://youtu.be/qXbTx4So0N4)


### Match issues in Launch


#### "Match issues in Launch" algorithm

**Match issues in Launch** is equal to **Auto-Analysis** algorithm, but works in scope of only 1 certain launch.
It means that Report Portal will look for similar fails in the same launch, where **Match issues** was called.

Use case: in particular run with 1000 test cases you have 200 failed test cases because of the same reason, e.g. login failed.
And this issue did not appear in previous executions. In order to avoid review and submittion of defect for 200 times
 - call **Match Issue**. Report Portal will find similar fails in this launch, based on **Auto-Analysis** algorithm.

You can call **Match issues in Launch** only on the manual demand. And:

1. "Match issues in Launch" create match list for current launch.

2. "Match issues in Launch" looking ALL investigated items in this list,
    means all items with user specified comments, issue types and external
    system IDs (JIRA, for example).

Then "Match issues in Launch" going to process all remembered failed items
from current launch:

- "Match issues in Launch" took first item from comparison list and start to
looking in match list investigated item with the same count of ERROR logs. If
this item found then error log strings start comparing one with others via
calculating Levenshtein distance. All digit chars are excluded from comparison
to avoid date, numbers and code line number differences in stack-traces.

- If total ratio more or equals 95% (it will be configurable in future per
project) then "Match issues in Launch" setup all attributes from investigated
item in match list to current failed item, and switching on next one failed
item.


#### Using "Match issues in Launch"

To start the "Match Issues in Launch" process, perform the following steps:

1. Navigate to the "Launches" page.

2. Select "Match Issues in Launch" option from the context menu next to
    the selected launch name.

4. Launch with an active analyzing process will be marked the "Analysis"
    label.

You can also start the "Match Issues in Launch" process on Log level.

[ ![Image](Images/userGuide/analyzeLaunches/match_issue.png) ](https://youtu.be/0QyUUi2gHsM)

