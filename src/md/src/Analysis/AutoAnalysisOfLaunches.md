## Auto-Analysis of launches

The analysis feature of the ReportPortal makes it possible for the application to check and pass part of the routine duties by itself.

Auto-analysis take a part of your routine work and defines the reason of the test item failure and sets:

* a defect type;
* a link to BTS _(in case if it exists)_;
* comment _(in case if it exists)_;

The process of Auto-Analysis is based on previous user-investigated users' results  using the Machine Learning.  

An auto-analyzer is presented by combination of two services: ElasticSearch and Analyzer service. 

There are several ways to use an analyzer in our application:

* Use  the ReportPortal Analyzer: **manual** (analysis is switched on only for chosen launch manually) or **auto** (analysis is switched on after the launch finishing automatically);

* Implement and configure your own custom Analyzer and do not deploy ReportPortal service Analyzer;

* Do not use any Analyzers at all and do an analytical routine by yourself;

### ReportPortal Analyzer
If you want to reduce time costs, you can deploy the  ReportPortal with a service Analyzer. For that you should add an info about this service in a docker compose file and deploy service Analyzer.

**How the AUTO-ANALYSIS is working**

For effective using Auto –Analysis you should come through several stages. 

#### Create an analytical base in an ElasticSearch 

First of all you need to create an analytical base. How you can do it? Start to analyses your results manually. 

All test items with defect type *(except defect type “To investigate”)* which have been analyzed manually or by ReportPortal are sent to the Elastic Search. 

The following info is sent:

* An item ID;
* A log higher than a log level Error (log >= 40 000);
* Issue type;
* Flag: “Analyzed by” (where shown by whom the test item has been analyzed by a user or by ReportPortal);
* A launch name;
* Unique ID;

So that the more you analyze, the more data in the ElasticSearch, the more accurate results you will get in the end of the process. 

>Note:
Test items of a launch in Debug mode are not included in Auto-Analysis. If you delete test item or move it to the Debug, the test item is also removed from a base.

#### Analysis process

An analysis can be started after a launch has been finished. All items with defect type “To investigate” with logs (>= 40 000) are picked  and checked.  Each log is checked in an ElasticSearch for an availability of coincidences ( the percentage of the coincidence is more than 90%) in already existing base. 

All coincidences are returned and sorted in the order with following priorities (Boost):

•	The same Launch name;

•	The same UID;

•	Manual analysis;

Those priorities are influence on an object Score in ElasticSearch ( where Score is an estimated value of the coincidence degree).  The system finds the object with the highest score and set the appropriate defect type fo the  analyzing test item.

And it links an issue in the BTS and a comment of the most suitable test item to the analyzing test item from the ReportPortal Data base.

**HOW YOU CAN START AN AUTO-ANALYSIS"

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

### Label AA

When test item is analyzed by the ReportPortal, a label "AA" is set on the test item on a Step Level. You can filter results with a parameter “Analysed by RP (AA)”

[ ![Image](Images/userGuide/analyzeLaunches/Auto-Analysis.png) ](Images/userGuide/analyzeLaunches/Auto-Analysis-AA.png)

### Ignore for Auto-Analysis

If you don't want to save some test items in ElasticSearch, you can "Ignore it in Auto-Analysis". For that you can choose this action in “Defect type editor” pop-up:

[ ![Image](Images/userGuide/analyzeLaunches/Auto-Analysis.png) ](Images/userGuide/analyzeLaunches/Auto-Analysis-IgnorePopUp.png)

Or from the action list for several test items:

[ ![Image](Images/userGuide/analyzeLaunches/Auto-Analysis.png) ](Images/userGuide/analyzeLaunches/Auto-Analysis-IgnoreActionList.png)

When you choose “Ignore in AA”, logs of the chosen item are removed from the ElasticSearch. 


### Custom Analyzer

If you do not want to use our ReportPortal auto-analyzer, you can implement and configure custom analyzer. The example of analyzer is under the [link]( https://github.com/pbortnik/example-custom-analyzer) 

## Copy results from a previous run

In case you do not want to use Auto-Analyzer we provide you a possibility to get a results from previous runs.  So that you can set for a test item: Defect type, linked bug and comment from previous run at once. For that you can hit a button "Copy defect from #" in the last test item and copy a defect from a the last but one test item with defect type.

[ ![Image](Images/userGuide/analyzeLaunches/Auto-Analysis.png)](Images/userGuide/analyzeLaunches/CopyResults.png)

or hit a button "Send defect to #" from the not the last items and send defect to the last test item ( if it can has a defect type).

[ ![Image](Images/userGuide/analyzeLaunches/Auto-Analysis.png)](Images/userGuide/analyzeLaunches/SendReultsResults.png)

