## Quality Gate Purpose 

 ReportPortal supports Continuous Testing with build-in functionality - **Quality Gates**. 

The primary Quality Gate purpose is to speed up a CI/CD pipeline.
 
Quality Gates plugin supports the next user flow:
 * Create Quality Gate rules in ReportPortal 
 * Start a test job in CI/CD with webhook 
 * ReportPortal assesses launch quality using created rules
 * ReportPortal sends auto feedback to CI/CD tool with status Passed or Failed
 * Based on ReportPortal Feedback, CI/CD tool fails a build or promotes it to the next stage

The second purpose of Quality Gate is to simplify interactions between a QA team and business stakeholders. Quality Gates provides a possibility to create business-friendly rules such as:
* define required number of tests in a job
* specify tests that should be executed (features, components)
* define minimum executed tests failure rate
* new failure of critical components 
* define a number of issues in executed tests 
* define a number of critical issues in the critical components 
* new failures & new errors in the build

And it leads us to the third purpose of Quality Gates. It is a full-featured report on Quality Gates analysis results which helps to troubleshoot problems and fix them.
 

 [ ![QualityGatesIntro](Images/userGuide/QualityGates/Quality Gates Intro.jpg) ](Images/userGuide/QualityGates/Quality Gates Intro.jpg)

 
## How to install Quality Gates

The Quality Gate feature is available in the scope of the ReportPortal enterprise version started from [version 5.6](https://reportportal.io/releases/5.6.0). ReportPortal provides it for clients in the scope of paid support engagement( min contract amount 50K).

> **Note:** If you are interested in this feature, please get in touch with us via support@reportportal.io.

## Feature overview 

Quality Gate analysis provides capabilities to speed up CI/CD pipeline by sending auto-feedback to your CI/CD tools. ReportPortal assesses the build quality and sends auto feedback to CI/CD.

Quality Gates plugin adds to ReportPortal possibilities:

* to create quality rules based on general test automation KPI: number of executed tests and executed tests, failure rate, failure of critical components, number of issues in completed tests, number of essential issues in the critical parts, new failures & new errors in the build
* run Quality Gates analysis for build and view build report that helps to troubleshoot issues in the build
* automatically send Quality Gates status to CI/CD. 

## Upload Quality Gate to ReportPortal

The default configuration of ReportPortal doesn't contain Quality Gate. For adding this feature, you need to [receive a link to the .jar file from ReportPortal](# How to install Quality Gates). 

Download the .jar file and upload it to ReportPortal. Fo that pleases perform, following actions:

* Login ReportPortal as an Admin 
* Open ```Admin Page > Plugins``` 
* Click on the button ```Upload```
* Add .jar file to the modal ```Upload plugin```
* And click the button ```Upload```
* Reload page 

As soon as the plugin has been added to the ReportPortal, a new ``` Quality Gates tab``` will be added to the Project Settings.

 [ ![No state](Images/userGuide/QualityGates/No Quality Gates View.png) ](Images/userGuide/QualityGates/No Quality Gates View.png)


On the All launches page, the system adds a label "N/A" to each launch.
```A label "N/A"``` means that the Quality Gates has not been run for a launch yet.

 [ ![NA Label](Images/userGuide/QualityGates/NA Quality Gate Label.png) ](Images/userGuide/QualityGates/NA Quality Gate Label.png)

## Quality Rules Configuration

Now let's configure the Quality rule, which will be used for launch quality assessment. 

### Quality Gate creation
Quality Gates can be configured on the Project Settings on the tab Quality Gate.

The Project Manager or Admin can create several rules for one project.

For Quality Gate creation Project Manager or Admin should:

* Open ```Project Settings> Quality Gates``` 
* Click on the ```Create Gate``` button
* In ```Create Quality Gate``` fill in the form
* Click on the button ```"Save"```
* A Quality Gate is created successfully
* Quality Gate is added to the Quality Gate List

```groovy
Quality Gate Name: (Min length 1 - max length 55) A name that will be added to the Quality Gate report on All launches
Analyzed Launch: Launch Name of a launch that should be analyzed   
Attributes: key: value AND key:value AND key:value (example = build: 5.0 AND device: MacOS AND test plan: Regression) 
```

[ ![Quality Gate Creation](Images/userGuide/QualityGates/Quality Gates Creation.png) ](https://youtu.be/dXp3Lf9bI30)

### Quality Gate ordering


### Quality Gate rules

When Quality Gate is created, you can fill your gate with quality rules.

There are four types of Quality Gate rules:
* Amount of tests
* Amount of issues
* Percent 
* New failures 
* New errors (from version 5.7)

#### Amount of tests in the run 

>**Case:** Regression suite has 224 tests. You want to track that all tests should be run every time.

[ ![Rule: Amount of All Tests in the launch](Images/userGuide/QualityGates/Amount of tests ALL.png) ](https://youtu.be/TC0J8BV_XBY)

The purpose of the rule is to block a run that contains not all tests so that you can define the minimum number of tests that should be in the run.

For adding this rule Project Manager or Admin should:

1.  Open ```Project Settings> Quality Gate``` 
2.  Click on ```the pencil``` on the Quality Gate
3.  Click on the drop-down: ```"Add a new rule"```
5.  Choose the option ```"Amount"```
6.  Choose the option ```"All tests"```
7.  Add a number of min allowable amount of tests in the launch - ```N```
8.  Click on ```the tick``` 
9.  The rule is added to the Quality Gate

Now the system will automatically analyze a launch and compare the number of tests in the analyzed launch with the number in the "amount" rule in the Quality Gate. If the number of tests in the launch is less than in the rule, the system fails the rule and Quality Gate.

>**Note:** You can add only 1 "All tests amount" rule to 1 Quality Gate.  

**Amount of tests in a component/feature/etc**

>**Case:** Regression suite contains 24 tests with critical priority. You want to track if these tests are executed every time. 

[ ![Rule: Amount of Tests with attributes in the launch](Images/userGuide/QualityGates/Amount Attribute.png) ](https://youtu.be/EwsG7RcmcDs)

You can also track the number of tests that belong to a feature, component, priority or others in a launch.
For that, tests in the analyzed launch should have attributes (f.i. feature: Payment, or component: Payment, or priority: critical, or any others).

Then you need to add an "amount" rule with an attribute option:

1.  Open ```Project Settings> Quality Gate``` 
2.  Click on ```the pencil``` on the Quality Gate
3.  Click on the drop-down: ```"Add a new rule"```
4.  Choose the option ```"Amount"```
5.  Choose option ```"Tests with attributes"```
6.  Add a number of min allowable amount of tests for the component, feature etc. - ```N``` 
7.  Click on ```the tick``` 
8.  The rule is added to the Quality Gate

Now the system will automatically analyze a launch and compare the number of tests with specified attributes in the analyzed launch with a number in the "amount" rule in the Quality Gate. If the number of tests is less than in the rule, the system fails the rule and Quality Gate.

>**Note:** You can add several "Tests with attribute amount" rules to the Quality Gate. But it is impossible to create duplicates.





#### Failure rate of the run 

>**Case 1:** You want to track that the passing rate for regression suite should be no more than 20%.
>
>**Case 2:** You want to track that all critical tests in regression suite are always passed. 

[ ![Rule: Percent of Tests](Images/userGuide/QualityGates/Failure Rate All.png) ](https://youtu.be/bSO21gtT82E)

The purpose of the rule is to block a run that has a not allowable passing rate so that you can define the minimum failure rate for the run.

**Launch Failure rate**

For adding this rule Project Manager or Admin should:

1.  Open ```Project Settings> Quality Gate``` 
2.  Click on ```the pencil``` on the Quality Gate
3.  Click on the drop-down: ```"Add a new rule"```
4.  Choose the option ```"Percent"```
5.  Choose the option ```"All tests"```
6.  Add a % of min allowable failure rate - ```N%``` 
7.  Click on ```the tick``` 
8.  The rule is added to the Quality Gate

On the finish, the system will automatically analyze a launch and compare failure rate in the analyzed launch with % in the "failure per cent" rule in the Quality Gate. If the failure rate in the launch is more than in the rule, the system fails the rule and Quality Gate.

>**Note:** How a failure rate is calculated
>
> ```Failure rate``` = items with type STEP with status FAILED / ALL items with type STEP in the analyzed launch 

You can add only 1 "All tests failure rate" rule to 1 Quality Gate.  

**Failure rate in a component/feature/etc**

You can also track the failure rate of tests that belong to a feature, component, priority or others in a launch.
For that, tests in the analyzed launch should have attributes (f.i. feature: Payment, or component: Payment, or priority: critical, or any others).

Then you need to add an "amount" rule with an attribute option:

1.  Open ```Project Settings> Quality Gate``` 
2.  Click on ```the pencil``` on the Quality Gate
3.  Click on the drop-down: ```"Add a new rule"```
4.  Choose the option ```"Percent"```
5.  Choose option ```"Tests with attributes"```
6.  Add a % of min allowable failure rate - ```N%``` 
7.  Click on ```the tick```
8.  The rule is added to the Quality Gate


In this case, on the finish, the system will automatically analyze a launch and compare the failure rate of tests with a specified attribute in the analyzed launch with failure rate from the rule in the Quality Gate. If the failure rate is more than specified in the rule, the system fails the rule and Quality Gate.

>**Note:** How a failure rate is calculated
>
> ```Failure rate for tests with a attribute``` = items with type STEP with status FAILED and with a specified attribut / ALL items with type STEP in the analyzed launch and with a specified attribut

You can add several "Tests with attribute percent" rules to the Quality Gate. But it is impossible to create duplicates.

**Not passing rate in the launch or a component/feature/etc.**

You can use the "Percent rule" in several options: ```Failure /Not passed```.

The failure rule is described in the previous sections.

If you choose the "Not passed" option, the system will use another calculation method.

>**Note:** How a notpassed rate is calculated
>
> ```Not passed rate``` = items with type STEP with status FAILED and SKIPPED / ALL items with type STEP in the analyzed launch 
>
> ```Not passed rate for tests with a attribute``` = items with type STEP with status FAILED and SKIPPED  and with a specified attribut / ALL items with type STEP > in the analyzed launch and with a specified attribut





#### Amount of issues in the run 

>**Case 1:** You want to track that the regression suite run should not have a critical issue or Product bugs.
>
>**Case 2:** Regression suite contains 500 tests with critical priority. You want to track that the run should not have critical issues or Product bugs (or any other) in these 500 tests.

[ ![Rule: Issues in the run](Images/userGuide/QualityGates/Issues .png) ](https://youtu.be/ajIvWB83bGg)

Amount of issues also has 2 options "All tests" and "Tests with the attribute". The purpose of the rule is to limit the number of unwanted defects in the run. With the option "All tests", you can restrict issues for all tests in the launch.

With the option "Test with attributes", you can limit issues in the critical features, components, etc.

**Ammount of issues in the launch**

For adding this rule Project Manager or Admin should:

1.  Open ```Project Settings> Quality Gate``` 
2.  Click on ```the pencil``` on the Quality Gate
3.  Click on the drop-down: ```"Add a new rule"```
4.  Choose the option ```"Amount of issues"```
5.  Choose the option ```"All tests"```
6.  Choose a defect type: ```"Total Defect Types"``` or ```"Defect Type"```
7.  Add a number of min allowable issues - ```N%``` 
8.  Click on ```the tick``` 
9.  The rule is added to the Quality Gate

On the finish, the system will automatically analyze a launch and compare a number of specified defects in the analyzed launch with a issues numbers in the "amount issues" rule in the Quality Gate. If the a number of issues in the launch is more than in the rule, the system fails the rule and Quality Gate.

>**Note:** How a number of issues is calculated
>
> if in the rule specified "Total Defect type"
> >
> ```A number of issues in the test run``` = SUM of items with defect types which belong to the Defect type group
>
> if in the rule specified "Defect type"
> 
> ```A number of issues in the test run``` = number of items with specified defect types 

**Ammount of issues in tests with attribute**

For this rule a user can choose an option ```Tests with an attribute"```. The logic for this rule is the same as for rule "Amount of tests with an attribute".

##### Allowable level of To investigate

When you choose a rule ```"Amount of issues"```, the system automatically adds a parameter ```"Allowable To investigate level"``` to the Quality Gate.

What does this parameter mean?

The purpose of the rule is a check and a guarantee that the run does not contain specified issues. But if a launch includes "To investigate", the system can not make an analysis of the system and guarantee that the forbidden problems are absent in a launch.

For this reason, we have added the parameter ```"Allowable To investigate level"```. By default, this parameter equals 0. But you can change this parameter and set your custom value. 

For this Project Manager or Admin can edit Quality Gate:

* Open ```Project Settings> Quality Gates``` 
* Click on ```the pencil``` on the Quality Gate
* Click on the button ```"Edit Details"```
* Change value in the field ```"Allowable TI"```
* Click on the button ```"Save"```


#### New failures in the run 


>**Case 1:** Regression suite has 1000 tests. In the last released version, five tests failed in a regression suite. You want to track that the regression runs on the version in development should not have new failures.

>**Case 2:** Regression suite contains 500 tests with critical priority. In the last released version 1 test with critical priority failed. You want to track that critical tests in the regression run on the version in development should not have new failures.

[ ![Rule: New Failure](Images/userGuide/QualityGates/New failure.png) ](https://youtu.be/W05N7DQkalg)

The purpose of the rule is to block a run that has new failures compared to a chosen baseline.

New failures also have 2 options "All tests" and "Tests with an attribute". The purpose of the rule is to block a run that has new failures compared to a chosen baseline.


1.  Open ```Project Settings> Quality Gate``` 
2.  Click on ```the pencil``` on the Quality Gate
3.  Click on the drop-down: ```"Add a new rule."```
4.  Choose the option ```"New failure."```
5.  Choose the option ```"All tests"/"Test with attributes."```
8.  Click on ```the tick``` 
9.  The rule is added to the Quality Gate

In this case, on the finish, the system will automatically analyze a launch and compare failed tests /or failed tests with the specified attribute in the analyzed launch with tests in the baseline. It fails a rule if the system detects a new failure in the launch or in tests with specified attributes. 

##### How does the rule works 

For defining test uniqueness, ReportPortal uses [Test Case ID principles](https://reportportal.io/docs/Test-case-ID%3Ewhat-is-it-test-case-id).

>**Note:** For now, ReportPortal can not process items with the same Test Case ID correctly.
 
##### How to choose a Baseline for the "New failures" rule

**Default Baseline**

By default, a system will use ```a previous launch``` for comparison. For example, for "Launch A #3", the system will use "Launch A #2" as a baseline. If there is no "Launch A #2" (f.e. this launch has been deleted by retention job) in the system, the system will use "Launch A #1".

If there is no fitting launch in the system, the "New failure" rule will get the status "Undefine".

[ ![Rule: Baseline Latest](Images/userGuide/QualityGates/Baseline Latest.png) ](Images/userGuide/QualityGates/Baseline Latest.png)

**Customized Baseline**

If you want to choose other options for a baseline, you can do it:

* Login ReportPortal as Project Manager or Admin 
* Open ```Project Settings> Quality Gates```
* Click on ```the pencil``` on the Quality Gate rule 
* Click on ```"Edit Details."```
* Unclick a checkbox on ```"Choose a previous launch as a baseline."``` 
* The system activates fields for baseline configuration

[ ![Rule: Baseline Custom](Images/userGuide/QualityGates/Custom Baseline.png) ](Images/userGuide/QualityGates/Custom Baseline.png)

| Case | Fileds configuration | 
| :----:      |    :----:   | 
| You want to specify a static launch that should always be used | Select launch name and add launch number in the baseline section|
| You want to specify dynamic launcg| Select launch name and check a button "Latest" :question:|

:question: When you use "latest", the system will use the latest launch with a specified launch name, which has been run before the analyzed launch.
If you want to specify a baseline, you also can add launch attributes. In this case, the system will use the latest launch with specified launch name and attributes, which have been run before the analyzed launch.

#### New errors in the run

“Unique errors” functionality with a new Quality Gates rule – New Errors – was implemented in version 5.7. This feature saves your time for searching and analyzing repeated errors in launches. **“New Errors” rule** will help to group errors into new and known ones and, for example, fail build if there are new error not seen previously.

To begin using this functionality, you need to create a Quality Gate and add the “New Errors” rule. Please follow the steps below:

1) Log in to ReportPortal as Admin/PM.

2) Go to ```Project Settings```.

3) Select ```Quality Gates``` section.

4) Click ```Create Quality Gate``` button.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule1.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule1.png)

5) Enter ```Quality Gate Name``` and ```Analyzed Launch```, then click ```Save``` button.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule2.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule2.png)

>**Note:** if you want the Quality Gate not to run for all launches, you can adjust it only for the launches with specific attributes. Click ```Add attribute``` and specify value and key, e.g., browser.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule3.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule3.png)

On the example in the screenshot above Quality Gate will run for launches with name **“Test”** with attributes _Browser Chrome_, _Feature Reporting_, _Device MacBook_.

6) Click on the ```Add a new rule``` dropdown and select ```New Errors```.

Click the **“confirm”** icon.

>Please, note that “New Errors” rule can be created with **“All tests”** condition only.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule4.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule4.png)

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule5.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule5.png)

Before running automation tests, make sure that **“Quality Gates”** feature is ON.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule6.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule6.png)

Now everything is ready to use.

7) Go to automation testing tool.

8) Run autotests.

9) Go to ReportPortal.

10) Open the ```Launches``` section and click the ```Refresh``` button at the top.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule7.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule7.png)

11) Verify the Quality Gates' status.

**_Passed_** - there are no failures.

**_Failed_** - there are new errors.

**_N/A_** - appears if the quality gate was created after a launch was finished, or there is no quality gate for this launch. If the status is Not Available, click on the “N/A” and then click “Run Quality Gate” button (+ “Refresh”).

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule8.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule8.png)

12) To look at the failed test results, click on the ```Failed``` status and then click on the number under ```Current``` column.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule9.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule9.png)

You will be redirected to the ```Unique errors``` tab with a list of all new error logs of the launch. If you want to see known issues as well, open the ```All Unique Errors``` dropdown at the top and click the ```Known Errors``` checkbox.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule10.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule10.png)

By default, ***a previous launch execution*** is used as a Baseline Launch for the Quality Gate. Besides, you can as well define any other launch by specifying its name and sequence number or select ```Latest``` for the prior run of the specified launch to be used as a baseline.

To make these changes, click ```Edit Details``` on the Quality Gate page and uncheck the ```Choose a previous launch as a baseline``` checkbox.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule11.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule11.png)

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule12.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule12.png)

Follow the steps below depending on the preferable settings for the Baseline Launch.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule13.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule13.pngg)

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors-rule14.png) ](Images/userGuide/QualityGates/NewErrors/new-errors-rule14.png)

In this way you can compare analyzed launch not only with its previous execution but also with another launch.




## Quality Gate Edit

If user edit Quality Gates, previous reports for these Quality Gates would not be recalculated.

If you want to recalculate Quality Gate with a new values, please check the  section ###How to recalculate Quality Gates.



## Delete Quality Gates

If you want to delete Quality Gate:

* Login ReportPortal as Project Manager or Admin 
* Open ```Project Settings> Quality Gates```
* Click on ```the trash``` on the Quality Gate rule 
* The system removes Quality Gate from the DB
* All Quality Gate report for this rule also will be deleted form the system


## Assessment of test results using Quality Gates 

Now the system is preconfigured, and you can start using Quality Gates Analysis.

Quality Gates plugin can be used with CI/CD tools - in this case, and Quality Gate status will be sent to CI/CD pipeline.
But also, Quality Gates can be used just as a way of test results analysis.

First, let's discuss how Report Portal assess a test run quality and provide a full report with results.
Second, let's check how to send assessment results to CI/CD.

### Quality Gate Analaysis

### How to run Quality Gates Manually

By default, all launches have "N\A" status. It means that Quality Gate analysis has not been run for these launches.

If you want to run Quality Gate analysis manually, click on the label "N/A" and click on the "Run Quality Gate" in the opened pop-up.

### How to recalculate Quality Gates 

If you want to recalculate Quality Gate status for a launch, just perform next actions: 

* click on ```the label with a status``` of a launch
* click on the ```"Recalculate"``` in the opened pop-up

[ ![Report](Images/userGuide/QualityGates/Quality Gates Report.png) ](Images/userGuide/QualityGates/Quality Gates Report.png)

Quality Gates can not be run for launches in progress.

>**Note:** If Quality Gate status has been alredy sent to CI/CD, a status can not be recalculated for a such launch. 
> [ ![Report](Images/userGuide/QualityGates/Report That is already sent .png) ](Images/userGuide/QualityGates/Report That is already sent .png)
 
### How to run Quality Gates Automatically

You can configure Auto Quality Gate Analysis on the Project Settings. If you switch Quality Gate Analysis ON, the system will start QG analysis on the launch finish. 

[ ![Report](Images/userGuide/QualityGates/Quality Gates Auto.png) ](Images/userGuide/QualityGates/Quality Gates Auto.png)

### Quality Gate Status and Timeout

When a launch finishes, the system starts Quality Gate Analysis. 

**First,** the system checks if there Quality Gate for a launch under analysis. If there is no, such Quality Gate, the system shows error message.
**Second,** if Quality Gates is found, the systems checks all rules in Quality Gate one by one and define a status for each rule
**Third,** if all rules are done, the system defines the status of a whole Quality Gate.

How is status calculated:

| Status | Calculation| Meaning |
| :----:      |:----:   |:----:   |
| Passed | All rules in a Quality Gate have status PASSED| Quality Assessment passed, a test run matches specified quality criteria  |
| Undefined| If Quality Gate does not have FAILED, IN PROGRESS rules, but at least one rule has status Undefined| Quality Assessment can not be finished :question: |
| In Progress| If Quality Gate does not have FAILED rules, but at least one rule in a Quality Gate has status IN PROGRESS| Quality Assessment is in progress |
| Failed | At least one rule in a Quality Gate has status FAILED| Quality Assessment failed, a test run does not match specified quality criteria |

**Forth,** if there is an integration with CI/CD, the system sends status to CI/CD tools to a pipeline.

:question: The reasons why Quality Gates can get a status **Undefined**:
* For "Amount of issues" rule: if a number of To Investigate issues in the analyzed launch is more than allowable To Investigate level
* For "New Failure": if a baseline is not found in the system

If you get this status, you can proceed with launch analysis (or choose another baseline) and rerun Quality Gates. For that check the section ### How to recalculate Qulaity Gates.

#### Timeout
Specially for integration with CI\CD, Quality Gates has parameter ```Timeout```. If a launch whose status should be sent to a pipeline, gets UNDEFINED status, the system uses a value from ```Timeout```. Default ```Timeout``` equals to 2 hours. It means, that after 2 hours after launch finish, the system force recaluculats Quality Gate Status and defined status. 

| Jenkins Job Status | Quality Gate Status | Description              |
| :----:      |    :----:   | :---                                    |
| SUCCESS     | PASSED      | All Rulles Passed                 |
| FAILED      | FAILED      | At least one rule does not pass                |	

If you want to choose other options for a timeout, you can do it:

* Login ReportPortal as Project Manager or Admin 
* Open ```Project Settings> Quality Gates```
* Click on ```the pencil``` on the Quality Gate rule 
* Click on ```"Edit Details."```
* Choose needed option in a dropdown ```"Timeout"``` 
* Save a Quality Gate

If there is no needed option in the dropdown, you can specify custome value via API.

### Quality Gate Report 

A Quality Gate report is a full report that shows information on Quality gate results. This is a table that shows:
 
 * all rules in a Quality Gate
 *  rule status: ```Passed/Faile/Skipped``` 
 *  expected results
 *  actual results 

[ ![Report](Images/userGuide/QualityGates/Quality Gates Report.png) ](Images/userGuide/QualityGates/Quality Gates Report.png)

All actual results are clickable in the report except New Failure. A clickable area for New failure will be available in the version 5.7. So user can drill down and investigate items, that became a reason of build failure.

## Integration with CI/CD
### Integration with Jenkins 

[ ![Report](Images/userGuide/QualityGates/Report That is already sent .png) ](https://youtu.be/W7BBhni9ANU)

#### Jenkins configuration
1. Go to “Manage Jenkins” -> “Manage Plugins”.
2. Make sure that the necessary Jenkins plugin is installed:

a. Switch to the “Installed” tab and search for the “Webhook Step” plugin.

b. If no results of the search:

i. Switch to the “Available” tab;

ii. Search for “Webhook Step”;

iii. Install the plugin with “Download now and install after restart”.

3. Define webhook configuration to the Jenkins job/pipeline before tests execution:

```groovy
def hook = registerWebhook();
def encodedUrl = sh(script: "echo -n ${hook.getURL().toString()} | base64 -w 0", returnStdout: true)
```

```encodedUrl``` – this is a unique string that will be generated from the Jenkins job/pipeline and connect each reported launch with the appropriate Jenkins run from which the launch was reported.


Put the ```encodedUrl``` variable into the test execution string at the enumeration of ```RP.attributes```. For example(Maven build):

```groovy
Drp.attributes='k1:v1;k2:v2;rp.webhook.key:${encodedUrl}'
```

5. Configure webhook waiting data from RP:

**a. Option #1**

This option allows sending the Quality Gates result status to the separate pipeline stage. It doesn’t affect the tests execution stage, and the status of that stage will be determined by the result of the Quality Gate status.
Add additional pipeline stage Wait for webhook and define the particular TIMEOUT_TIME, how long Jenkins should wait for data from RP:

```groovy
stage('Wait for webhook') {
     timeout(time: params.TIMEOUT_TIME, unit: params.TIMEOUT_UNIT) {

         echo 'Waiting for RP processing...'
         data = waitForWebhook hook;
         echo "Processing finished... ${data}"

         def jsonData = readJSON text: data
         assert jsonData['status'] == 'PASSED' 
      }
}
```

Parameters for ```TIMEOUT_TIME``` and ```TIMEOUT_UNIT``` can be defined like that:

```groovy
parameters {
        string(name: 'TIMEOUT_TIME', defaultValue: '30', description: '')
        string(name: 'TIMEOUT_UNIT', defaultValue: 'SECONDS', description: '')
}
```

**b. Option #2**

This option should send the results from the RP to the tests run pipeline stage, and the status of that stage(tests execution) will be determined by the result of the Quality Gate status.
Add next code in the pipeline stage, where tests run:

```groovy
echo 'Waiting for RP processing...'
data = waitForWebhook hook;
echo "Processing finished... ${data}"

def jsonData = readJSON text: data
assert jsonData['status'] == 'PASSED'
```

If the Jenkins received a response about QualityGate status from RP, the build status should be appropriately marked:

| Jenkins Job Status | Quality Gate Status | Description              |
| :----:      |    :----:   | :---                                    |
| SUCCESS     | PASSED      | Quality Gate is passed                  |
| ABORTED	    | UNDEFINED   | The Jenkins timeout has been exceeded   |
| FAILED      | FAILED      | Quality Gate is failed                  |		
	
