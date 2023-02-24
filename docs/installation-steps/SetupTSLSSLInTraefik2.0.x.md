---
sidebar_position: 8
sidebar_label: Setup TLS(SSL) in Traefik 2.0.x
---

# Setup TLS(SSL) in Traefik 2.0.x

This is a short guideline that provides information on how to configure ReportPortal to use Let TLS/SSL certificate setup for your existing ReportPortal environment.

## Overview

We use Traefik as a layer-7 load balancer with TLS/SSL termination for the set of micro-services used to run ReportPortal web application.

## Pre-requisites

- Server with a public IP address, with Docker and docker-compose installed on it
- Installed ReportPortal on this servers
- Your own domain and the DNS configured accordingly so the hostname records

## Configuration

Provided below is an example of using Traefik (gateway service) in docker-compose.yaml. If you don't have any custom configurations, you are free to use the example below.

*** Create a directory on the server for Traefik data and storing certificates ***

```bash
mkdir data/traefik/ && mkdir -p data/certs/traefik
```

Check:

```bash
data
|-- certs
|-- elasticsearch
|-- postgres
|-- traefik
```

*** Create config file for Traefik with certificate and key path.***

```bash
cat << EOF | tee -a data/traefik/certs-traefik.yaml
tls:
  certificates:
    - certFile: /etc/certs/examplecert.crt
      keyFile: /etc/certs/examplecert.key
EOF
```
 
Place certificate `examplecert.crt` and key `examplecert.key` to directory `data/certs/traefik/` you created earlier.

*** Edit Traefik service in the `docker-compose.yaml`***

Add the following volumes to Traefik:

```yaml
services:
  gateway:
    volumes:
      - "./data/traefik/dynamic/certs-traefik.yaml:/etc/traefik/dynamic/certs-traefik.yaml"
      - "./data/certs/traefik:/etc/certs/"
```

commands:

```yaml
services:
  gateway:
    commands:
      - "--providers.file.directory=/etc/traefik/dynamic"
      - "--entrypoints.websecure.address=:443"
```

and ports:

```yaml
services:
  gateway:
    ports:
      - "443:443"
```

Check the Traefik part:

```yaml
version: '2.4'
services:

  gateway:
    image: traefik:v2.0.5
    ports:
      - "8080:8080" # HTTP exposed
      - "8081:8081" # HTTP Administration exposed
      - "443:443"   # TLS/SSL
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock"
      - "./data/traefik/dynamic/certs-traefik.yaml:/etc/traefik/dynamic/certs-traefik.yaml"
      - "./data/certs/traefik:/etc/certs/"     
    command:
      - "--providers.docker=true"
      - "--providers.docker.constraints=Label(`traefik.expose`, `true`)"
      - "--entrypoints.web.address=:8080"
      - "--entrypoints.traefik.address=:8081"
      - "--api.dashboard=true"
      - "--api.insecure=true"
      # TLS/SSL
      - "--providers.file.directory=/etc/traefik/dynamic"
      - "--entrypoints.websecure.address=:443"
    restart: always
```

*** Add the following labels to existing services `api`, `uat`, `index`, `ui`, replacing `<service>` with the corresponding service name ***

```yaml
labels:
  - "traefik.http.routers.<service>.tls=true"
```

Check the UI and API services as an example:

```yaml
version: '2.4'
services:

  ui:
    image: reportportal/service-ui:5.3.4
    environment:
      - RP_SERVER_PORT=8080
    labels:
      - "traefik.http.middlewares.ui-strip-prefix.stripprefix.prefixes=/ui"
      - "traefik.http.routers.ui.middlewares=ui-strip-prefix@docker"
      - "traefik.http.routers.ui.rule=PathPrefix(`/ui`)"
      - "traefik.http.routers.ui.service=ui"
      - "traefik.http.services.ui.loadbalancer.server.port=8080"
      - "traefik.http.services.ui.loadbalancer.server.scheme=http"
      - "traefik.expose=true"
      - "traefik.http.routers.ui.tls=true" # label is here
    restart: always
```

**NOTE**: Make sure that the required ports are opened. Please check your firewall settings.

## Helpful links

1. [Traefik HTTPS&TLS Offical documentation](https://doc.traefik.io/traefik/https/tls/)
2. [Traefik 2 & TLS 101](https://traefik.io/blog/traefik-2-tls-101-23b4fbee81f1/)
3. [Traefik Routing TLS](https://doc.traefik.io/traefik/routing/routers/#tls)

---
## Issues

*** Unable to find valid certification path to requested target ***

```java
Feb-2 00:00:00.000 [rp-io-1] ERROR Launch - [18] ReportPortal execution error
javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```

Solutions:

1. **Recomended**. Add certificate to Java-machine
2. **Not recommended**. [Ignoring SSL certificate](https://stackoverflow.com/questions/19517538/ignoring-ssl-certificate-in-apache-httpclient-4-3/34991729)
