# Asynchronous reporting

1. [Overview](#overview)
1. [Simple scheme of interactions between RabbitMq and API](#simple-sccheme-of-interactions-between-rabbitmq-and-api)
1. [Enable asynchronous reporting in agents](#enable-asynchronous-reporting-in-agents)
1. [Asynchronous API](#asynchronous-api)
1. [Detailed scheme of interactions between RabbitMq and API](#detailed-scheme-of-interactions-between-rabbitmq-and-api)
---

### Overview

Asynchronous reporting implemented using [AMQP 0-9-1](https://www.rabbitmq.com/tutorials/amqp-concepts.html) protocol based on [RabbitMq](https://www.rabbitmq.com) message broker.
The main idea of async reporting is to give response back immediately after server receiving request from client.
So using that approach client is not blocked and don't wait until server process request.

### Simple scheme of interactions between RabbitMq and API

* Step 1  
`API` receives HTTP request from `client`. `Controller` checks permissions and throws request to `producer`
* Step 2  
`Producer` validates business rules if necessary, composes message for rabbit and sends it to specified queue.
After that `controller` returns HTTP response to `client`.
* Step 3  
`Consumer` starts processing the message as soon as it received from `RabbitMq`. In case exception occurs it logged.

![](/src/Images/devguide/async/simple-scheme.png)

### Enable asynchronous reporting in agents

Async reporting is supported only in agents since version 5.0.0.
To enable it you should set `rp.reporting.async=true` in `reportportal.properties`.
By default (if property `rp.reporting.async` is not specified) agents work in synchronous mode.

```properties
rp.endpoint=https://example.com
rp.api.key=xxx
rp.launch=launch-name
rp.project=project-name
rp.reporting.async=true
```

### Asynchronous API

Async controllers has `/api/v2` prefix.Requests and responses have no differences with sync ones but there are some differences in behavior that described in [reporting guide](./reporting.md)

* [Start launch](./reporting.md#start-launch)
* [Start root(suite) item](./reporting.md#start-rootsuite-item)
* [Start child(container) item](./reporting.md#start-childcontainer-item)
* [Start child(step) item](./reporting.md#start-childstep-item)
* [Finish child item](./reporting.md#finish-child-item)
* [Finish parent(container) item](./reporting.md#finish-parentcontainer-item)
* [Save single log without attachment](./reporting.md#save-single-log-without-attachment)
* [Batch save logs](./reporting.md#batch-save-logs)
* [Save launch log](./reporting.md#save-launch-log)
* [Finish root(suite) item](./reporting.md#finish-rootsuite-item)
* [Finish launch](./reporting.md#finish-launch)

### Detailed scheme of interactions between RabbitMq and API

#### API properties

`API` has the following properties for connection to RabbitMq service:

| Name                 | Environment variable name | Description                                                                                                                                                                                                                     | Default value                          |
|----------------------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| rp.amqp.host         | RP_AMQP_HOST              | Hostname of RabbitMq service                                                                                                                                                                                                    | rabbitmq                               |
| rp.amqp.port         | RP_AMQP_PORT              | Port of RabbitMq service                                                                                                                                                                                                        | 5672                                   |
| rp.amqp.user         | RP_AMQP_USER              | Username to connect to RabbitMq service                                                                                                                                                                                         | rabbitmq                               |
| rp.amqp.pass         | RP_AMQP_PASS              | User password to connect to RabbitMq service                                                                                                                                                                                    | rabbitmq                               |
| rp.amqp.addresses    | RP_AMQP_ADDRESSES         | Full address to connect to RabbitMq service                                                                                                                                                                                     | amqp://rabbitmq:rabbitmq@rabbitmq:5672 |
| rp.amqp.queues       | RP_AMQP_QUEUES            | Number of queues to be processed by this service-api                                                                                                                                                                            | 10                                     |
| rp.amqp.queuesPerPod |                           | Cluster configuration parameter. Number of queues to be processed by this service-api pod (default effectively infinite). Note: should correlate with number QUEUE_AMOUNT & number of service-api pods being started in cluster | 10                                     |

#### Exchanges and queues for reporting
