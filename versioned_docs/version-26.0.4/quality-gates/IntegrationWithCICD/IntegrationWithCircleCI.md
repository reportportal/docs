---
sidebar_label: Integration with CircleCI
description: Integrate ReportPortal with CircleCI to automate test execution, capture launch IDs, and enforce Quality Gates, ensuring consistent and reliable deployments.
---

# Integration with CircleCI

This guide will walk you through the process of integrating ReportPortal with CircleCI for Node.js projects. We'll define a job in the `.circleci/config.yml` file. The job includes steps for application build, running tests, capturing ReportPortal Launch ID, and implementing a Quality Gate check.

## Prerequisites

Before you start, make sure you have:

- A CircleCI account and a project set up with a `.circleci/config.yml` file.
- A ReportPortal account and a project created.

## CircleCI Job Overview

A CircleCI job for integrating ReportPortal includes the following key steps:

1. **Run application build and tests:** Execute npm tests.
2. **Capture Launch ID:** Extract the ReportPortal Launch ID from the output logs of the test execution.
3. **Quality Gate:** Check the Quality Gate status on ReportPortal using the Launch ID captured in Step 2.

## Configuring CircleCI pipeline

### Environment Variables

Define these environment variables in your CircleCI project settings:

- `RP_INSTANCE_URL`: The URL of your ReportPortal instance.
- `RP_PROJECT`: The name of your project as it is in ReportPortal.
- `RP_API_KEY`: Your API key from ReportPortal.
- `REQUEST_TIMEOUT_SECONDS`: The timeout duration for ReportPortal API requests.
- `SCRIPT_TIMEOUT_SECONDS`: The timeout duration for the entire script execution.

### Step 1: Run application build and tests

Update the `.circleci/config.yml` file in your project to include the *build and test* job. This job will install npm dependencies, run tests, and capture the ReportPortal Launch ID from the test execution logs.

```yaml
version: 2.1

jobs:
  javascript:
    docker:
      - image: node:16
    steps:
      - checkout
      - run:
          name: "Build and test"
          command: |
            # Set pipefail option
            set +o pipefail
            # Install npm dependencies
            npm install
            # Run npm tests and capture the Launch ID
            npm run test | tee ./console.log
            LAUNCH_ID=$(sed -nE 's/.*ReportPortal Launch Link: .*\/([0-9]+).*/\1/p' console.log)
            echo "RP_LAUNCH_ID=$LAUNCH_ID" >> $BASH_ENV
```

### Step 2: Quality Gate

Extend the `.circleci/config.yml` file with the *quality gates* lifecycle script. This script will wait for the Quality Gate status on ReportPortal using the captured `RP_LAUNCH_ID`. If the status is not "PASSED," the pipeline fails; otherwise, it passes.

```yaml
      - run:
          name: "Quality gates"
          environment:
            RP_INSTANCE_URL: The URL of your ReportPortal instance.
            RP_PROJECT: The name of your project as it is in ReportPortal.
            REQUEST_TIMEOUT_SECONDS: "60"
            SCRIPT_TIMEOUT_SECONDS: "60"
          command: |
            # Download jq for JSON processing
            wget -q -O jq https://github.com/jqlang/jq/releases/download/jq-1.7.1/jq-linux64
            chmod +x ./jq
            cp jq /usr/bin

            QUALITY_GATE_STATUS=""
            START_TIME=$(date +%s)

            # Loop until quality gate status is obtained or timeout is reached
            while [[ -z "$QUALITY_GATE_STATUS" && $(( $(date +%s) - START_TIME )) -lt $SCRIPT_TIMEOUT_SECONDS ]]; do
              printf "Launch ID $RP_LAUNCH_ID. Waiting for quality gate status....\n"
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
workflows:
  javascript-workflow:
    jobs:
      - javascript
```

## Conclusion
By following this guide, the integration of your Node.js project with ReportPortal on CircleCI is complete. The `.circleci/config.yml` file now includes a job to run npm tests, capture the ReportPortal Launch ID, and implement a Quality Gate check. If you're using languages or platforms other than Node.js, you may need to adjust these instructions accordingly.
