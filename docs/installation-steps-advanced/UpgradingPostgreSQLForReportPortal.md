# Upgrading PostgreSQL for ReportPortal

:::important
This guide is intended for users planning to upgrade from Postgres 12 to a newer version, starting with ReportPortal version 24.2.
:::

This guide will walk you through backing up your current PostgreSQL database, removing existing containers and volumes, downloading the latest release, and restoring the PostgreSQL dump.

## Step 0: Backup Postgres and Storage
Before proceeding, ensure you have a complete Postgres database and Storage backup.

## Step 1: Create a Dump of Database
Run the following command to create a dump of your current PostgreSQL database:

```bash
docker exec -t postgres pg_dump -U rpuser -d reportportal > reportportal24_1_postgres12_dump.sql
```

## Step 2: Remove All Containers
Shut down and remove all containers:

```bash
docker compose -p reportportal down
```

## Step 3: Remove Postgres Volume
Remove the Postgres volume to ensure a clean state for the new database:

```bash
docker volume rm reportportal_postgres
```

## Step 4: Download Latest Release
Fetch the latest `docker-compose.yml` file to get the most recent version of ReportPortal:

```bash
curl -LO https://raw.githubusercontent.com/reportportal/reportportal/refs/heads/master/docker-compose.yml
```

## Step 5: Run Postgres Container
Start only the Postgres container to prepare for database restoration:

```bash
docker compose -p reportportal up -d postgres
```

## Step 6: Restore Postgres Dump
Restore the database dump into the new Postgres container:

```bash
docker exec -i -e PGPASSWORD=rppass postgres psql -U rpuser -d reportportal < reportportal24_1_postgres12_dump.sql > upgrade_db.log 2>&1
```

## Step 7: Run ReportPortal
Bring up all the services for ReportPortal:

```bash
docker compose -p reportportal up -d
```

## Final Notes
- Verify that all services are running correctly using `docker ps` or checking the logs.
- Keep the log file `upgrade_db.log` for any potential troubleshooting.
- Regular backups are essential. Make sure to have a reliable strategy in place.
