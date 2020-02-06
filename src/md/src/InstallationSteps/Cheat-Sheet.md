## Maintain commands Cheat sheet
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
docker-compose exec -u <POSTGRES_USER> <postgres_container_name> pg_dump -Fc <POSTGRES_DB> > db.dump
```

**Restore the data:** 

```
docker-compose exec -i -u <POSTGRES_USER> <postgres_service_name> pg_restore -C -d postgres < db.dump
```

You can download [PDF file](/documentation/resources/CheatSheet.pdf) with commands.
