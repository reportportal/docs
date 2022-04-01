# Asynchronous reporting

1. [Overview](#overview)
1. [Simple scheme of interactions between RabbitMq and API](#simple-scheme-of-interactions-between-rabbitmq-and-api)
1. [Enable asynchronous reporting in agents](#enable-asynchronous-reporting-in-agents)
1. [Asynchronous API](#asynchronous-api)
1. [Detailed scheme of interactions between RabbitMq and API](#detailed-scheme-of-interactions-between-rabbitmq-and-api)
    1. [API properties](#api-properties)
    1. [Exchanges and queues for reporting](#exchanges-and-queues-for-reporting)
    1. [Scheme](#scheme)
    1. [Finishing launch](#finishing-launch)
---

### Overview

Asynchronous reporting implemented using [AMQP 0-9-1](https://www.rabbitmq.com/tutorials/amqp-concepts.html) protocol based on 
[RabbitMq](https://www.rabbitmq.com) message broker.
The main idea of the async reporting is to give a response back immediately after a server that is receiving a request from a client.
So, using this approach, a client is not blocked and doesn't wait until a server processes the request.

### Simple scheme of interactions between RabbitMq and API

***Difference between ID and UUID***  

`ID` is a physical identificator of an entity generated automatically by a database at the moment of saving.  
`UUID` is a virtual identificator of the entity. Can be specified in a request or, if not present, in a request generated automatically at the moment the 
`api` accepts the request.  
Each entity has both `ID` and `UUID`. `ID` is used to perform the CRUD operations with an entity that is ***already saved in db***. 
`UUID` is used to build the child-parent relationships between entities at the client side during reporting. 
In case of synchronous reporting, any response from `api` is returned ***after*** handling of the request and saving the entity in a database. 
In case of asynchronous reporting, any response from `api` is returned ***before*** handling of the request and saving the entity in a database.
The responses in both modes look the same:
```json
{
  "id": "cd64d5eb-fea1-4e7e-8a5a-69998ac5620f"
}
```
`id` property of the response is actually an `UUID`. This is due to backward compatibility. 
So when you have this uuid and want to update, delete etc. entity you should get a physical `id` from the db first. 

***Simple asynchronous reporting scheme***  


* **Step 1**  
`API` receives HTTP request from `client`. `Controller` checks permissions and throws the request to `producer`.
* **Step 2**  
`Producer` validates business rules if necessary, generates UUID (virtual id) for an entity and returns it back to the `controller`, 
composes a message for `RabbitMq` and sends it to the specified queue.
After that, a `controller` returns HTTP response to the `client` that contains UUID. **At the moment, the physical entity may not be created yet!**
* **Step 3**  
`Consumer` starts processing the message as soon as it is received from `RabbitMq`. 
After a successful processing, the entity will be stored in a database and obtain a physical id. 
In case of an exception, it is logged and the entity is not saved.

![](/src/Images/devguide/async/simple-scheme.png)

### Enable asynchronous reporting in agents

Async reporting is supported only by agents since version 5.0.0.
To enable it you should set `rp.reporting.async=true` in `reportportal.properties`.
By default (if property `rp.reporting.async` is not specified) agents work in a synchronous mode.

```properties
rp.endpoint=https://example.com
rp.api.key=xxx
rp.launch=launch-name
rp.project=project-name
rp.reporting.async=true
```

(*) Listed above is an example for Java-based client. For another platforms please see corresponding documentation.

### Asynchronous API

Async controllers have `/api/v2` prefix.
Requests and responses have no differences with sync ones but there are some specific distinctions in the behavior that is described in 
[reporting guide](./reporting.md).

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

| Name                 | Environment variable name | Default value                          |
|----------------------|---------------------------|----------------------------------------|
| rp.amqp.host         | RP_AMQP_HOST              | rabbitmq                               |
| rp.amqp.port         | RP_AMQP_PORT              | 5672                                   |
| rp.amqp.user         | RP_AMQP_USER              | rabbitmq                               |
| rp.amqp.pass         | RP_AMQP_PASS              | rabbitmq                               |
| rp.amqp.addresses    | RP_AMQP_ADDRESSES         | amqp://rabbitmq:rabbitmq@rabbitmq:5672 |
| rp.amqp.queues       | RP_AMQP_QUEUES            | 10                                     |
| rp.amqp.queuesPerPod |                           | 10                                     |

`rp.amqp.host` - Hostname of RabbitMq service.  
`rp.amqp.port` - Port of RabbitMq service.  
`rp.amqp.user` - Username to connect to RabbitMq service.  
`rp.amqp.pass` - User password to connect to RabbitMq service.  
`rp.amqp.addresses` - Full address to connect to RabbitMq service.  
`rp.amqp.queues` - Number of queues to be processed by this service-api.  
`rp.amqp.queuesPerPod` - Cluster configuration parameter. Number of queues to be processed by this service-api pod 
(default effectively infinite).
Note: should correlate with number QUEUE_AMOUNT & number of service-api pods being started in cluster.

#### Exchanges and queues for reporting

`API` produces two reporting exchanges - `reporting` and `reporting.retry`. Exchange `reporting` contains queues for storing messages 
from the requests. Exchange `reporting.retry` contains queues for storing messages that were consumed exceptionally from the queues in `reporting` 
exchange. The amount of the queues in the exchanges depends on `rp.amqp.queues` parameter. Exchange `reporting` has `N` queues with names 
`reporting.0 ... reporting.N`. Exchange `reporting.retry` has `N+1` queues with the names `reporting.retry.0 ... reporting.retry.N` and `reporting.dlq`.
In case message from `reporting.retry` was consumed with exception more than 10 times, the message will be stored in reporting.dlq which is 
[dead letter queue](https://www.rabbitmq.com/dlx.html).

![](/src/Images/devguide/async/exchanges-queues.png)

#### Scheme

All requests (items, logs) related to the same launch will be stored in the same RabbitMQ queue. 
It is achieved using the following algorithm that maps launch uuid to a queue key:
![](/src/Images/devguide/async/uuid-queus-mapping.png)

Messages in the queue don't have a strict order but they are stored mostly in the same order as they arrive from `client`. 
This ensures a minimal amount of exceptions (causing the sending of such messages to the retry queue) caused by cases when a child is handled before its own parent. 

Consuming scheme:

![](/src/Images/devguide/async/consuming.png)

`(!)` Possible exceptions that may be thrown and lead to sending the message to the retry queue:
* On start launch/test item:
    * User not found.
    * Entity not found. Parent entity not found.
    * Bad request. Start time of the child item is earlier than the parent start time, trying to report a child child under a retry item, trying 
    to report a non-nested step under a nested step parent, trying to rerun a launch that does not exist.
* On finish launch/test item:
    * Entity not found. Entity that has to be finished not found in database or parent entity not found (for test items).
    * Bad request. User tries to finish already finished entity. Finish time is earlier than start time.
    * Access denied. User tries to finish not own entity of under not own project
* On log creation:
    * Entity not found. Trying to create log for not existing launch/test item

#### Finishing launch

If the order is not broken, launch finish request will be handled when there are no more child item requests in the queue.

![](/src/Images/devguide/async/finish-launch.png)

`(!)` It is a main difference in reporting mechanism between Report Portal version 4 and 5. 
In case the launch finish request is not last in the queue it will be finished anyway. 
But all the next requests under the launch will be handled as soon as they get to the consumer and the launch statistics will be updated. 
So it is possible to report items under already finished launch.


