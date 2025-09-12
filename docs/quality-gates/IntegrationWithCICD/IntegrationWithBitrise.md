---
sidebar_label: Integration with Bitrise CI/CD
description: Integrate Bitrise CI/CD with ReportPortal Quality Gates for automated quality control in test automation reporting tools.
---


# Integration with Bitrise CI/CD

This tutorial guides you through the process of integrating ReportPortal with Bitrise CI/CD for Android and iOS projects. We'll use a Bitrise workflow defined in the `bitrise.yml` file. The workflow includes steps for running application tests, capturing the ReportPortal Launch ID, and implementing a Quality Gate check.

## Prerequisites

Before you begin, make sure you have the following:

- A Bitrise account and an Android/iOS project set up on Bitrise.
- ReportPortal account and a project created.
- Bitrise `bitrise.yml` file with necessary configurations.

## Bitrise Workflow Overview

The Bitrise workflow for integrating ReportPortal consists of the following key steps:

1. **Activate SSH key (if needed):** Required for git authorization.
2. **Git clone:** Get your application repository.
3. **AVD Manager (for Andriod):** Set up Android Virtual Devices (AVDs).
4. **Run application build and test:** Execute JUnit/XCTest tests depending on platform.
5. **Capture Launch ID:** Extract the ReportPortal Launch ID from the test execution logs.
6. **Quality Gate:** Check the Quality Gate status on ReportPortal using the captured Launch ID.

## Configuring Bitrise Workflow

### Environment Variables

Set the following environment variables in your Bitrise project:

- `RP_INSTANCE_URL`: The URL of your ReportPortal instance.
- `RP_PROJECT`: The ReportPortal project name.
- `REQUEST_TIMEOUT_SECONDS`: Timeout for ReportPortal API requests.
- `SCRIPT_TIMEOUT_SECONDS`: Timeout for the entire script execution.

In **Secrets** section add the following sensitive variable:
- `RP_API_KEY`: Your API key from ReportPortal.

### Step 1: Activate SSH Key and clone Git repo

Ensure that the SSH key is activated if required for your project. Then you need to clone the repo with your code.

```yaml
- activate-ssh-key@4:
    run_if: '{{getenv "SSH_RSA_PRIVATE_KEY" | ne ""}}'
- git-clone@8: {}
```
### Step 2: AVD Manager (for Andriod)

Set up Android Virtual Devices (AVDs) for testing.
```yaml
- avd-manager@1: {}
```
### Step 3: Run application build and test

**This step will be different depending on which platform you are running the build**

Android example:

Execute JUnit tests using Gradle. The test execution logs are captured in `./console.log`.
Then we are extracting the Launch ID to use it in the next step.

```yaml
- script@1:
    title: Run application build and test
    inputs:
      content: |-
        # Show AVD devices created in step 2
        adb devices

        # Run Gradle build
        ./gradlew junit5:connectedAndroidTest | tee ./console.log

        # Extract Launch ID and save to a file
        sed -nE 's/.*ReportPortal Launch Link: .*\/([0-9]+).*/export RP_LAUNCH_ID=\1/p' console.log > launch.env
        cat launch.env
```

iOS example:

Execute XCTest tests using xcodebuild. The test execution logs are captured in `./console.log`.
Then we are extracting the Launch ID to use it in the next step.

```yaml
- script@1:
    title: Run application build and test
    inputs:
      content: |-

        # Run xcode build
        xcodebuild test -project <Your-Project>.xcodeproj | tee ./console.log

        # Extract Launch ID and save to a file
        sed -nE 's/.*ReportPortal Launch Link: .*\/([0-9]+).*/export RP_LAUNCH_ID=\1/p' console.log > launch.env
        cat launch.env
```

### Step 4: Quality Gate

Execute JUnit tests using Gradle. The test execution logs are captured in `./console.log`.

```yaml
- script@1:
    inputs:
      content: |
        #!/usr/bin/env bash

        # Fail the pipeline in case of errors
        set -o pipefail

        # Get $RP_LAUNCH_ID from launch.env
        source launch.env

        QUALITY_GATE_STATUS=""
        START_TIME=$(date +%s)

        # Loop until quality gate status is obtained or timeout is reached
        while [[ -z "$QUALITY_GATE_STATUS" && $(( $(date +%s) - START_TIME )) -lt $SCRIPT_TIMEOUT_SECONDS ]]; do
          printf "Waiting for quality gate status...\n"
          sleep 10

          # Retrieve quality gate status using curl and jq
          QUALITY_GATE_STATUS=$(curl -s --retry 3 --max-time "$REQUEST_TIMEOUT_SECONDS" -H "Authorization: Bearer $RP_API_KEY" "$RP_INSTANCE_URL/api/v1/$RP_PROJECT/launch/$RP_LAUNCH_ID" | jq -r '.metadata.qualityGate.status // empty')
        done

        # Check quality gate status and take appropriate action
        if [[ "$QUALITY_GATE_STATUS" != "PASSED" ]]; then
          printf "Quality gate status: %s\nFailing the pipeline.\n" "$QUALITY_GATE_STATUS"
          exit 1
        else
          printf "Quality gate status: %s\nPipeline passed.\n" "$QUALITY_GATE_STATUS"
        fi
    title: Quality gate

```

## Conclusion

By following this guide, you've integrated ReportPortal with Bitrise CI/CD for Android and iOS projects. The Bitrise workflow ensures that JUnit tests are executed, the ReportPortal Launch ID is captured, and a Quality Gate check is performed.

Please note that the provided `bitrise.yml` file and configurations are specific to Android projects. Adjustments may be needed for projects in different languages or platforms.
