## Deploy Without Docker on Windows
This document contains steps for set up separate Report Portal instance without Docker.

Important: software versions should be exactly the same like in compose file - reportportal/docker-
compose.yml at master · reportportal/reportportal · GitHub. Otherwise you can receive issues, which will be
related to services incompatibility.

>**Note:**
*We don’t recommend it, but in case you have not other options*

### Setup OS

1. Uncomment host file C:\Windows\System32\drivers\etc\ **hosts** 
`127.0.0.1	localhost`  
`127.0.0.1	registry`

### Download steps:
1. **Java SE Development Kit 8** - exe file from Oracle.
2. **Mongo DB** - msi file from MongoDB Download Center | MongoDB (based on OS type)
3. **Fabio** - exe file from Releases · fabiolb/fabio · GitHub (based on your architecture (x86 or x64))
4. **Consul** - exe file from Download Consul - Consul by HashiCorp (based on your architecture (x86 or
    x64))
5. **Service API** - jar file from https://dl.bintray.com/epam/reportportal/com/epam/reportportal/service-api/
    <version>/service-api-<version>.jar
6.  **Service Authorization** - jar file from https://dl.bintray.com/epam/reportportal/com/epam/reportportal/
    service-authorization/<version>/:service-authorization-<version>.jar
7. **Service UI** -
    1. exe file from https://dl.bintray.com/epam/reportportal/<version>/service-ui_win_amd64.exe
    2. web application content - /ui.tar.gz
8. **Service Index** - exe file from https://dl.bintray.com/epam/reportportal/<version>/service-
    index_win_amd64.exe
9. Latest version of **NSSM tool** - archive from NSSM - Service Manager https://nssm.cc/download
10. *(Optional)* **Service JIRA** - jar file from https://dl.bintray.com/epam/reportportal/com/epam/reportportal/
    service-jira/<version>/service-jira-<version>.jar

### Installation steps:

1. **Mongo**:
    1. Go to installation folder
    2. Execute mongod `--logpath <path_to_log>\mongo.log --serviceName="RP_mongo" --dbpath
       <path_to_db> --directoryperdb --install`
2. **Fabio**:
    1. Take default `fabio.propereties` file and change following default values:
       ```- proxy.addr = :8080;rt=300s;wt=300s (gateway port)
       - registry.consul.addr = registry:8500
       - registry.consul.register.addr = :8080 (Fabio registers itself in consul with this host:port address)
       - registry.consul.register.name = gateway
       - ui.addr = :9998 (port for management page)
       ```
	   >**proxy.addr** configures listeners.
**registry.consul.addr** configures the address of the Consul agent to connect to.
**registry.consul.register.name** configures the name for the service registration.
Fabio registers itself in consul under this service name.
**registry.consul.register.addr** configures the address for the service registration.
Fabio registers itself in consul with this host:port address. It must point to the UI/API endpoint configured by ui.addr and defaults to its value.
**ui.addr** configures the address the UI is listening on.

3. **Create Windows service**
    * ```nssm install RP_service_gateway "<full directory path>\fabio-1.5.2-go1.9-windows_amd64.exe" -cfg <full directory path>\fabio.properties```
4. **Consul**: create Windows service using command
    * ```nssm install RP_consul "<full directory path>\consul.exe" agent -server -bootstrap-expect=1 -ui -client 0.0.0.0 -raft-protocol=3 -data-dir=consul_data -bind=127.0.0.1```
	
	>**agent -server** - This indicates whether the agent is running in server or client mode.
	**-bootstrap-expect** - This flag provides the number of expected servers in the datacenter.
	**-ui** - Enables the built-in web UI server and the required HTTP routes.
	**-client** - The address to which Consul will bind client interfaces, including the HTTP and DNS servers. By default, this is "127.0.0.1", allowing only loopback connections.
	**-data-dir** - This flag provides a data directory for the agent to store state. This is required for all agents. The directory should be durable across reboots. This is especially critical for agents that are running in server mode as they must be able to persist cluster state.
	**-bind** - The address that should be bound to for internal cluster communications. This is an IP address that should be reachable by all other nodes in the cluster.
5. **Service API**: create Windows service using command 
    * ```nssm install RP_service_api "<JDK path>\java.exe" -DSPRING_CLOUD_CONSUL_HOST=registry -DRP_ISSUE_ANALYZER_DEPTH=4 -Xmx1g -Drp.uat.serviceUrl="http://<server IP or hostname>:8080/uat" -jar "<full directory path>\service-api-3.3.2.jar"```
	>DSPRING_CLOUD_CONSUL_HOST - Consul
	Drp.uat.serviceUrl
6. **Service Authorization**: create Windows service using command 
    * ```nssm install RP_service_uat "<JDK path>\java.exe" -Xmx512m -DRP_SESSION_LIVE=86400 -DSERVER_PORT=9999 -DSPRING_PROFILES=consul -jar "<full directory path>\service-authorization-3.3.0.jar"```
7. **Service UI**:
    1. Create Windows service - 
    * `nssm install RP_service_ui "<full directory path>\service-ui_win_amd64.exe"`
    2. Unzip archive with web application content (ui.tar.gz) to some directory
    3. Set port, consul tags and address, path content - 
    * ```nssm set RP_service_ui AppEnvironmentExtra "RP_SERVER.PORT=8082" "RP_CONSUL.TAGS=urlprefix-/ui opts strip=/ui" "RP_CONSUL.ADDRESS=<server IP or hostname>:8500" "RP_STATICSPATH=<directorhy path for web application content >"```
8. **Service Index**:
    1. Create Windows service - `nssm install RP_service_index "D:\rp\service-index_windows_amd64"`
    2. Set port, consul tags and address, path content - 
    * ```nssm set RP_service_index AppEnvironmentExtra "RP_SERVER.PORT=8081" "RP_CONSUL.TAGS=urlprefix-/" "RP_CONSUL.ADDRESS=<server IP or hostname>:8500"```
    3. Add dependency of gateway and registry - `nssm set RP_service_index DependOnService RP_consul
RP_service_gateway`
9. *(Optional)* **Service JIRA**: create Windows service using command 
    * ```nssm install RP_service_jira "<JDK path>\java.exe" -Xmx256m -DSERVER_PORT=8083 -jar "<full directory path>\service-jira-3.3.0.jar"```

### Result:

1. Following Windows services should be created and you should be able to start them:
    1. RP_consul
    2. RP_mongo
    3. RP_sevice_api
    4. RP_sevice_gateway
    5. RP_sevice_index
    6. RP_sevice_jira
    7. RP_sevice_uat
    8. RP_sevice_ui
2. Service status can be seen http://127.0.0.1:8500/ui/#/dc1/services
3. Report portal should be accessible for URL - [http://<server](http://<server) IP or hostname>:8080/



