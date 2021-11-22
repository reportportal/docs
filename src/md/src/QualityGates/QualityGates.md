## Quality Gate Purpose 

 we support Continuous Testing with build-in functionality - Quality Gates
 ![image](https://user-images.githubusercontent.com/30413511/142943040-4eed81c4-b58f-44c2-8ef1-81479cef5064.png)

 

## How to install Quality Gates

The Quality Gate feature is available in the scope of ReportPortal enterprise version. 
Section is in progress

## Feature overview 

Quality Gate analysis provides capabilities to speed up CI/CD pipeline by auto-analysis and auto-feedback to your CI/CD tools. ReportPortal assesses the build quality and sends auto feedback to CI/CD.

Quality Gates plugin adds to ReportPortal possibilities:

* to create quality rules based on general test automation KPI: number of executed tests and executed tests, failure rate, failure of critical components, number of issues in executed tests, number of critical issues in the critical components, new failures & new errors in the build
* run Quality Gates analysis for build and view build report that helps to troubleshoot issues in the build
* automatically send Quality Gates status to CI/CD. 

## Quality Rules Configuration

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

>**Case 2:** Regression suite contains 500 tests with critical priority. You want to track if critical tests are executed every time. 


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




## Assesment of test results using Quality Gates 

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


