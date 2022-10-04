---
sidebar_position: 2
sidebar_label: Search for the similar "To investigate" items
---

# Search for the similar "To investigate" items

>**Use case:**
> **Situation:** Analyzer has been finished its work, and marked with defect types known issues.
> But in the run there are a lot of failures with a similar unknown reason. All such items have "To investigate" defect type.
>
>**Problem:** A user should check and analyze all failed items.
>
> **Solution:** A user is on All launches, he clicks on "To investigate" and opens a list with items. When a user clicks on a pencil >near a defect type, the system opens a Defect editor modal. In this modal users can see all items with "To investigate" defect type and >the same failure reason.
>A user can check all same failure and perform the bulk operation for them.

There are 3 options for search:
- For the current launch
  The system is looking for similar items through the one launch.
  For using this feature:
- Click on the filter on All launches view
- click on To investigate items
- open a Defect editor modal
- choose For the current launch in the drop-down

https://youtu.be/O5cBESXX0l0

- For the launches with the same name
  The system is looking for similar items through the 10 last launches with the same name.
  For using this feature:
- Click on the filter on All launches view
- click on To investigate items
- open a Defect editor modal
- choose For the launches with the same name in the drop-down

https://youtu.be/q7YRSvAZU18

- For the applied filter

The system is looking for similar items through the 10 last launches from the applied filter.
For using this feature:
- Click on the filter on All launches view
- click on To investigate items
- open a Defect editor modal
- choose For the applied filter in the drop-down

https://youtu.be/PZSfQRsNDrM

The function can be used only for items that belong to the finished launch.
The number of logs lines are using for analysis, a user can configure on Project Settings > Analysis.
