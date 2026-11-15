---
tags:
  - HackTheBox
  - Network-Foundations
---
[[Network Foundations Contents]]
[Previous Section](Domain%20Name%20System%20(DNS)%20(Network%20Foundations).md)

**Internet Architecture** describes how data is organised, transmitted, and managed cross networks. Different types of architectural models serve different needs - some offer a straightforward client-server setup (like a website) while others rely on a more distributed approach (like file-sharing platforms).

Understanding these models helps us see why networks are designed and operating in the way they are. Different architectures solve different problems. Often combinations of architectures creating hybrid models. Each model comes with its own trade offs, in terms of the following:
- Scalability
- Performance
- Security
- Management

In the next few following paragraphs, different architectural models will be described in more detail.

---
# Peer-to-Peer (P2P) Architecture
In a **Peer-to-Peet (P2P)** network, each node, whether its a computer or any other device, acts as both a client and a server. 

This setup allows nodes to communicate directly with each other, sharing resources such as files, processing power, or bandwidth, without the need for a central server.

P2P networks can be fully decentralised, with no central server involved, or partially centralised, where a central server may coordinate some tasks but does not host data.

##### Example:
Imagine a group of friends who want to share vocation photos with each other. Instead of uploading them to a single website or server, each of them sets up a folder on their own computer, which can be accessed by the others.

They are all using a file-sharing program that connects their computers directly. Then they select then folder containing the photos to share to their other friends. Everyone performs the same setup on their computers, and once everyone is connected through the P2P application, they can all browse and download the files, allowing for direct exchange without the need for a central server.

A popular example of a Peer-To-Peer (P2P) network architecture is torrenting, as seen with applications like BitTorrent and QBitTorrent, which in this system anyone who has the file, is referred to as a `seeder`, can upload it to others allowing for others to download it from multiple sources simultaneously.
![[P2P-1.png]]
<sub>Example of a Peer-To-Peer (P2P)  Network.</sub>

In the following table below, the advantages and disadvantages of a Peer-To-Peer architecture:

|**Advantage**|**Description**|
|---|---|
|`Scalability`|Adding more nodes can increase total resources (storage, CPU, etc.).|
|`Resilience`|If one node goes offline, others can continue functioning.|
|`Cost distribution`|Resource burden, like bandwidth and storage, is distributed among peers, making it more cost-efficient.|

|**Disadvantage**|**Description**|
|---|---|
|`Management complexity`|Harder to control and manage updates/security policies across all nodes|
|`Potential reliability issues`|If too many peers leave, resources could be unavailable.|
|`Security challenges`|Each node is exposed to potential vulnerabilities.|

---
# Client-Server Architecture
The **Client-Server** model is one of the most wildly used architectures on the Internet. In this setup, clients which are user devices, send requests, such as web browser asking for a webpage, and servers respond to these requests, like a web server hosting the webpage.

This model typically involves centralised servers where data and applications reside, with multiple clients connecting to these servers to access services and resources.

Assuming a weather forecast is wanting to be checked on a website. The user would begin with opening the web browser on a phone or computer, and proceed to type in the website's name, e.g. `weatherexample.com` when the enter key is pressed the browser sends a request over the Internet, to the server that hosts weatherexample.com. The server is  set up to specifically store the website's data and handle requests, receives the query, and processes it by locating the requested page. It then sends the requested data back (regarding the weather) to the user's browser, which receives the information and displays the webpage, allowing the user to see the latest weather updates.
![[Client_Server_Arch-1.png]]
<sub>Example of the Client-Server Architecture</sub>

A key component in this architecture is the tier model which organises server roles and responsibilities into layers. Therefore, enhancing scalability, manageability, security and performance.

---
# Single-Tier Architecture
In a single tier architecture, the client, server, and database all reside on the same machine. This setup is straightforward but is rarely used in large-scale applications due to significant limitations in scalability and security.
![[Excalidraw/HTB/Network Foundations/HTB Networking Fundamentals One Tier Architecture Diagram]]
<sub>One Tier Architecture Diagram</sub>

---
# Two-Tier Architecture
The **two-tier** architecture splits the application environment into a client, and a server. 

Client handles the presentation layer, and the server manages the data layer. 

This model is typically seen in desktop applications where the user interface is on the user's machine and the database is on a server. Communication usually occurs directly between the client and the server, which can be a database server, with query-processing capabilities.

Note: In a typical web application, the client (browser) does not directly interact with the database server. Instead the browser requests web pages from a **web server** which in turn sends its response (HTML, CSS, JS) back to the browser for rendering. The web server then **may** interact with an application server or database to formulate it's response. Generally the scenario of a person visiting a website does not constitute a Two-Tier Architecture.
![[Excalidraw/HTB/Network Foundations/HTB Networking Fundamentals Two Tier Architecture Diagram]]
<sub>Two Tier Architecture Diagram</sub>

---
# Three-Tier Architecture
A **Three-Tier** architecture introduces an additional layer between the client and the database server, known as the application server.

In this model, the client manages the presentation layer, the application server handles all the business logic and processing, and the third tier is a database server.

This separation provides added flexibility and scalability because each layer can be developed and maintained independently.
![[Excalidraw/HTB/Network Foundations/HTB Networking Fundamentals Three Tier Architecture Diagram]]
<sub>Three Tier Architecture Diagram</sub>

---
# N-Tier Architecture
In more complex systems, an **N-Tier** architecture is used, where **N** refers to any number of separate tiers used beyond three. This setup involves multiple levels of application servers, each responsible for different aspects of business logic, processing, or data management.

N-tier architectures are highly scalable and allow for distributed deployment, making them ideal for web applications and services that demand robust, flexible solutions.

While tiered client-server architectures offer many improvements, they also introduce a lot more complexity in deployment and maintenance. each tier needs to be correctly configured and secured, and communication between tiers must be efficient and secure to avoid performance or bottlenecks and security vulnerabilities.

In the following table, the advantages and disadvantages of a Client-Server architecture in general:

| **Advantage**         | **Description**                                     |
| --------------------- | --------------------------------------------------- |
| `Centralized control` | Easier to manage and update.                        |
| `Security`            | Central security policies can be applied.           |
| `Performance`         | Dedicated servers can be optimized for their tasks. |

| **Disadvantage**            | **Description**                                                                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Single point of failure`   | If the central server goes down, clients lose access.                                                                                                   |
| `High Cost and Maintenance` | Setting up and sustaining a client-server architecture is expensive, requiring constant operation and expert management , making it costly to maintain. |
| `Network Congestion`        | High traffic on the network can lead to congestion, slowing down or even disrupting connections when too many clients access the server simultaneously. |
![[Excalidraw/HTB/Network Foundations/HTB Networking Fundamentals N Tier Architecture Diagram]]
<sub>N Tier Architecture Diagram</sub>

---
# Hybrid Architecture
A **Hybrid** model blends elements of **Client-Server** and **Peer-To-Peer (P2P)** architectures. 

In this setup, central servers are used to facilitate the coordination and authentication tasks, while the actual data transfer occurs directly between peers.

This combination leverages the strengths of both architectures to enhance efficiency and performance. The following example gives a high-level explanation of how a hybrid-architecture works:
##### Example:
When a video conferencing app is opened on its login page, the credentials (username and password) are verified by central servers, which also manage the session by tracking who is in the meeting and controlling access.

Once logged in and the meeting begins, the actual video and audio data is transferred directly between device and the other participants, bypassing the central server entirely, to reduce lag and enhance video quality.

This setup combines both models; using a central server for the initial connection and controlling tasks, while the bulk of the data transfer occurs in a **peer-to-peer** style, thus reducing the server load and leveraging direct, fast connections between peers.
![[Hybrid_Architecture-1.png]]
<sub>Hybrid Architecture</sub>

The following table refers to some of the advantages and disadvantages of Hybrid Architecture.

|**Advantage**|**Description**|
|---|---|
|`Efficiency`|Relieves workload from servers by letting peers share data.|
|`Control`|Central server can still manage user authentication, directory services, or indexing.|

|**Disadvantage**|**Description**|
|---|---|
|`Complex Implementation`|Requires more sophisticated design to handle both centralized and distributed components.|
|`Potential Single Point of Failure`|

---
# Cloud Architecture
**Cloud Architecture** refers to computing infrastructure that is hosted and managed by third-party providers. Such as AWS, Azure, and Google Cloud. This architecture operates on a virtualised scale which follows the client-server model. Providing on-demand access to resources, such as servers, storage, and applications, all accessible over the internet. This model allows users to interact with these services without controlling the underlying hardware.
![[Cloud_Arch-1.png]]
<sub>Cloud Architecture Diagram</sub>

Services like Google Drive, or Dropbox are some examples of Cloud Architecture operating under **SaaS** (Software as a Service) model, where applications are accessed over the internet without having to manage any of the underlying hardware.

Below are the five essential characteristics that define a Cloud Architecture:

|**Characteristic**|**Description**|
|---|---|
|`1. On-demand self-service`|Automatically set up and manage the services without human help.|
|`2. Broad network access`|Access services from any internet-connected device.|
|`3. Resource pooling`|Share and allocate service resources dynamically among multiple users.|
|`4. Rapid elasticity`|Quickly scale services up or down based on demand.|
|`5. Measured service`|Only pay for the resources you use, tracked with precision.|

The below table shows some of the advantages and disadvantages of the Cloud Architecture.

|**Advantage**|**Description**|
|---|---|
|`Scalability`|Easily add or remove computing resources as needed.|
|`Reduced cost & maintenance`|Hardware managed by the cloud provider.|
|`Flexibility`|Access services from anywhere with Internet connectivity.|

|**Disadvantage**|**Description**|
|---|---|
|`Vendor lock-in`|Migrating from one cloud provider to another can be complex.|
|`Security/Compliance`|Relying on a third party for data hosting can introduce concerns about data privacy.|
|`Connectivity`|Requires stable Internet access.|

---
# Software Defined Architecture (SDN)
**Software-Defined Networking (SDN)** is the modern networking approach that separates the control panel, which makes decisions about where traffic is sent, from the data plane, which actually forwards the traffic. 

Traditionally, network devices like routers, and switches housed both of these planes. However, in **SDN**, the control panel is centralised within a software-based controller. This configuration allows network devices to simply execute instructions they receive from the controller.

**SDN** provides a programmable network management environment, enabling administrators to dynamically adjust network policies and routing as required.

This separation makes the network more flexible and improves how its managed.
![[Software-Defined_Arch-1.png]]
<sub>Software-Defined Networking (SDN)</sub>

Large enterprises or cloud providers use SDN to dynamically allocate bandwidth and manage traffic flows according to real-time demands. 

Below is a table with the advantages and disadvantages of Software-Defined Architecture.

|**Advantage**|**Description**|
|---|---|
|`Centralized control`|Simplifies network management.|
|`Programmability & Automation`|Network configurations can be changed quickly through software instead of manually configuring each device.|
|`Scalability & Efficiency`|Can optimize traffic flows dynamically, leading to better resource utilization.|

|**Disadvantage**|**Description**|
|---|---|
|`Controller Vulnerability`|If the central controller goes down, the network might be adversely affected.|
|`Complex Implementation`|Requires new skill sets and specialized software/hardware.|

## Key Comparisons

Below is a comparison table that outlines key characteristics of different network architectures

|`Architecture`|`Centralized`|`Scalability`|`Ease of Management`|`Typical Use Cases`|
|---|---|---|---|---|
|`P2P`|Decentralized (or partial)|High (as peers grow)|Complex (no central control)|File-sharing, blockchain|
|`Client-Server`|Centralized|Moderate|Easier (server-based)|Websites, email services|
|`Hybrid`|Partially central|Higher than C-S|More complex management|Messaging apps, video conferencing|
|`Cloud`|Centralized in provider’s infra|High|Easier (outsourced)|Cloud storage, SaaS, PaaS|
|`SDN`|Centralized control plane|High (policy-driven)|Moderate (needs specialized tools)|Datacenters, large enterprises|

---
# Conclusion

In conclusion, each architecture has its own unique benefits and challenges and in practice, it is often seen that these models blended to balance performance, stability, and cost. Understanding these distinctions is important for anyone planning to set up or improve network systems.

---
# Exercises:
Q: What type of architecture allows nodes to act as both client and server?
A: Peer-To-Peer

Q: What architecture combines elements of both Client-Server and Peer-to-Peer models?
A: Hybrid

Q: Which cloud service model involves accessing applications over the internet without managing the underlying infrastructure?
A: SaaS

Q: In which architecture is the control plane separated from the data plane? (Format: two words, one of which is hyphenated)
A: Software-Defined Networking

Q: Which architecture is known for decentralized data sharing without a central server?
A: Peer-To-Peer

Q: What model is used by video conferencing apps to combine centralized coordination with peer-to-peer data transfer?
A: Hybrid

[Next Section](Wireless%20Networks.md)