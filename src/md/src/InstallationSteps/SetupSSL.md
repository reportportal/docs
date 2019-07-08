## Setup SSL

This is a short guideline that provides information on how to configure ReportPortal to use Let SSL certificate setup for your existing ReportPortal environment.

#### Overview

We use Traefik as a layer-7 load balancer with SSL termination for the set of micro-services used to run ReportPortal web application.
In addition, we use Let's Encrypt to automatically generate and renew SSL certificates per hostname.

#### Pre-requisites

- Server with a public IP address, with Docker and docker-compose installed on it
- Installed ReportPortal on this servers
- Your own domain and the DNS configured accordingly so the hostname records

### Traefik configuration

Provided below is an example of using Traefik (gateway service) in docker-compose.yml. If you don't have any custom configurations, you are free to use the example below.

Please do not forget to update variables acme.email and acme.domains with your own values

```$xslt
gateway:
    image: traefik:1.6
    ports:
      - "9090:8080" # HTTP exposed
      - "9091:8081" # HTTP Administration exposed
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command:
      - --docker
      - --docker.watch
      - --docker.constraints=tag==v5
      - --defaultentrypoints=https
      - "--entryPoints=Name:https Address::8080 Redirect.EntryPoint:https"
      - "--entryPoints=Name:https Address::8443 Compress:true"
      - --logLevel=ERROR
      - --web
      - --web.address=:8081
      - --web.metrics=true
      - --web.metrics.prometheus=true
      - --acme.email="your_email@blabla.com"
      - --acme.storage="/etc/traefik/acme/acme.json"
      - --acme.entrypoing=https
      - --acme.httpchallenge.entrypoint=http
      - --acme.domains='mydomain.com,www.mydomain.com'

    restart: always
   ```

With this simple configuration, you get:
* HTTP redirect on HTTPS
* Let's Encrypt support
