---
sidebar_position: 3
sidebar_label: Deploy with Docker on Linux/Mac
description: Make your test automation reporting more portable. Reduce the risk of configuration issues with your test reporting tool using Docker.
---

# Deploy with Docker on Linux/Mac

ReportPortal can be easily deployed using Docker Compose.

## Install Docker

Docker is supported by all major Linux distributions, MacOS and Windows.

* [Download](https://www.docker.com/get-started) Docker
* [Download](https://docs.docker.com/compose/install/) Docker Compose

> ⚠️ Recomended change resources limits at least **2** CPU **5** GB RAM for Docker Desktop: [MAC](https://docs.docker.com/desktop/settings/mac/#advanced) | [Windows](https://docs.docker.com/desktop/settings/windows/#advanced) | [Linux](https://docs.docker.com/desktop/settings/linux/#advanced)


## Deploy ReportPortal with Docker

1. Download the latest ReportPortal Docker Compose file from [here](<https://github.com/reportportal/reportportal/blob/master/docker-compose.yml>). You can make it by run the following command:

```bash
curl -LO https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml
```
Ensure you override the UAT Service environment variable `RP_INITIAL_ADMIN_PASSWORD`.

2. Start the application using the following command:

```bash
docker-compose -p reportportal up -d --force-recreate
``` 
Where:
- **-p reportportal** adds project prefix 'reportportal' to all containers
- **up** creates and starts containers
- **-d** daemon mode
- **--force-recreate** Re-creates containers if there any

Useful commands:
- **docker-compose logs** shows logs from all containers
- **docker logs &lt;;container_name&gt;** shows logs from selected container
- **docker ps -a | grep "reportportal_" | awk '&#123;print $1}' | xargs docker rm -f** Deletes all ReportPortal containers
- **docker-compose down**

3. Open your web browser with an IP address of the deployed environment at port **8080**

Use the following **login\pass** to access:
* Default User: `default\1q2w3e`
* Administrator: `superadmin\erebus`

> ⚠️ Please change the admin password for better security

## Optional Customisation

1. Expose Docker Volumes to the file system

Give the right permissions to the OpenSearch data folder using the following commands:

```bash
mkdir -p data/opensearch
chmod 775 data/opensearch
chgrp 1000 data/opensearch
```

2. PostgreSQL Performance Tuning

Depending on your hardware configuration and the parameters of your system, you can additionally optimize your PostgreSQL performance by adding the following parameters to the "command" option in the Docker compose file:

```bash
 -c effective_io_concurrency=
 -c shared_buffers=
 -c max_connections=
 -c effective_cache_size=
 -c maintenance_work_mem=
 -c random_page_cost=
 -c seq_page_cost= 
 -c min_wal_size= 
 -c max_wal_size=
 -c max_worker_processes=
 -c max_parallel_workers_per_gather=
``` 

Please choose to set the values of these variables that are right for your system. You can also change the PostgreSQL host by passing a new value to the `POSTGRES_SERVER` environment [variable](/installation-steps/AdditionalConfigurationParameters).

More info can be found at the following [link](/installation-steps/OptimalPerformanceHardwareSetup#5-postgresql-performance-tuning)
