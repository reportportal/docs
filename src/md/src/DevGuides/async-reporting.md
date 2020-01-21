# Asynchronous reporting

## Overview

### RabbitMq

Asynchronous reporting implemented using [AMQP 0-9-1](https://www.rabbitmq.com/tutorials/amqp-concepts.html) protocol based on [RabbitMq](https://www.rabbitmq.com) message broker.
The main idea of async reporting is to give response back immediately after server receiving request from client.
So using that approach client is not blocked and don't wait until server process request.

### Simple scheme of interactions between RabbitMq and API

![](/src/Images/devguide/async/simple-scheme.png)
