---
tags:
  - Hacker-HackTheSystem-TheEthicalPythonHackingGuide
---
[[Hacker - Hack The System - The Ethical Python Hacking Guide - Study Contents]]

[[Hacker - Hack The System - The Ethical Python Hacking Guide.pdf]]

---
# Simple Code Snippets
[Simple Brute-Force Password Cracking](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20Brute-Force%20Password%20Cracking) | [Code Sample](Simple%20Brute-Force%20Password%20Cracker%20Program.md)
[Network Scanner](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20Network%20Scanner) | [Code Sample](Simple%20Network%20Scanner%20Program.md)
[Simple Vulnerability Feed Scraper](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md##%20Simple%20Vulnerability%20Feed%20Scraper) | [Code Sample](Simple%20Vulnerability%20Feed%20Scraper%20Program.md)
[Simple TCP Server (returns client message)](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20TCP%20Server%20(returns%20client%20message) | [Code Sample](Simple%20TCP%20Server%20Program.md)
[Simple Asynchronous TCP Echo Server](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20Asynchronous%20TCP%20Echo%20Server) | [Code Sample](Simple%20Asynchronous%20TCP%20Echo%20Server%20Program.md)
[Simple Packet Sniffer](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20Packet%20Sniffer) | [Code Sample](Simple%20Packet%20Sniffer%20Program.md)
[Simple TCP Server (returns welcome message)](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md##%20Simple%20TCP%20Server%20\(returns%20welcome%20message) | [Code Sample](Simple%20TCP%20Server%20(Returns%20Welcome%20Message)%20Program.md)
[Simple TCP Client](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20TCP%20Client) | [Code Sample](Simple%20TCP%20Client%20Program.md)
[Simple UDP Server](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20UDP%20Server}) | [Code Sample](Simple%20UDP%20Server%20Program.md)
[Simple UDP Client](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20UDP%20Client}) | [Code Sample](Simple%20UDP%20Client%20Program.md)
[Simple WHOIS Querier](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20WHOIS%20Querier) | 
[Simple Domain DNS Lookup](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20Domain%20DNS%20Lookup) | 
[Simple ICMP Ping Sweep](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20ICMP%20Ping%20Sweep) | 

---
# Chapter 1 - Python for Hackers
Python's syntax is intuitive clear and simple. Celebrated for its emphasis on readability and efficiency.

"Python's syntax is guided by the philosophy of simplicity and a deep aversion to unnecessary complexity."

Python uses indentation whitespace to "delineate functions, loops, and conditional blocks".

Variables are dynamically typed. Which means that it requires understanding of datatypes, or errors like invalid string to int conversion due to a lack of casting.

```python
num = 1
print("The Number is: " + num) # Type Error
```

Some of Python's built-in datatypes include: lists, tuples, and dictionaries.

```python
def greet(name):
	return "Hello, " + name + "!"
```

Understanding how to define and invoke of functions can benefit cybersecurity, "where functions can encapsulate complex behaviours like encryption algorithms, network requests, or file manipulation"
## Comprehensions and Lambda Functions

```python
# List Comprehension#
sqaures = [x2 for x in range(10)]

# Lambda Functions
multiply = lambda x,y: x*y
```

These constructs demonstrate python's flexibility to perform sophisticated tasks with minimal code, providing a better ability to write more effective scripts and tools with less overhead, streamlining development of custom solutions.

Understanding the python syntax is the first step in handling it with a level of effectiveness to be able to craft scripts that "probe, protect, and penetrate with precision [&] artistry."
## Installing Python and Essential Libraries

|    Package    |                                       Purpose                                       | Pip Installation Commands |
| :-----------: | :---------------------------------------------------------------------------------: | ------------------------- |
|     Scapy     |                           Packet Crafting & Manipulation                            | pip install scapy         |
| BeautifulSoup |                                    Web Scraping                                     | pip install bs4           |
|   Selenium    |                                    Web Scraping                                     | pip install selenium      |
| Cryptography  |                           Encrypting and Decrypting Data                            | pip install crytrography  |
|  VirtualEnv   |                         Create isolated python environments                         | pip install virtualenv    |
|    Bandit     |                                Common Security Flaws                                | pip install bandit        |
|     Black     | Code adheres to style guidelines and automation of code reviews and security audits | pip install black         |
|    Asyncio    |                       Asynchronous (Async/Await) Programming                        | pip install asyncio       |
|     WhoIs     |                      Queries WHOIS databases for a domain name                      | pip install python-whois  |
|   DNSPython   |                        Query DNS databases for a domain name                        | pip install dnspython     |
|  PythonPing   |                          Python Ping (ICMP Packet) Library                          | pip install pythonping    |
|   Requests    |                                 Python HTTP Library                                 | pip install requests      |

---
# Basic Python Scripts for Hacking
## Crack Passwords using Dictionary Attack
Automating the process of password cracking using the python libraries; 'hashlib' for hash functions and 'itertools' for complex iterations.

Brute-forcing passwords in hash formats. 

"The ethical hacker's ethos dictates that such tools are wielded with consent, to demonstrate system vulnerabilities and enforce stronger security measures."
### Simple Brute-Force Password Cracking
```python
import hashlib as hl  
  
def try_passwords(pass_hash, pass_wordlist):  
    with open(pass_wordlist, 'r', encoding='latin-1') as f: # RockYou.txt uses latin-1 encoding type.  
        for passw in f.readlines():  
            hashed_pw = hl.sha256(passw.strip().encode()).hexdigest()  
            if hashed_pw == pass_hash:  
                return passw.strip()  
    return "Password Not Found!"  
  
hash_to_crack = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8' # Password is password  
dictionary_path = 'rockyou.txt'  
  
# Example Usage  
cracked_password = try_passwords(hash_to_crack, dictionary_path)  
print(f"Cracked Pass: {cracked_password}")
```
"Script represents a simple yet potent tool" which emphasises the need for strong passwords.
[Code Sample](Simple%20Brute-Force%20Password%20Cracker%20Program.md)
## Network Scanner
The following code snippet as laid out in the book "outlines a basic network scanner that checks for active devices on a local network by attempting to establish a TCP connection a specific port" which as presented in the example below is 80 the http port.
### Simple Network Scanner
```python
import socket  
  
def scan_host(ip, port, timeout):  
    try:  
        socket.setdefaulttimeout(timeout)  
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  
        result = s.connect_ex((ip, port))  
        if result == 0:  
            return True  
        else:  
            return False  
    except Exception as e:  
        return False  
  
# Example Usage  
active_hosts = []  
  
# checks if port 80 is open with 0.5 secs timeout  
for i in range(1,255):  
    ip = f'192.168.1.{i}'  
    if scan_host(ip, 80, 0.5):  
        active_hosts.append(ip)  
  
print(f'Active Hosts: {active_hosts}')
```
[Code Sample](Simple%20Network%20Scanner%20Program.md)

This script lays the basic groundwork for a more sophisticated network analysis tool, including those used for port scanning vulnerability scanning, and network mapping.

In the example, the lines:
```python 
import socket

socket.socket(socket.AF_INET, socket.SOCK_STREAM)
```
- AF_INET stands for the **Address Family** the **INET** clarifies **IPv4** for sockets
- SOCKET_STREAM sets up a **TCP connection**.
## Web Scraping for Vulnerability Feeds
A simple web scraper could target a vulnerability feed such as the National Vulnerability Database (NVB) to fetch and display recent vulnerability entries, utilising python packages like BeautifulSoup.
### Simple Vulnerability Feed Scraper
```python
import requests  
from bs4 import BeautifulSoup  
  
def fetch_vulnerabilities(url):  
    response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})  
    if response.status_code != 200: print(f"error. {response.status_code}")  
    soup = BeautifulSoup(response.text, 'html.parser')  
    vulnerabilities = soup.find_all('ul', id='latestVulns')  
    return [vuln.text.strip() for vuln in vulnerabilities]  
  
  
# Example Usage  
vulnerability_feed = fetch_vulnerabilities('https://nvd.nist.gov/')  
print(*[vuln.strip() for vuln in vulnerability_feed], sep='\n')
```
[Code Sample](Simple%20Vulnerability%20Feed%20Scraper%20Program.md)

Note: * unpacks the vulnerability_feed list.

"This script illuminates how python can serve as a [tool] for real-time cybersecurity intelligence, enabling rapid response" to emerging threats through a high-level of awareness.

"These basic scripts spanning password cracking, network scanning, and vulnerability tracking" as such they embody as the cyber principles of exploration and defence, serving as the foundational tools for the ethical hacker.

---
# Network Programming with Python
Network programming in Python lies with the socket library, which contains and providers to programmers "a rich set of methods and properties" to create sockets and allow scripts to "connect, listen, and communicate over the network."

"The socket API is a gateway to building networked applications, offering the capacity to implement client and server architectures, both in IPv4 and IPv6 networks."
### Simple TCP Server (returns client message)
The example below outlines a TCP server able to accept connections from clients.
```python
import socket  
  
def start_server(host, port):  
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:  
       s.bind((host,port))  
       s.listen()  
       print(f"Server listening on {host}:{port}")  
       conn, addr = s.accept()  
       with conn:  
          print(f"Connected by {addr}")  
          while True:  
             data = conn.recv(1024)  
             if not data:  
                break  
             conn.sendall(data)  
  
# Example Usage  
start_server('localhost', 65432)
```
[Code Sample](Simple%20TCP%20Server%20Program.md)

"This script encapsulates the essence of socket programming, illustrating how a server listens for incoming connections and echoes received messages back to the client."
## Asynchronous Network Programming
An application will grow in complexity, as such it needs to handle multiple connections simultaneously becomes critical. Python's asyncio library provides the framework for writing asynchronous network applications.

Developers can write concurrent code using the async / await syntax. 

The below example demonstrates an asynchronous TCP echo server using asyncio.
### Simple Asynchronous TCP Echo Server
```python
import socket  
  
def start_tcp_server(host, port):  
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:  
        s.bind((host,port))  
        s.listen(5)
        print(f"TCP Server listening on {host}:{port}")  
        while True:  
            client_socket, addr = s.accept()  
            print(f"Connection from {addr} has been established.")  
            client_socket.sendall(bytes("Welcome to the TCP Server!","utf-8"))  
            client_socket.close()  
  
  
# Example Usage  
start_tcp_server('localhost', 25)
```
[Code Sample](Simple%20Asynchronous%20TCP%20Echo%20Server%20Program.md)
## Building Robust Network Tools with Scapy
Beyond socket programming and asynchronous network programming, Python has powerful network manipulation and analysis libraries. One library is called Scapy, which "stands out for its ability to construct, manipulate, and dissect network packets."

Network programmers, utilising Scapy can "craft sophisticated network analysis tools, from packet sniffers to network scanners". 

"Scapy transforms network programming into an interactive experience, enabling creation of complex network-related scripts."
### Simple Packet Sniffer
```python
from scapy.all import *  
from scapy.layers.inet import TCP, IP  
  
def packet_callback(packet, verbose=False):  
    if verbose: print(f"[Verbose] Captured Packet: {packet[IP].dst}:{packet[TCP].dport}]")  
    if packet[TCP].payload:  
        mail_packet = str(bytes(packet[TCP].payload))  
        print(mail_packet)  
        if "user" in mail_packet.lower() or "pass" in mail_packet.lower():  
            print(f"[+] Server: {packet[IP].dst}")  
            print(f"[+] {packet[TCP].payload}")  
    else:  
        print(f"[+] Server: {packet[IP].dst} has no payload!")  
  
# Example Usage  
sniff(iface="\\Device\\NPF_Loopback", filter="tcp port 25 or tcp port 110 or tcp port 143 or tcp port 8888", prn=packet_callback, store=0)
```
[Code Sample](Simple%20Packet%20Sniffer%20Program.md)

This script is an example that presents how Scapy can be used to monitor for "email credentials, transmitted in plaintext over the network, underscoring the potential for Python in crafting custom network and analysis tools."

Python provides a lot as covered above; from foundational socket programming, to concurrent programming with asyncio, and packet manipulation through Scapy.

---
# Socket Programming
A socket is described as an endpoint in which communication in an application can send and receive data. 

"It operates at the transport layer of the networking stack, facilitating the communication between applications running on different machines across a network. The Python socket [package] provides a comprehensive way for socket programming by encapsulating the complexity of the underlying network protocols into a set of straightforward set of high-level APIs."
## TCP vs UDP Sockets
The two primary types of sockets prevalently used in network communications:
- **TCP (Transport Control Protocol)** which are connection oriented, ensuring data is delivered in order and without duplication commonly used for applications where reliability (availability for users) is invaluable. 
- **UDP (User Datagram Protocol)** are connectionless, offering faster data transmission rates at the cost of potential data loss, suitable for applications where speed weighs the need for reliability. For instance, video streaming services like Netflix use UDP to minimise delays, ensuring smooth playback even if a few packets are dropped as a result.
## Crafting a TCP Client and Server
Python is varied in its functionality, below is one way in which Python can be used in streamlining the process for the developer to create a TCP Client and Server. 

"The process of setting up a server, listening socket, waiting for client connections. Upon a successful connection, the server and client can exchange data, with the server processing received data and potentially sending a response."
### Simple TCP Server (returns welcome message)
```python
import socket  
  
def start_tcp_server(host, port):  
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:  
        s.bind((host,port))  
        s.listen(5)  
        print(f"TCP Server listening on {host}:{port}")  
        while True:  
            client_socket, addr = s.accept()  
            print(f"Connection from {addr} has been established.")  
            client_socket.sendall(bytes("Welcome to the TCP Server!","utf-8"))  
            client_socket.close()  
              
# Example Usage  
start_tcp_server('localhost', 25)
```
[Code Sample](Simple%20TCP%20Server%20(Returns%20Welcome%20Message)%20Program.md)
Simple TCP Client example in python, which receives the welcome message and terminates below
### Simple TCP Client
```python
import socket  
  
def tcp_client():  
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  
    client_socket.connect(('localhost',25))  
    welcome_message = client_socket.recv(1024)  
    print(welcome_message.decode("utf-8"))  
    client_socket.close()  
  
# Example Usage  
tcp_client()
```
[Code Sample](Simple%20TCP%20Client%20Program.md)
**Note:** HTTP is built on top of TCP, using its reliable, connection-oriented nature to ensure data is delivered accurately and in order, between the web clients and servers.
## Exploring UDP Communications
Applications which require a fast, non-guaranteed data delivery solution, such as online gaming, or video streaming. UDP is the protocol for the choice in these cases.

Implementing a UDP Client-Server setup in Python is more straightforward than TCP as it does not require establishing a connection.
### Simple UDP Server
```python
import socket  
  
def udp_server(host: str,port: int) -> None:  
    s_s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)  
    s_s.bind((host,port))  
    print(f"UDP is up and listening on {host}:{port}")  
  
    while True:  
       data, address = s_s.recvfrom(1024)  
       print(f"Message from Client: {data.decode("utf-8")}")  
       s_s.sendto(data, address)  
  
# Example Usage  
udp_server('127.0.0.1', 8888)
```
[Code Sample](Simple%20UDP%20Server%20Program.md)
In the example, the lines:
```python 
import socket

socket.socket(socket.AF_INET, socket.SOCK.DGRAM)
```
- SOCK.DGRAM sets up a **UDP connection**.
### Simple UDP Client
```python
import socket

def udp_client():
	client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
	message = b'Hello UDP Server'
	client_socket.sendto(message, ('localhost', 9998))
	data, server = client_socket.recvfrom(1024)
	print(f"Server: {data.decode('utf-8')}")
	client_socket.close()

# Example Usage
udp_client()
```
[Code Sample](Simple%20UDP%20Client%20Program.md)
## Mastering Socket Options and Advanced Techniques
"Beyond basic data transmission, Python's socket programming capabilities extend to more advanced techniques, such as setting socket options for fine-tuned control over socket behaviour, utilising non-blocking sockets with selectors for handling multiple connections simultaneously, and securing socket communication with SSL for encrypted data exchange."

---
# Working with TCP/UDP
## TCP Reliability Comes First
TCP can be equivalated to a library, every packet of data is accurately and in "the correct order" just like a library and its organised and labelled books. The TCP protocol "offers error checking, data retransmission in the case of loss, and sequential data delivery" which guarantees it as invaluable for applications "where data integrity is paramount." like a stock market tracker, where data processing and accuracy is integral.
## A Closer Look at TCP Programming
Considering the scenario of building a file transfer application, where data integrity is crucial. TCP is used by developers in this circumstance to ensure that files are transmitted without corruption and in their complete state. 

The process of setting up a TCP server, which listens for incoming connections, and a TCP client the purpose of which is to initiate file transfers. During the data exchange process the TCP stack manages, the control flow of data, to ensure the server can handle it without being overwhelmed, and the error checking retransmitting any lost segments.
## UDP: Speed Over Perfection
UDP in comparison operates on the "fire and forget" principle by sending packets without establishing a reliable connection, or ensuring they reached their final destination successfully. UDP benefits from "high-speed" and "low-overhead approach" which is perfect for voice chats (VoIP), or online gaming where delay matters more than occasional data loss.
## Exploring UDP Programming
The socket module is used in python to create a UDP-based application, to "send and receive packets without the need" for an established connection. This simplicity allows for quicker data transmission, although this is with the added responsibility on the developer to handle any concerns in regards to reliability on the application layer.

An example exploring UDP is an online multiplayer game, which may use UDP for player movement. In this context, it is acceptable if some updates are lost, or arrive out of order as the latest update is often the only one that matters. The game client sends these updates out rapidly and periodically, to inform the server of the player's position in the game world. Developers may implementation application-level acknowledgements, for critical actions, like in-game purchases or level completion to ensure reliability and security.
## Choosing Between TCP and UDP
When deciding whether to use TCP or UDP, the applications specific needs should be identified. TCP is the "go-to choice for applications where data integrity" is critical, some examples include email clients, web browsers, and file transfer applications. UDP is favoured for "real-time applications where speed is crucial and occasional data loss is acceptable."
## Best Practices for TCP/UDP Programming
The book recommends 4 best practices for TCP/UDP as follows:
- Error Handling - Implement robust error handling to manage timeouts, disconnections, and data corruption events
- Security - Consider using TLS/SSL with TCP to encrypt data and prevent eavesdropping like a man-in-the-middle (MiTM Attack). For UDP, the protocol DTLS provides similar security benefits.
- Efficiency - Use proper buffer sizes to optimise data transmission and avoid overwhelming the server and causing bottlenecks.
- Concurrency - Design the application to handle simultaneous connections efficiently, using threading or asynchronous programming through libraries like asyncio.

--- 
# Crafting Custom Networking Tools
The start of custom networking tool development often begins from unique challenges or gaps in existing systems. Whether it's a tool to streamline a data analysis pipeline, a specialised network scanner, "or [a tool] for automating routine tasks." these are challenges that utilising the python language can resolve.

Python's libraries like Scapy, Nmap, and others provide a strong foundation for crafting tools that can "probe networks, analyse traffic, simulate network activities, and more," the cross platform nature of these tools, due to consistent networking standards across the internet and its devices, ensures a stable and standardized approach to interact with the internet's diverse range of systems.
## Building Blocks of Custom Network Tools
1) Socket Programming - The network tool development cornerstone is socket programming which allows for the creation of a client and server that can communicate over TCP/UDP protocols in an application. 
2) Packet Crafting & Analysis - Python libraries like Scapy enable developers to create, and analyse network packets, which is a crucial when developing tools for "network testing, security analysis, and traffic simulation."
3) Network Scanning & Enumeration - Tools that can utilise Python's ability to interact with network protocols and can perform "port scanning, network mapping, and service detection, providing valuable insights into a network configuration and its vulnerabilities."
4) Automation - Python scripts can automate a wide range of network tasks, "from configuring network devices to parsing log files and alerting based on specific network events."
## Step-by-Step Guide to Simple Network Scanner
A basic network scanner is designed to identify active devices on a local network, this tool will utilise Python's socket library to send 'pings' (ICMP (Internet Control Message Protocol) packets) to a range of IP addresses and listen for responses.

The step-by-step process as outlined in the book:
1) Define the Target Range - Start by specifying the IP address range to scan, This could be inputted by the user, or hardcoded into the program for specific network segments.
2) Ping the Targets - Use the socket Python library to send ICMP echo requests to each address in the target range. This involves creating raw sockets and forming ICMP packets, which on some platforms may require administrator privileges.
3) Listen for Responses - Analyse the incoming packets for the ICMP echo replies. "An echo reply from an address indicates that the device at that address is active."
4) Report the Findings - "Collect the addresses that responded and present them in a readable format to identify the active devices."
## Considerations for Developing Networking Tools
There are aspects to consider when developing custom networking tools which are as follows:
- Performance - "Efficiently handling network IO (Input/Output) is crucial, by utilising asynchronous programming in Python to manage [simultaneous] connections and avoid blocking operations."
- Security - Being mindful of the legal and security implications of the tools created. "Implement appropriate security measures to prevent unauthorised or malicious use."
- Scalability - Design tools with scalability in mind. An important aspect is that the tool should be able to handle small networks and large networks with the same level of efficiency.
- User Experience - Functionality is paramount in the program, but the user's interface and experience with the tool should not be overlooked or understated as even the simplest of CLI tools benefit from clear and concise outputs with "easy-to-use" options/flags.

---
# Automating Reconnaissance Tasks
Reconnaissance (commonly known as 'recon') is the foundation for the groundwork in which any success within "any cybersecurity assessment or operation is built."

The process involves "meticulous examination of the target to gather valuable information such as domain details, network structure, and active devices, which can be exploited in subsequent phases. Automating these tasks not only enhances efficiency but also ensures comprehensive exploration of potential security loopholes."

Python has an extensive range of libraries and frameworks which can be utilised by the Ethical Hacker such as Requests for web interactions, Beautiful Soup for HTML parsing, and Scapy for packet interception and manipulation, which are "instrumental in automating various recon tasks."

Primary recon activity involves "collecting publicly accessible information about the target." A Python script using BeautifulSoup, can "automate the extraction of valuable data from web pages" regarding the target, that may contain sensitive information such as "contact information, metadata, and comments in the source that might reveal internal details or vulnerabilities. 

Another important aspect in reconnaissance is understanding the "target's domain registration details and DNS configurations," as this can provide insights into the target's digital infrastructure.

Network scanning is another fundamental and vital part of reconnaissance, as it is the process of identifying the active devices, their open ports , and what process is being run on that port on the target network. The Python socket library can be utilised to develop a network scanner that "automates the process of sending packets to a range of IP addresses and listening for responses" which identifies active devices, which could be "potential entry points into the network."

"Many online services offer APIs that can be leveraged for reconnaissance. Python scripts can automate calls to these APIs, gathering data from sources like social media, code repositories, and specialised databases" compiling to a comprehensive and detailed profile of the target.

It is important to continue to be aware as an Ethical hacker that while "automating reconnaissance tasks can significantly improve the efficiency of cybersecurity assessments" it is **essential** to remain within legal and ethical boundaries, as unauthorised network scanning "and data collection can have serious legal repercussions".

## Best Practices for Reconnaissance Automation
1) "Thoroughness - Automated scripts should cover a wide range of data points to ensure a comprehensive understanding of the target."
2) "Stealth - Reconnaissance activates should aim to be as unobtrusive as possible to avoid alerting the target."
3) "Accuracy - Ensure the accuracy of collected data, as subsequent phases rely heavily on the information gathered during recon."
4) "Adaptability - Recon scripts should be adaptive to different targets and scenarios, allowing for modular customisation."

"Automating reconnaissance tasks with Python not only streamlines the initial phase of cybersecurity operations but also underpins the effectiveness of the entire penetration testing process. Through the creation of sophisticated scripts for tasks such as web scripting, WHOIS and DNS lookups, and network scanning, cybersecurity professions can gather essential information with unprecedented speed and efficiency."

---
# Building a Web Scraper
Web scraping is the process of automating the extraction of data from a web page. Programming this involves using the Requests, and BeautifulSoup Python packages. 

In Cyber Security web scrapers are used to "gather intelligence on potential vulnerabilities, configurations, and publicly available information which is information that can be leveraged in penetration testing."

The Requests library allows HTTP requests to be sent to websites, simulating actions that can be performed by a browser to retrieve page data. BeautifulSoup parses the HTML or XML data, returned in the response data from the HTTP request, and provides various methods to extract the content from the structure of the web page.
## Step-by-Step Construction of a Web Scraper
### 1) Foundation with Requests
The first step in building a web scraper is to establish a HTTP connection (which underlyingly uses TCP) to the target URL, using the Requests Library. This process involves sending a GET request to the web page to be scraped, "which in return, provides the HTML content of the page."
```python
import requests

res = requests.get("https://example.com")
html_content = res.content # Response Body
```
### 2) Parsing the HTML content with BeautifulSoup
Once the HTML content has been retrieved from the target, BeautifulSoup can be utilised in parsing the HTML content of the website and navigating its structure to locate the data that is of interest.
```python
import bs4 import BeautifulSoup

# Parse Response Body
soup = BeautifulSoup(html_content, 'html.parser')
```
### 3) Extracting Data
After parsing the HTML with BeautifulSoup, the next step is to retrieve the specific pieces of data required. The data, a developer may want from the scraped webpage primarily stems from the purpose of their application, such content may include: "links, text, metadata, to comments embedded in the webpage" which could hold API credentials as an example left over in the HTML comments. 
```python
# Extracting all hyperlinks from a parsed response
for link in soup.find_all('a'): # Find all <a> elements
	print(link.get('href')) # Get the href attribute value
```
### 4) Handling Pagination and Dynamic Content
Many modern websites use pagination; the process of dividing a document, or website in this case in small pages or chunks. Or by utilising JavaScript to dynamically load content. These areas pose challenges for web scraping, in which the initial instance of returned response body is all that is available to work with, therefore for dynamic content, selenium is suggested to simulate a real-life browser due to its ability to execute JavaScript and "fetch dynamically loaded content."
### 5) Respecting Robots.txt
It is crucial to check a target's robots.txt file which specifies the site's policy on web scraping, and adhering to their guidelines is essential in ethically scraping the site, without violating their ToS (Terms of Service) or overloading their servers.

---
# Automating WHOIS and DNS Lookup
**WHOIS** is a protocol mentioned in the book and described as "as ancient as the internet itself" as it serves as the database which contains all of the book ISBN numbers, as per the earlier library example, or in more technical terms it contains the "registrant details of domain names." 

Being the first line of inquiry, in the first phase of reconnaissance, it offers insights into the "ownership, administrative contacts, and often the physical association associated with the domain." the process of querying the WHOIS databases is tedious and time-consuming, as such Python can be utilised in the process of automating the laborious task.

### Simple WHOIS Querier
```python
import whois as wi

domain = wi.wi('https://example.com')
print(domain)
```
[Code Sample](Simple%20WHOIS%20Querier.md)

This script reveals, when executed, the response information returned when querier the "registrar including the creation, and expiration dates, and the country of registration."

For the ethical hacker, this stands as the first piece of information, which alludes, closer to the target's full digital footprint.

---
# DNS Lookup Demystified
An alternative to the WHOIS protocol is the Domain Name Server (DNS) lookups which use NAT (Network Address Translation) to translate domain names to the target's external public IP address. 

Leveraging DNS Lookup can reveal "subdomains, mail servers, and other digital infrastructure" which may be able to be utilised in further investigation.

### Simple Domain DNS Lookup
```python
import dns.resolver

domain = "example.com"
a_records = dns.resolver.resolve(domain,'A')
for rec_data in a_records:
	print("A Record: ",rec_data.to_text())

mx_records = dns.resolver.resolve(domain, 'MX')
for rec_data in mx_records:
	print("MX Record: ",rec_data.exchange.to_text())
```
[Code Sample](Simple%Domain%20DNS%20Lookup.md)

The snippet of code above fetches and prints the A (Address) records and the MX (Mail Exchange) records of "example.com".

The difference between the two records are as follows:
- A records direct traffic to the server IP addresses
- MX records point to the mail servers handling the domain's email traffic

---
# Ping Sweeping
## Crafting Custom Ping Sweep Scripts
"The art of crafting custom ping sweep scripts emerges as an indispensable skill for the digital pathfinder." the book continues to describe it as a technique that when mastered provides the ethical hacker with the means to illuminate the expanses of network space, "revealing the presence of devices that were meant to be obscured."
## The Philosophy behind the Ping Sweep
The ping sweep is a methodical approach to identify active hosts on the network by sending ICMP (Internet Control Message Protocol) echo requests also known as *pings* to a range of IP addresses. The ping being answered signifies the presence of a device at that addresses, revealing itself to exist within the digital landscape.

Conventional tools, which are available for such tasks, while effective often lack the specificity that certain situations demand, which is where Python scripting comes into play, as it "enables the creation of tailed" ping sweep tools that can be used to adapt to the changing landscape of the invisible digital world.
## Crafting the Script: A Pythonic Odyssey

The **pythonping** library can be utilised in the crafting of customised ping sweep scripts.

### Simple ICMP Ping Sweep
```python
from pythonping import ping
import ipaddress

def custom_ping_sweep(start_ip, end_ip):
	network_range = ipaddress.ip_network(f"{start_ip}/{end_ip}", strict=False)
	for ip in network_range.hosts():
		response = ping(str(ip), count=1, timeout=1)
		if response.success():
			print("Active Host Found: {ip}")

start_ip = "192.168.1.0"
end_ip = "192.168.1.255"
custom_ping_sweep(start_ip, end_ip)
```
[Code Sample](Simple%20ICMP%20Ping%20Sweep.md)

This script as stated in the book is merely a blueprint, which can be vastly improved. It initiates a ping sweep across the specified IP address range, by iterating through each address and sending a single ping, it logs one by one, those of which response back to the ping. 

**Note**: An improvement to this example, would be file handling for persistent logging.

## The Art of Stealth and Customisation
The ping sweep script's power lies not just in it's functionality, but in its subtlety and vast range of customisation options to add and further increase its range. 

The job of the ethical hacker can be objectified into two simple directives:
- to discover
- to remain undetected

This screams the necessity of incorporating stealth techniques, "such as [randomising] the order of IP addresses, pinged or varying the time between pings to mimic irregular patterns of benign (unbothersome) network traffic." 

[Next Chapter](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%202.md)
