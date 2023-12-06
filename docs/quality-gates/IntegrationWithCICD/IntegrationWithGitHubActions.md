---
sidebar_label: Integration with GitHub Actions
---

# Integration with GitHub Actions

In this tutorial, we will walk you through the process of integrating ReportPortal with GitHub Actions.

## Prerequisites

To run your tests in any kind of CI, you first need a way to execute them in the
console. For example, for Java this might be calling a build tool like Gradle or Maven
with: `./gradlew test` or `./mvnw test` respectively. For Python, it might be
`pytest` command. Your tests should be already integrated with a ReportPortal agent. To
find out how to do that, check out our documentation on [corresponding
page](/log-data-in-reportportal/test-framework-integration/).
You also need a working ReportPortal instance. We will be using GitHub Actions secrets, to securely get our
credentials while the workflow is running, see official [GitHub Docs
](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions) for more details.

## Using GitHub Actions workflow file

We are going to use the `.github/workflows/ci.yml` file to store and modify our CI workflow,
this file should be hosted in the same Git repository which contains your
tests. This is the only way to which is used by GitHub Actions to set up
workflow configuration. More on Workflow syntax you can find in the official
[documentation](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions).

## Define workflow structure and rules

Before running tests, we need to define the steps we want to pass in our workflow.
This is the common thing for any language or framework you might use, so let’s
do that.

First, we need to define workflow triggers to have an ability to run it when you need it, otherwise it will never run.
Second, we need to run setup steps, to install necessary libraries. Third, we need run tests with credentials which we
got from the GitHub Actions secrets. And forth, enterprise users might also want to utilize our Quality Gates plugin to
get more control over application-under-test quality, this will be described in the last section of the current article.

So, let's start with a basic yaml file skeleton:
```yaml
name: CI Tests

on:
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Download sources from git repository, a common step for all Actions workflows
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up language
        run: ''

      - name: Install dependencies
        run: ''

      - name: Test
        run: ''
```

Notice we use the `workflow_dispatch` option to run the job, that means the workflow can only be run manually, through
workflow history view.

## Getting test secrets

GitHub supports native secret storage for projects and organizations, the link on the documentation was provided above.

Let's securely store `RP_ADMIN_PASSWORD` and `RP_DEMO_KEY` variables in our project. To set Actions secret variables,
we need a project where you have admin rights:

1. Open base project page.
2. Click "Settings" tab.
3. Expand "Secrets and variables" section in the left menu.
4. Click "Actions".
5. In the "Repository secrets" section click "New repository secret" button.
6. Put Secret Name and Value in the corresponding fields.

For our example we need 2 such variables:
* RP_ADMIN_PASSWORD – example secret.
* RP_DEMO_KEY – another example secret.

After that these secrets will be accessible during workflow run by specifying special placeholder values in workflow,
E.G. `${{ secrets.RP_ADMIN_PASSWORD }}` or `${{ secrets.RP_DEMO_KEY }}`.

## Running tests

Let's imagine we need to run our tests on two different languages: Python based
tests running with pytest and Kotlin based tests running with Gradle. These are
two rather different environments with very different approaches which should
give you an idea of how that works.

### Kotlin tests

Let's imagine that to run our Kotlin tests we need a very specific version of Kotlin. Sine some time in the past GitHub
Actions base images go with pre-installed Kotlin, but we can only use it as is, and can't choose any version. Luckily,
there are options how to install specific version of the language.

Here is updated the "steps" section of our workflow Yaml with Kotlin installation:
```yaml
name: CI Tests

on:
  workflow_dispatch:

env:
  KOTLIN_VERSION: '1.4.32'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Kotlin
        run: |
          kotlinc -version
          rm -rf /usr/share/kotlinc
          curl -L "https://github.com/JetBrains/kotlin/releases/download/v$KOTLIN_VERSION/kotlin-compiler-$KOTLIN_VERSION.zip" -o /tmp/kotlin-compiler.zip
          unzip /tmp/kotlin-compiler.zip -d /usr/share
          export PATH="$PATH:/opt/kotlinc/bin"
          echo "$PATH"
          kotlinc -version
```

As you can see, we remove existing Kotlin installation in `/usr/share/kotlinc`, then we download necessary Kotlin
version, unzip it to the same place `/usr/share` to make the Kotlin compiler available from any folder in command line,
since it was already pre-configured. We also output Kotlin version before and after the installation.
Kotlin version was moved to a variable to ease further workflow updates.

Now, let's run our tests:
```yaml
name: CI Tests

on:
  workflow_dispatch:

env:
  KOTLIN_VERSION: '1.4.32'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Kotlin
        run: |
          kotlinc -version
          rm -rf /usr/share/kotlinc
          curl -L "https://github.com/JetBrains/kotlin/releases/download/v$KOTLIN_VERSION/kotlin-compiler-$KOTLIN_VERSION.zip" -o /tmp/kotlin-compiler.zip
          unzip /tmp/kotlin-compiler.zip -d /usr/share
          export PATH="$PATH:/opt/kotlinc/bin"
          echo "$PATH"
          kotlinc -version

      - name: Test
        run: |
          # Cast execution flag on gradle wrapper script file, just in case
          chmod +x ./gradlew
          ./gradlew :service-api:demoSmoke -Prp.api.key=${{ secrets.RP_DEMO_KEY }} -Prp.admin.password=${{ secrets.RP_ADMIN_PASSWORD }}
```

We run our tests with Gradle wrapper and cast execution flag on runner script
just in case. We also bypass our secrets through command line parameters to our
Gradle to use later in tests. They won't be exposed, since GitHub Actions will cut them off from the output.

### Python tests

Python tests have less configuration complexity, compared to Kotlin. It uses existing Action to install Python and adds
additional step to install dependencies. We start with installing required version of  Python: `3.10.13`. In the next
step we can install our requirements for the project and run tests in the Test section with `pytest` command.

Here is the updated "test" section of our pipeline Yaml:
```yaml
name: CI Tests

on:
  workflow_dispatch:

env:
  PYTHON_VERSION: '3.10.13'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '${{ env.PYTHON_VERSION }}'

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -rrequirements.txt -rrequirements-dev.txt

      - name: Test
        run: |
          pytest -sv --reportportal -m "not command_skip" -n 2 -o "rp_api_key=${{ secrets.RP_DEMO_KEY }}" tests
```

As you can see, we pass `RP_DEMO_KEY` through the command line, that’s safe, it won't be exposed, since GitHub Actions
will cut it off from the output.

## Setting up Quality Gates integration (optional)

Enterprise users can utilize our Quality Gates plugin to get more
control over application-under-test quality. To enable and configure Quality Gates plugin on
ReportPortal, please, refer to [corresponding documentation](/category/quality-gates).

ReportPortal's Quality Gates plugin doesn't have native integration with GitHub Actions, so we
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
use in a separate stage in polling ReportPortal API. GitHub Actions allow this with a [specific command
](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable).

Here is the updated "test" stage which does these things:
```yaml
name: CI Tests
on:
  workflow_dispatch:
env:
  KOTLIN_VERSION: '1.4.32'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Set up Kotlin
        run: |
          kotlinc -version
          rm -rf /usr/share/kotlinc
          curl -L "https://github.com/JetBrains/kotlin/releases/download/v$KOTLIN_VERSION/kotlin-compiler-$KOTLIN_VERSION.zip" -o /tmp/kotlin-compiler.zip
          unzip /tmp/kotlin-compiler.zip -d /usr/share
          export PATH="$PATH:/opt/kotlinc/bin"
          echo "$PATH"
          kotlinc -version
      - name: Test
        run: |
          # Cast execution flag on gradle wrapper script file, just in case
          chmod +x ./gradlew
          ./gradlew --console=plain :service-api:demoSmoke -Prp.api.key=${{ secrets.RP_DEMO_KEY }} -Prp.admin.password=${{ secrets.RP_ADMIN_PASSWORD }} | tee ./console.log
          sed -rn 's/ReportPortal Launch UUID: ([^\\r\\n]+)/LAUNCH_UUID=\1/ p' ./console.log  >> "$GITHUB_ENV"
```

Some explanations here:
* We used the `--console=plain` Gradle parameter to make output suitable for saving in a file.
* To preserve console output, we used the `tee` command, which copies standard input to each specified file, and to standard output.
* We used the `sed` command to format and print our Launch UUID.
* Thus, we got a preformatted string and write it to `$GITHUB_ENV` file.

The last step that creates or updates the environment variable does not have access to the new value, but all subsequent
steps in a job will have access.

### Getting Launch UUID for Python tests

ReportPortal pytest agent has specific properties which control Launch UUID printing,
since version 5.2.2: `rp_launch_uuid_print` and `rp_launch_uuid_print_output`.
You can put them into your `pytest.ini` file. For this example, we just need
one of them: `rp_launch_uuid_print = True`. It will output a line like this
into the console:
`ReportPortal Launch UUID: 61ce1c26-842a-4bde-9abe-a4696e31d626`.

Next, we need to save this UUID to an environment variable which we later will
use in a separate stage in polling ReportPortal API. GitHub Actions allow this with a [specific command
](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable).

Here is the updated "test" stage which does these things:
```yaml
name: CI Tests
on:
  workflow_dispatch:
env:
  PYTHON_VERSION: '3.10.13'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '${{ env.PYTHON_VERSION }}'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -rrequirements.txt -rrequirements-dev.txt
      - name: Test
        run: |
          pytest -sv --reportportal -m "not command_skip" -n 2 -o "rp_api_key=${{ secrets.RP_DEMO_KEY }}" tests | tee ./console.log
          sed -rn 's/ReportPortal Launch UUID: ([^\\r\\n]+)/LAUNCH_UUID=\1/ p' ./console.log  >> "$GITHUB_ENV"
```

Some explanations here:
* To preserve console output, we used the `tee` command, which copies standard input to each specified file, and to standard output.
* We used the `sed` command to format and print our Launch UUID.
* Thus, we got a preformatted string and write it to `$GITHUB_ENV` file.

### Adding Quality Gates stage

If you did your pipeline configuration in the same manner as in this article
this step will be the same for you, no matter which language do you use. First,
we need to configure our "test" stage not to fail in case of unsuccessful
tests, since we are going to decide about test status on the Quality Gates step. This can be
done by adding the `continue-on-error: true` field:
```yaml
jobs:
  build:
    steps:
      - ...
      - name: Test
        continue-on-error: true
        run: ...
```

As the next step we need to add the `quality-gate` step to our pipeline:
```yaml
jobs:
  build:
    steps:
      - ...
      - name: Quality Gate
        run: |
          ...
```

It's time to finish our workflow, this step will be a rather complex one:
```yaml
env:
  RP_INSTANCE: 'https://demo.reportportal.io'
  SCRIPT_TIMEOUT_SECONDS: 60
  REQUEST_TIMEOUT_SECONDS: 60

jobs:
  build:
    steps:
      - ...
      - name: Quality Gate
        run: |
          echo "Quality gate"
          echo "LAUNCH_UUID: $LAUNCH_UUID"
          QUALITY_GATE_STATUS=""
          START_TIME=$(date +%s)
          while [ -z "$QUALITY_GATE_STATUS" ] && [ $(( $(date +%s) - START_TIME )) -lt ${{ env.SCRIPT_TIMEOUT_SECONDS }} ]; do
            echo "Waiting for quality gate status..."
            sleep 10
            QUALITY_GATE_JSON=$(curl -s -H "Authorization: Bearer ${{ secrets.RP_DEMO_KEY }}" --max-time "${{ env.REQUEST_TIMEOUT_SECONDS }}" "${{ env.RP_INSTANCE }}/api/v1/report_portal_demo/launch/${LAUNCH_UUID}")
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

Notice, we added three new environment variables (do not replace, you need to append them to existing values):
RP_INSTANCE, REQUEST_TIMEOUT_SECONDS, SCRIPT_TIMEOUT_SECONDS. Which are responsible for ReportPortal base URL
configuration, request timeout and polling timeout respectively. In the script we are polling our ReportPortal
instance for Launch info with `curl` and Launch UUID variable, which we got in the previous
step. After that with `jq` we are trying to read a specific field in response
JSON or return empty value if Quality Gate is not passed yet, or request is failed. In
case of an empty response, we retry our call to ReportPortal. Finally, we compare `jq`
output with "PASSED" literal and if it’s equal we quit gracefully, or we fail
the step in any other case.

And we are finally done!

## Conclusion

ReportPortal does not have native integration with GitHub Actions, but that’s not something that
might stop you. In this article we set up GitHub Actions integration with ReportPortal using
shell scripts and console commands. To provide more outlook we described how to run tests in Kotlin and Python.

And here are full versions of corresponding pipeline files, which we implemented:
* [Kotlin](https://github.com/reportportal/examples-java/blob/master/.gitlab-ci.yml)
* [Python](https://github.com/reportportal/examples-python/blob/master/.gitlab-ci.yml)
