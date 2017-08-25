### Introduction:
This short guideline provides information about self-signed SSL certificate setup for your existing report portal environment.

### Pre-requisites:
- Installed report portal
- Certificate in PEM format
- Exported private key from PEM certificate

# Server configuration
### docker-compose.yml:
Provided example is using default docker-compose.yml. If you dont have any custom
configurations in your docker-compose.yml file, you are free to use example below.<br>

<b>NB!</b> Certificate used with name "cert.pem" and key "mykey.pem", so you need to rename the certificate files if they are using different names or to add correct name in
"FABIO_PROXY_CS" property.

```$xslt
   version: '2'

   services:
     redis:
       image: redis:3.2
       ## Uncomment if needed
       # ports:
       #   - "6379:6379"
       volumes:
         - ./data/redis:/data
       restart: always

     mongodb:
       image: mongo:3.4
       volumes:
         - ./data/mongo:/data/db
       restart: always

     registry:
       image: consul:0.9.0
       volumes:
         - ./data/consul:/consul/data
       command: "agent -server -bootstrap-expect=1 -ui -client 0.0.0.0  -raft-protocol=3"
       environment:
           - 'CONSUL_LOCAL_CONFIG={"leave_on_terminate": true}'
       restart: always

     uat:
       image: reportportal/service-authorization:3.1.1
       #ports:
       #  - "9999:9999"
       depends_on:
         - redis
         - mongodb
       environment:
         - RP_PROFILES=docker,6293
         - RP_SESSION_LIVE=86400 #in seconds
       restart: always

     gateway:
       image: fabiolb/fabio:1.5.2-go1.8.3
       ports:
         - "9998:9998" # GUI/management
         - "8080:9999" # HTTP exposed
       volumes:
         - ./certs:/certs
       environment:
         - FABIO_REGISTRY_CONSUL_ADDR=registry:8500
         - FABIO_REGISTRY_CONSUL_REGISTER_NAME=gateway
         - FABIO_PROXY_ADDR=:9999;cs=av;rt=300s;wt=300s
         - FABIO_PROXY_CS=cs=av;type=file;cert=/certs/cert.pem;key=/certs/mykey.pem

     index:
       image: reportportal/service-index:3.1.0
       environment:
         - RP_SERVER.PORT=8080
         - RP_CONSUL.TAGS=urlprefix-/
         - RP_CONSUL.ADDRESS=registry:8500
       depends_on:
          - registry
          - gateway
       restart: always

     api:
       image: reportportal/service-api:3.1.1
       depends_on:
         - redis
         - mongodb
       environment:
         - RP_PROFILES=docker
         - RP_ISSUE_ANALYZER_DEPTH=4
         - JAVA_OPTS=-Xmx1g -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp
       restart: always

     ui:
       image: reportportal/service-ui:3.1.5
       environment:
         - RP_SERVER.PORT=8080
         - RP_CONSUL.TAGS=urlprefix-/ui opts strip=/ui
         - RP_CONSUL.ADDRESS=registry:8500
       restart: always
   ```

### Adding certificates to server
Open up report portal directory (place, where is the "data" folder presents). Create directory
"certs". Add cert "cert.pem" and key "mykey.pem" to this directory.

### Recreate containers
Run
```$xslt
docker-compose -p reportportal up -d --force-recreate
```
Server part is ready.
To verify result open up report-portal via https connection.

# Project configuration
### Adding certificate to project
Before adding certificate to project, you need to convert it from "PEM" format to "DER"*.
Find any online converter or use line below to do it:
```$xslt
openssl x509 -outform der -in cert.pem -out cert.der
```
After conversion is completed, you need to add converted certificate to jks container.
To do it open up bin folder in your JAVA JDK directory and run:
```$xslt
keytool -import -alias your-alias -keystore certstore.jks -file cert.der
```
NB! Remember your password, after adding it to container.<br>
Add certstore.jks file to resources folder in classpath of your project.

### reportportal.properties
Open up reportportal.properties file in your project.
- Change rp.endpoint url from http to https
- Modify/add property rp.keystore.resource:
```$xslt
rp.keystore.resource = certstore.jks
```
- Modify/add property rp.keystore.password:
```$xslt
rp.keystore.password = YOUR_PASSWORD to certstore.joks
```
Project part is ready.
