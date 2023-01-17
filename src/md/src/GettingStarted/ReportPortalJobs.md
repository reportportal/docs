## ReportPortal jobs configuration

Currently, Report Portal has 5 configurable jobs for data removing:
* Clean launches
* Clean logs
* Clean attachments info
* Clean attachments binaries
* Project binary storage size recalculation

Job execution period can be configured using environment variables, where period value should be provided as [**spring cron**](https://www.baeldung.com/cron-syntax-linux-vs-spring) expression:
* */30 * * * * * - every 30 seconds
* 0 */2 * * * * - every 2 minutes
* 0 0 */24 * * * - every 24 hours (every day)

[Job environment variables example for docker](https://github.com/reportportal/reportportal/blob/2b22c61f87674aaf2efc7a973af38004c2517680/docker-compose.yml#L237-L241)

### Clean launches job

Clean launches job removes launches, their test items and logs.
Environment variables for configuration with default values:
* RP_ENVIRONMENT_VARIABLE_CLEAN_LAUNCH_CRON=0 */10 * * * * - specifies how often job will be started (every 10 minutes)

### Clean logs job

Clean logs job removes logs.
Environment variables for configuration with default values:
* RP_ENVIRONMENT_VARIABLE_CLEAN_LOG_CRON=0 */5 * * * * - specifies how often job will be started (every 5 minutes)

### Clean attachments info job

Clean attachments info job removes attachments data from main **database** storage and puts into **temporary table** to remove binaries from the **file storage**
Environment variables for configuration with default values:
* RP_ENVIRONMENT_VARIABLE_CLEAN_ATTACHMENT_CRON=0 */2 * * * * - specifies how often job will be started (every 2 minutes)

### Clean attachments binaries job

Clean attachments binaries job uses data from the **temporary table** (filled by previous job) 
and removes binaries from the **file storage**
Environment variables for configuration with default values:
* RP_ENVIRONMENT_VARIABLE_CLEAN_STORAGE_CRON=*/30 * * * * * - specifies how often job will be started (every 30 seconds)
* RP_ENVIRONMENT_VARIABLE_CLEAN_STORAGE_CHUNKSize=1000 - specifies the size of the batch to be selected from the **temporary table** to be removed

### Project binary storage size recalculation job

Project binary storage size recalculation job updates **allocated storage** value of the **project** based on the existing attachments at the moment.
Environment variables for configuration with default values:
* RP_ENVIRONMENT_VARIABLE_STORAGE_PROJECT_CRON=0 */1 * * * * - specifies how often job will be started (every minute)
