---
tags:
  - CO3404
  - Revision
---
[[CO3404 Distributed Systems]]

---
# Q1
## a
>[!question]
>With the aid of a relevant *use-case and diagram*, explain why you may recommend. 
>
>The implementation of an API gateway for your microservice architecture. i.e., what problems does it solve and what benefits could it bring to your use-case solution? 
>
>Up to five marks are available for the diagram, simple use-case, and overview. The remainder are awarded for each of five key advantages or disadvantages, clearly explained, justified, and mapped to the use-case (**15 marks**)

```
        Customer
            |
            v
    +---------------+
    | API Gateway   |
    |    (Kong)     |
    +---------------+
       /    |     \
      v     v      v
 Product  Order  User
 Service Service Service
```

An API gateway acts as a single entry point.

Customer only communicates with gateway, therefore SPOF into the microservices, instead of communicating directly to service endpoints.

Eliminating the need for multiple IP addresses and ports. 
It acts as a reverse proxy forwarding requests to applications.
Rate limiting through the usage of kong plugins.

Authentication, authorisation and security in one place.
## b
>[!question]
>Provide five clearly explained and justified financial and/or operational drivers behind businesses moving their on-premises monolithic platforms to a distributed solution hosted in the cloud? (**10 Marks**)
### Financial Drivers
Reducing costs (Less staff needed to maintain infrastructure, no need to buy servers or pay data centres for backups) and cloud providers offer pay as you use pricing.
improving revenue (better performance for higher traffic handling),
### Operational
Making the system easier to run, scale, and maintain.

---
# Q2
## a
>[!question]
>Ideally, a microservice and its data should be independent. However, in reality, not all  services are fully decomposable with regard to data. With the aid of a diagram and  simple use-case, explain how an event driven architecture can be used to share data  between microservices without sharing a database. Marks are awarded for each key point discussed in the explanation of data flow between microservices (**10 Marks**)

Each microservice has it's own direct database avoiding direct database sharing, to remain loosely coupled and maintain service independence.

Events communicate system processes that have already occurred, and data is shared through the broker and not database queries.

The broker is in-between the producer, and consumer and sends events to interested consumers.

Services react asynchronously, the order service does not need to wait for the Payment service.

```
Customer

|
v

Order Placed (Event Created)

|
Event placed in broker queue.
v

Broker (Stores)
(RabbitMQ or Kafka)

|           | (Then distributes event)
v           v
Payment    Notification
Service    Service
(takes     (notifies of order
payment)   placed confirmation)

|              |
v              v
payment        notification
database       database

```
## b
>[!question]
>Compare and contrast the “shared message queue” pattern to the “publisher –  subscriber” pattern. With the aid of a diagram, provide a microservice-based use-case for each and an explanation of why you recommend the pattern for each use-  
case.  Three marks will be awarded for each clearly explained and justified key point mapped to the appropriate use-case. (**15 Marks**)

The shared message queue, can support many consumers, however each message is typically sent to only one service. This makes it suitable for tasks such as order fulfilment, where an order should only be processed once.

Whereas the publisher-subscriber method uses events. When a service publishes an event into the broker e.g. rabbitMQ it can use its fanout approach to multiple subscribers, delivering the same event. The Pub/Sub approach is loose coupling meaning that The Order Service does not need to know which services consume the event, allowing new subscribers such as Analytics Services to be added easily.

---
# Q3
Database servers need to be scaled as data volume and traffic increases.
## a 
>[!question]
>What challenges do you encounter when scaling a relational database such as  
>
>MySQL server? Provide one example of how you may attempt to deal with the challenges.  
>
>Two marks are awarded for each clearly explained and justified challenge and up to four marks for a practical suggestion to enable horizontal scaling. (**10 marks**)
## b
Removed wasn't in revision list.

---
# Q4
>[!question]
>With the aid of a diagram, explain the process of Web Single Sign-On using OpenID Connect “Authentication flow” grant type. 
>
>Marks will be awarded for the accuracy and detail of each of the key steps in the data flow so clearly indicate each key step on the diagram and reference each in your explanation.
## a
```
User
|
v
Attempts to enter Protected Page
|
v
Server checks session cookie
|
if user has no session
v
redirect to the IdP's authorisation endpoint.
|
v
Server requests Authentication and Authorisation Scope
|
v
IdP returns username/password login or a choice of Identity Provider
|
v
User logins in
|
Credientials are OK
v
returns authorisation code.
|
v
Authorisation code is exchanged for tokens
|
v
Access Token, ID Token (Profile) & OPtional Refresh Token
|
v
adds cookie with session return protected resource
|
if credentials failed
|
v
Login Failed.

```
## b
Explain Cross Origin Resource Sharing (CORS) and how your server code would  
deal with handling the cross-origin requests.

Your explanation should include, and marks will be distributed across:  
What is CORS and why do we need it?  
How can a browser determine if CORS is allowed?  
How does your Node.js server code allow CORS?  
How does your server code limit which resources are shareable?

An origin is the Protocol + Domain + Port
https://domain:port.com

The problem is that the API utilises a different origin i.e. `api.domain.com` however the same CORS rules apply in the same-origin policy that prevents malicious websites from making requests to another site to access sensitive data. e.g. access a user's bank account information by requesting the site that is available to them through their client. The browser determines whether CORS is permitted by checking the response headers such as `Access-Control-Allow-Origin` and `Access-Control-Allow-Methods`.

In Node.js, CORS can be enabled using middleware such as the `cors` package. The server can restrict access by specifying allowed origins, HTTP methods, headers, and routes, ensuring only trusted applications can access particular resources.

---
# Q6
## a
>[!question]
>You have been asked to design a highly available, and elastically scalable solution to a business problem. Propose a cloud-based solution architecture, draw it, and  
explain how it satisfies these high-level requirements. Note: the actual business  
problem is not relevant here, just assume it needs web servers to operate.  
>
>Marks will be allocated for a clear explanation of the key terms: highly available and elastically scalable which are clearly mapped to your high-level architectural diagram. 
>
>In this case assume roughly five marks for each of the two key terms and five marks for the diagram.  (**15 Marks**)  
## b 
>[!question] 
>With the aid of a diagram, explain the structure, benefits, and key differences between a virtual machine and a container giving an example of where you may use one over the other  
>
>Marks will be apportioned roughly: up to two marks for each well explained and justified key point and up to three marks for an appropriate and well annotated diagram.  (**10 Marks**)

Virtual machines are full OS with their own hypervisor layer, whereas Containers utilise the hypervisor layer already available to the operating system. VMs bloated for single applications, as it includes many OS tools, and software that a web application won't ever need or use. Containers are useful in testing an application, as it won't affect anything else due to the Docker network's isolation.

---
[[CO3404 Distributed Systems]]