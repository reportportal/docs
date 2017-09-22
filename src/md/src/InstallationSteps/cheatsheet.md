### Prerequisites 

Find out your project name and name of internal docker network created along with ReportPortal.

The project name is basically a prefix of your containers. For example, if your API container has name
`reportportal_api_1` then your project's name is `reportportal` 

The project name can be found the following way:
```sh
docker ps --filter="name=api" --format="{{.Names}}" | sed 's/\(.*\)_api_[0-9]*/\1/‘
```
You can export it to the environment variable:
```sh
export RP_PRJ=$(docker ps --filter="name=api" --format="{{.Names}}" | sed 's/\(.*\)_api_[0-9]*/\1/')
```

The docker network can be found in the following way (make sure [jq is installed](https://stedolan.github.io/jq/)):
```sh
docker inspect ${RP_PRJ}_api_1 | jq '.[0].NetworkSettings.Networks' | jq -r 'keys[]’
```
To export to environment variable:
```sh
export RP_NET=$(docker inspect ${RP_PRJ}_mongodb_1 | jq '.[0].NetworkSettings.Networks' | jq -r 'keys[]')
```

### Install/Restart ReportPortal
```sh
docker-compose -p $RP_PRJ up -d --force-recreate
```

### Show ALL logs
```sh
docker-compose -p $RP_PRJ logs
```

### Show logs of some service
```sh
docker-compose -p $RP_PRJ logs <name, e.g. api>
```

### Delete everything except data (for >3.1 only)
**!!! If your mongo's volume is not mounted to a local file system, DATA WILL BE ALSO DELETED**
```sh
docker-compose -p $RP_PRJ down —rmi -v --remove-orphans
```

### Create Backup (non production, mongo is hosted inside docker)
```sh
docker run --network ${RP_NET} --rm -v ${PWD}/dump:/db_dump mongo  mongodump -h mongodb --db reportportal --out /db_dump/
```

### Restore backup (non production, mongo is hosted inside docker)
```sh
docker run --network ${RP_NET} --rm -v ${PWD}/dump:/db_dump mongo  mongorestore -h mongodb --db reportportal /db_dump/reportportal
```
