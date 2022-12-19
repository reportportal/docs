## Pattern Analysis
Pattern analysis is a feature that helps you to speed up the process of finding common patterns in error logs.

### Types of Pattern Analysis

**String** – any problem phrase.

[ ![ImageName](Images/userGuide/PatternAnalysis/PatternAnalysisString1.png) ](Images/userGuide/PatternAnalysis/PatternAnalysisString1.png)

[ ![ImageName](Images/userGuide/PatternAnalysis/PatternAnalysisString2.png) ](Images/userGuide/PatternAnalysis/PatternAnalysisString2.png)

**Regex** – regular expression.

[ ![ImageName](Images/userGuide/PatternAnalysis/PatternAnalysisRegex1.png) ](Images/userGuide/PatternAnalysis/PatternAnalysisRegex1.png)

[ ![ImageName](Images/userGuide/PatternAnalysis/PatternAnalysisRegex2.png) ](Images/userGuide/PatternAnalysis/PatternAnalysisRegex2.png)

**Use case 1:**

**Problem:** A user knows the several common problems why test cases fail. During tests run a lot of test have failed. A user need to check logs a of tests to know by what reason test cases have failed.

**Solution:** Create a pattern rules for all common reasons which contains a problem phrase (for example: *"Expected status code <404> but > was <500>"* or "*Null response"*) or with Regex query. Switch On a pattern analysis. Launch a test run. So that the ReportPortal systems finds all failed items which have known patterns in error logs and marks them with a label with pattern name. Find all items failed by the same reason by choosing a filter by Pattern Name on the Step view. Add The most popular pattern widget (TOP-20) and track the TOP-20 the most popular reason of test failing in the build.

[ ![ImageName](Images/userGuide/analyzeLaunches/Manual Pattern.png) ](https://youtu.be/5YaN85x6_hc)


**Use case 2:**
 
**Problem:** Test run has finished. A user found that more than 3 items have failed by the same reason. And he want to find all such items.

**Solution:** Create a new pattern rule on Project Settings. Launch a pattern analysis manually for one launch. 
name. Find all items failed by the same reason by choosing a filter by Pattern Name on the Step view.

[ ![ImageName](Images/userGuide/analyzeLaunches/Auto Pattern.png) ](https://youtu.be/XgJr5Nm7OrI)





