# Asynchronous reporting

## Overview

### RabbitMq

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

### Detailed scheme of interactions between RabbitMq and API


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
