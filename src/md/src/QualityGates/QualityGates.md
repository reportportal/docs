## Quality Gate Purpose 

 we support Continuous Testing with build-in functionality - Quality Gates
 
 ![image](https://user-images.githubusercontent.com/30413511/142943040-4eed81c4-b58f-44c2-8ef1-81479cef5064.png)

 

## How to install Quality Gates

The Quality Gate feature is available in the scope of ReportPortal enterprise version, which is provided for clients in a scope of support paid engagement( min contract amount 50K).

If you are interested in this feature, please contact us via support@reportportal.io.

## Feature overview 

Quality Gate analysis provides capabilities to speed up CI/CD pipeline by sending auto-feedback to your CI/CD tools. ReportPortal assesses the build quality and sends auto feedback to CI/CD.

Quality Gates plugin adds to ReportPortal possibilities:

* to create quality rules based on general test automation KPI: number of executed tests and executed tests, failure rate, failure of critical components, number of issues in executed tests, number of critical issues in the critical components, new failures & new errors in the build
* run Quality Gates analysis for build and view build report that helps to troubleshoot issues in the build
* automatically send Quality Gates status to CI/CD. 

## Quality Gate adding to ReportPortal

Default configuration of ReportPortal doen't contain Quality Gate. For adding this feature, you need to receive a link to .jar file from ReportPortal. Download .jar file and upload it to ReportPortal. Fo that please perform, following actions:

* Login ReportPortal as an Admin 
* Open ```Admin Page > Plugins``` 
* Click on the button ```Upload```
* Add .jar file to the modal ```Upload plugin```
* And click the button ```Upload```
* Reload page 

As soon as the plugin has been added to the ReportPortal, a new ```tab Quality Gates tab``` will be added to the Project Settings.
![image](https://user-images.githubusercontent.com/30413511/143957546-e3d0e83a-b7c7-4b46-bb6f-d98cddc25f7e.png)

On the All launches page the system adds a label to each launch.
![image](https://user-images.githubusercontent.com/30413511/143957615-51ac23c7-ec0c-4576-bba1-b37a89f2a66c.png)

![image](https://user-images.githubusercontent.com/30413511/143957546-e3d0e83a-b7c7-4b46-bb6f-d98cddc25f7e.png)

```A label "N/A"``` means that the Quality Gates has not been run for a launch yet.


## Quality Rules Configuration

Now let's configure Quality rule which will be used for launch quality assesment. 

### Quality Gate creation
Quality Gates can be configured on the Project Settings on the tab Quality Gate.

Project Manager or Admin can create a several rules for one project.

For Quality Gate creation Project Manager or Admin should:


1. Open Project Settings> Quality Gates 
2. Click on the ```Create Gate``` button
3. In ```Create Quality Gate``` fill in the form: 

```
Quality Gate Name: (Min length 1 - max length 55) A name which will be added to the Quality Gate report on All launches
Analyzed Launch: Launch Name of a launch that should be analyzed   
Attributes: key: value AND key:value AND key:value (example = build: 5.0 AND device: MacOS AND testPlan: Regression) 
```
![image](https://user-images.githubusercontent.com/30413511/142935092-bc1996cf-8459-4563-86d8-6feffcf761eb.png)

![image](https://user-images.githubusercontent.com/30413511/142934937-01d850cc-2da5-4c5f-809d-3ff9f8bda8fe.png)

4. Click on the button ```"Save"```
5. A Quality Gate is created successfully
6. Quality Gate is added to the Quality Gate List

https://youtu.be/dXp3Lf9bI30

### Quality Gate rules

When Quality Gate is created, you can fill you gate with quality rules.

There are 4 types of Quality Gate rules:
* Amount of tests
* Amount of issues
* Percent 
* New failures 
* New errors (in 5.7 version)

#### Amount of tests in the run 

>**Case 1:** Regression suite has 1000 tests. You want to track that all tests should be run every time.

https://youtu.be/TC0J8BV_XBY

>**Case 2:** Regression suite contains 500 tests with critical priority. You want to track if critical tests are executed every time. 

https://youtu.be/EwsG7RcmcDs

![image](https://user-images.githubusercontent.com/30413511/142938190-16c81fd5-7a31-4552-b7e8-fecbe6a96bb9.png)

The purpose of the rule is to block a run that contains not all tests. So that you can define the minimum number of tests that should be in the run.

**Amount of tests in a launch**

For adding this rule Project Manager or Admin should:

1.  Open Project Settings> Quality Gate 
2.  Click on the pencil on the Quality Gate
3.  Click on the drop-down: "Add a new rule"
4.  Choose an option "Amount"
5.  Choose option "All tests"
6.  Add a number of min allowable amoutn of tests in the launch - N 
7.  Click on the tick 
8.  The rule is added to the Quality Gate

In this case, on the finish the system will automatically analyzed a launch and compare number of tests in the analyzed launch with number in the "amount" rule in the Quality Gate. If number of tests in the launch is less than in the rule, the system fails the rule and Qulaity Gate.

You can add only 1 "All tests amount" rule to the 1 Quality Gate.  

**Amount of tests in a component/feature/etc**

You can track also number of tests that belong to a feature, component, priority or others in a launch.
For that tests in the analyzed launch should have attributes (f.i. feature: Payment, or component: Payment, or priority: critical, or any others).

Than you need to add a "amount" rule with an attribute option:

1.  Open Project Settings> Quality Gate 
2.  Click on the pencil on the Quality Gate
3.  Click on the drop-down: "Add a new rule"
4.  Choose an option "Amount"
5.  Choose option "Tests with attributes"
6.  Add a number of min allowable amoutn of tests for the component, feature etc. - N 
7.  Click on the tick 
8.  The rule is added to the Quality Gate

In this case, on the finish the system will automatically analyzed a launch and compare number of tests with specified attirbut in the analyzed launch with number in the "amount" rule in the Quality Gate. If number of tests is less than in the rule, the system fails the rule and Qulaity Gate.

You can add several "Tests with attribute amount" rule to the Quality Gate. But it is impossible to create duplicates.






#### Failure rate of the run 

>**Case 1:** Regression suite has 1000 tests. You want to track that passing rate should be no more than 5%.

>**Case 2:** Regression suite contains 500 tests with critical priority. You want to track if critical tests are passed in each run. 

https://youtu.be/bSO21gtT82E

![image](https://user-images.githubusercontent.com/30413511/142943514-e6f1f989-49fc-49d5-983a-d7d0261941df.png)

The purpose of the rule is to block a run that has a not allowble passing rate. So that you can define the minimum failure rate for the run.

**Launch Failure rate**

For adding this rule Project Manager or Admin should:

1.  Open Project Settings> Quality Gate 
2.  Click on the pencil on the Quality Gate
3.  Click on the drop-down: "Add a new rule"
4.  Choose an option "Percent"
5.  Choose option "All tests"
6.  Add a % of min allowable failure rate - N% 
7.  Click on the tick 
8.  The rule is added to the Quality Gate

In this case, on the finish the system will automatically analyzed a launch and compare failure rate (failed tests/total) in the analyzed launch with % in the "failure percent" rule in the Quality Gate. If failure rate in the launch is more than in the rule, the system fails the rule and Qulaity Gate.

You can add only 1 "All tests failure rate" rule to the 1 Quality Gate.  

**Failure rate in a component/feature/etc**

You can track also failure rate of tests that belong to a feature, component, priority or others in a launch.
For that tests in the analyzed launch should have attributes (f.i. feature: Payment, or component: Payment, or priority: critical, or any others).

Than you need to add a "amount" rule with an attribute option:

1.  Open Project Settings> Quality Gate 
2.  Click on the pencil on the Quality Gate
3.  Click on the drop-down: "Add a new rule"
4.  Choose an option "Percent"
5.  Choose option "Tests with attributes"
6.  Add a % of min allowable failure rate - N% 
7.  Click on the tick 
8.  The rule is added to the Quality Gate


In this case, on the finish the system will automatically analyzed a launch and compare failure rate (failed tests/total)of tests with specified attiribute in the analyzed launch with failure rate (failed tests/total) from the rule in the Quality Gate. If failure rate is more than specified in the rule, the system fails the rule and Qulaity Gate.

You can add several "Tests with attribute percent" rule to the Quality Gate. But it is impossible to create duplicates.

**Not passed rate in the launch or in a component/feature/etc**

You can use "Percent rule" in several options: Failure /Not passed.

Failure rule is described in the previous sections.

If you choose "Not passed" option, rate will be calculated as (failed + skipped)/total.







#### Amount of issues in the run 

>**Case 1:** Regression suite has 1000 tests. You want to track that the run should not have critical issue or Product bugs (or any other)

>**Case 2:** Regression suite contains 500 tests with critical priority. You want to track that the run should not have critical issue or Product bugs (or any other) in the 500 tests.

https://youtu.be/ajIvWB83bGg




##### Allowable leavel of To investigate

When you choose a rule "Amount of issues", the system automatically adds a parameter "Allowable To investigate level" to the Quality Gate.
What does this parameter mean?

The purpose of the rule is a check and a guarantee that the run does not contain specified issues. But if a launch contains "To investigate" the system can not make an analysis of the system and guarante that the forbiden isssues absent in a launch.

For this reasons, we have added a parameter "Allowable To investigate level". By default, this parameter equals to 0. It means, that the Quality gate analysis can be done 



#### New failures in the run 


>**Case 1:** Regression suite has 1000 tests. In the last released version 5 tests failed in a regression suite. You want to track that the regression run on the version in development should not have new failures.

>**Case 2:** Regression suite contains 500 tests with critical priority. In the last released version 1 test with critical priority failed. You want to track that critical tests in the regression run on the version in development should not have new failures.

Amount of issues has also 2 option "All tests" and "Tests with attribute". The purpose for the rule is to limit number of unwanted defects in the run. With option "All tests" you can limit issues for all tests in the launch.

With the option "Test with attributes" you can limit issues in the critical features, components or etc.

The purpose of the rule is to block a run that has a new failures in comparison with a chosen baseline.

New failures has also 2 option "All tests" and "Tests with attribute". The purpose of the rule is to block a run that has a new failures in comparison with a chosen baseline.


1.  Open Project Settings> Quality Gate 
2.  Click on the pencil on the Quality Gate
3.  Click on the drop-down: "Add a new rule"
4.  Choose an option "New failure"
5.  Choose option "All tests"/"Test with attributes"
8.  Click on the tick 
9.  The rule is added to the Quality Gate

In this case, on the finish the system will automatically analyzed a launch and compare failed tests /or  failed tests with specified attiribute in the analyzed launch with tests in the baseline. If the system detects a new failure in the launch or in tests with specified attributes, it fails a rule. 

##### How to choose a Baseline for "New faileres" rule

**Default Baseline**

By default a system will use ```a previous launch``` for comparison. For example for "Launch A #3", the system will use "Launch A #2" as a baseline. If there is no "Launch A #2" (f.e. this launch has been deleted by retention job) in the system, the system will use "Launch A #1".

If there is no a fitting launch in the system, the "New failure" rule will get a status "Undefine".

![image](https://user-images.githubusercontent.com/30413511/143959570-88bf90df-52f8-44b3-821b-90b4640349d0.png)

**Customized Baseline**

If you want chooseother options for a baseline, you can do it:

* Login ReportPortal as Project Manager or Admin 
* Open Project Settings> Quality Gates
* Click on the pencil on the Quality Gate rule 
* Click on "Edit Details"
* Unclick a checkbox on "Choose a previous launch as a baseline" 
* The system activate filds for baseline configuration


| Case | Fileds configuration | 
| :----:      |    :----:   | 
| You want to specify a static launch, that should be used always| Select launch name and add launch number in the baseline section|
| You want to specify dynamic launcg| Select launch name and check a button "Latest" (?)|

(?) When you use "latest" the system will use the lastest launch with specified launch name, which have been run before analyzed launch.
If you want to specify a baseline, you also can add a launch attributes. In this case the system will use the lastest launch with specified launch name and attributes, which have been run before analyzed launch.



## Assesment of test results using Quality Gates 

Now the system is preconfigured, and you can start using Quality Gates Analysis.

Quality Gates plugin can be used as with CI/CD tools - in this case, Quality Gate status will be sent to CI/CD pipeline.
But also Quality Gates can used just as a way of test results analysis.

First, let's discuss how Report Portal assese a test run quality and provide a full reportr with results.
Second, let's check how assesment results ca be sent to CI/CD

### How to run Quality Gates Manually

By default, all launches have "N\A" status. It means that Quality Gate analysis has not been run for these launches.

If you want to run Quality Gate analysis manually, click on the label "N/A" and click on the "Run Qulaity Gate" in the opened pop-up.

![image](https://user-images.githubusercontent.com/30413511/143961414-b1e63a25-9976-4750-a3dd-f54df7564f2b.png)

### How to run Quality Gates Automatically

You can configure Auto Quality Gate Analysis on the Project Settings. If you switch Quality Gate Analysis ON, the system will start QG analysis on the launch finish. 

### Quality Gate Status

When Quality Gate analysis is finished, a launch gets a status. How is status calculated:

| Status | Calculation| Meaning |
| :----:      |:----:   |:----:   |
| Passed | All rules in a Quality Gate have status PASSED| Quality Assesment passed, a test run matchs specified quality criteria  |
| Undefined| If Quality Gate does not have FAILED rules, IN PROGRESS rules, but at least one rule has status Undefined| Quality Assesment can not be finished (?) |
| In Progress| If Quality Gate does not have FAILED rules, but at least one rule in a Quality Gate has status IN PROGRESS| Quality Assesment is in the progress |
| Failed | At least one rule in a Quality Gate has status FAILED| Quality Assesment failed, a test run does not match specified quality criteria |

(?) The reasons why Quality Gates can get a status **Undefined**:
* For "Amount of issues" rule: if a number of To Investigate issues in the analyzed launch is more then allowable To Invetigate level
* For "New Failure": if a baseline is not found in the System

If you get this status, you can proceed launch analysis (or choose another baseline) and rerun Quality Gates. For that:

* Click on the Quality Gate status label 
* On the Quality Gate Popoup click on the "Run Quality Gate"
* Reload Page

### Quality Gate Report 



## Integration with CI/CD

### Integration with Jenkins 

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


Put the ```encodedUrl``` variable into the test execution string at the enumeration of ```rp.attributes```. For example(Maven build):

```groovy
Drp.attributes='k1:v1;k2:v2;rp.webhook.key:${encodedUrl}'
```

5. Configure webhook waiting data from RP:

**a. Option #1**

This option allows sending the Quality Gates result status to the separate pipeline stage and doesn’t affect the tests execution stage and the status of that stage will be determined by the result of the Quality Gate status.
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

This option should send the results from the RP to the tests run pipeline stage and the status of that stage(tests execution) will be determined by the result of the Quality Gate status.
Add next code in the pipeline stage, where tests run:

```groovy
echo 'Waiting for RP processing...'
data = waitForWebhook hook;
echo "Processing finished... ${data}"

def jsonData = readJSON text: data
assert jsonData['status'] == 'PASSED'
```

If the Jenkins received a response about QualityGate status from RP, the build status should be marked properly:

| Jenkins Job Status | Quality Gate Status | Description              |
| :----:      |    :----:   | :---                                    |
| SUCCESS     | PASSED      | Quality Gate is passed                  |
| ABORTED	    | UNDEFINED   | The Jenkins timeout has been exceeded   |
| FAILED      | FAILED      | Quality Gate is failed                  |		
	

#### Configure Quality Gate Analysis timeout

Set the appropriate “Timeout” value, which defined the delay for Quality Gate status auto-sending to Jenkins.
Quality Gate status example, if Jenkins configuration is working and the result has been sent to CI/CD pipeline:


