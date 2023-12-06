---
sidebar_label: Integration with GitLab CI
---

# Integration with GitLab CI

In this tutorial we will walk you through the process of integrating ReportPortal with GitLab CI. It is not the case for GitLab, but there are some recipes.

## Prerequisites

To run your tests in any kind of CI, you first need a way to execute them in the
console. E.G. for Java this might be calling a build tool like Gradle or Maven
with: `./gradlew test` or `./mvnw test` respectively. For Python it might be
`pytest` command. Your tests should be already integrated with a ReportPortal agent. To
find out how to do that, check out our documentation on [corresponding
page](/log-data-in-reportportal/test-framework-integration/).
You also need a working ReportPortal instance and access to your secret storage, E.G.
[HashiCorp Vault](https://www.vaultproject.io/), to securely get your
credentials while the pipeline is running.

## Using Gitlab CI pipeline file

We are going to use the `.gitlab-ci.yml` file to store and modify our CI pipeline,
this file should be hosted in the same Git repository which contains your
tests. We believe this is the most reliable way to reproduce and spread
pipeline configuration for many users. More on `.gitlab-ci.yml` syntax you can
find in the official [GitLab documentation](https://docs.gitlab.com/ee/ci/yaml/gitlab_ci_yaml.html).

## Define pipeline structure and rules

Before running tests, we need to define the steps we want to pass in our pipeline.
This is the common thing for any language or framework you might use, so let’s
do that.

First, we need to securely get our test credentials from a secure storage.
These credentials should not be stored in any kind of logs, artifacts,
attachments during pipeline execution to avoid security breaches. Second, we
need to run tests with those credentials which we got from the first step. And
third, enterprise users might also want to utilize our Quality Gates plugin to
get more control over application-under-test quality, this will be described in
the last section of the current article. Additionally, we will disable on-push
pipeline runs and allows only manual triggering.

So, let's start with a basic yaml file skeleton:
```yaml
workflow:
  rules:
    - if: '$CI_PIPELINE_SOURCE == "push"'
      when: never  # Prevent pipeline run for push event
    - when: always # Run pipeline for all other cases

stages:
  - secrets
  - test

secrets:
  stage: secrets

test:
  stage: test
  needs: ['secrets']
```

Notice we put the `needs: ['secrets']` property to run the test job only after we set
up secrets.

## Getting test secrets

The latest GitLab CI versions support native integration with HashiCorp Vault
for Premium users, we recommend you use it instead of our solution to avoid
configuration troubles. But for free users or older versions of GitLab we can
provide our own recipe.

As prerequisites configure your Vault server for use with GitLab as described
in official documentation and enable CI/CD on your project:
* https://docs.gitlab.com/ee/ci/secrets/#configure-your-vault-server
* https://docs.gitlab.com/ee/ci/enable_or_disable_ci.html#enable-cicd-in-a-project

Next, we are going to need Vault CLI to connect to the Vault Server. While we
can definitely install it in the `before_script` section, it's better to use
the `vault:latest` base image to just get it. Instead in the `before_script` we will
install just a `curl` tool to be able to call GitLab API.

This is how the Secrets section will look like:
```yaml
secrets:
  stage: secrets
  image: vault:latest
  before_script:
    - apk add --no-cache curl
```

The idea of this solution is to get necessary secrets with Vault CLI and set
them as project variables to use further in the pipeline. To configure Vault CLI
for using the necessary server we can use these environment variables:
* VAULT_ADDR – remote address of your Vault server.
* VAULT_NAMESPACE – your working namespace on the server (if not default).
* VAULT_CACERT – path to your Certificate Authority certificate.
* VAULT_TOKEN – a token to access Vault.

So, our Secrets section in the pipeline file will look like that:
```yaml
secrets:
  stage: secrets
  image: vault:latest
  before_script:
    - apk add --no-cache curl
  script:
    - export VAULT_ADDR=https://vault.example.com:8200
    - export VAULT_NAMESPACE=rp/test/
    # Put your Certificate Authority certificate path here
    - export VAULT_CACERT=cacert.pem
    - export VAULT_TOKEN="$(vault write -field=token auth/jwt/login role=tests-develop jwt=$CI_JOB_JWT)"
    # These fields we get from Vault to operate
    - RP_ADMIN_PASSWORD=$(vault kv get -field=rp.admin.password secrets/demo/test)
    - RP_DEMO_KEY=$(vault kv get -field=rp.demo.key secrets/demo/test)
```

Where `tests-develop` in the `VAULT_TOKEN` variable initialization is a role name
you should configure on the Vault server as a prerequisite (with
the `vault policy write [role name]` command). `CI_JOB_JWT` is an environment
variable available in GitLab CI runtime. `RP_ADMIN_PASSWORD` and `RP_DEMO_KEY`
are those secrets which we want to get from Vault, they are stored by
the `secrets/demo/test` path on Vault and named `rp.admin.password` and
`rp.demo.key` respectively.

To set pipeline variables, we need a GitLab API token. Create it with the
following steps:
1. Go to the GitLab user's profile page.
2. In the left menu select Access Tokens.
3. Enter Token name, E.G.: `gitlab_cicd`.
4. Select the Expiration date of the token.
5. Check “api” in the Select scopes section.
6. Click Create personal access token.
7. Copy and save your token from `Your new personal access token` field.

Now let’s create our pipeline variables. To do this, go to your GitLab project
page and do the following things:

1. Select Settings > CI/CD.
2. Click Expand on the Variables section.
3. Click Add variable.
4. Fill Key and Value fields.
5. (Strongly recommended) check Protect variable and Mask variable checkboxes.

For our example we need 3 such variables:
* GITLAB_API_TOKEN – for storing the Access token we created, to use GitLab API.
* RP_ADMIN_PASSWORD – example secret.
* RP_DEMO_KEY – another example secret.

To finish up our secret setup, we need to update the corresponding section once
again:
```yaml
secrets:
  stage: secrets
  image: vault:latest
  before_script:
    - apk add --no-cache curl
  variables:
    GITLAB_INSTANCE: 'https://git.example.com'
  script:
    - export VAULT_ADDR=https://vault.example.com:8200
    - export VAULT_NAMESPACE=rp/test/
    # Put your Certificate Authority certificate path here
    - export VAULT_CACERT=cacert.pem
    - export VAULT_TOKEN="$(vault write -field=token auth/jwt/login role=tests-develop jwt=$CI_JOB_JWT)"
    # These fields we get from Vault to operate
    - RP_ADMIN_PASSWORD=$(vault kv get -field=rp.admin.password secrets/demo/test)
    - RP_DEMO_KEY=$(vault kv get -field=rp.demo.key secrets/demo/test)
    - >
      curl -f -s -X PUT --header "Private-Token: $GITLAB_API_TOKEN" --header "Content-Type: application/json"
      --data '{"value": "'"$RP_ADMIN_PASSWORD"'"}'
      "${GITLAB_INSTANCE}/api/v4/projects/$CI_PROJECT_ID/variables/RP_ADMIN_PASSWORD" > /dev/null 2>&1
    - >
      curl -f -s -X PUT --header "Private-Token: $GITLAB_API_TOKEN" --header "Content-Type: application/json"
      --data '{"value": "'"$RP_DEMO_KEY"'"}'
      "${GITLAB_INSTANCE}/api/v4/projects/$CI_PROJECT_ID/variables/RP_DEMO_KEY" > /dev/null 2>&1
```

In two new script commands we call GitLab API with the `curl` command setting up
values for our variables: RP_ADMIN_PASSWORD and RP_DEMO_KEY. We use
GITLAB_API_TOKEN variable to access GitLab API and CI_PROJECT_ID default
environment variable to refer to our current project. Notice that you need to
replace `git.example.com` with your git domain. Also notice that with
`> /dev/null 2>&1` command suffix we mute any output from stdout and stderr for
the sake of security, to avoid accidental reveal of our secrets in case of request
logging or request error logging.

## Running tests

Let's imagine we need to run our tests on two different languages: Python based
tests running with pytest and Kotlin based tests running with Gradle. These are
two rather different environments with very different approaches which should
give you an idea of how that works.

### Kotlin tests

As for secrets we need to start with defining the base worker image we are going to
use. Unfortunately, there are no official Kotlin Docker images on Docker Hub, so
we need to install it ourselves, in the `before_script` section. But Kotlin is a
JVM based language, so we need Java to run it. Let's pick a common JDK image
for that, E.G.: `eclipse-temurin:11-jdk-jammy`, since OpenJDK’s images are
rather outdated and haven’t been updated for years. This is Ubuntu based image,
so we can install additional software with `apt-get`.

Here is updated the "test" section of our pipeline Yaml with Kotlin installation:
```yaml
test:
  stage: test
  needs: ['secrets']
  image: eclipse-temurin:11-jdk-jammy
  variables:
    KOTLIN_VERSION: '1.4.32'
  before_script:
    - apt-get update
    - apt-get install -y unzip
    - curl -L https://github.com/JetBrains/kotlin/releases/download/v$KOTLIN_VERSION/kotlin-compiler-$KOTLIN_VERSION.zip -o /tmp/kotlin-compiler.zip
    - unzip /tmp/kotlin-compiler.zip -d /opt
    - export PATH=$PATH:/opt/kotlinc/bin
```

As you can see, we install `unzip`, then download the necessary Kotlin version with
curl, unzip it to `/opt` and update the `PATH` variable to make the Kotlin compiler
available from any folder in command line. Kotlin version was moved to a
variable to ease further pipeline updates.

Now, let's run our tests:
```yaml
test:
  stage: test
  needs: ['secrets']
  image: eclipse-temurin:11-jdk-jammy
  variables:
    KOTLIN_VERSION: '1.4.32'
  before_script:
    - apt-get update
    - apt-get install -y unzip
    - curl -L https://github.com/JetBrains/kotlin/releases/download/v$KOTLIN_VERSION/kotlin-compiler-$KOTLIN_VERSION.zip -o /tmp/kotlin-compiler.zip
    - unzip /tmp/kotlin-compiler.zip -d /opt
    - export PATH=$PATH:/opt/kotlinc/bin
  script:
    # Cast execution flag on gradle wrapper script file, just in case
    - chmod +x ./gradlew
    - ./gradlew :service-api:demoSmoke -Prp.api.key=$RP_DEMO_KEY -Prp.admin.password=$RP_ADMIN_PASSWORD
```

We run our tests with Gradle wrapper and cast execution flag on runner script
just in case. We also bypass our secrets through command line parameters to our
Gradle to use later in tests. They won't be exposed, since this is not
a replacement, but a reference to a variable.

### Python tests

Python tests are rather easy to configure, compared to Kotlin. We start with
defining the base worker image and we are going to use `python:3.10.12`. This is
Debian-based image, so we can also install additional software with `apt-get`
if necessary. In the `before_script` section we can install our requirements for
the project and run tests in the main section with `pytest` command.

Here is the updated "test" section of our pipeline Yaml:
```yaml
test:
  stage: test
  needs: ['secrets']
  image: python:3.10.12
  before_script:
    - python -m pip install --upgrade pip
    - pip install -rrequirements-dev.txt
  script:
    - pytest -sv --reportportal -m "not command_skip" -n 2 -o "rp_api_key=$RP_DEMO_KEY" tests
```

As you can see, we pass `RP_DEMO_KEY` through the command line, that’s safe, since
this is not a replacement, but a reference to a variable. You will see just a
variable name in the logs.

## Setting up Quality Gates integration (optional)

Enterprise users can utilize our Quality Gates plugin to get more
control over application-under-test quality. To enable and configure Quality Gates plugin on
ReportPortal, please, refer to [corresponding documentation](/category/quality-gates).

ReportPortal the Quality Gates plugin doesn't have native integration with GitLab, so we
need to use a custom approach here. One way is polling ReportPortal Launch info API for
a specific value, which the Quality Gates plugin leaves after passing. For that we need Launch
UUID, which is a unique Launch identifier.

### Getting Launch UUID for Kotlin tests

Every Java Agent has specific properties which control Launch UUID printing,
since July 2023. To ensure that check if your Agent has
the `com.epam.reportportal:client-java` library dependency of version 5.1.23 or
late. It’s generally safe to add exclusion and put a newer version of the library
to get new features. So these properties are: `rp.launch.uuid.print` and
`rp.launch.uuid.print.output`. You can put them into your
`reportportal.properties` file. Enable Launch UUID printing with the property:
`rp.launch.uuid.print = true`. It will output a line like this into the console:
`ReportPortal Launch UUID: 61ce1c26-842a-4bde-9abe-a4696e31d626`.

Our tests use Gradle to build and run them, unlike other build systems Gradle
usually hides test output streams and just prints truncated stack trace in case
of test failures, so we need to tell it not to do that. This is possible if you
put the following section somewhere into your Gradle test task:
```
testLogging {
  showStandardStreams = true
}
```

Next, we need to save this UUID to an environment variable which we latter will
use in a separate stage in polling ReportPortal API. GitLab allows this with [dotenv
files](https://docs.gitlab.com/ee/ci/variables/#pass-an-environment-variable-to-another-job).

Here is the updated "test" stage which does these things:
```yaml
test:
  stage: test
  needs: ['secrets']
  image: eclipse-temurin:11-jdk-jammy
  variables:
    KOTLIN_VERSION: '1.4.32'
  before_script:
    - apt-get update
    - apt-get install -y unzip
    - curl -L https://github.com/JetBrains/kotlin/releases/download/v$KOTLIN_VERSION/kotlin-compiler-$KOTLIN_VERSION.zip -o /tmp/kotlin-compiler.zip
    - unzip /tmp/kotlin-compiler.zip -d /opt
    - export PATH=$PATH:/opt/kotlinc/bin
  script:
    # Cast execution flag on gradle wrapper script file, just in case
    - chmod +x ./gradlew
    - ./gradlew --console=plain :service-api:demoSmoke -Prp.api.key=$RP_DEMO_KEY -Prp.admin.password=$RP_ADMIN_PASSWORD | tee ./console.log
    - >
      sed -rn 's/ReportPortal Launch UUID: ([^\\r\\n]+)/LAUNCH_UUID=\1/ w launch.env' ./console.log
```

Some explanations here:
* We used the `--console=plain` Gradle parameter to make output suitable for saving in a file.
* To preserve console output, we used the `tee` command, which copies standard input to each specified file, and to standard output.
* We used the `sed` command to format and save our Launch UUID into `launch.env` file.
* Thus, we got a preformatted `launch.env` file and attached it as an artifact, which then will be used to populate environment variables by GitLab.

### Getting Launch UUID for Python tests

ReportPortal pytest agent has specific properties which control Launch UUID printing,
since version 5.2.2: `rp_launch_uuid_print` and `rp_launch_uuid_print_output`.
You can put them into your `pytest.ini` file. For this example, we just need
one of them: `rp_launch_uuid_print = True`. It will output a line like this
into the console:
`ReportPortal Launch UUID: 61ce1c26-842a-4bde-9abe-a4696e31d626`.

Next, we need to save this UUID to an environment variable which we later will
use in a separate stage in polling ReportPortal API. GitLab allows this with [dotenv
files](https://docs.gitlab.com/ee/ci/variables/#pass-an-environment-variable-to-another-job).

Here is the updated "test" stage which does these things:
```yaml
test:
  stage: test
  needs: ['secrets']
  image: python:3.10.12
  before_script:
    - python -m pip install --upgrade pip
    - pip install -rrequirements-dev.txt
  script:
    - pytest -sv --reportportal -m "not command_skip" -n 2 -o "rp_api_key=$RP_DEMO_KEY" tests | tee ./console.log
    - >
      sed -rn 's/ReportPortal Launch UUID: ([^\\r\\n]+)/LAUNCH_UUID=\1/ w launch.env' ./console.log
```

Some explanations here:
* To preserve console output, we used the `tee` command, which copies standard input to each specified file, and to standard output.
* We used the `sed` command to format and save our Launch UUID into `launch.env` file.
* Thus, we got a preformatted the `launch.env` file and attached it as an artifact, which then will be used to populate environment variables by GitLab.

### Adding Quality Gates stage

If you did your pipeline configuration in the same manner as in this article
this step will be the same for you, no matter which language do you use. First,
we need to configure our "test" stage not to fail in case of unsuccessful
tests, since we are going to decide about test status on the Quality Gates step. This can be
done by adding the `allow_failure: true` field:
```yaml
test:
  stage: test
  needs: ['secrets']
  allow_failure: true
```

As the next step we need to add the `quality-gate` stage to our pipeline:
```yaml
stages:
  - secrets
  - test
  - quality-gate

quality-gate:
  stage: quality-gate
  needs: ['test']
```

Notice that we put the `needs: ['test']` property to run the Quality Gates job only after we pass
tests.

The third step will be a little bit tricky. Since we don't specify any image, we
don't really know which base image is used in our GitLab instance. This might
be an Ubuntu/Debian based image, or Alpine Linux, or anything else, depending
on which workers were chosen by your operations team. But we need to ensure we
have `curl` and `jq` tools to call ReportPortal API, so we need to install them in
the `before_script` section. Let's make it universal for Debian and Alpine like
that:
```yaml
quality-gate:
  stage: quality-gate
  needs: ['test']
  before_script:
    - apt-get update || apk update
    - apt-get install -y curl jq || apk add --no-cache curl jq
```

As you can see, we used logical "or" sign `||` to call `apk`, which is Alpine
packaging tool, in case `apt-get` does not exist and therefore returns failure
result.

Now, it's time to finish our script, this will be a rather complex one:
```yaml
quality-gate:
  stage: quality-gate
  needs: ['test']
  before_script:
    - apt-get update || apk update
    - apt-get install -y curl jq || apk add --no-cache curl jq
  variables:
    RP_INSTANCE: 'https://demo.reportportal.io'
    SCRIPT_TIMEOUT_SECONDS: 60
    REQUEST_TIMEOUT_SECONDS: 60
  script: |
    echo "Quality gate"
    echo "LAUNCH_UUID: $LAUNCH_UUID"
    QUALITY_GATE_STATUS=""
    START_TIME=$(date +%s)
    while [ -z "$QUALITY_GATE_STATUS" ] && [ $(( $(date +%s) - START_TIME )) -lt $SCRIPT_TIMEOUT_SECONDS ]; do
      echo "Waiting for quality gate status..."
      sleep 10
      QUALITY_GATE_JSON=$(curl -s -H "Authorization: Bearer $RP_DEMO_KEY" --max-time "$REQUEST_TIMEOUT_SECONDS" "${RP_INSTANCE}/api/v1/report_portal_demo/launch/${LAUNCH_UUID}")
      QUALITY_GATE_STATUS=$(echo "$QUALITY_GATE_JSON" | jq -r '.metadata.qualityGate.status // empty')
    done
    if [ "$QUALITY_GATE_STATUS" != "PASSED" ]; then
      echo "Quality gate status: $QUALITY_GATE_STATUS"
      echo "Failing the pipeline."
      exit 1
    else
      echo "Quality gate status: $QUALITY_GATE_STATUS"
      echo "Pipeline passed."
    fi
```

Notice, that we have moved the ReportPortal base URL configuration, polling timeout and request timeout
to the variables section to ease their update. In script we are polling our ReportPortal
instance for Launch info with `curl` and Launch UUID, which we got in the previous
step. After that with `jq` we are trying to read a specific field in response
JSON or return empty value if Quality Gate is not passed yet, or request is failed. In
case of an empty response, we retry our call to ReportPortal. Finally, we compare `jq`
output with "PASSED" literal and if it’s equal we quit gracefully, or we fail
the step in any other case.

And we are finally done!

## Conclusion

ReportPortal does not have native integration with GitLab, but that’s not something that
might stop you. In this article we set up GitLab integration with ReportPortal using
shell scripts and console commands. We also implemented HashiCorp Vault
integration to store our test secrets securely. To provide more outlook we
described how to run tests in Kotlin and Python.

And here are the corresponding pipeline files, which we implemented:
* [Kotlin](https://github.com/reportportal/examples-java/blob/master/.gitlab-ci.yml)
* [Python](https://github.com/reportportal/examples-python/blob/master/.gitlab-ci.yml)
