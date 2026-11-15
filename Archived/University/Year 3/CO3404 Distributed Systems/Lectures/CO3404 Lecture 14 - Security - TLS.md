---
tags:
  - CO3404
  - Distributed-Systems
---
[[CO3404 Distributed Systems]]
[[CO3404 Lecture 13 - Infrastructure as Code]]

---
# Documents
[[CO3404 Lecture 14.pdf]]
## Demos
[[CO3404 L14 - Crypto.zip]] - Crypto Examples referenced in notes
[[CO3404 L14 - HTTPS.zip]] - The HTTPS code and terraform used in demo.

---
Transport Layer Security - TLS

There is a requirement to generate an SSL certificate.

SSL is usually an alias for TLS these days as SSL is outdated certificate.

---
# TLS
Very broad subject
Underlying principles of TLS used to enable https
https enables encryption in transit to provide secure communication
## Base 64
The data is a sequence of binary bits
The binary number block is split into 6 bit blocks then stored into bytes i.e. 4 chars in 3 bytes.

The 6 bits represent the position in the base64 alphabet where A=0 and a=26 0=52 +=62 /=63 split into 6 bit blocks.

As the smallest byte sequence to fit the 6 bit number is 24 bits or 3 bytes we need to pad a byte with zeros to then indicate how many bytes are missing from a 3 byte block.

Pad the last byte to create a char = A in this case. aAs we are 2 bytes short of 3 btye block we add two == to indicate that the last triple has 3 bytes missing converting to 0/22AA back into binary

Doesn't work with URLs as +, / and = are used for other things in internet-based data + is a space and / is a path sepeator = means = so has been dropped, because base64-url is used for structured data e.g. JWT, Oauth tokens, URL query parameters, etc. The receiver knows how to interpret this data as it can be inferred by the protocol or an expected number of bytes.
## TLS Aims
- Confidentiality - No one other than the intended person can read the data i.e. secret
- Integrity - Can be assured that the data has not interfered with or corrupted
- Authenticity - Know for sure who / where the data come from
- Non-Repudiation - Provider of data cannot claimm at a later date that didn't send it.

---
# Hashing (Integrity)
- Fast Search
- One-Way Crypto Function
- Fixed Length Number (digest)
- Use cases include:
  - Password Protection
  - Password: Is Hashed One-Way
  - Cannot be reversed but rainbow table may expose password so still need strong password
  - Brute Force attack
  - Use long complex passwords and a password manager
  - Use Single sign-on
  - Use multi factor authentication
- File / Message Integrity Check
  - File data integrity, photo steganography

---
# Message Authentication Code (Integrity and Authenticity)
- Hashing is good for integrity not security
- MAC fixes this as it adds authenticity as long as the shared secret is kept secure
- HMAC is a MAC generated using a hashing function.

```
Sender
Message -> Mac Algorithm
(Key, K) -> Mac Algorithm

subgraph Result
	Message
	MAC (Generated MAC value)
end

Reciever
Message -> Mac Algorithm
MAC -> Equal? if RecieverMac == MAC same key. 

> Not tampored with as hash values match. 

Cannot provide non-repudiation - Can be asusuiried of who it came from and it's not been tampewred with but what if the sender claims they didn't send it, what proof do I have? the message and the HMAC which I could have created myself and claimed it was sent to me.
```

---
# Symmetric Key Encryption (Confidentiality)
The same key is used to encrypt as to decrypt.
Advanced Encryption Standard is the most common.
AES has a 128 bit key (can accommodate 192 and 256 bit keys)
AES128 for home routers & routers
BitLocker & WhatsApp use AES256 and NSA approves it for Secret level data.
Very fast so good for large data blocks.

> Challenge: Getting the key to the second party securely.

---
# Secure Key Agreement (Not Exchange)
[Diffie-Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) is a very popular method of key agreement.
Each party creates values that are exchanged and from those values, the secret keys are computed.
The values are exchanged if intercepted cannot be used to compute the shared secret
If there is a man in the middle attack, they would need to intercept both exchanges and substitute both values.
  - To protect against this, the sever value also provides a digital signature (later) so the value cannot be changed without detection
- From the exchanged values, both parties can compute the same value which is the shared secret
although the shared secret could be used now for encryption generally create working keys based on these shared values as will be seen in TLS later.

---
Asymmetric Key Encryption (Confidentiality)
Uses a pair of complementary but different keys:
- private key and public key
Public Key is made public.
A message encrypted with a public key is decrypted with the secret key - this is used for confidentiality.
A message encrypted with the secret key can be decrypted with a public key - not used for confidentiality, it's just a fact.
Who sent the encrypted message?
How is it known that the public key camem from you when it was downloaded or recieved in an email. Could someone claim to be someone else by spoofing the email and sending the encrypted to message to someone using their own public key?
Complex maths is slow. Not good for large data blocks.

> Popular asymmetric algorithms are RSA and Elliptic curve.
> RSA (N) where N is the key size.
> The national institute of standards and technology NIST define crypto strength in "bits of security"
>   - 112 bits is good until about 2030
>   - Approximate Equivalencies:
>     - 2048 bit RSA key
>     - 224 bit ECC key
>     - 128 bit AES key

---
# Digital Signature  (Authenticity, Integrity, Non-Repudiation)
- A digital signature has a wealth of features:
  - More secure alternative to a handwritten signature
  - Guarantees authenticity to the sender
  - Provides non-repudiation - as long as the secret key isn't shared so for legal stuff, use a HSM, smart card or similar to hold the secure key.
  - Ensures integrity.

```
1. Bob wants to send his public key
2. Bob hashes the contract to create a unique number (digest)
3. Bob encrypts the digest using his private key
4. I recieve the email with then plaintext contract and encrpyted digest (digital signature)
5. I decrypt the digital signature using Bob's public key to get the has value (Not Confidential)
   I hash the contract file to get a disgest (hash) to verify it's the same as bob's.
```

---
[[CO3404 Lecture 15 - TLS Operation & Swagger]]