---
sidebar_position: 13
sidebar_label: Scaling Up the ReportPortal Service API
---

# Scaling Up the ReportPortal Service API

ReportPortal supports dynamic scaling of its API service during runtime to efficiently manage varying loads. This guide provides instructions on how to scale the API service up or down, and discusses the implications on asynchronous reporting and queue management in RabbitMQ while scaling.

## Scaling Up the API Service

### Steps to Scale Up
1. **Launch Additional Instances**: Increase the capacity by starting more instances of the API service.
2. **Load Balancing**: The load balancer will automatically distribute incoming requests among all active API service instances.

## Scaling Down the API Service

### Steps to Scale Down
1. **Shutdown Instances**: Decrease the scale by shutting down any of the API service instances.
2. **Message Redistribution**: Messages in the queues of the shutdown instance will automatically shift to the queues of the remaining active APIs.
3. **Queue Cleanup**: Inactive queues (those not receiving any new messages) will be removed after a few minutes.

## Impact on Asynchronous Reporting and Queue Management

### Considerations for Scaling Up
- **Message Rebalancing**: During periods of heavy asynchronous reporting, scaling up may cause messages to be rebalanced across different queues, despite using "Consistent Hashing Algorithm" for distribution. It may lead to an increased number of retries. It might take approx. 2 hours to restore order using retry logic with progressively increasing TTL for each message.
- **Avoid During Heavy Reporting**: Given the potential complexities in message handling when scaling up, it is advisable to refrain from doing so during extensive reporting activities to prevent hard-to-resolve situations and missed reporting items.

### Considerations for Scaling Down
- **Continuity in Message Processing**: Shutting down an API instance leads to its queues redistributing their messages to the remaining queues, ensuring no disruption in processing.

### Notable Effects
Scaling operations primarily affect asynchronous report processing and management within RabbitMQ queues:

- **Order Processing Assurance**: To maintain correct order processing of reports for a specific Launch, all requests are directed to one particular queue and handled by only one consumer.

### About RabbitMQ Queues
- **Scaling Limitations**: Currently, it is not possible to scale queues in RabbitMQ with spreading requests across multiple queues and consumers.


## Scaling up configuration for ReportPortal API Service

### Kubernetes

To scale your ReportPortal services in Kubernetes, you need to adjust the `replicaCount` and `queues.totalNumber` in your `values.yaml` file.

1. **Update Replica Count**:
   Change `replicaCount` from `1` to `2` for additional replication.<br />
   [values.yaml replicaCount](https://github.com/reportportal/kubernetes/blob/master/reportportal/values.yaml#L91)

2. **Edit Total Number of Queues**:
   Modify `queues` from `10` to `20` to increase the total available queues.<br />
   [values.yaml queues](https://github.com/reportportal/kubernetes/blob/master/reportportal/values.yaml#L159)

### Docker

To scale your ReportPortal services using Docker, update the environment variables and duplicate the API values block.

- **Set Environment Variables**:
   Add `RP_AMQP_QUEUES` and `RP_AMQP_QUEUESPERPOD` to your API environment variables.<br />
   [docker-compose.yml environment](https://github.com/reportportal/reportportal/blob/v23.2/docker-compose.yml#L202)<br />
   ```bash
   version: '3.8'
   services:
   
     api:
       <...>
       environment:
         REPORTING_QUEUES_COUNT: 10
   <...>
   ```

#### Docker Compose v2
- **Duplicate API Values Block**:
   Create a copy of the API values block and rename `api` to `api_replica_1` to facilitate scaling.<br />
   [docker-compose.yml API values block](https://github.com/reportportal/reportportal/blob/v23.2/docker-compose.yml#L191-L241)<br />
    ```bash
   version: '3.8'
   services:
   
     api:
       <...>
       environment:
         REPORTING_QUEUES_COUNT: 10
      <...>

    api_replica_1:
       <...>
       environment:
         REPORTING_QUEUES_COUNT: 10
    <...>
   ```
    
#### Docker Compose v3.3+
- **Add replicas**:
   Add `deploy.replicas: 2` to your API:
   ```bash
   version: '3.8'
   services:
   
     api:
       <...>
       deploy:
         replicas: 2
   <...>
   ```
