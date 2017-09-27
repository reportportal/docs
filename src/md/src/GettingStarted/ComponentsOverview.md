## Components Overview

### Gateway
Gateway is main entry point to application services. It is in charge of routing requests to appropriate service and load balancing.
Gateway communicates with Service Registry to get list actual of services that are allowed to route traffic to.
There are two options proposed: 
* [Fabio](https://github.com/fabiolb/fabio)
    * Configuration parameters:
        * `FABIO_REGISTRY_CONSUL_ADDR=registry:8500` Specifies URL to service registry server
        * `FABIO_REGISTRY_CONSUL_REGISTER_NAME=gateway` Specifies service name to register in service registry (consul)
        * `FABIO_PROXY_ADDR=:9999;rt=300s;wt=300s` Application port, read/write timeouts
* [Traefik](https://traefik.io/)

### Service Registry
Service Registry is the tool that keeps actual list of running services with meta-information attached.
It performs health-checks to each running service to ensure availability.
For the details, see [Consul](https://www.consul.io/)

### API Service
API service is a core of ReportPortal. It is in charge of handling incoming requests from agents and UI. 

### UAT Service
UAT (Unified Authorization Trap) service is module that authenticate users and creates/revokes user tokens. 
It supports various types of authentication mechanisms:
* Basic Auth
* GitHub Auth (OAuth2)
* LDAP Auth
UAT service itself is a OAuth2 server that authenticates user using mechanisms mentioned 
below and creates internal OAuth2 token which is used by UI and agents. There are two types of tokens:
* UI (expiring token)
* API - non-expiring token, intended to use on agent side   

### Index Service
Index services handles requests that does not match any pattern of other services. 
It also aggregates some information/health data from other services to provide UI with that information

### JIRA Service
Integration with JIRA's bug tracking system

### Rally Service
Integration with Rally's bug tracking system

### Analyzer Service
Keeps index of user logs per project and provides ability to perform search by that index. Used by auto-analysis functionality 