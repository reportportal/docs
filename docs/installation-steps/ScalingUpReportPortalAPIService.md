# Scaling Up the ReportPortal Service API

Due to the current implementation specifics [Asynchronous Reporting Scheme](/dev-guides/AsynchronousReporting#scheme), horizontal auto-scaling of the ReportPortal service API is not feasible. However, manual scaling is achievable. This limitation stems from the way RabbitMQ, in conjunction with the API, manages the number of queues on the RabbitMQ side.

Given that ReportPortal can receive a substantial volume of concurrent streams from different project spaces, a mechanism has been implemented. This mechanism determines the number of queues based on the hash of the launch object and distributes them across different queues to increase the likelihood of processing.

In simpler terms, this means that a launch that arrives later in time has the chance to be processed and recorded in the database from the queue, even while another launch from a different project with a large number of test cases has already entered the queue. Instead of a situation where the queue would only reach the last launch after processing the earlier, larger one, the API will handle different queues concurrently. This approach allows the later launch to be processed without undue delay.

## Scaling up configuration for ReportPortal API Service

### Kubernetes

To scale your ReportPortal services in Kubernetes, you need to adjust the `replicaCount` and `queues.totalNumber` in your `values.yaml` file.

1. **Update Replica Count**:
   Change `replicaCount` from `1` to `2` for additional replication.<br />
   [values.yaml replicaCount](https://github.com/reportportal/kubernetes/blob/develop/values.yaml#L57)

2. **Edit Total Number of Queues**:
   Modify `queues.totalNumber` from `10` to `20` to increase the total available queues.<br />
   [values.yaml queues.totalNumber](https://github.com/reportportal/kubernetes/blob/develop/values.yaml#L101)

   Use the following formula for calculation:<br />
   `perPodNumber = totalNumber / serviceapi.replicaCount`

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
         RP_AMQP_QUEUES: 20
         RP_AMQP_QUEUESPERPOD: 10
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
         RP_AMQP_QUEUES: 20
         RP_AMQP_QUEUESPERPOD: 10
      <...>

    api_replica_1:
       <...>
       environment:
         RP_AMQP_QUEUES: 20
         RP_AMQP_QUEUESPERPOD: 10
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
