---
tags: 
  - HackTheBox 
  - Network-Foundations
---
[[Network Foundations Contents]]

In this introductory module, exploring the technology behind computer networking - also known as "networking" or "networks" - and why it is essential to life. This module mainly focuses primarily on **Local Area Networks (LANs)** and **Wide Area Networks (WANs)**.

Understanding how devices are able to communicate with one another, from inside homes across the globe, is fundamental knowledge for those looking to enter the field of cybersecurity. The interconnectedness of almost every device worldwide today is what sets the backdrop for the ever increasing demand for security professionals.

---
# What is a Network?
A **network** is a collection of interconnected devices that communicate to each other by sending and receiving data, and also sharing resources with each other. These individual endpoint devices are often referred to as **nodes**, include computers, smartphones, printers, and servers. However, **nodes** alone do not comprise an entire network. 

The table below shows some networking **key concepts**:

|**Concepts**|**Description**|
|---|---|
|`Nodes`|Individual devices connected to a network.|
|`Links`|Communication pathways that connect nodes (wired or wireless).|
|`Data Sharing`|The primary purpose of a network is to enable data exchange.|
A real-world example of this could be to think of a group of friends chatting in a room.

Each person represents a device (**node**), and their ability to talk and listen presents the **communication links**. The conversation itself is the **data** being shared.

---
# Why are Networks Important?
Networks, particularly since the invention of the Internet have radically transformed society and the world, enabling a multitude of possibilities that are now essential to daily life. Below are a few of benefits afforded to us by this incredibly technology.

| **Function**       | **Description**                                                             |
| ------------------ | --------------------------------------------------------------------------- |
| `Resource Sharing` | Multiple devices can share hardware (like printers) and software resources. |
| `Communication`    | Instant messaging, emails, and video calls rely on networks.                |
| `Data Access`      | Access files and databases from any connected device.                       |
| `Collaboration`    | Work together in real-time, even when miles apart.                          |

---
# Types of Networks

Networks vary in size and scope.

The two primary types are:
- Local Area Networks (LANs)
- Wider Area Networks (WANs)
## Local Area Network (LAN)

A Local Area Network (LAN) connects devices over a short distance, such as within a home, school, or small office building.

Here are some of the key characteristics:

| **Characteristic**   | **Description**                                                 |
| -------------------- | --------------------------------------------------------------- |
| `Geographical Scope` | Covers a small area.                                            |
| `Ownership`          | Typically owned and managed by a single person or organization. |
| `Speed`              | High data transfer rates.                                       |
| `Media`              | Uses wired (Ethernet cables) or wireless (Wi-Fi) connections.   |
The diagram below shows how a home's Wi-Fi network connects devices such as laptops, smartphones, and smart TVs, allowing them to share files, and access the internet.

![[Local-Area-Network-LAN.png]]
<sub>Example of Local Area Network (LAN)</sub>
## Wider Area Network (WAN)

A **Wide Area Network (WAN)** spans a large geographical area, connecting multiple LANs. 

Below are some of its key characteristics:

| **Characteristic**   | **Description**                                                                 |
| -------------------- | ------------------------------------------------------------------------------- |
| `Geographical Scope` | Covers cities, countries, or continents.                                        |
| `Ownership`          | Often a collective or distributed ownership (e.g., internet service providers). |
| `Speed`              | Slower data transfer rates compared to LANs due to long-distance data travel.   |
| `Media`              | Utilizes fiber optics, satellite links, and leased telecommunication lines.     |
The internet is the largest example of a **WAN**, connecting to millions of **LANs** globally.

![[Wider-Area-Network-WANs.png]]
<sub>Example of Wider Area Network (WAN)</sub>
## Comparing LAN and WAN

| Aspect        | LAN                           | WAN                                      |
| ------------- | ----------------------------- | ---------------------------------------- |
| `Size`        | Small, localized area         | Large, broad area                        |
| `Ownership`   | Single person or organization | Multiple organizations/service providers |
| `Speed`       | High                          | Lower compared to LAN                    |
| `Maintenance` | Easier and less expensive     | Complex and costly                       |
| `Example`     | Home or office network        | The Internet                             |
## How do LANs and WANs Work Together?
Local Area Networks (LANs) can connect to Wide Area Networks (WANs) to access broader networks, beyond their immediate scope. This connectivity allows for expanded communication and resource sharing on a much larger scale.

For instance, when accessing the internet, a home LAN connects to an **Internet Service Provider (ISP's)** WAN, which grants Internet Access to all devices within the home network.

An ISP is a company that provides individuals and organisations with access to the Internet. In this setup, a device called a modem (modulator-demodulator) plays a crucial role. 

The modem acts as a bridge between the home network and the ISP's infrastructure, converting digital signals from your router into a format suitable for transmission over various media like telephone lines, cable systems, and fiber optics. 

This connection transforms a simple local network into a gateway to the resources available online.

In a business setting, companies link multiple LANs via WANs to achieve unified communication and collaboration across various geographical locations. By connecting these LANs through a WAN, employees in various offices can share information, access centralised databases, and work together in real-time enhancing productivity within the organisation.

Consider the following scenario to illustrate how LANs and WANs work together. At home; devices such as:
- laptops
- phones
- tablets
Connect to our home router, forming a LAN. 

This router doesn't just manage local traffic; it also communicates with the ISP's WAN. Through this communication to the WAN, the home network gains the ability to access websites and online services hosted all over the world. 

This seamless integration between the LAN and WAN enables the user to reach global content and interact with services beyond the local network.

---
# Exercises:
Q: What is the term for a collection of interconnected devices that can communicate and share resources with each other?
A: `Network`

Q:  In network terminology, what is the term for individual devices connected to a network?
A: `Nodes`

Q: What is the largest Wide Area Network (WAN) that connects millions of Local Area Networks (LANs) globally?
A: `Internet`

Q: What is the acronym for a network that connects devices over a short distance, such as within a home, school, or small office building?
A: `LAN`

Q: In networking, what term describes the communication pathways (wired or wireless) that connect nodes?
A: `Links`

[Next Section](Network%20Concepts.md)