---
sidebar_position: 4
sidebar_label: Deploy with Docker on Windows
description: A portable way to manage your real time test results. Using Docker makes it easy to share test execution report and collaborate with other team members.
---

# Deploy with Docker on Windows

In case you went with Docker on Windows, please make sure you changed the 'volumes' value for postgres container from "For unix host" to the "For windows host":

```Shell
  volumes:
    # For windows host
    - postgres:/var/lib/postgresql/data
    # For unix host
    # - ./data/postgres:/var/lib/postgresql/data
``` 

> If you haven’t done this, you will get an error
>
> ```Shell
> data directory “/var/lib/postgresql/data/pgdata” has wrong ownership
> ``` 

Then uncomment the following:

```Shell
    volumes:
     # For unix host
     # - ./data/storage:/data 
     # For windows host
      - minio:/data
 ```

And after that uncomment the following:

```Shell
# Docker volume for Windows host
volumes:
  postgres:
  minio:
``` 


## Updating ReportPortal with Docker

Updating ReportPortal with Docker is a two step process.

In the first step, your Docker Compose file should be replaced with a new one (with the latest version services) from [here](<https://github.com/reportportal/reportportal/blob/master/docker-compose.yml>).

The second step is update / redeploy the application using the following command:

```Shell
docker-compose -p reportportal up -d --force-recreate
``` 

There is no strict need for backup / restore the data if you are keep the postgres, elasticsearch & minio volumes. However, it is recommended (see Maintain commands Cheat sheet).


## ReportPortal Services

The ReportPortal consists of the following services:

- Authorization Service. In charge of access tokens distribution.
- Gateway Service. Main entry point to application. Port used by gateway should be opened and accessible from outside network.
- API Service. Main application API.
- UI Service. All statics for user interface.
- Analyzer Service. Collects and processes the information, then sends it to OpenSearch
- Index Service. Responsible for redirections, collection of services information, handling errors
