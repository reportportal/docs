---
sidebar_label: Integration with Azure DevOps
---

# Integration with Azure DevOps

This tutorial guides you through the process of integrating ReportPortal with Azure DevOps for Node.js projects. Depending on your project, you can use either a Bash (Linux) or Powershell script. This pipeline includes steps for the application build, running tests, capturing the ReportPortal Launch ID, and implementing a Quality Gate check.

## Prerequisites

Before you begin, ensure you have:

- An Azure DevOps account set up.
- ReportPortal account and a project created.

## Azure DevOps Pipeline Overview

The Azure DevOps pipeline for integrating ReportPortal consists of the following key steps:

1. **Run application build and tests:** Execute npm tests.
2. **Capture Launch ID:** Extract the ReportPortal Launch ID from the test execution logs.
3. **Quality Gate:** Check the Quality Gate status on ReportPortal using the captured Launch ID.

## Configuring Azure DevOps pipeline

### Environment Variables

Set the following environment variables in your Azure DevOps Pipeline:

- `RP_INSTANCE_URL`: The URL of your ReportPortal instance.
- `RP_PROJECT`: The ReportPortal project name.
- `REQUEST_TIMEOUT_SECONDS`: Timeout for ReportPortal API requests.
- `SCRIPT_TIMEOUT_SECONDS`: Timeout for the entire script execution.

In the **Variables** section, add the following sensitive variable:
- `RP_API_KEY`: Your API key from ReportPortal.

### Step 1: Run application build and tests

Use the following scripts to run tests with npm. The test execution logs are captured in `./console.log`. Then the ReportPortal Launch ID is extracted and saved in `RP_LAUNCH_ID`. The script you choose depends on whether you are using Bash or Powershell. 

#### Bash Script

```yaml
- script: |
    npm install
    npm run test | tee ./console.log
    LAUNCH_ID=$(sed -nE 's/.*ReportPortal Launch Link: .*\/([0-9]+).*/\1/p' console.log)
    echo $LAUNCH_ID
    echo "##vso[task.setvariable variable=RP_LAUNCH_ID;]$LAUNCH_ID"
  displayName: 'Run build'
  env:
    RP_API_KEY: $(RP_API_KEY)
```

#### Powershell Script

```yaml
- powershell: |
    try {
      # Run npm install
      npm install
        
      # Run npm run test and save the output to console.log
      npm run test | Tee-Object -FilePath ./console.log
    }
    catch {
      Write-Host "Error in tests"
    }
    finally{
      # Use Select-String to extract the Launch ID from console.log using a regex
      $LAUNCH_ID = (Get-Content -Path ./console.log | Select-String -Pattern '.*ReportPortal Launch Link: .*\/([0-9]+).*' | ForEach-Object { $_.Matches.Groups[1].Value })
        
      # Print the Launch ID
      Write-Output $LAUNCH_ID
        
      # Set the variable RP_LAUNCH_ID for Azure DevOps
      Write-Output "##vso[task.setvariable variable=RP_LAUNCH_ID;]$LAUNCH_ID"
      exit 0
    }
    
  displayName: 'Run build'
  env:
    RP_API_KEY: $(RP_API_KEY)
```

### Step 2: Quality Gate

Use this lifecycle script to wait for the Quality Gate status on ReportPortal using the captured `RP_LAUNCH_ID`. If the status is not "PASSED", the pipeline fails, meaning the quality gate didn't pass and vice versa. Choose either the Bash or Powershell script depending on your project needs.

#### Bash Script

```yaml
- script: |
    QUALITY_GATE_STATUS=""
    START_TIME=$(date +%s)
    # Loop until quality gate status is obtained or timeout is reached
    while [[ -z "$QUALITY_GATE_STATUS" && $(( $(date +%s) - START_TIME )) -lt $(SCRIPT_TIMEOUT_SECONDS) ]]; do
      printf "Launch ID $(RP_LAUNCH_ID). Waiting for quality gate status....\n"
      sleep 10
      
      # Retrieve quality gate status using curl and jq
      QUALITY_GATE_STATUS=$(curl -s --retry 3 --max-time "$(REQUEST_TIMEOUT_SECONDS)" -H "Authorization: Bearer $(RP_API_KEY)" "$(RP_INSTANCE_URL)/api/v1/$(RP_PROJECT)/launch/$RP_LAUNCH_ID" | jq -r '.metadata.qualityGate.status // empty')
    done

    # Check quality gate status and take appropriate action
    if [[ "$QUALITY_GATE_STATUS" != "PASSED" ]]; then
      printf "Quality gate status: %s\nFailing the pipeline.\n" "$QUALITY_GATE_STATUS"
      exit 1
    else
      printf "Quality gate status: %s\nPipeline passed.\n" "$QUALITY_GATE_STATUS"
    fi

  displayName: 'Quality gates'
  env:
    RP_API_KEY: $(RP_API_KEY)
```

#### Powershell Script

```yaml
- powershell: |
    $QUALITY_GATE_STATUS = ""
    $END_TIME = (Get-Date).AddSeconds($env:SCRIPT_TIMEOUT_SECONDS)
     
    # Loop until quality gate status is obtained or timeout is reached
    while (-not $QUALITY_GATE_STATUS -and (Get-Date) -lt $END_TIME ) {
        Write-Host "Launch ID $env:RP_LAUNCH_ID. Waiting for quality gate status...."
        Start-Sleep -Seconds 10
      
        # Retrieve quality gate status using Invoke-RestMethod and ConvertFrom-Json
        $response = Invoke-RestMethod -Uri "$env:RP_INSTANCE_URL/api/v1/$env:RP_PROJECT/launch/$env:RP_LAUNCH_ID" `
                                         -Headers @{ Authorization = "Bearer $env:RP_API_KEY" } `
                                         -Method Get -TimeoutSec $env:REQUEST_TIMEOUT_SECONDS
        $QUALITY_GATE_STATUS = $response.metadata.qualityGate.status
    }
      
    # Check quality gate status and take appropriate action
    if ($QUALITY_GATE_STATUS -ne "PASSED") {
        Write-Host "Quality gate status: $QUALITY_GATE_STATUS"
        Write-Host "Failing the pipeline."
        exit 1
    } else {
        Write-Host "Quality gate status: $QUALITY_GATE_STATUS"
        Write-Host "Pipeline passed."
    }
  displayName: 'Quality gates'
  env:
    RP_API_KEY: $(RP_API_KEY)
```

## Conclusion

By following this guide, you've integrated ReportPortal with Azure DevOps for Node.js projects using either Bash or Powershell. The Azure DevOps pipeline ensures that npm tests are run, the ReportPortal Launch ID is captured, and a Quality Gate check is performed.
