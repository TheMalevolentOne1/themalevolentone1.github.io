---
tags:
  - Programming
---
[[Learning Go Lang]]

---
# Problem Domain
The problem this project seeks to achieve is communication through a webpage and API that clients (i.e. *User's Browser*) sync messages from. More specifically, allowing *Users* accessing the page, given no account will be required and the frontend webpage allowing to input into a textbox, so the messages can be observed by all Users on website by periodically resynchronising.
# Requirements
The requirements will be written in MoSCoW analysis.
## Functional
- The *User* **Must** have to communicate messages to anyone else accessing the site.
- The *User* **Should** have the ability to choose a username, for their personalisation, and data retention.
- The *User* **Could** have the ability to report messages to *Moderators* that break guidelines.
- The *User* **Won't** have the ability to create their own account or add others as friends.

- The *Moderator* **Must** have the ability to see all users currently accessing the site.
- The *Moderator* **Should** have the ability to delete 
- The *Moderator* **Could** have the ability to ban *User* (e.g. *Internally by IP Address. Or by checking against what DNS lookup was used. Anti-bot Protections Etc*)
- The *Moderator* **Won't** have the ability to remove suspensions or bans on accounts.
## Non-Functional
# Constraints / Assumptions