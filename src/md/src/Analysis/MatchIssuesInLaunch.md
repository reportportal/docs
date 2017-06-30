Match issues in launch
----------------------

**Match issues in Launch** is equal to **Auto-Analysis** algorithm, but works in scope of only 1 certain launch.
It means that Report Portal will look for similar fails in the same launch, where **Match issues** was called.

Use case: in particular run with 1000 test cases you have 200 failed test cases because of the same reason, e.g. login failed.
And this issue did not appear in previous executions. In order to avoid review and submittion of defect for 200 times 
call **Match Issue**. Report Portal will find similar fails in this launch, based on **Auto-Analysis** algorithm.

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

To start the "Match Issues in Launch" process, perform the following steps:

1. Navigate to the "Launches" page.

2. Select "Match Issues in Launch" option from the context menu next to
    the selected launch name.

4. Launch with an active analyzing process will be marked the "Analysis"
    label.

You can also start the "Match Issues in Launch" process on Log level.

[ ![Image](Images/userGuide/analyzeLaunches/match_issue.png) ](https://youtu.be/0QyUUi2gHsM)
