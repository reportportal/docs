---
sidebar_position: 9
sidebar_label: Additional configuration parameters
---

# Additional configuration parameters

| Configuration parameter | Default Value | Service | Description |
|-------------------------| ------------- | --------|-------------|
| RP_PROFILES | - | API,UAT | Specifies application settings profiles. Should be set to 'docker' |
| RP_SESSION_LIVE | 3600 | UAT | Session token live time in seconds|
| RP_SERVER_PORT | 8080 | UI | UI service port |
| POSTGRES_SERVER | postgres | API,UAT,MIGRATIONS | PostgreSQL host |
| POSTGRES_PORT | 5432 | API,UAT,MIGRATIONS | PostgreSQL port |
| POSTGRES_USER | rpuser | API,UAT,MIGRATIONS | PostgreSQL user name |
| POSTGRES_PASSWORD | rppass | API,UAT,MIGRATIONS | PostgreSQL user password |
| POSTGRES_DB | reportportal | API,UAT,MIGRATIONS | PostgreSQL database name |
| RABBITMQ_DEFAULT_USER | rabbitmq | API,ANALYZER | PostgreSQL database name |
| RABBITMQ_DEFAULT_PASS | rabbitmq | API,ANALYZER | PostgreSQL database name |

[Example of docker compose](https://github.com/reportportal/reportportal/blob/master/docker-compose.yml) with filled out configuration parameters.
