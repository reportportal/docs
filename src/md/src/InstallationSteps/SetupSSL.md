## Setup SSL

This is a short guideline that provides information on how to configure ReportPortal to use Let SSL certificate setup for your existing ReportPortal environment.

#### Overview

We use Traefik as a layer-7 load balancer with SSL termination for the set of micro-services used to run ReportPortal web application.
In addition, we use Let's Encrypt to automatically generate and renew SSL certificates per hostname.

#### Pre-requisites

- Server with a public IP address, with Docker and docker-compose installed on it
- Installed ReportPortal on this servers
- Your own domain and the DNS configured accordingly so the hostname records

#### Traefik configuration

Provided below is an example of using Traefik (gateway service) in docker-compose.yml. If you don't have any custom configurations, you are free to use the example below.  

First of all, please create a folder on the server as a start point to configure Traefik:  

```
mkdir -p data/traefik
```

Create an empty `acme.json` file within this folder:  

```
touch data/traefik/acme.json && chmod 600 data/traefik/acme.json
```

Apply the following values in your `docker-compose.yml` file:  

> Do not forget to update 'acme.email' and 'acme.domains' variables with your own values

```$xslt
gateway:
    image: traefik:1.7.12
    ports:
      - "8080:8080" # HTTP exposed
      - "8443:8443" # HTTP exposed
      - "8081:8081" # HTTP Administration exposed
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./data/traefik/acme.json:/acme.json
    command:
      - --logLevel=ERROR
      - --docker
      - --docker.watch
      - --docker.constraints=tag==v5
      - --docker.endpoint=unix:///var/run/docker.sock
      - --docker.domain=mydomain.com
      - --defaultentrypoints=http,https
      - "--entryPoints=Name:http Address::8080 Redirect.EntryPoint:https"
      - "--entryPoints=Name:https Address::8443 Compress:true TLS"
      - --retry
      - --web
      - --web.address=:8081
      - --web.metrics=true
      - --web.metrics.prometheus=true
      - --acme.email=your_email@blabla.com
      - --acme.storage=acme.json
      - --acme.onHostRule=true
      - --acme.entrypoint=https
      - --acme.httpchallenge.entrypoint=http
      - --acme.domains=mydomain.com,www.mydomain.com

    restart: always
   ```

In case you want to go with the standart http/https ports, please use following configuration:  


```$xslt
gateway:
    image: traefik:1.7.12
    ports:
      - "80:80" # HTTP exposed
      - "443:443" # HTTP exposed
      - "8081:8081" # HTTP Administration exposed
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./data/traefik/acme.json:/acme.json
    command:
      - --logLevel=ERROR
      - --docker
      - --docker.watch
      - --docker.constraints=tag==v5
      - --docker.endpoint=unix:///var/run/docker.sock
      - --docker.domain=mydomain.com
      - --defaultentrypoints=http,https
      - "--entryPoints=Name:http Address::80 Redirect.EntryPoint:https"
      - "--entryPoints=Name:https Address::443 Compress:true TLS"
      - --retry
      - --web
      - --web.address=8081
      - --web.metrics=true
      - --web.metrics.prometheus=true
      - --acme.email=your_email@blabla.com
      - --acme.storage=acme.json
      - --acme.onHostRule=true
      - --acme.entrypoint=https
      - --acme.httpchallenge.entrypoint=http
      - --acme.domains=mydomain.com,www.mydomain.com

    restart: always
```
   
This is the minimum configuration required to do the following:

1) Log ERROR-level messages (or more severe) to the console, but silence DEBUG-level messages
2) Check for new versions of Traefik periodically
3) Create two entry points, namely an HTTP endpoint on port 80, and an HTTPS endpoint on port 443 where all incoming traffic on port 80 will immediately get redirected to HTTPS.
4) Enable the Docker provider and listen for container events on the Docker unix socket we've mounted earlier. However, new containers will not be exposed by Traefik by default, we'll get into this in a bit!
5) Enable automatic request and configuration of SSL certificates using Let's Encrypt. These certificates will be stored in the acme.json file, which you can back-up yourself and store off-premises.

IMPORTANT NOTE: You need to make sure that the required ports are opened, please check your firewall settings.  

With this simple configuration, you get:
* HTTP redirect on HTTPS
* Let's Encrypt support
