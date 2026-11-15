---
tags:
  - ULan
  - CO3404
  - Distributed-Systems
  - Archived
---
[[ULan]]
[[CO3404 All Lecture Slides.pdf]]

---
# Template (Specialised)
[[Demo Template]]

---
# Assignment
[[CO3404 Q&A Section]]
[[CO3404 Assignment Brief Notes]]
[[CO3404 Assignment]] 58

---
# Exam (1st Attempt was Resit) (05-08-2026)
Went well, despite so so so many diagram questions. I missed a single question which was about **elastic compute**, the way cloud computing can dynamically adjust resource usage.

Did not go as well as expected barely 30 marks.

>[!question] 30 / 100 Marks. 40%.

---
# Lectures
## Semester 1
[[CO3404 Lecture 1 - Introduction To Distributed Systems]] 
[[CO3404 Lecture 2 - Introduction Continued]] 
[[CO3404 Lecture 3 - REST & Intro to NodeJS]] 
[[CO3404 Lecture 4 - JavaScript Functions]] (Same Week)
[[CO3404 Lecture 5 - Promises, Middleware & Databases]] (Same Week)
[[CO3404 Lecture 6 - Adding a Database to the Stack]]
[[CO3404 Lecture 7 - Docker & Containerisation]]
[[CO3404 Lecture 8 - Docker Volumes & Database Container]]
[[CO3404 Lecture 9 - Asynchronous Messaging with RabbitMQ]]
[[CO3404 Lecture 10 - KONG API Gateway]]
## Semester 2
[[CO3404 Lecture 11 - Event-Driven Architecture RabbitMQ & Kafka]]
[[CO3404 Lecture 12 - Subnets & Baston Hosts]]
[[CO3404 Lecture 13 - Infrastructure as Code]]
[[CO3404 Lecture 14 - Security - TLS]]
[[CO3404 Lecture 15 - TLS Operation & Swagger]]
[[CO3404 Lecture 16 - Authentication and Authorisation]]
[[CO3404 Lecture 17 - (MongoDB) & (System Scaling & Resilience)]]
[[CO3404 Lecture 18 - Kubernetes]]
[[CO3404 Lecture 19 - Revision]]

---
# Labs
While formal labs are not provided, independent work is imperative for this module as work is provided weekly on blackboard.
- Theory is discussed in the first lecture.
- The theory is demonstrated in the demos lecture.
- Exercises or activities provided can be found at the end of the lecture notes.
## Demo Videos and Instructions
[[CO3404 - Demo 1]]
[[CO3404 - Demo 2]]
[[CO3404 - Demo 3]]
[[CO3404 - Demo 4]]

---
# Revision List Provided for Exam
- Cloud service models Scalability, resilience and high-availability ✔️
- Monolith (e.g. 3-tier) ✔️
- Distributed systems (e.g. microservices) pros and cons of each ✔️
- What is SQL injection and how you protect against it ✔️
- Security properties & operation of TLS. e.g., what crypto features does it employ to secure data in transit ✔️
- how does it do it API operation and documentation ✔️
- What is a Bastion host (jump-box) and what security benefits does it offer ✔️
- Benefits of using Terraform as opposed to other approaches to build infrastructure e.g. using the portal ✔️
- Pros and cons of event patterns ✔️ 
- Pros and cons of message patterns ✔️
- Benefits and use-case for Docker volumes and bind mounts ✔️
- Be able to explain a section of code from: Docker compose, dockerfile, Terraform, Kubernetes 
- Kubernetes architecture and components 
---
## Block 1 — System Architecture & Cloud Models
_Lectures 1, 2, 17_

- [x]  Monolith (3-tier) vs microservices: pros/cons, ease of deployment vs complexity, fault isolation
- [x]  Cloud service models: IaaS vs PaaS vs SaaS/DBaaS — one example of each
- [x]  Vertical vs horizontal scaling (on-prem and cloud), autoscaling (scale sets / auto scaling groups)
- [x]  Load balancers: why needed, distribution algorithms (e.g. round robin)
- [x]  Availability Zones, regions, VNets/subnets spanning AZs
- [x]  Difference between **high availability** and **resilience**
- [x]  Elastic compute: virtualisation, auto-scaling, load balancing, containerisation, orchestration
## Block 2 — Security & Networking
_Lectures 12, 14, 15, 16_

- [x]  SQL injection: how the attack works (mechanism), how parameterised queries/prepared statements stop it
- [x]  TLS: symmetric vs asymmetric crypto, certificates, handshake steps, what TLS actually secures (confidentiality, integrity, authentication)
- [x]  Bastion host / jump-box: what it is, why it reduces attack surface, typical placement in a subnet diagram
- [x]  (Check lecture 16 too — Authentication and Authorisation often pairs with this block)
## Block 3 — Containerisation & Orchestration
_Lectures 7, 8, 18_

- [x]  Docker volumes vs bind mounts: difference, use-case for each (e.g. persistent DB storage vs local dev file sharing)
- [x]  Be able to read and explain a `Dockerfile` line-by-line
- [x]  Be able to read and explain a `docker-compose.yml` section
- [ ]  Kubernetes architecture: control plane (API server, scheduler, etcd, controller manager) vs node components (kubelet, kube-proxy, container runtime)
- [x]  Be able to read and explain a Kubernetes manifest (pods, services, deployments)
## Block 4 — Infrastructure as Code
_Lecture 13_

- [x]  Terraform benefits vs manual portal provisioning: version control, repeatability, drift detection, faster rebuild after failure
- [x]  Be able to read and explain a `.tf` file section (resources, providers, variables)
## Block 5 — Messaging & Event-Driven Patterns
_Lectures 9, 11_

- [x]  Message pattern pros/cons: async decoupling, queueing (RabbitMQ)
- [x]  Message vs event — the core distinction (command/intent vs "a fact that happened")
- [x]  Event pattern pros/cons: pub/sub, event streams, eventual consistency (RabbitMQ & Kafka)
- [x]  Be ready to compare RabbitMQ vs Kafka use-cases if asked
## Block 6 — APIs & Documentation
_Lectures 3, 10, 15_

- [x]  REST API operation: verbs, statelessness, resources
- [x]  Swagger/OpenAPI: what it documents and why it matters for consumers
- [x]  KONG API Gateway — role/purpose (came up in lecture 10, worth a quick pass)
---
# Exam Revision 
[[CO3404 - Exam Revision 1 (03-07-2026) - 1, 2, 3]]
[[CO3404 - Exam Revision 2 (09-07-2026) 2, 3]]
[[CO3404 - Exam Revision 3 (18-07-2026) - System Architecture & Cloud Models]]
[[CO3404 - Exam Revision 4 (19-07-2026) - SQL Injection]]
[[CO3404 - Exam Revision 5 (20-07-2026) & (28-07-2026) - TLS]]
[[CO3404 - Exam Revision 6 (30-07-2026) - Baston Hosts & Authentication-Authorisation]]
[[CO3404 - Exam Revision 7 (01-07-2026) - Terraform]]
[[CO3404 - Exam Revision 8 (02-07-2026) - APIs & Documentation]]
[[CO3404 - Exam Revision 9 (03-07-2026) - Message Patterns]]
[[CO3404 - Exam Revision 10 (04-07-2026) - Event Patterns & Containersation]]
[[CO3404 - Exam Revision 11 (05-07-2026) - Questions]]
