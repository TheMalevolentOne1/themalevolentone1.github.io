---
tags:
  - Video-Notes
  - Cyber-Security
---

[[Video Notes]]

---

<iframe title="Buffer Overflows - CompTIA Security+ SY0-701 - 2.3" src="https://www.youtube.com/embed/0-qeeI5jTqU?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>

---
A buffer overflow attack is where a attacker can write more than is expected into an area memory, which flows into another area of memory.

Usually, a developer performs bounds checking, which the attacker spend time checking every part of an application, to try and find buffer overflows.

Buffer overflow is not simple exploit. Unexpected behaviour, may be able to crash. 

Or the attacker maybe able may be able to use the right into the right area with the right information to have the application perform a specific function that is advantageous attacker.

The attacker is looking for a repeatable buffer overflow, which provides them with a particular function. 

A repeatable buffer overflow is useful as it means that the system can be compromised.
![[Variable, Buffer Overflow.png]]
Two different variables in memory.
- Var A has no memory written to it
- Var B has already memory written and its decimal value is 1979 (for example in this application it represents a user permission rights value, which if it is over 2000 it is administrative rights.)

They know they can fill the 8 bytes of variable A, and buffer overflow into the permission rights variable B.

They input the word "excessive"
![[Variable, Entered, Buffer Overflow.png]]
The first 8 characters are stored as apart of variable A but the 9th character as it overflows into variable B. As can be seen this has changed the value of B to 25856 and as previous stated anything over 2000 is administrative rights.

This allows the attacker to login by causing a buffer overflow and login as administrator without any credentials. 
# That is all.
