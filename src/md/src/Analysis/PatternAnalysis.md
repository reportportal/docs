## Pattern Analysis
Pattern analysis is a feature that helps you to increase of finding the common patterns in error logs.

> **Use case 1:**
> 
> **Problem:** A user knows the several common problems why test cases fail. During tests run a lot of test have failed. A user need to check logs a of tests to know by what reason test cases have failed.
>
>**Solution:** Create a pattern rules for all common reasons which contains a problem phrase (for example: *"Expected status code <404> but > was <500>"* or "*Null response"*) or with Regex quiry. Swithc On a pattern analysis.
> Launch a test run. 
> So that the ReportPortal systems finds all failed items which have known patterns in error logs and marks them with a label with pattern name.
> Find all items failed by the same reason by choosing a filter by Pattern Name on the Step view.
> Add The most popular pattern widget (TOP-20) and track the TOP-20 the most popular reason of test failing in the build.


> **Use case 2:**
> 
> **Problem:** Test run has finished. A user found that more than 3 items have failed by the same reason. And he want to find all such items.
>
>**Solution:** Create a new pattern rule on Project Settings. Launch a pattern analysis manually for one launch. 
name.
> Find all items failed by the same reason by choosing a filter by Pattern Name on the Step view.
