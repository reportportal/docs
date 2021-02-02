## Report Portal jobs configuration

Currently, Report Portal has 3 configurable jobs for data removing:
* Clean launches
* Clean logs
* Clean attachments

Job execution period can be configured using environment variables, where period value should be provided in accordance with one of the patterns (ISO 8601):
* P1M - every month
* P1D - every day
* PT1H - every hour
* PT1M - every minute
* PT10H5M3S - 10 hours 5 minutes 3 seconds period

### Clean launches job

Clean launches job removes launches, their test items, logs and attachments (both from **database** and **file storage**).
Environment variables for configuration with default values:
* RP_ENVIRONMENT_VARIABLE_CLEAN_LAUNCHES_PERIOD=P3D - specifies how often job will be started
* RP_ENVIRONMENT_VARIABLE_CLEAN_LAUNCHES_SIZE=50 - specifies batch size of selected launches for each removing iteration
* RP_ENVIRONMENT_VARIABLE_CLEAN_LAUNCHES_POOL=5 - specifies count of threads that will be used during launches removing

### Clean logs job

Clean logs job removes logs and attachments (both from **database** and **file storage**).
Environment variables for configuration with default values:
* RP_ENVIRONMENT_VARIABLE_CLEAN_LOGS_PERIOD=P2D - specifies how often job will be started
* RP_ENVIRONMENT_VARIABLE_CLEAN_ITEMS_SIZE=500 - specifies batch size of selected items for each removing iteration
* RP_ENVIRONMENT_VARIABLE_CLEAN_LOGS_POOL=5 - specifies count of threads that will be used during logs removing

### Clean attachments job

Clean attachments job removes attachments (both from **database** and **file storage**).
Environment variables for configuration with default values:
* RP_ENVIRONMENT_VARIABLE_CLEAN_ATTACH_PERIOD=P1D - specifies how often job will be started
* RP_ENVIRONMENT_VARIABLE_CLEAN_ATTACH_SIZE=200 - specifies batch size of selected attachments for each removing iteration
* RP_ENVIRONMENT_VARIABLE_CLEAN_ATTACH_POOL=5 - specifies count of threads that will be used during attachments removing