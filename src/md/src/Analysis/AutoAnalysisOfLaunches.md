Auto-Analysis of launches
-------------------------

Analysis feature of Report Portal allows to pass some part or rutine work to the application itself.

The better way to explain how it works is an example.

Say, user has run first launch and investigated all "To Investigate" issues.

During the next run, it's necessary to investigate all failed issues again, and
here is where the "Auto-Analysis" functionality is helpful.

As a launch finishes, the System runs "Auto-Analysis" process in background only
for launches in the "Launches" mode.

This process analyzes the current launch failures and finds the same failures in
five previously investigated launches.

As a result you see the following: the System sets [AUTO-SYSTEM] comment to
identify it was processed by "Auto-Analysis" process.


**AUTO-ANALYSIS ALGORITHM**

"Auto-Analysis" algorithm is based on previous user-investigated results for failed
items (SKIPPED or FAILED). Means user should investigate failed items at least
once to create initial issues scope. Next launches with the same name will have
base material for logs comparison.

If any issue appears in the next run (launch with the same name) then specified
Report Portal service remembers failed item and launch, and saves it as comparison
candidate. "Auto-analysis" starts its routine on the finish launch event:

1. "Auto-Analysis" creates history for current launch (with 5 launches in
    depth including the current run).

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


**HOW TO START AUTO-ANALYSIS"

To activate the "Auto-Analysis" functionality in a project, perform the following
steps:

1. Login into Report Portal instance as Administrator or project member with PROJECT MANAGER or LEAD role on the project.

2. Select ON from the "Auto-Analysis" drop-down.

3. Click the "Submit" button. Now "Auto-Analysis" will start as soon as any launch finishes.

[ ![Image](Images/userGuide/analyzeLaunches/add_auto_analiz.png) ](https://youtu.be/6FzkHOLuuaM)


**HOW TO START MANUAL ANALYSIS"

To start the analysis manually, perform the following steps:

1. Navigate to the "Launches" page.

2. Select "Analysis" option from the context menu next to the selected
    launch name.

3. Launch with an active analyzing process will be marked the "Analysis"
    label.

[ ![Image](Images/userGuide/analyzeLaunches/manual_analiz.png) ](https://youtu.be/qXbTx4So0N4)
