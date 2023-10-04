---
sidebar_position: 1
sidebar_label: Version v.23.2
---

# Version v.23.2

## 1. What's Changed:

- **New feature - Monitoring:**

A new Event Monitoring interface has been introduced, providing administrators with a convenient means to review all activities at the Project level through the Search & Filter functionality within the Admin panel. Events at the instance level are not visible on the UI, but they are securely stored in the database. This data can be easily transmitted to SIEM systems for future monitoring and analysis.  

More details can be found via the [link](/admin-panel/EventMonitoring).

- **Project Activity Panel Adjustments:**

The list of project activities displayed in the Project Activity Panel has been expanded.

More details can be found via the [link](/dashboards-and-widgets/ProjectActivityPanel).

- **New feature – Delete Account:**

Now instance administrators can empower users to delete their accounts and obfuscate associated personal data. 

More details can be found via the [link](/user-account/DeleteAccount).

- **New feature – Personal Data Retention policy:**

ReportPortal now offers the option to set a retention period for collected personal data during instance configuration.

More details can be found via the [link](/user-account/DataRetentionProcedure).

Please note that Features 3 and 4 are configurable, giving you the flexibility to decide whether you want to use these features or not. If you choose to utilize them, you can configure them using environmental variables. Further details can be found in the respective documentation.

- **New feature – API Key:**

You can now generate as many API Keys as you need. You also have the ability to keep track of the creation date of API Keys and revoke any that are unused. Old tokens will still continue to function. Additionally, easy identification of the purpose of API Keys is facilitated through the use of prefixes.  

More details can be found via the [link](/reportportal-configuration/HowToGetAnAccessTokenInReportPortal/#2-authorization-with-users-api-key-for-agents).

- **Gitlab CI integration Workaround:**  

More details can be found via the [link](/quality-gates/IntegrationWithCICD/IntegrationWithGitLabCI).

## 2. Small updates:

- **“Load current step” functionality adjustments:**

Minor refinements have been applied to the "Load current step" functionality. Now, you can access the "Load current step" feature by hovering over a step.

- **Download file name changes:**

Attachment details and download format have been revised: files are now downloaded with the real file names.

- **Configuration examples updates:**

Configuration examples on the user profile page have been updated.

## 3. Technical Improvements:

- Storage layer now supports S3 storage, allowing data consolidation into a single bucket for the entire instance.

- We’ve added postfix for bucket names in binary storage.

- We’ve updated dependencies with security fixes: service-auto-analyzer and service-metrics-gatherer.

- The issue of slow Log View loading when STEP has a complex structure of the nested steps nesting and count of them has been resolved and now up to 7x faster.

- Service-jobs stability is improved during the reporting logs with the large stack traces.

- We’ve optimized the attachments cleaning mechanism that allows us to increase the default value of the chunk_size by 20 times: from 1000 to 20000 in the docker compose and Kubernetes deployments.

- Content Security Policy has been extended by adding the .browserstack.com. Now you can embed videos as a markdown from BrowserStack in order to ease failed tests troubleshooting.

- Job for Flushing Demo data works as expected thanks to sql error fix.

- We’ve updated react to version 17 and its dependencies to reduce the number of vulnerabilities and have a smooth transition to version 18.

- Issues arising when service-api is starting (connected to bucket structure update or the binary storage type update) while there are integrations to external services like Jira have been resolved. Old logic for migrating integration salt has been removed.

- Launches import via API is possible with additional parameters: name, description, attributes.

- Rename notIssue parameter for import launch : For the end-point POST/v1 /{projectName} /launch /import parameter notIssue is renamed to skippedIsNotIssue. Logic remains the same.

## 4. Enhancements Based on Community Feedback:

- [#1815](https://github.com/reportportal/reportportal/issues/1815), [#1795](https://github.com/reportportal/reportportal/issues/1795), [#957](https://github.com/reportportal/reportportal/issues/957), [#1644](https://github.com/reportportal/reportportal/issues/1644), [#1590](https://github.com/reportportal/reportportal/issues/1590). All ReportPortal images now support multiple platforms: linux/amd64

- [#1970](https://github.com/reportportal/reportportal/issues/1970). Deserialization issue has been fixed. 

## 5. Link to Migration guide:

[Migration guide](https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v.23.2)
