---
tags:
  - CO3404
  - Distributed-Systems
---
[[CO3404 Distributed Systems]]
[[CO3404 Lecture 10 - KONG API Gateway]]

---
# Lecture Documents
[[CO3404 Lecture 11.pdf]]
## Demos
[[CO3404 L11 - Rabbit Pub Sub Events.zip]]

---
Assignment released. Due 13th March 2026.

Very popular in industry, considering those moving away from monolithic solutions. Micro-Services as a distributed system.
# Learning Objectives
- Benefits and limitations of:
## Inter-microservice messaging
Request-response pattern http is the simplest pattern and given no intermediary however not reliable due to tight coupling to destination and p2p asynchronous massage pattern typically implemented with a queue simple producer and simple consumer loose coupling.

public-subscriber pattern, Typically shown as one publisher and many subscribers but also supports many publishers if required. Often implemented using RabbitMQ in a topic configuration if we want subscribers to subscripte to specific topics the exahcvnge will filter on topic in a postcode all go to queue 1

Alternatively RabbiMQ can be configured with a fanout exchange.
## What is an Event
A significant change in state or orrurrence within a system that is capturred and communicated as a discrete message to notify other components.
- Represents state change e.g. OrderPlaced, PaymentProcessed, UserLoggedIn
- Immutable - An aevent is a statement of face - we don't change it
- Context - Data describes the change e..g orderID, userDetails, timestamp, etc
- Asynchronous - generally published to an event bus or broker (e.g. Kafka, RabbitMQ)

Messaging tends to act like a state machine i.e. a change in one-service may need to be know by others. E.g. for example services tend to have a master data store - often called System of Record (SoR) - simple source of truth

In a distributed system such as microservices other microservices may need access to SoR data.

---
[[CO3404 Lecture 12 - Subnets & Baston Hosts]]