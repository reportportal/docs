---
sidebar_position: 12
sidebar_label: 11. How to run Auto-Analysis in ReportPortal
---

# 11. How to run Auto-Analysis in ReportPortal

ReportPortal has [Auto-Analysis](/analysis/AutoAnalysisOfLaunches) feature which makes it possible for the application to independently check and perform some of the routine tasks.

When you have test executions on the Launches page, you might need to analyze them automatically using ML. You can **switch ON Auto-Analysis in the settings** – then it will start as soon as any launch finishes. Auto-Analysis takes a part of your routine work and defines the reason for the test item failure based on the previous launches and sets: a defect type; a link to BTS (in case it exists); comment (in case it exists). As a result, you save time, and you can create new test cases instead of analyzing test results.

<media-view src={require('./img/AutoAnalysis1.png')} alt="Auto-Analysis is ON" />

You can **run Auto-Analysis manually** as well.

<media-view src={require('./img/AutoAnalysis2.png')} alt="Run Auto-Analysis manually" />

<media-view src={require('./img/AutoAnalysis3.png')} alt="Auto-Analysis is running" />

When the test item is analyzed by ReportPortal, a label “AA” is set on the test item on a Step Level.

<media-view src={require('./img/AutoAnalysis4.png')} alt="Auto-Analysis results" />