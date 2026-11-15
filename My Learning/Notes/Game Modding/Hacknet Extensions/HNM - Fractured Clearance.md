---
tags:
  - Hacknet
  - Mods
---
[[Hacknet Extensions]]
[Steam Official Hacknet Extensions Help Page](https://steamcommunity.com/sharedfiles/filedetails/?id=914587661)
# Concept Planning
You're a junior dev, straight out of college. Your childhood best friend, who you haven't heard from in months, after leaving to pursue their own ambition, sends you a mysterious email with nothing but an IP address. The beginning of a test? or something worse...

---
# The Three-Act Structure
**Act 1 — The Test** The friend (let's call her **Nyx**) has vouched for you to a mid-tier hacker crew called something like **GhostTier**. 

They don't trust you yet. You're given a series of increasingly difficult entry-level missions, 

basic port cracking, 
log wiping, 
file retrieval, 

to prove you're not dead weight. Nyx feeds hints via email but stays mysterious about the bigger picture, or their grander ambitions.

[[HMN - FC - Mission 1 - Nyx's Return]]


Mike's Backup Server
All ports open.
```

`Player Goes in Retrieves sshole.exe + ftpbounce.exe`

Two paths:
```
if they leave and DID NOT clear their logs

they should receive a new email warning them that Mike has hacked into their machine back and is tracing their location (start a security tracing program) Nyx says you need to find the process in the ps command and `kill` it. she ofc should chastise the player for not actually clearing logs and underestiamting Mike. Telling me to kill the tracer before Mike finds him or he won't be able to help her and she needs him.

if they DID clear the logs before disconnecting then that shouldn't cause the securitytracer.

this is more of a warning to the player then a continued consequence that will always occur.
```

Who is Mike, Why is Nyx contacting us? Why is she not safe?

Mike is a past member of the group Nyx works, who was an idiot and  was kicked out for being one, storing all his tools on an insecure directly linked to his computer backup server. None of the other members including Nyx cared to inform him. Perhaps leaving messages in a directory they assume he'd never check?

Nyx is contacting us now because secretly she's been working undercover inside the group, so her plan is to drag the Player in and then probably later abandon and betray them.

> Nodes:
> Nyx's PC
> GhostTier Mission Server
> Player's PC
> Mike's PC
> Mike's Backup Server

**Act 2 — The Grind** You're in, but only barely. GhostTier starts giving you real jobs — corporate infiltration, covering tracks, maybe framing someone. The missions get morally greyish. You start noticing Nyx is pulling strings behind the scenes and the group's goals aren't totally clear. Who are they actually working for?

**Act 3 — The Invitation** If you make it through, GhostTier is revealed to be a _feeder_ — a scouting layer for an elite group called something like **0x1** (or whatever name you like). The final mission is your entrance exam. Nyx is already inside.







# Puzzles
## Puzzle 1 Nodes
- REL1
- REL2
- FEL1
## Server
- GhostTier's Mission Hub
## Emails
```first-email

```

---
# Initial Story Text
```starting-text
You used to care about this stuff once. Late nights, borrowed wifi, the two of you picking apart systems just to see how they worked. Not for anything. Just because you could. Because it felt like the world had a backdoor and you were the only ones who knew where to look. That was a long time ago. Now you file tickets. You push updates nobody reads to software nobody cares about. You go home. You do it again. Nyx drifted... almost obsessed she kept going long after you'd stopped. Pulled away from you almost completely. You told yourself that was fine. People grow and change differently. Take different roads... You just never let yourself think too hard about which road Nyx took. Then one morning, after seven years of silence... an email.
```
---
# Mission Planning
## Starting Up
- First Nyx Email sent with IP address + porthack utility. 

```email-1
Subject: Hey

Hey, it's me. I know it's been a while... I'm sorry about that.

I can't explain what's going on over email. Just connect to this and I'll explain everything... soon I promise. Email when you find and read the file REL1.txt...****

[IP]

P.S. don't mention this to anyone.
```

- Email back with any problems
- One's PC has no security. 
- finds README on One's PC buried in a series of random folders is a note from Nyx and another program.

```file-1
It's been a long time since we last spoke to each other. I can't make up for the lost time but I can help you... but first you must find me.
```
## First Puzzle
```
[IP] REL1
[IP] FEL5
```
REL are the Real Clues.
FEL are nothing but 'time wasters'.

```REL2-PASSWORR-FILE
FEL1 Password - 'The-Fallen'

Begin to sink my teeth,
Into the depths to ponder,
Tightening, gone... smother,
Eating so contary, it's only...
S
```

```FEL1-FILE
01000010 01001001 01010100 01000101 01010011 00100000 01110011 01100001 01111001 01110011 00100000 01001000 01100101 01101100 01101100 01101111 00100001

Hello, this is nothing and you should not be looking at it. Have a nice day! :D

[IP] REL2
```
