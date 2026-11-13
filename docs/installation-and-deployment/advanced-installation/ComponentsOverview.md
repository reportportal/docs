---
sidebar_position: 1
sidebar_label: Components Overview
description: ReportPortal Components Overview page explains each service - Gateway, API, Jobs, Analyzer, Migrations, UI - to help you configure and scale your system effectively.
---

# Components Overview

## Gateway
Gateway is a main entry point to application services. It is in-charge of routing requests to appropriate service and load balancing.
There are two options proposed:
* [Traefik](https://traefik.io) for Docker installation
* [NGINX Ingress Controller](https://www.nginx.com/products/nginx/kubernetes-ingress-controller) for Kubernetes

## API Service
The API service is the core of ReportPortal TestOps tool. It is in-charge of handling incoming requests from agents and UI. 
It also provides instance information (build versions of the services, available analyzers, jobs) via the `/api/info` endpoint.

### Authentication and authorization
Starting from Service API 6.0.0, the former UAT (Unified Authorization Trap) service is merged into the API service, 
and its endpoints are available under the `/api` path (for example, `/api/sso/oauth/token`) instead of `/uat`.

The API service authenticates users and creates/revokes user tokens. 
It supports various types of authentication mechanisms:
* Basic Auth
* GitHub Auth (OAuth2)
* LDAP Auth
* SAML

It acts as an OAuth2 server that authenticates a user using the mechanisms mentioned 
above and creates internal OAuth2 token which is used by UI and agents. There are two types of tokens:
* UI (expiring token)
* API - non-expiring token, intended to use on agent side   

## Jobs Service
Runs background jobs, such as cleaning up outdated launches, logs and attachments according to project retention settings.

## Analyzer Service
Keeps index of user logs per project and provides ability to perform search by that index. Used by auto-analysis functionality.  
Collects and processes the information, then sends it to OpenSearch.

## Migrations Service
Database migrations written in Go. Migrate reads migrations from sources and applies them in correct order to a database.  

## UI Service
All statics for user interface. The UI service also handles requests that do not match any pattern of other services (the `/` path), 
which were previously served by the Index service. The Index service was removed in Service API 6.0.0.
