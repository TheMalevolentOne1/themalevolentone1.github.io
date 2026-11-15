---
tags:
  - CO3404
  - Distributed-Systems
---
[[CO3404 Distributed Systems]]
[[CO3404 Lecture 1 - Introduction To Distributed Systems]]

---
# Lecture Documents
[CO3404 Lecture 1.pdf](CO3404%20Lecture%201.pdf#page=18) (Sliders 18 - 30)
[[CO3404 L2 - Lab 2 - Intro To APIs.pdf]]
## Demos
[[CO3404 L2 - Lab 2 - jokes.json]]

[[CO3404 L2 - Lab 2 - firstAPI.zip]] - Basic Node App Server

[[CO3404 L2 - Lab 2 - minimalAPI.zip]] - Node App Sever with a couple of routes.

[[CO3404 L2 - Lab 2 - simpleAPI.zip]] - API with several routes, path parameters, query parameters, server response codes, GET, POST, and DELETE routes.

---
# Written Notes
![[CO3404 Lecture 2 - Note 1.png]]
![[CO3404 Lecture 2 - Note 2.png]]
![[CO3404 Lecture 2 - Note 3.png]]

---
# Distributed Systems
A **distributed system** appears to be a single system however it is made up of many much smaller systems which when used in combination appear to be one single complex one. 

There are various architectural patterns when designing and implementing distributed systems such as:
- Service-Oriented Architecture
>**Outdated**.

- Event-Driven Architecture
- Micro-Service Architecture
>Currently the **most popular** approach mixes the two architectures into *Microservice Event-Driven Architecture*.

>[!QUOTE]
> This is not a solution to all problems; each problem needs to consider the best architectural pattern which may well be a monolith or some other approach. This is something for solution and enterprise architects to ponder - engineers will design and implement the operational solution based on the architecture designed by the architects.

---
# Microservices
A microservice architecture aims to provide an agile response to continuous business change, rather than create a monolithic 3 tier architecture which may become complicated, the decompose the problem and break it down into subsystems, these systems becoming their own individual 3 tier services.

Similar to general software decomposition where functions and classes are identified, developed and tested in isolation before implementation into the complete application.
## Microservice Features
- Databases in microservices are not shared, each one has its own database which it manages.
- Loosely connected to other microservices through well-defined and document APIs. (which compile together onto a web-page)
- Large enough to provide a business process while being small enough to be easily deploy and maintainable daily or even hourly application updates.
- Agile in that the product pipeline is generally fully CI/CD.
- Can be scaled independently, if one area of the business requires a performance improvement.

> Microservices are a heterogeneous architecture (independent operating system, programming language, database, hardware technologies, etc depending on the requirements and processes of the microservice)
## Microservice Challenges
- Network requests through APIs introduce latency
- Data consistency is challenging due to the variety of databases
- Finding errors can be challenging as each team focuses on their own microservice
- Communications between microservices can become complex
- If the application does not require detection of frequent business change than microservices are probably not appropriate.

> It is a myth that microservices promote reusability, or that they are cheaper to build and operate.
### [Gartner](https://www.gartner.com/en/information-technology/glossary/microservice) Microservice Definition
>[!DEFINITION]
>A microservice is a service-oriented application component that is tightly scoped, strongly encapsulated, loosely coupled, independently deployable and independently scalable.

---
# Business Needs
- The primary purpose of any system is to **satisfy a business need**.
- Software solutions should be **designed and developed based on specific business requirements**, rather than adapting the business to fit pre-existing software.
- This ensures that technology **aligns with business goals** and effectively supports operational needs and strategic objectives.

---
# 2024 - 2025 Assignment Diagram
![[CO3404 2025-26 Assignment Diagram.png]]

---
[[CO3404 Lecture 3 - REST & Intro to NodeJS]]