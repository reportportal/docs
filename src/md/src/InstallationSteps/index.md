Installation steps 
======================

## Install docker 
Docker is supported by all major Linux distributions, MacOS and Windows.

***Note for Windows users.***
*[Docker for Windows](https://docs.docker.com/docker-for-windows/) requires 64bit Windows 10 Pro and Microsoft Hyper-V. 
If your system does not satisfy these requirements, 
you can install [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/), 
which uses Oracle Virtual Box instead of Hyper-V.*

[Download](https://www.docker.com/community-edition) and install Docker (Docker Engine, Compose, etc)

**IMPORTANT**
If you use Docker for Windows or MacOS, make sure there is at least 3gb dedicated for Docker.
For Windows native docker:
![Image](Images/installation/docker_config_win.png)

For MacOS native docker:
![Image](Images/installation/docker_config_macos.png)


#### Deploy ReportPortal

Deploy ReportPortal using docker-compose. 
Example of compose descriptor can be found [here](<https://github.com/reportportal/reportportal/blob/master/docker-compose.yml>)
Start application using the following command:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ powershell
docker-compose -p reportportal up -d --force-recreate
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Where:
- **-p reportportal** adds prefix 'reportportal' to all containers
- **up** creates and starts containers
- **-d** daemon mode
- **--force-recreate** Re-creates containers if there any

**Useful commands:**
- **docker-compose logs** shows logs from all containers
- **docker logs &lt;container_name&gt;** shows logs from selected container
- **docker ps -a | grep "reportportal_" | awk '{print $1}' | xargs docker rm -f** Deletes all ReportPortal containers

**ReportPortal consists of the following services:**

- Redis. Used for distributed cache.
- Authorization Service. In charge of access tokens distribution.
- Gateway Service. Main entry point to application. Port used by gateway should be opened and accessible from outside network.
- API Service. Main application API.
- UI Service. All statics for user interface.
- JIRA Service. Interaction with JIRA.
- Rally Service. Interaction with Rally.
- TFS Service. Interaction with TFS.

## Additional configuration parameters

| Configuration parameter | Default Value | Service | Description |
|-------------------------| ------------- | --------|-------------|
| RP_PROFILES | - | API,UAT,JIRA,RALLY | Specifies application settings profiles. Should be set to 'docker' |
| RP_SESSION_LIVE | 1800 | UAT | Session token live time in seconds|
| RP_MONGO_HOST | 'localhost' for default profile, 'mongodb' for docker profile | API,UAT,JIRA,RALLY | MongoDB host|
| RP_MONGO_PORT | 27017 | API,UAT,JIRA,RALLY | MongoDB port|
| RP_MONGO_DB_NAME | reportportal | API,UAT,JIRA,RALLY | MongoDB database name|
| RP_MONGO_DB_USER | - | API,UAT,JIRA,RALLY | MongoDB user name|
| RP_MONGO_DB_PASSWORD | - | API,UAT,JIRA,RALLY | MongoDB user password|

Example of docker compose with filled out configuration parameters [can be found here](https://github.com/reportportal/reportportal/blob/master/docker-compose.yml).



## Production deployment
For the production environment, it's recommended to [install MongoDB](https://docs.mongodb.com/manual/installation/) on separate host.
In this case, remove MongoDB container descriptor from docker-compose file and configure API,UAT,JIRA,RALLY services for just created
external MongoDB as described in [additional configuration parameters section](#additional-configuration-parameters).
