---
sidebar_position: 13
sidebar_label: Scaling ReportPortal services
---

# Scaling ReportPortal services

ReportPortal supports dynamic scaling of its API service during runtime to efficiently manage varying loads. This guide provides instructions on how to scale the API service up or down and discusses the implications of asynchronous reporting and queue management in RabbitMQ while scaling.

 ReportPortal also supports the scaling of UAT and UI services. However, it's not recommended to scale the Jobs service due to potential conflicts with cleaning cron jobs, which may lead to database locking issues.

To effectively scale ReportPortal, you need to follow these steps:

1. **Additional resources**: Increase capacity by deploying more instances or by enhancing the resources (CPU and memory) of existing ones.
2. **Load Balancing**: The Traefik (for Docker) and Ingress Controller (for Kubernetes) are already set up to automatically distribute incoming requests among all active services.
3. **AMQP settings:** Performance improvements can be achieved by increasing the queue count and adjusting the prefetch count per consumer. These adjustments allow for more efficient processing and resolution of messages within the queues. For more detailed information, refer to the article [Asynchronous Reporting](https://reportportal.io/docs/developers-guides/AsynchronousReporting/#exchanges-and-queues-for-reporting).

## Kubernetes Configuration

1. **Scaling Services**: To scale your [ReportPortal services in Kubernetes](https://github.com/reportportal/kubernetes), you need to increase the replica count parameter in the `values.yaml` file for the required services. For example, to scale the API service, adjust the `replicaCount` as shown below:

   ```yaml
   serviceapi:
     replicaCount: 2
   ```

2. **Load Balancing**: The Ingress Controller is already set up to automatically distribute incoming requests among all active services. However, to enhance control over idle TCP connections adjust the IDLE Timeout value to `300`.

## Docker Configuration

1. **Scaling Services**: To scale your [ReportPortal services in Docker](https://github.com/reportportal/reportportal/blob/master/docker-compose.yml), you need to add a replica parameter in the `docker-compose.yml` file for the required services. For example, to scale the API service, adjust the `replicas` as shown below:

   ```yaml
   services:

     api:
       deploy:
         replicas: 2
   ```

2. **Load Balancing**: The Teafik is already set up to automatically distribute incoming requests among all active services.
