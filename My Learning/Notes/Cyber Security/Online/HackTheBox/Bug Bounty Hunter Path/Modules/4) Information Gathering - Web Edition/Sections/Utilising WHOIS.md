---
tags:
  - HackTheBox
  - Information-Gathering-Web-Edition
---
[[Information Gathering - Web Edition]]
[Previous Section](WHOIS.md)

---
# How Security Analysts Detect Suspicious Domain Activity
A security analyst may detect *suspicious* activity in the following circumstances:
## Phishing Campaign
- Recent **Registration Date**: Indicating that it is a new domain, and may not be a legitimate service, however this is subject to a case-by-case basis as new businesses or individuals **frequently register new domains**.
- Privatised **Registrant Information**: Hiding information to engage in anonymity, while can be legitimate for small businesses who may not disclose the individual that manages the domain, a long-standing service, like a well-known bank *may* choose to disclose who to contact, however some reputable organisations still utilise privacy services for non-critical domains, though this is less common in **customer-facing** services.
- **Name Servers**: The *Name Servers* in effect maybe associated with known hosting providers (e.g. [bulletproof hosting](https://www.cyber.gov.au/about-us/view-all-content/publications/bulletproof-hosting-providers)) utilised for malicious purposes, however this depends on their provider and the history that can be assessed regarding the name servers and their **documented history**.

A **combination** of these factors raise *significant red flags* for a **phishing campaign** to a security analyst.
## Malware Analysis
- **Registration**: Registered to an **individual** utilising a *free* email service known for anonymity. (e.g. [ProtonMail](https://proton.me/mail))
- **Location**: The **Registrant's** country of origin has a **high prevalence in cybercrime**.
- **Registrar**: The domain was registered with a **history of lax abuse policies**.
## Threat Intelligence
- **Registration Dates**: In cases of *multiple* suspected domains *suspicion is raised* in the event of clusters of registration.
- **Registrants**: The registrants use *various* **Aliases** & **Fake Identities**.
- **Name Servers**: Domains often share the same **Name Servers** indicating a *common infrastructure*.
- **Takedown History**: Domains may have a history of being *takedown* after attacks, indicating previous law enforcement or security interventions.
## Conclusion
These insights allow security analysts to create a *detailed profile* of the threat actor's techniques, and procedures (TTPs).

---
# Using WHOIS
First ensure `whois` is installed.

```bash
sudo apt update
sudo apt install whois -y
```
<sub> Updating Linux and Installing WHOIS </sub>
## Example of WHOIS Facebook

```bash
$ whois facebook.com
   Domain Name: FACEBOOK.COM
   Registry Domain ID: 2320948_DOMAIN_COM-VRSN
   Registrar WHOIS Server: whois.registrarsafe.com
   Registrar URL: http://www.registrarsafe.com
   Updated Date: 2025-04-23T19:08:37Z
   Creation Date: 1997-03-29T05:00:00Z
   Registry Expiry Date: 2034-03-30T04:00:00Z
   Registrar: RegistrarSafe, LLC
   Registrar IANA ID: 3237
   Registrar Abuse Contact Email: abusecomplaints@registrarsafe.com
   Registrar Abuse Contact Phone: +1-650-308-7004
   Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
   Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
   Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
   Domain Status: serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited
   Domain Status: serverTransferProhibited https://icann.org/epp#serverTransferProhibited
   Domain Status: serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited
   Name Server: A.NS.FACEBOOK.COM
   Name Server: B.NS.FACEBOOK.COM
   Name Server: C.NS.FACEBOOK.COM
   Name Server: D.NS.FACEBOOK.COM
   DNSSEC: unsigned
   URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
>>> Last update of whois database: 2025-06-15T18:42:14Z <<<

[SNIPPED]

Registrant Name: Domain Admin
Registrant Organization: Meta Platforms, Inc.
Registrant Street: 1601 Willow Rd 
Registrant City: Menlo Park
Registrant State/Province: CA
Registrant Postal Code: 94025
Registrant Country: US
Registrant Phone: +1.6505434800
Registrant Phone Ext:
Registrant Fax: 
Registrant Fax Ext:
Registrant Email: domain@fb.com
```
<sub>Facebook Information from WHOIS databases</sub>
### Key Identified Information

| WhoIs Record Field          | Description          |
| :-------------------------- | -------------------- |
| **Registrar**:              | RegistrarSafe, LLC   |
| **Creation Date**:          | 1997-03-29T05:00:00Z |
| **Domain Expiration Date**: | 2034-03-30T04:00:00Z |

#### 1) Domain Registration
This **Domain Registration** information can conclude that the domain which is **registered** with `Registrar LLC` has been active for a **significant period of time**, suggesting its *legitimate* with an established online presence, and the distant **expiration date** further indicates its *longevity*.
#### 2) Domain Owner
The **Domain Owner** which indicates ownership by `Meta Platforms Inc` as the organisation behind **facebook.com** and specifies a *domain admin* as the point of contact.
#### 3) Domain Status
The **Domain Status** indicates the protections that the domain has against *authorised changes*, *transfers*, or *deletions* on both the **client** and **server sides**, which highlights a strong emphasis on security and control over the domain.

|       Domain Protection       | Description                                                                                                                                                                                                                               |
| :---------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Client-Level Protections**: | These protections are set by the **Registrar** typically at the *registrant's* request to protect against unauthorised actions.                                                                                                           |
|  **clientDeleteProhibited**   | Prevents the domain from being deleted by the registrant or registrar and ensures protection against **unauthorised or accidental deletion** without *explicitly* unlocking of the domain.                                                |
| **clientTransferProhibited**  | Prevents the domain from being transferred to another registrar which protects against **unauthorised transfers, securing domain ownership**, without *explicitly* unlocking the domain.                                                  |
|  **clientUpdateProhibited**   | Prevents changes to the domain's contact or nameserver information, which **safeguards against unauthorised modifications to domain settings** without *explicitly* unlocking the domain.                                                 |
| **Server-Level Protections**: | These protections are set by the **Registry** to protect **Critical Domains**. (e.g. `.gov` or `.bank`)                                                                                                                                   |
|  **serverDeleteProhibited**   | **Registry-level** restriction preventing domain deletion, typically for legal, regulatory, or critical infrastructure reasons. This protection *overrides client permissions* requiring **Registry Approval** to unlock the domain.      |
| **serverTransferProhibited**  | **Registry-level** restriction blocking domain deletion to another registrar, often for compliance, disputes, or high-value domains. This protection *overrides client permissions* requiring **Registry Approval** to unlock the domain. |
|  **serverUpdateProhibited**   | **Registry-level** restriction on modifying domain details. (e.g. *contacts*, or *nameservers*) used for security, or legal reasons. This protection *overrides client permissions* and requires **Registry Approval** to unlock.         |

#### 4) Name Servers
The **Name Servers** are all within the `facebook.com` domain suggesting that the registrar organisation, `Meta Platforms Inc` manages its *DNS Infrastructure*, which is common practice for large organisations to maintain control and reliability over its **DNS Resolution**.

`Facebook.com`'s *Name Servers* from the **WHOIS** are the following:
- **A.NS.FACEBOOK.COM**
- **B.NS.FACEBOOK.COM**
- **C.NS.FACEBOOK.COM**
- **D.NS.FACEBOOK.COM**
#### 5) Conclusion from WHOIS details
It can be evaluated from all the information provided by the **WHOIS Output** for `Facebook.com` aligns with the expectations for a **well-established** domain owned by a large organisation like `Meta Platforms Inc`.

While **WHOIS** provides contact details for *domain-related issues* it may not be directly helpful in **identifying specific individuals within the organisation**, or **potential vulnerabilities** and as such it highlights the need to utilise a **combination of reconnaissance techniques** to understand the target's digital footprint comprehensively.

---
# Exercises
Q: Perform a WHOIS lookup against the paypal.com domain. What is the registrar Internet Assigned Numbers Authority (IANA) ID number?
A: `292`

Q: What is the admin email contact for the tesla.com domain (also in-scope for the Tesla bug bounty program)?
A: `admin@dnstinations.com`

[Next Section](DNS%20(Information%20Gathering).md)