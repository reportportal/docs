# Back-end Java contribution guide

## Useful links

[Landing page](http://reportportal.io/)
<br/>
[Official documentation](http://reportportal.io/docs) 
<br/>
[EPAM Knowledge Base](https://kb.epam.com/display/EPMRPP/Knowledge+Transfer)
<br/>
[Contribution notes on GitHub](https://github.com/reportportal/reportportal/wiki/Contribution)

## Deployment components description

- [Traefik](https://traefik.io) as reversed proxy and application entry point
- Data analysis
  - [Elasticsearch](https://www.elastic.co/elasticsearch) as logs analysis data storage
  - [Service Analyzer](https://github.com/reportportal/service-auto-analyzer) as log messages analysis tool
  - [Service Analyzer Train](https://github.com/reportportal/service-auto-analyzer) is a `Service Analyzer` running in training mode to increase analysis quality
  - [Service Metrics Gatherer](https://github.com/reportportal/service-metrics-gatherer) as training model manager and `Service Analyzer` monitoring
- Database
  - [Postgresql](https://www.postgresql.org)
  - [Service Migrations](https://github.com/reportportal/migrations) - service for DB schema and data updates
- [RabbitMQ](https://www.rabbitmq.com) - message broker for inter-service communication
- [Minio](https://min.io) - binary data storage (alternative to plain filesystem storage)
- [Service Index](https://github.com/reportportal/service-index) - gateway service with services metadata resolving mechanism
- [Service UI](https://github.com/reportportal/service-ui) - Report Portal web UI

There are three Java repositories that are part of the whole RP deployment:
- [Service API](https://github.com/reportportal/service-api) - REST API service as Report Portal functionality provider
- [Service Authorization](https://github.com/reportportal/service-authorization) - REST Authorization service for users authentication
- [Service Jobs](https://github.com/reportportal/service-jobs) - Service with jobs to process data in the back-ground

## Code conventions

### IDE Formatter
Settings file can be found at: https://github.com/reportportal/reportportal/blob/master/idea_formatting_profile.xml
Steps to import:
- Click on IDEA "Preferences"
- Choose "Editor" section
- Click on "Code style"
- In "Scheme" section click on settings wheel → Import Scheme → IntelliJ IDEA code style XML
![](/src/Images/devguide/backend/idea_formatter.png)

### Code style
This document is aimed to improve some points in existing code base and implementation/design approaches synchronization inside team. It's a blueprint for now, but will be improved.
- Code should be simple and readable as possible.
- Avoid using useless interfaces. For our case, if we aren't planning to extend functionality, and can simply refactor
(For example it isn't some separated library build with some magic), 
and if we don't need another implementation for example for some tests(mock, anonymous classes etc.), 
code auto-generation (@repository for example) and so on(another real needed cases), than we should to avoid creating interface.
- Methods and Classes should be named accordingly to their responsibilities, name should be clear or description should be added otherwise 
(For instance, difficult to describe responsibility in only few words).
- Methods with the same names(overloading/overriding) should do similar things.
- Parameters in overloaded methods should have the same order of the same parameters: same parameters at the beginning of the list, different at the end of the list.
- Name of parameters should be clear. For example, if used id, it should be clear to which entity it's related. May be used `entity`Id instead (userId, projectId, etc.).
- Same related to return parameters. Should be clear, for example, if it's Long, and it's not some calculations, than should be added explanation in description.
- Try to use suitable structure, to avoid useless converting.
- Try to move usually used flows (checks, or structure processing, etc.) to utils.
- Avoid using manually work with threads (use defined `TaskExecutor` or create a new one).
- `Optional` and `Stream` should be mostly used in cases when it really improves readability.
- Always return `Optional` instead of `null`.
- For `Stream` avoid double terminal operations. (Stream to list then back to stream to collect to list).

### Git branch requirements
- Working branch name must be started with jira-id(EPMRPP-DDD)(-optional-description), for example:
`EPMRPP-444` or `EPMRPP-443-fix-some-bugs`. That also means, all Jira branches must be related to some Jira ticked, only jira-id should be a trigger for branch creation
(excluding some technical branches master, develop, release etc).
- All commit messages in `master`, `develop` and `release` branches must be started with jira-id as well: EPMRPP-445 Some important fix.
- Better to divide commits into small bug logic completed parts into the branch, to ease understanding during code review.
- When merging a PR into the mainstream branch (`master`, `develop`, `release`) all commits should be squashed and provided with suitable description with jira-id by person who performs merge.

<b>For contributors that have no access to our Jira tasks branch name prefix should be GitHub `issue` name</b>
It is highly recommended creating an issue that doesn't already exist and then fix it within your PR. 
Even if it's some new function. Issue will stay there with all your ideas and comments from other contributors. 
Also, RP users who are not developers might prefer to look through issues 
rather than PRs to check if something is already fixed in a new version of Report Portal.

## Open-source contribution workflow

All features fixes should be added to `develop` branch only, exclusions: hot-fixes

Changes applying workflow:
- Clone repository or fork from it
- Checkout `develop` branch
- Create branch according to name policy
- Push branch to the remote
- Create PR according to name policy into the `develop` branch of the RP repository
- Review and merge/reject PR (squash commits in one during merge)

## Dev environment setup

### Pre requirements
- Postgresql should be deployed
- Service Migration should fill/update DB data
- Binary data storage should be configured

To deploy DB with the latest schema we need the `docker-compose.yml` that looks like this:

```yaml
version: '2.4'
services:

  postgres:
    image: postgres:12-alpine
    shm_size: '512m'
    environment:
      POSTGRES_USER: rpuser
      POSTGRES_PASSWORD: rppass
      POSTGRES_DB: reportportal
    volumes:
      # For unix host
      - ./data/postgres:/var/lib/postgresql/data
      # For windows host
      # - postgres:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    command:
      -c checkpoint_completion_target=0.9
      -c work_mem=96MB
      -c wal_writer_delay=20ms
      -c synchronous_commit=off
      -c wal_buffers=32MB
      -c min_wal_size=2GB
      -c max_wal_size=4GB
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -d $$POSTGRES_DB -U $$POSTGRES_USER"]
      interval: 10s
      timeout: 120s
      retries: 10
    restart: always
  
  db-scripts:
    image: reportportal/migrations:5.6.0
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      POSTGRES_SERVER: postgres
      POSTGRES_PORT: 5432
      POSTGRES_DB: reportportal
      POSTGRES_USER: rpuser
      POSTGRES_PASSWORD: rppass
    restart: on-failure
```

`image: reportportal/migrations:5.6.0` is the released version of the migrations service, but if there were any changes in the `develop` branch
they won't be available in released version so migrated DB schema may be outdated.
To prevent this and have DB data up-to-date you should do the following:
- clone/update [Migrations Repository](https://github.com/reportportal/migrations)
- checkout `develop` branch
- run the following command:
```shell
docker-compose run --rm migrations
```
This flow will use all SQL scripts in the `develop` branch and update your locally running DB instance.

<br>

By default, filesystem storage is used for binary data (all data will be stored on your local filesystem).
If you want to store binaries using Minio (as we do on our production) you should deploy it too by adding this to already existing `docker-compose.yml`:

```yaml
  minio:
    image: minio/minio:RELEASE.2020-10-27T04-03-55Z
    ports:
      - '9000:9000'
    volumes:
      # For unix host
      - ./data/storage:/data
      # For windows host
      # - minio:/data
    environment:
      MINIO_ACCESS_KEY: minio
      MINIO_SECRET_KEY: minio123
    command: server /data
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
      interval: 30s
      timeout: 20s
      retries: 3
    restart: always
```

Pay attention to `Windows` comments - if you develop on `Windows` uncomment sections for windows 
and comment `Linux`-related sections both for Postgres and Minio 
then add next statement to the `docker-compose.yml`:
```yaml
volumes:
  postgres:
  minio:
```

As the result we have the `docker-compose.yml`:
```yaml
version: '2.4'
services:

  postgres:
    image: postgres:12-alpine
    shm_size: '512m'
    environment:
      POSTGRES_USER: rpuser
      POSTGRES_PASSWORD: rppass
      POSTGRES_DB: reportportal
    volumes:
      # For unix host
      - ./data/postgres:/var/lib/postgresql/data
      # For windows host
      # - postgres:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    command:
      -c checkpoint_completion_target=0.9
      -c work_mem=96MB
      -c wal_writer_delay=20ms
      -c synchronous_commit=off
      -c wal_buffers=32MB
      -c min_wal_size=2GB
      -c max_wal_size=4GB
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -d $$POSTGRES_DB -U $$POSTGRES_USER"]
      interval: 10s
      timeout: 120s
      retries: 10
    restart: always
  
  db-scripts:
    image: reportportal/migrations:5.6.0
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      POSTGRES_SERVER: postgres
      POSTGRES_PORT: 5432
      POSTGRES_DB: reportportal
      POSTGRES_USER: rpuser
      POSTGRES_PASSWORD: rppass
    restart: on-failure

  minio:
    image: minio/minio:RELEASE.2020-10-27T04-03-55Z
    ports:
      - '9000:9000'
    volumes:
      # For unix host
      - ./data/storage:/data
      # For windows host
      # - minio:/data
    environment:
      MINIO_ACCESS_KEY: minio
      MINIO_SECRET_KEY: minio123
    command: server /data
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
      interval: 30s
      timeout: 20s
      retries: 3
    restart: always
    
volumes:
  postgres:
  minio:
```

This file will be updated in next sections, but we can already start developing our first service

### Service Authorization

To start up Service Authorization you should make changes in the `application.yaml` file:
![](/src/Images/devguide/backend/auth_db_config.png)
![](/src/Images/devguide/backend/auth_binary_config.png)
(Optional) change `context-path` value from `/` to `/uat` if you are planning to deploy Service UI locally (will be described later)

### Service API

Before starting Service API we should add RabbitMQ to our deployment. 

In Report Portal RabbitMQ is required for 3 purposes:
- inter-service communication between Service API and Service Analyzer. 
- async reporting feature
- user activity event publishing

To add RabbitMQ to our deployment we should add the following to our existing `docker-compose.yml`:

```yaml
  rabbitmq:
    image: rabbitmq:3.7.16-management
    ports:
      - "5672:5672"
      - "15672:15672"
    environment:
      RABBITMQ_DEFAULT_USER: "rabbitmq"
      RABBITMQ_DEFAULT_PASS: "rabbitmq"
    healthcheck:
      test: ["CMD", "rabbitmqctl", "status"]
      retries: 5
    restart: always
```

We may start deploying Service API right now without any issues, but all Analyzer-related interactions (publishing to analyzer queues and receiving response) won't succeed.
We need to deploy Service Analyzer and all its required services. So we add the following to our `docker-compose.yml`:

```yaml
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.10.1
    volumes:
      - ./data/elasticsearch:/usr/share/elasticsearch/data
    environment:
      - "ES_JAVA_OPTS=-Dlog4j2.formatMsgNoLookups=true"
      - "bootstrap.memory_lock=true"
      - "discovery.type=single-node"
      - "logger.level=INFO"
      - "xpack.security.enabled=true"
      - "ELASTIC_PASSWORD=elastic1q2w3e"
    ulimits:
      memlock:
        soft: -1
        hard: -1
      nofile:
        soft: 65536
        hard: 65536
    ports:
      - "9200:9200"
    healthcheck:
      test: ["CMD", "curl","-s" ,"-f", "http://elastic:elastic1q2w3e@localhost:9200/_cat/health"]
    restart: always

  analyzer: 
    image: reportportal/service-auto-analyzer:5.6.0
    environment:
      LOGGING_LEVEL: info
      AMQP_EXCHANGE_NAME: analyzer-default
      AMQP_URL: amqp://rabbitmq:rabbitmq@rabbitmq:5672
      ES_HOSTS: http://elastic:elastic1q2w3e@elasticsearch:9200
      MINIO_SHORT_HOST: minio:9000
      MINIO_ACCESS_KEY: minio
      MINIO_SECRET_KEY: minio123
    depends_on:
      elasticsearch:
        condition: service_started
      rabbitmq:
        condition: service_healthy
    restart: always
```

As the result our `docker-compose.yml` should be like [this](/src/Images/devguide/backend/docker-compose.yml)

To start up Service API you should make changes in the `application.yaml` file:
![](/src/Images/devguide/backend/auth_db_config.png)
![](/src/Images/devguide/backend/auth_binary_config.png)
![](/src/Images/devguide/backend/rabbitmq_config.png)
(Optional) change `context-path` value from `/` to `/api` if you are planning to deploy Service UI locally (will be described later)

