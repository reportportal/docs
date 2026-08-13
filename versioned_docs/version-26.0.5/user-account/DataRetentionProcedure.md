---
sidebar_position: 4
sidebar_label: Data retention procedure
description: Configure data retention periods for PII data in ReportPortal. Set individual retention durations and manage data lifecycle using test execution reporting.
---

# Data retention procedure

Starting from version 23.2, ReportPortal introduces an option to establish a retention period for collected Personally Identifiable Information (PII) data during instance configuration. This configuration allows for setting an individual retention duration for the instance in days, such as N=90, 180, 540 or any other number of days.

**Docker**

To activate data retention, add the following environment variables to Service Jobs:

```
# Int (days)
RP_ENVIRONMENT_VARIABLE_CLEAN_EXPIREDUSER_RETENTIONPERIOD:

# CRON
RP_ENVIRONMENT_VARIABLE_CLEAN_EXPIREDUSER_CRON:
RP_ENVIRONMENT_VARIABLE_NOTIFICATION_EXPIREDUSER_CRON:
```

**Kubernetes**

Fill in Service Jobs values in the [values.yaml](https://github.com/reportportal/kubernetes/blob/master/reportportal/values.yaml)

```
servicejobs:
coreJobs:
    # Int (days) 
    notifyExpiredUserCron: 

    # CRON 
    cleanExpiredUserCron: 
    cleanExpiredUserRetention: 
```

If the data retention option is enabled but a specific number of days for deleting inactive users is not specified, no deletions will occur. In the case of specifying 0 or a negative value, an error will be displayed in the logs.

When the data retention option is activated, the job will run daily to identify inactive users and obfuscate their data.

Inactive users are defined as follows:

1. Users who have not logged in for N days.

2. Users who have not reported testing data for N days.

Users are only classified as inactive if both conditions are satisfied.

In cases where a user logs in but doesn’t submit any reports, they are not deleted as the second condition isn’t fulfilled. Similarly, if a user has not logged in but has submitted reports, they are still considered active.

Before performing deletions, the system sends out email notifications as follows: notification №1 is dispatched to inactive users N-60 days before deletion, notification №2 is sent N-30 days prior, and notification №3 is sent 1 day before obfuscation. Notifications about account deletion are also sent by the system.

Users will be able to return whenever they are invited to the project.

In summary, a data retention policy optimizes resources and helps create a more efficient, secure, and effective environment for data management, which fosters business success. 
