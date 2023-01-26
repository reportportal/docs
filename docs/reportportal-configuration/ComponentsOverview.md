---
sidebar_position: 1
sidebar_label: Components Overview
---

# Components Overview

## Gateway
Gateway is a main entry point to application services. It is in-charge of routing requests to appropriate service and load balancing.
There are two options proposed:
* [Traefik](https://traefik.io) for Docker installation
* [NGINX Ingress Controller](https://www.nginx.com/products/nginx/kubernetes-ingress-controller) for Kubernetes

## API Service
The API service is the core of ReportPortal. It is in-charge of handling incoming requests from agents and UI. 

## UAT Service
The UAT (Unified Authorization Trap) service is module that authenticate users and creates/revokes user tokens. 
It supports various types of authentication mechanisms:
* Basic Auth
* GitHub Auth (OAuth2)
* LDAP Auth
The UAT service itself is a OAuth2 server that authenticates a user using mechanisms mentioned 
below and creates internal OAuth2 token which is used by UI and agents. There are two types of tokens:
* UI (expiring token)
* API - non-expiring token, intended to use on agent side   

## Analyzer Service
Keeps index of user logs per project and provides ability to perform search by that index. Used by auto-analysis functionality.  
Collects and processes the information, then sends it to Elasticsearch.

## Migrations Service
Database migrations written in Go. Migrate reads migrations from sources and applies them in correct order to a database.  

## Index Service
The Index services handle requests that do not match any pattern of other services. 
It also aggregates some information/health data from other services to provide UI with that information.

## UI Service
All statics for user interface.