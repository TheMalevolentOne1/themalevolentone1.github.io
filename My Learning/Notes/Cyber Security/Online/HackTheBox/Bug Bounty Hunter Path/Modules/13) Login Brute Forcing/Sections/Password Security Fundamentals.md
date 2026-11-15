---
tags:
  - HackTheBox
  - Login-Brute-Forcing
---
[[Login Brute-Forcing]]
[Previous Section](Introduction%20To%20Login%20Brute-Forcing.md)

> The brute-force strategy replies on the strength of the password it targets.

---
# Fundamentals of Strong Passwords
## Importance of Strong Passwords
- Passwords are first line of defence.
- Strong passwords can be formidable to attackers attempting to gain unauthorised access.
- Longer and more complex passwords require more combination attempts on the attacker's part exponentially increasing the length of time and resources required.
## Anatomy of a Strong Password
The NIST provides [guidelines](https://auditboard.com/blog/nist-password-guidelines) for creating strong passwords which emphasise the following:

| Password Characteristic | NIST Guideline                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       **Length**        | The longer the password, the better. Aim for a minimum of 12 characters, but longer is always preferable. The reasoning is simple: each additional character in a password dramatically increases the number of possible combinations. For instance, a 6-character password using only lowercase letters has 26^6 (approximately 300 million) possible combinations. In contrast, an 8-character password has 26^8 (approximately 200 billion) combinations. This exponential increase in possibilities makes longer passwords significantly more resistant to brute-force attacks. |
|     **Complexity**      | Use uppercase and lowercase letters, numbers, and symbols. Avoid quickly guessable patterns or sequences. Including different character types expands the pool of potential characters for each position in the password. For example, a password using only lowercase letters has 26 possibilities per character, while a password using both uppercase and lowercase letters has 52 possibilities per character. This increased complexity makes it much harder for attackers to predict or guess passwords.                                                                      |
|     **Uniqueness**      | Don't reuse passwords across different accounts. Each account should have its own unique and strong password. If one account is compromised, all other accounts using the same password are also at risk. By using unique passwords for each account, you compartmentalize the potential damage of a breach.                                                                                                                                                                                                                                                                        |
|     **Randomness**      | Avoid using dictionary words, personal information, or common phrases. The more random the password, the harder it is to crack. Attackers often use wordlists containing common passwords and personal information to speed up their brute-force attempts. Creating a random password minimizes the chances of being included in such wordlists.                                                                                                                                                                                                                                    |

---
# Common Password Weakness
Users continue to rely on weak and easily guessable passwords such weaknesses include but are not limited to:

|      Password Weakness       |                                                                         Description of Weakness                                                                         |
| :--------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     **Short Passwords**      |       Passwords with fewer than eight characters are particularly vulnerable to brute-force attacks, as the number of possible combinations is relatively small.        |
| **Common Words and Phrases** | Using dictionary words, names, or common phrases as passwords makes them susceptible to dictionary attacks, where attackers try a pre-defined list of common passwords. |
|   **Personal Information**   |         Using the same password across multiple accounts is risky. If one account is compromised, all other accounts using the same password are also at risk.          |
|   **Predictable Patterns**   |     Using patterns like "qwerty" or "123456" or simple substitutions like "p@ssw0rd" makes passwords easy to guess, as these patterns are well-known to attackers.      |
### Minimising Risk through Password Policies
Organisations minimise the risk of weak passwords by implementing a password policy which ensures the use of strong passwords or passphrases.

A typical password policy includes requirements for:
 - **Minimum Length** - The minimum number of characters required to count a password as valid.
 - **Complexity** - The types of characters that must be included in a password (e.g., uppercase, lowercase, numbers, symbols).
 - **Password Expiration** - Frequency in which password must be changed.
 - **Password History** - Number of previous passwords that cannot be refused.

> While they benefit security, password policies lead to user frustration, and poor practices in handling passwords (e.g. writing them onto a sticky note) or using slightly different variations of the same password as to just get around the system while conforming to its rules.

> The important aspect of this is to balance security with usability.
### The Default Credentials Problem
One aspect of password security often overlooked is the danger of `default passwords` which are pre-set passwords which come with various devices, software, or online services which often as a result have simple and easily guessable passwords making them prime targets for attackers

Default credentials significantly increase the success rate of brute-force attacks, which rely on dictionaries and pre-defined wordlists i.e. a default common password list dramatically reducing the search time and accelerating the process of deducing the password. 

> In some cases, attackers may not even need to perform a brute-force attack; they can try a few common default passwords and gain access with minimal effort.

> [!quote]
> The prevalence of default passwords makes them a low-hanging fruit for attackers. They provide an easy entry point into systems and networks, potentially leading to data breaches, unauthorized access, and other malicious activities.

|Device/Manufacturer|Default Username|Default Password|Device Type|
|---|---|---|---|
|Linksys Router|admin|admin|Wireless Router|
|D-Link Router|admin|admin|Wireless Router|
|Netgear Router|admin|password|Wireless Router|
|TP-Link Router|admin|admin|Wireless Router|
|Cisco Router|cisco|cisco|Network Router|
|Asus Router|admin|admin|Wireless Router|
|Belkin Router|admin|password|Wireless Router|
|Zyxel Router|admin|1234|Wireless Router|
|Samsung SmartCam|admin|4321|IP Camera|
|Hikvision DVR|admin|12345|Digital Video Recorder (DVR)|
|Axis IP Camera|root|pass|IP Camera|
|Ubiquiti UniFi AP|ubnt|ubnt|Wireless Access Point|
|Canon Printer|admin|admin|Network Printer|
|Honeywell Thermostat|admin|1234|Smart Thermostat|
|Panasonic DVR|admin|12345|Digital Video Recorder (DVR)|
There are just some well-known [default passwords](https://default-password.info/) attackers often compile extensive lists of passwords and use them in automated attacks.

Default usernames are also another major security concern as manufactures often send devices with pre-set usernames such as `admin`, `root`, or `user` which are widely known and often published in documentation or readily available online. SecLists maintain a list of common usernames in [top-usernames-shortlist.txt](https://github.com/danielmiessler/SecLists/blob/master/Usernames/top-usernames-shortlist.txt).

> Knowing a username in a login system completes half the battle for the attacker, with a default password in effect the attack can be completed with minimal effort.

> [!quote]
> Even when default passwords are changed, retaining the default username still leaves systems vulnerable to attacks. It drastically narrows the attack surface, as the hacker can skip the process of guessing usernames and focus solely on the password.

---
# Brute-Forcing & Password Security
For a penetration tester the strength of a user's password acts like like the lock to a vault, when weak, easily accessible however when strong it demands far more resources, in addition for the tester it creates a deeper understanding of the target's security posture within the following:
- **Evaluating System Vulnerability** - Password Policies, or lack thereof, and the likelihood of users employing weak passwords directly inform the potential success of a brute-force attack.
- **Strategic Tool Selection** - Complex passwords dictate the tools and methodologies the penetration tester will have to deploy. A simple dictionary attack may suffice in the event of weak passwords, but a more sophisticated hybrid approach may be require to *crack stronger ones*.
- **Resource Allocation** - Amount of estimated time and computational power required for a brute-force attack. This is linked to the complexity of the passwords and is essential knowledge for planning and resource management.
- **Exploiting Weak Points** - Default passwords are often a system's `Achilles' Heel`, allowing a pentester to identify and leverage the easily guessable credentials and provide a swift entry point into the target network.

> [!quote]
> In essence, a deep understanding of password security is a roadmap for a pentester navigating the complexities of a brute-force attack. It unveils potential weak points, informs strategic choices, and predicts the effort required for a successful breach. This knowledge, however, is a double-edged sword. It also underscores the critical importance of robust password practices for any organization seeking to defend against such attacks, highlighting each user's pivotal role in safeguarding sensitive information.

---
# **No Exercises** for this section.

---
[Next Section](Brute-Force%20Attacks.md)