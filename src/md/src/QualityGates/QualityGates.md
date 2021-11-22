## Quality Gate Purpose 

## How to instal Quality Gates

## Feature overview 

## Quality Rules Configuration

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

a. Option #1.
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

b. Option #2.
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


