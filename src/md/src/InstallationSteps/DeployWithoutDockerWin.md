This document contains steps for set up separate Report Portal instance without Docker.

Important: software versions should be exactly the same like in compose file - reportportal/docker-
compose.yml at master · reportportal/reportportal · GitHub. Otherwise you can receive issues, which will be
related to services incompatibility.

## Download steps:

1. Mongo DB - msi file from MongoDB Download Center | MongoDB (based on OS type)
2. Fabio - exe file from Releases · fabiolb/fabio · GitHub (based on your architecture (x86 or x64))
3. Consul - exe file from Download Consul - Consul by HashiCorp (based on your architecture (x86 or
    x64))
4. Service API - jar file from https://dl.bintray.com/epam/reportportal/com/epam/reportportal/service-api/
    <version>/service-api-<version>.jar
5. Service Authorization - jar file from https://dl.bintray.com/epam/reportportal/com/epam/reportportal/
    service-authorization/<version>/:service-authorization-<version>.jar
6. Service UI -
    1. exe file from https://dl.bintray.com/epam/reportportal/<version>/service-ui_win_amd64.exe
    2. web application content - /ui.tar.gz
7. Service Index - exe file from https://dl.bintray.com/epam/reportportal/<version>/service-
    index_win_amd64.exe
8. Latest version of NSSM tool - archive from NSSM - Service Manager
9. (Optional) Service JIRA - jar file from https://dl.bintray.com/epam/reportportal/com/epam/reportportal/
    service-jira/<version>/service-jira-<version>.jar

## Installation steps:

1. Mongo:
    1. Go to installation folder
    2. Execute mongod --logpath <path_to_log>\mongo.log --serviceName="RP_mongo" --dbpath
       <path_to_db> --directoryperdb --install
2. Fabio:
    1. Take default fabio.propereties file and change following default values:
       - proxy.addr = :8080;rt=300s;wt=300s (gateway port)
       - registry.consul.addr = 10.235.32.99:
       - registry.consul.register.addr = :8080 (Fabio registers itself in consul with this host:port address)
       - registry.consul.register.name = gateway
       - ui.addr = :9998 (port for management page)
2. Create Windows service - nssm install RP_service_gateway "<full directory path>\fabio-1.5.2-go1.9-
windows_amd64.exe" -cfg <full directory path>\fabio.properties.txt
3. Consul: create Windows service using command - nssm install RP_consul "<full directory path>
\consul.exe" agent -server -bootstrap-expect=1 -ui -client 0.0.0.0 -raft-protocol=3 -data-dir=consul_data
-bind=127.0.0.
4. Service API: create Windows service using command nssm install RP_service_api
"<JDK path>\java.exe" -DSPRING_CLOUD_CONSUL_HOST=<server IP or hostname> -
DRP_ISSUE_ANALYZER_DEPTH=4 -Xmx1g -Drp.uat.serviceUrl="http://<server IP or hostname>:8080/
uat" -jar "<full directory path>\service-api-3.3.2.jar"
5. Service Authorization: create Windows service using command nssm install RP_service_uat
"<JDK path>\java.exe" -Xmx512m -DRP_SESSION_LIVE=86400 -DSERVER_PORT=9999 -
DSPRING_PROFILES=consul -jar "<full directory path>\service-authorization-3.3.0.jar"
6. Service UI:
1. Create Windows service - nssm install RP_service_ui "<full directory path>\service-
ui_win_amd64.exe"
2. Unzip archive with web application content (ui.tar.gz) to some directory
3. Set port, consul tags and address, path content - nssm set RP_service_ui AppEnvironmentExtra
"RP_SERVER.PORT=8082" "RP_CONSUL.TAGS=urlprefix-/ui opts strip=/ui"
"RP_CONSUL.ADDRESS=<server IP or hostname>:8500" "RP_STATICSPATH=<directorhy path for
web application content >"
7. Service Index:
1. Create Windows service - nssm install RP_service_index "D:\rp\service-index_windows_amd64"
2. Set port, consul tags and address, path content - nssm set RP_service_index AppEnvironmentExtra
"RP_SERVER.PORT=8081" "RP_CONSUL.TAGS=urlprefix-/" "RP_CONSUL.ADDRESS=<server IP
or hostname>:8500"
3. Add dependency of gateway and registry - nssm set RP_service_index DependOnService RP_consul
RP_service_gateway
8. (Optional) Service JIRA: create Windows service using command nssm install RP_service_jira
"<JDK path>\java.exe" -Xmx256m -DSERVER_PORT=8083 -jar "<full directory path>\service-
jira-3.3.0.jar"

## Result:

1. Following Windows services should be created and you should be able to start them:
    1. RP_consul
    2. RP_mongo
    3. RP_sevice_api
    4. RP_sevice_gateway
    5. RP_sevice_index
    6. RP_sevice_jira
    7. RP_sevice_uat
    8. RP_sevice_ui
2. Report portal should be accessible for URL - [http://<server](http://<server) IP or hostname>:8080/



