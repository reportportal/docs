## Auto-Analysis of launches

The analysis feature of the ReportPortal makes it possible for the application to check and pass part of the routine duties by itself.

A better way to explain how this works for example is:

Let's say a user has run the first launch and investigated all "To Investigate" issues.

During the next run, it's necessary to investigate all failed issues again, and
here is where the "Auto-Analysis" functionality is helpful.

As a launch finishes, the System runs the "Auto-Analysis" process in background only
for launches in the "Launches" mode.

This process analyzes the current launch failures and finds the same failures in
the five previously investigated launches.

As a result you see the following: the System will set and mark the [AUTO-SYSTEM] comment to
identify that it was processed by the "Auto-Analysis" process.


**AUTO-ANALYSIS ALGORITHM**

The "Auto-Analysis" algorithm is based on the previous user-investigated results for failed
items (SKIPPED or FAILED). This means the user should investigate failed items at least
once to create the initial issues scope. After that the next launches with the same name will have
base material for logs comparison.

If any issue appears in the next run (launch with the same name) then the specified
ReportPortal service remembers the failed item and launch, and saves it as comparison
candidate. The "Auto-analysis" starts its routine on the finish of each launch event:

1. The "Auto-Analysis" creates a history for the current launch (analizing 5 launches in
    depth, including the current run).

2. Because the "Auto-Analysis" is looking at ALL investigated items in history, this means all items
    with user specified comments, issue types and external system IDs (JIRA, for
    example) will be compared for analysis.

Then the "Auto-Analysis" will process all remembered failed items from current
launch:

- The "Auto-Analysis" will take the first item from the remembered list and start looking into the history lists,
    investigating the item with the same type of *ERROR* logs. If this item is found then an
    error log string starts comparing one with the others via calculating
    Levenshtein distance formula. Note: All digit chars are excluded from comparison to avoid
    date, numbers and code line number differences in stack-traces.

- If the total ratio is more or equals to 95% (it will be configurable in future per
    project) then the "Auto-Analysis" will set all attributes from the investigated item in the
    history to current failed item, and switching on next one failed item.

[ ![Image](Images/userGuide/analyzeLaunches/Auto-Analysis.png) ](Images/userGuide/analyzeLaunches/Auto-Analysis-full.png)


**HOW TO START AUTO-ANALYSIS"

To activate the "Auto-Analysis" functionality in a project, perform the following
steps:

1. Login into ReportPortal instance as Administrator or project member with PROJECT MANAGER or LEAD role on the project.

2. Select ON from the "Auto-Analysis" drop-down.

3. Click the "Submit" button. Now "Auto-Analysis" will start as soon as any launch finishes.

[ ![Image](Images/userGuide/analyzeLaunches/add_auto_analiz.png) ](https://youtu.be/6FzkHOLuuaM)


**HOW TO START MANUAL ANALYSIS"

To start the analysis manually, perform the following steps:

1. Navigate to the "Launches" page.

2. Select the "Analysis" option from the context menu next to the selected
    launch name.

3. Any launches with an active analyzing process will be marked with the "Analysis"
    label.

[ ![Image](Images/userGuide/analyzeLaunches/manual_analiz.png) ](https://youtu.be/qXbTx4So0N4)
