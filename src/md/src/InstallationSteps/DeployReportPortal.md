## Deploy ReportPortal

ReportPortal can be easily deployed using Docker-Compose. 

1. Make sure the [Docker](https://docs.docker.com/engine/installation/) ([Engine](https://docs.docker.com/engine/installation/), [Compose](https://docs.docker.com/compose/install/)) is installed.

2. Download the latest compose descriptor example from [here](<https://github.com/reportportal/reportportal/blob/master/docker-compose.yml>). You can make it by next command: 

  ```Shell
  curl https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml -o docker-compose.yml
  ```

3. Start the application using the following command:

```Shell
docker-compose -p reportportal up -d --force-recreate
``` 
Where:
- **-p reportportal** adds project prefix 'reportportal' to all containers
- **up** creates and starts containers
- **-d** daemon mode
- **--force-recreate** Re-creates containers if there any

**Useful commands:**
- **docker-compose logs** shows logs from all containers
- **docker logs &lt;container_name&gt;** shows logs from selected container
- **docker ps -a | grep "reportportal_" | awk '{print $1}' | xargs docker rm -f** Deletes all ReportPortal containers

4. Open your browser with the IP address of the deployed environment at port **8080**

You can get the host IP address by using the following docker command:

```shell
 $ docker-machine ip default
```

  ```
  http://IP_ADDRESS:8080
  ```

5. Use next **login\pass** for access: 
```shell
default\1q2w3e
or
superadmin\erebus
```

>Please change the admin password for security.


**The ReportPortal consists of the following services:**

- Authorization Service. In charge of access tokens distribution.
- Gateway Service. Main entry point to application. Port used by gateway should be opened and accessible from outside network.
- API Service. Main application API.
- UI Service. All statics for user interface.
- Analyzer Service. Collects and processes the information, then sends it to ElasticSearch
- Index Service. Responsible for redirections, collection of services information, handling errors