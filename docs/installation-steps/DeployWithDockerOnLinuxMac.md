---
sidebar_position: 3
sidebar_label: Deploy with Docker on Linux/Mac
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

3. Make the ElasticSearch configuration prerequisites for the analyzer service

    * Set {vm.max_map_count} kernel setting before ReportPortal deploying with the following [Commands](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html#docker-cli-run-prod-mode)
    * Give right permissions to ElasticSearch data folder using the following commands:

```bash
mkdir -p data/elasticsearch
chmod 777 data/elasticsearch
chgrp 1000 data/elasticsearch
```

For more details about ElasticSearch visit ElasticSearch [guide](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html#_notes_for_production_use_and_defaults)

> OPTIONAL
>
> **PostgreSQL Performance Tuning**
>
> Depends on your hardware configuration and parameters of your system, you can additionally optimize your PostgreSQL performance by adding the following parameters to "command" option in the Docker compose file:
>
> ```bash
>  -c effective_io_concurrency=
>  -c shared_buffers=
>  -c max_connections=
>  -c effective_cache_size=
>  -c maintenance_work_mem=
>  -c random_page_cost=
>  -c seq_page_cost= 
>  -c min_wal_size= 
>  -c max_wal_size=
>  -c max_worker_processes=
>  -c max_parallel_workers_per_gather=
>``` 
>
> Please choose set the values of these variables that are right for your system.
>
> You can also change PostgreSQL host by passing a new value to POSTGRES_SERVER environment [variable](./AdditionalConfigurationParameters).

4. Start the application using the following command:

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
- **docker logs &lt;container_name&gt;** shows logs from selected container
- **docker ps -a | grep "reportportal_" | awk '{print $1}' | xargs docker rm -f** Deletes all ReportPortal containers
- **docker-compose dowm**


5. Open your web-browser with an IP address of the deployed environment at port **8080**

Use the following **login\pass** to access:
* Default User: `default\1q2w3e`
* Administrator: `superadmin\erebus`

> ⚠️ Please change the admin password for better security
