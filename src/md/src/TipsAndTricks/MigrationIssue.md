## How to resolve issues with migration to the new version
1. [Error: Dirty database version XX. Fix and force version.](#error-dirty-database-version-xx-fix-and-force-version)

## Error: Dirty database version XX. Fix and force version.
That means, migration process has been interrupted during XX migration(migration has been started but not finished)
1. At first, you need to check the logs of migration (service itselft and database), it can be helpful, if yes, make some actions based on logs, if not then move next.
2. You need to rollback all applied(if any) migration XX parts(https://github.com/reportportal/migrations/blob/develop/migrations/XX_some_name.up.sql). (Usually nothing to rollback, but need check)
3. Change in schema_migrations table, change values in this table to version=XX-1 (previous successful migration number), and dirty flag set to true.
4. Restart migration.

For instance, if you have "Error: Dirty database version 10. Fix and force version." 
1. Check the logs(service itselft and database), in case we've found nothing, move next.
2. You need to check 10 migration (https://github.com/reportportal/migrations/blob/develop/migrations/10_attachment_size.up.sql) and rollback if you have some partly migration.
3. Then execute #update schema_migrations set version=9, dirty=f
4. Redeploy RP based on docker-composer for example (migration should be started automatically, if you followed by instructions of installation for this way.)





