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

![](src/Images/devguide/async/simple-scheme.png)