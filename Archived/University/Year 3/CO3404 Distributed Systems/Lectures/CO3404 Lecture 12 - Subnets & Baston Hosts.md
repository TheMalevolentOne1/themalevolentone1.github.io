---
tags:
  - CO3404
  - Distributed-Systems
---
[[CO3404 Distributed Systems]]
[[CO3404 Lecture 11 - Event-Driven Architecture RabbitMQ & Kafka]]

---
# Lecture Documents
[[CO3404 Lecture 12.pdf]]
## Demos
[[CO3404 L12 - config.txt]] - Example SSH Config File.

---
# Event Driven Architecture Continued
The event is pushed onto the queue from a microservice to another Microsoft and then trigger all publisher and subscriber configuration to update all states.

Event-Carried State Transfer
- An event which carries a 'state' or data and is transferred.

Two types of events:
"Thick" or "Fat" event carries all data (state) used in ECST to update subscribers to the event and its state.
## Thick Benefits
- Lower latency as no additional API call to get data as its all in the event
- Asynchronous so provides loose coupling and hence more sillence to failure
- Producer does not need to scale as more consumers are added
## Thick Challenges
 - Likely not a practical solution when integrating to legacy without lots of nugatory legacy improvement.
 - All data is always sent even if not all subscribers want all the data so network and broker load can be increased 
 - Load on the broker has increased so that needs to be considered.

A lot of companies utilise legacy systems monolith systems due to being created historical.

Thin event only carries a small data package such as time of the event and some sort of ID to identify the event. The data payload is not sent with the event. This approach is used in the Event Notification pattern.
- Producer publishes an event indicating that something happened maybe also an ID and timestamp
- State i.e. the data, requires consumers to query the producer to obtain the data typically via an API call.
## Benefits of Thin events
- Less data transferred via the broker
- Consumer can ask for whatever data it needs from one or more APIs rather than take all of it
- Popular for legacy monolithic systems that don't support thick events but do have API functionality
## Challenges of Thin events
- Synchronous API Call adds tight coupling so reduces resilience
- Slower as an event is processed then the API is called
- APIs can suffer due to concurrent burst-type requests from subscribers requesting data on receipt of the event

> Both patterns are valid depending on use case. If consumers can tolerate synchronous dependence on the producer thin messages or synchronous calls may be preferable; whereas fat events are better suited to asynchronous decoupled integration where resilience and autonomy are prioritised e.g. distributed systems.
# Kafka
Popular open source event-based pub / sub streaming application
- Developed by LinkedIn to track user activity on its platform
- Its not been made open source as par of the Apache foundation and managed by Confluent
- Used by Netflix, Spotify, Uber, LinkedIn, Twitter and many other well-known enterprises
- Very popular in event-driven microservice architecture.
- As in RabbitMQ Kafka uses producer/consumer model and supports prod/cons and pub/sub message (event) pattern
- In principle it is very similar to RabbitMQ but is functionally different in that it uses persistent logs instead of queues

It captures and stores events:
- Events such as IoT sensor data, Web-site click stream, tack and monitor delivery vehicles etc are captured in real-time into a log i.e. append-only read-only storage so maintains sequence and can't be changed
- As in MQ there can be multiple producers and multiple consumers
- Anyone interested in the Payments topic would subscribe to that topic
- Events are stored however wanted i.e. text, xml, etc whatever as data is serialised like in MQ

Kafka is a distributed application
- Fault tolerant
- Horizontally Scalable
- Enables Parallel processing across multiple nodes
Kafka and Queue Key Differences
- A basic queue has one producer Kafka can have multiple producers as can MQ by using an exchange
- A basic queue has one consumer. The queued message is deleted once read. Kafka can have many subscribers (consumers in Kafka Speak) to the same topic because reading the data doesn't cause it be deleted (removed from the queue) as data is not deleted once read; Kafka events are persisted a bit like reading an array or file using a pointer for each consumer
- Kafka data rention can be set from minutes through to infinity by default 1 week or by storage size
- Unlike MQ which can be configured as a priority queue Kafka stores events / messages as an immutable append log - i.e. in the order in which they come in is maintained

- Events are not pushed by the broker as in RabbitMQ a consumer polls the partition - This sounds insufficient but...
  - A subscriber tries to fetch data. If there is none, it can deliberately block until there is data then it is returned
  - It can also request a return only when a specified number of events have landed
  - So we need to use JavaScript async calls or Java threads.

|     Feature      |                           Kafka                            |                                    RabbitMQ                                     |
| :--------------: | :--------------------------------------------------------: | :-----------------------------------------------------------------------------: |
|   Primary Role   |            Distributed event streaming platform            |                      Message broker for reliable messaging                      |
| Message Storage  | Persistent log (messages retained for a configurable time) |                          Transient - Messages deleted                           |
|     Ordering     |                Guaranteed. No priorisation                 | Guaranteeered but can config for priority queue - prod can set a priority level |
|      Replay      |        Supported (Consumers can re-read old events)        |                             Not supported after ack                             |
|   Throughpuit    |         Extremely high (millions of messages/sec)          |      Lower than Kafka optimised for reliability (uses ack for pub and sub)      |
| Consumer Scaling |   Consumer groups to partitions for parallel processing    |               Multiple queues or competing consumers on one queue               |
|     Protocol     |                                                            |                                                                                 |
|  Serialization   |                                                            |                                                                                 |
Messaging and Architectural Patterns
- Request-Response: Synchronous - Caller waits for a reply - tight coupling - not a formally a message pattern
  - Typically HTTP, REST, gRPC
- Point-to-Point asynchronous messaging - one message, one consumer - asynchronous message lives in queue - loose coupling
  - Typically RabbitMQ queue, Azure Service Bus Queue. AWS SQS
- Publish-Subscribe Messaging - Typically one message many subscribers - asynchronous - loose coupling - sbuscribers recieve indpendent message copies.
  - Typical Kafka topics, RabbitMQ fanout/topic exchanges

---
# Subnets & Bastion Host

---
[[CO3404 Lecture 13 - Infrastructure as Code]]