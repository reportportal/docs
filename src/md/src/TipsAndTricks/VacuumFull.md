# How to clean up the ReportPortal database using VACUUM FULL

## General information

`VACUUM` reclaims storage occupied by dead tuples. In normal PostgreSQL operation, tuples that are deleted or obsoleted by an update are not physically removed from their table; they remain present until a `VACUUM` is done. Therefore it's necessary to do `VACUUM` periodically, especially on frequently-updated tables.
`VACUUM ANALYZE` performs a `VACUUM` and then an `ANALYZE` for each selected table. This is a handy combination form for routine maintenance scripts. See [PostgreSQL documentation](https://www.postgresql.org/docs/12/sql-vacuum.html) for more details about those operations.
Plain `VACUUM` (**without FULL**) simply reclaims space and makes it available for re-use. This form of the command can operate in parallel with normal reading and writing of the table, as an exclusive lock is not obtained. However, extra space is not returned to the operating system (in most cases); it's just kept available for re-use within the same table.
`VACUUM FULL` rewrites the entire contents of the table into a new disk file with no extra space, allowing unused space to be returned to the operating system. This form is much slower and requires an exclusive lock on each table while it is being processed.

The main goals for performing `VACUUM FULL` at the ReportPoral database:
- improve DB queries performance by removing dead tuples and updating statistics;
- reclaim storage space occupied by dead tuples;
- prevent bloating tables.

## Parameters

| Parameter | Description |
| ----------- | ----- |
| FULL | Selects "full" vacuum, which can reclaim more space, but takes much longer and exclusively locks the table. This method also requires extra disk space, since it writes a new copy of the table and doesn't release the old copy until the operation is complete. Usually this should only be used when a significant amount of space needs to be reclaimed from within the table. |
| FREEZE | Selects aggressive "freezing" of tuples. Specifying FREEZE is equivalent to performing VACUUM with the vacuum_freeze_min_age and vacuum_freeze_table_age parameters set to zero. Aggressive freezing is always performed when the table is rewritten, so this option is redundant when FULL is specified. |
| VERBOSE | Prints a detailed vacuum activity report for each table. |
| ANALYZE | Updates statistics used by the planner to determine the most efficient way to execute a query. |

⚠️ **Important notes**

1. Assuming that `VACUUM FULL` required exclusive locks on the tables and required high time-consuming on the large databases, the suggestions are:

    - conduct testing of the `VACUUM FULL` execution at Staging/Dev/Non-Prod environment;
    - schedule the particular downtime for the Production database and shut down the application services except for the database.

2. Сheck that the database disk has free space equal to or greater than the size of the largest table(with its indexes) in the database. 

The main suggestion is to perform `VACUUM FULL` operation periodically not for the whole database, but only for the particular tables defined below, which helps increase overall SQL queries performance. `VACUUM FULL` frequency for the databases more than 1Tb with high reporting amount - at least once per 3 months.

Tables list and it's operations duration on our database(AWS RDS PostgreSQL Database spec: db.m5.4xlarge 16CPUs, 64Gb RAM):
| Table |Rows count| VACUUM Operation |	Duration|
| ----------- | ---- | ----- | -----|
|log|614 372 224|FULL|14h 30m|
|log|614 372 224|ANALYZE|1h 30m|
|test_item|207 311 552|FULL|1h 50m|
|test_item|207 311 552|ANALYZE|21m|	
|statistics|299 341 024|FULL|10m|
|statistics|299 341 024|ANALYZE|3m 49s|
|test_item_results|450 264 992|FULL|9m|
|test_item_results|450 264 992|ANALYZE|4m 12s|


## VACUUM FULL execution

**Preconditions:**
Apply next configuration to PostgreSQL Parameter Group(database restart not needed after applying):

```yaml
maintenance_work_mem=8000000
max_parallel_maintenance_workers=16
```

* Configuration examples are defined for the database shape 16CPU, 64Gb RAM. The suggestion for other database shapes are: for maintenance_work_mem - 1/4 part of the total database RAM size; max_parallel_maintenance_workers - database CPUs count.

Perform `VACUUM FULL` and `ANALYZE` on the each database table using the query:

```yaml
VACUUM (FULL, ANALYZE) my_table
```

Or perform `VACUUM FULL` and `VACUUM ANALYZE` on all tables in the database using commands sequentially:

```yaml
VACUUM FULL
VACUUM ANALYZE
```

**Postconditions:**
Apply regular configuration to PostgreSQL Parameter Group(database restart not needed after applying):

```yaml
maintenance_work_mem=2000000
max_parallel_maintenance_workers=8
```

## Useful PostgreSQL queries

Total database size:

```yaml
SELECT pg_size_pretty(pg_database_size('reportportal'));
```

Show autovacuum stats:

```yaml
SELECT relname, last_vacuum, last_autovacuum FROM pg_stat_user_tables;
```

Detailed statistic by each table and indexes:

```yaml
SELECT *, pg_size_pretty(total_bytes) AS total
    , pg_size_pretty(index_bytes) AS index
    , pg_size_pretty(toast_bytes) AS toast
    , pg_size_pretty(table_bytes) AS table
  FROM (
  SELECT *, total_bytes-index_bytes-coalesce(toast_bytes,0) AS table_bytes FROM (
      SELECT c.oid,nspname AS table_schema, relname AS table_name
              , c.reltuples AS row_estimate
              , pg_total_relation_size(c.oid) AS total_bytes
              , pg_indexes_size(c.oid) AS index_bytes
              , pg_total_relation_size(reltoastrelid) AS toast_bytes
          FROM pg_class c
          LEFT JOIN pg_namespace n ON n.oid = c.relnamespace
          WHERE relkind = 'r'
  ) a
) a;
```

Dead tuples amount per table:

```yaml
SELECT relname, n_dead_tup FROM pg_stat_user_tables order by n_dead_tup desc;
```