## Match issues in launch

**Match issues in Launch** is equal to the **Auto-Analysis** algorithm, but works in scope of only 1 certain launch.
It means that Report Portal will look for similar fails in the same launch, where **Match issues** was called.

Use case: in a particular run with 1000 test cases you have 200 failed test cases because of the same reason, e.g. login failed,
and because this issue did not appear in previous executions. In order to avoid review and submittion of defect for 200 times, 
the **Match Issue** gets called. ReportPortal will find similar fails in this launch, based on the **Auto-Analysis** algorithm.

You can call **Match issues in Launch** only on the manual demand. First:

1. "Match issues in Launch" will create a match list for the current launch.

2. "Match issues in Launch" looks at ALL investigated items in this list. This
    means all items with user specified comments, issue types and external
    system IDs (JIRA, for example) get analyzed.

Then "Match issues in Launch" going to process all remembered failed items
from current launch:

1. "Match issues in Launch" takes the first item from comparison list and then starts
looking in the match list to investigate the items with the same type of ERROR logs. If
this item is found then, error log strings start comparing one with others via calculating
the Levenshtein distance formula. Note: All digit chars are excluded from comparison
to avoid date, numbers and code line number differences in stack-traces.

2. If the total ratio is more or equals 95% (it will be configurable in future per
project) then "Match issues in Launch" sets all attributes from the investigated
item in match list to current failed item, and switches the next one to failed
item.

To start the "Match Issues in Launch" process, perform the following steps:

1. Navigate to the "Launches" page.

2. Select the "Match Issues in Launch" option from the context menu next to
    the selected launch name.

4. All launches with an active analyzing process will be marked with the "Analysis"
    label.

You can also start the "Match Issues in Launch" process on Log level.

[ ![Image](Images/userGuide/analyzeLaunches/match_issue.png) ](https://youtu.be/0QyUUi2gHsM)
