---
tags:
  - HackTheBox
  - Network-Foundations
---
[[Network Foundations Contents]]
[Previous Section](Internet%20Architecture.md)
A **wireless network** is a sophisticated communication system that employs radio waves or other wireless signals to connect various devices such as computers, smartphones, and IoT devices, enabling them to communication and exchange data without the need for physical cables.

This technology enables devices to connect to the Internet, share files, and access services seamlessly over the air, offering flexibility and convenience in personal and professional environments.

|**Advantages**|**Description**|
|---|---|
|`Mobility`|Users can move around freely within the coverage area.|
|`Ease of installation`|No need for extensive cabling.|
|`Scalability`|Adding new devices is simpler than a wired network.|

| **Disadvantages**   | **Description**                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| `Interference`      | Wireless signals can be disrupted by walls, other electronics, or atmospheric conditions.        |
| `Security risks`    | Without proper security measures, wireless transmissions can be easier to intercept.             |
| `Speed limitations` | Generally, wireless connections are slower compared to wired connections of the same generation. |

---
# Wireless Router
A **router** is a device that forwards data packets between computer networks. In a home or small office setting, a **wireless router** combines the functions of:

|**Function**|**Description**|
|---|---|
|`Routing`|Directing data to the correct destination (within your network or on the internet).|
|`Wireless Access Point`|Providing Wi-Fi coverage.|

For example, at home, our smartphones, laptops, and smart TVs all connect wirelessly to our router. The router is plugged into a modem that brings internet service from the ISP (Internet Service Provider). Below are the main components of a wireless router.

|**Component**|**Description**|
|---|---|
|`WAN (Wide Area Network) Port`|Connects to your internet source (e.g., a cable modem).|
|`LAN (Local Area Network) Ports`|For wired connections to local devices (e.g., desktop computer, printer).|
|`Antennae`|Transmit and receive wireless signals. (Some routers have internal antennae.)|
|`Processor & Memory`|Handle routing and network management tasks.|

---
# Mobile Hotspot
A **mobile hotspot** allows a smartphone (or other hotspot devices) to share its cellular data connection via Wi-Fi.

Other devices (laptops, tablets, etc) then connect to this hotspot just like they would to a regular Wi-Fi network. A mobile hotspot uses cellular data, connecting devices to the internet via a cellular network, such as 4G or 5G.

The range of a hotspot is usually limited to just a few meters. Running a hotspot can also significantly drain the battery of the device creating it.

For security, access to the hotspot is usually protected by a password, similar to the security measures employed for a home Wi-Fi network. 

To be able to better understand this concept, imagine travelling and not having access to public Wi-Fi. Needing Wi-Fi for another device like a laptop is a common problem, therefore enabling the phone's hotspot and connecting the laptop to it, provides the wanted internet access.

---
# Cell Tower
A **cell tower** (or **cell site**) is a structure where antennas and electronic communications equipment are placed to create a cellular network cell.

This **cell** in a cellular network refers to the speciffic coverage provided by a single cell tower, which is designed to seamlessly connect with adacent cells created by other towers. Each tower covers a certain geographical area, allowing mobile phones (and other cellular-enabled devices) to send and receive signals.

Cell towers function through a combination of radio transmitters and receivers, which are equipped with antennas used to communicate over specific radio frequencies.

These towers are managed by the BSC (Base Station Controllers), which oversee operation of multiple towers. BSCs handle the transfer of calls and data sessions from one tower to another when users move across different cells. 

Finally, when these towers are connected to the core network via backhaul links, which are typically fibre optic or microwave links.

Cells towers differentiate themselves by their coverage capabilities and are categorised primarily into **macro cells** and **micro/small cells**. 

**Macro Cells** consist of large towers that provide extensive coverage over several kilometres, making them ideal for rural areas where wide coverage is necessary. 

On the other hand, **Micro** and **Small Cells** are smaller installations typically located in urban centres. These towers are placed in densely populated areas and fill the coverage gaps left by **macro cells**.

To be able to better understand the concept of a cellular network, ponder the following example:
##### Example:
Imagine being on a road trip, streaming music on the phone. As the vehicle being travelled in moves, the phone switches from cell tower to the next to maintain connection. It is also one reason as to why trains can make cellular signal difficult.

---
# Frequencies in Wireless Communications
As previously mentioned in this section, wireless communications utilise radio waves to enable devices to connect and communicate with each other.

These radio waves are emitted at specific frequencies known as oscillation rates, which are measured in hertz (Hz).

Common frequencies bands for wireless networks include:

|**Frequency Bands**|
|---|
|`1.` **2.4 GHz (Gigahertz)** – Used by older Wi-Fi standards (802.11b/g/n). Better at penetrating walls, but can be more prone to interference (e.g., microwaves, Bluetooth).|
|`2.` **5 GHz** – Used by newer Wi-Fi standards (802.11a/n/ac/ax). Faster speeds, but shorter range.|
|`3.` **Cellular Bands** – For 4G (LTE) and 5G. These range from lower frequencies (700 MHz) to mid-range (2.6 GHz) and even higher frequencies for some 5G services (up to 28 GHz and beyond).|
Different frequencies play crucial roles in wireless communications due to their varying characteristics, and the trade-offs between range and speed.

Lower frequencies tend to travel farther but are limited in the amount of data they can carry, making them suitable for broader coverage with less data demand.

In contrast, higher frequencies, while capable of carrying more data, have a much shorter range. Additionally, frequency congestion from many devices using the same frequency can cause interference.

To prevent this, government agencies like the FCC regulate how frequencies can be used.

---
# Summarising
On a typical day, several forms of wireless technology. At home, the wireless router provides internet access via Wi-Fi at both 2.4 GHz and 5 GHz frequencies to devices like a phone or laptop.

When leaving home, a phone will automatically connect to the internet using the nearest cell tower over 4G or 5G networks, where available.

While travelling abroad, a phone's mobile hotspot can be used to share cellular data to a laptop.

Through these activities, three key wireless technologies are engaged:
- Wi-Fi for the local wireless access
- Cellular networks for wide-area coverage
- Mobile hotspot for personal data sharing

---
# Exercises

Q: What type of waves do wireless networks use to connect devices? (Format: two words)
A: Radio Waves

Q: What device combines the functions of routing and providing Wi-Fi coverage in a home network? (Format: two words)
A: Wireless Router

Q: What is used by a mobile hotspot to connect devices to the internet? (Format: two words)
A: Cellular Data

Q: What structure supports antennas and communications equipment to create cellular network coverage? (Format: two words)
A: Cell Tower

Q: What manages multiple cell towers in cellular networks? (Format: three words)
A: Base Station Controller

Q: Which frequency band is known for better wall penetration but more prone to interference?
A: 2.4 GHz

[Next Section](Network%20Security.md)