---
tags:
  - HackTheBox
  - Login-Brute-Forcing
---
[[Login Brute-Forcing]]
[Previous Section](Brute-Force%20Attacks.md)

---
# The Power of Words
Dictionary attacks rely on exploiting the human tendency to prioritise memorable passwords over secure ones. Despite being warned of the potential consequences many individuals continue to opt for passwords based on readily available information such as dictionary words, common phrases, names, or easily guessable patterns. Such predictability makes them vulnerable to dictionary attacks where the attacker may systematically test a pre-defined list of potential passwords against the target.

The success of a dictionary attack relies on the *quality* & *specificity* of the wordlist used. A well-crafted wordlist is tailored to the target or system which can significantly increase the likelihood of a successful breach.

> [!quote]
> At its core, the concept of a dictionary attack is rooted in understanding human psychology and common password practices. By leveraging this insight, attackers can efficiently crack passwords that might otherwise necessitate an impractically lengthy brute-force attack. In this context, the power of words resides in their ability to exploit human predictability and compromise otherwise robust security measures.
### Example
Let's imagine the target is for instance frequented by gamers, a wordlist containing a mass of gaming-related terminology, jargon, and slang would prove effective than a generic dictionary. 

> The more closely the wordlist reflects the likely password choices of the target, the higher the chances of a successful attack.

---
# Brute-Force VS Dictionary Attack
The fundamental distinction between a brute-force and a dictionary attack lies in their methodology for generating potential password candidates:

- **Brute-Force** - A pure brute-force attack systematically tests *every password combination* of characters within a predetermined set and length.
> While this approach guarantees eventual success given enough time, it can be extremely time-consuming, particularly against longer or complex passwords.

- **Dictionary Attack** - In stark contrast, a dictionary attack employs a pre-complied list of words and phrases, dramatically reducing the search space.
> This targeted methodology results in a far more efficient and rapid attack, especially when the target password is suspected to be a common word or phrase.

|Feature|Dictionary Attack|Brute Force Attack|Explanation|
|---|---|---|---|
|`Efficiency`|Considerably faster and more resource-efficient.|Can be extremely time-consuming and resource-intensive.|Dictionary attacks leverage a pre-defined list, significantly narrowing the search space compared to brute-force.|
|`Targeting`|Highly adaptable and can be tailored to specific targets or systems.|No inherent targeting capability.|Wordlists can incorporate information relevant to the target (e.g., company name, employee names), increasing the success rate.|
|`Effectiveness`|Exceptionally effective against weak or commonly used passwords.|Effective against all passwords given sufficient time and resources.|If the target password is within the dictionary, it will be swiftly discovered. Brute force, while universally applicable, can be impractical for complex passwords due to the sheer volume of combinations.|
|`Limitations`|Ineffective against complex, randomly generated passwords.|Often impractical for lengthy or highly complex passwords.|A truly random password is unlikely to appear in any dictionary, rendering this attack futile. The astronomical number of possible combinations for lengthy passwords can make brute-force attacks infeasible.|

## Example
Consider the following example, where an attacker targets a company's employee login portal.

The attacker might construct a specialized wordlist that incorporates the following:
- Commonly used, weak passwords (e.g., "password123," "qwerty")
- The company name and variations thereof
- Names of employees or departments
- Industry-specific jargon

By deploying this targeted wordlist in a dictionary attack, the attacker significantly elevates their likelihood of successfully cracking employee passwords compared to a purely random brute-force endeavour.

---
# Building and Utilising Wordlists
Wordlists are obtainable from the following sources:
- **Publicly Available Lists** - The internet hosts plenty of freely accessible wordlists, which encompass collections of commonly used password, leaked credentials from data breaches and other potentially valuable data.
- **Custom-Built Lists** - Penetration testers can craft their wordlists by leveraging information obtained during the reconnaissance phase. Details may include target's interests, hobbies, personal information, or any other data for password creation.
- **Specialised Lists** - Wordlists can be further refined to target *specific* industries, applications, or even individual companies. Specialised lists increase the likelihood of success by prioritising passwords that are more likely to be used within the context.
- **Pre-Existing Lists** - Certain tools and frameworks come pre-packaged with commonly used wordlists. (e.g. ParrotSec often include wordlists like `rockyou.txt`, which is a massive collection of commonly used leaked passwords.)

> **Repositories** like [SecLists](https://github.com/danielmiessler/SecLists/tree/master/Passwords) offer various wordlists catering to various attack scenarios.

| Wordlist                                    | Description                                                                                      | Typical Use                                        | Source                                                                                                                           |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `rockyou.txt`                               | A popular password wordlist containing millions of passwords leaked from the RockYou breach.     | Commonly used for password brute force attacks.    | [RockYou breach dataset](https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt)                      |
| `top-usernames-shortlist.txt`               | A concise list of the most common usernames.                                                     | Suitable for quick brute force username attempts.  | [SecLists](https://github.com/danielmiessler/SecLists/blob/master/Usernames/top-usernames-shortlist.txt)                         |
| `xato-net-10-million-usernames.txt`         | A more extensive list of 10 million usernames.                                                   | Used for thorough username brute forcing.          | [SecLists](https://github.com/danielmiessler/SecLists/blob/master/Usernames/xato-net-10-million-usernames.txt)                   |
| `2023-200_most_used_passwords.txt`          | A list of the 200 most commonly used passwords as of 2023.                                       | Effective for targeting commonly reused passwords. | [SecLists](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/2023-200_most_used_passwords.txt) |
| `Default-Credentials/default-passwords.txt` | A list of default usernames and passwords commonly used in routers, software, and other devices. | Ideal for trying default credentials.              | [SecLists](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Default-Credentials/default-passwords.txt)           |

---
# Exercises
Q: After successfully brute-forcing the target using the script, what is the full flag the script returns?
A: `HTB{Brut3_F0rc3_M4st3r}`

---
[Next Section](Hybrid%20Attacks.md)