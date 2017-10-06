## Maintain commands Cheat sheet
**Export as env var:** 

```
export RP_PRJ=$(docker ps --filter="name=api" --format="\{{.Names}}" | sed 's/\(.*\)_api_[0-9]*/\1/')
export RP_NET=$(docker inspect ${RP_PRJ}_mongodb_1 | jq '.[0].NetworkSettings.Networks' | jq -r 'keys[]')
```

**Install/restart ReportPortal:** 

```javascript
docker-compose -p $RP_PRJ up -d --force-recreate
```

**Show all logs:** 

```javascript
docker-compose -p $RP_PRJ logs
```

**Show speciﬁc logs:** 

```javascript
docker-compose -p $RP_PRJ logs <name, e.g. api>
```

**Delete everything except data:** 

```javascript
docker-compose -p $RP_PRJ down —rmi -v --removeorphans
```

**Backing UP:** 

```
docker run --network ${RP_NET} --rm -v ${PWD}/ dump2:/db_dump mongo  mongodump -h mongodb --db reportportal --out /db_dump/
```

**Restore backup:** 

```
docker run --network ${RP_NET} --rm -v ${PWD}/ dump2:/db_dump mongo  mongorestore -h mongodb -db reportportal /db_dump/reportportal
```

You can download [PDF file](resources/CheatSheet.pdf) with commands.