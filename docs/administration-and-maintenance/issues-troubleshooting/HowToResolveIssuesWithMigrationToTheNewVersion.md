---
sidebar_position: 10
sidebar_label: How to resolve issues with migration to the new version
description: Learn how to resolve migration issues when upgrading ReportPortal to new versions.
---

# How to resolve issues with migration to the new version

## Error: Dirty database version XX. Fix and force version.

That means, migration process has been interrupted during XX migration (migration has been started but not finished)
1. At first, you need to check the logs of migration (service itselft and database), it can be helpful, if yes, make some actions based on logs, if not then move next.
2. You need to rollback all applied (if any) migration XX parts.

The format for url is the next:

```
https://github.com/reportportal/migrations/blob/develop/migrations/XX_some_name.up.sql
```

(Usually nothing to rollback, but need check)

3. Change in schema_migrations table, change values in this table to version=XX-1 (previous successful migration number), and dirty flag set to true.
4. Restart migration.

For instance, if you have "Error: Dirty database version 10. Fix and force version." 
1. Check the logs(service itselft and database), in case we've found nothing, move next.
2. You need to check 10 migration (https://github.com/reportportal/migrations/blob/develop/migrations/10_attachment_size.up.sql) and rollback if you have some partly migration.
3. Then execute #update schema_migrations set version=9, dirty=f
4. Redeploy RP based on docker-composer for example (migration should be started automatically, if you followed by instructions of installation for this way.)

## Error: org.jasypt.exceptions.EncryptionOperationNotPossibleException: null. API doesn't start. ReportPortal unavailable.

Minio files are used during migration to change integration passwords encryption. 
Files in Minio may be corrupted and deleted somehow before migration during Reportportal usage. 

Removing existing integrations from db before deploying can help. Creation of a new integration will use a new encryption type.

1. Execute the next script in database to remove existing integrations before deploy:

```sql
DELETE FROM integration WHERE type IN (SELECT id FROM integration_type WHERE name IN ('email', 'jira', 'ldap', 'ad'));

```
2. Deploy Reportportal
3. Create integrations again

