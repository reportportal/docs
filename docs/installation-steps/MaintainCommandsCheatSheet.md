---
sidebar_position: 8
sidebar_label: Maintain commands Cheat sheet
---

# Maintain commands Cheat sheet

**Export as env var:** 

```
export RP_PRJ=$(docker ps --filter="name=api" --format="\{{.Names}}" | sed 's/\(.*\)_api_[0-9]*/\1/')
```

**Install/restart ReportPortal:** 

```javascript
docker-compose -p $RP_PRJ up -d --force-recreate
```

**Show all logs:** 

```javascript
docker-compose -p $RP_PRJ logs
```

**Show specific logs:** 

```javascript
docker-compose -p $RP_PRJ logs <name, e.g. api>
```

**Delete everything except data:** 

```javascript
docker-compose -p $RP_PRJ down --rmi -v --remove-orphans
```

**Backup / Dump the data:** 

```
docker exec <postgres_container_name> pg_dump -U <POSTGRES_USER> <database_name> > backup.sql
```

**Clean up the data:** 

```
docker exec -it <postgres_container_name> psql -U <POSTGRES_USER> -d <database_name>
```

```
    DROP TABLE schema_migrations;
    DROP SCHEMA quartz CASCADE;
    DROP SCHEMA public CASCADE; CREATE SCHEMA public;
    \q
```

**Restore the data:** 

```
docker exec -i <postgres_container_name> psql -U <POSTGRES_USER> -d <database_name> < backup.sql
```


You can download [PDF file](./resources/CheatSheet.pdf) with commands.
