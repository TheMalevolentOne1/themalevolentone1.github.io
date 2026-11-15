---
link: https://thehackernews.com/2023/10/spynote-beware-of-this-android-trojan.html
byline: The Hacker News
site: The Hacker News
excerpt: Discover the dangerous capabilities of SpyNote, an Android banking
  trojan. It records audio, logs keystrokes, SMS messages, and captures
  screenshots.
twitter: https://twitter.com/@TheHackersNews
tags:
  - clippings/cyberSecurityNews
  - clippings/cyberNews
  - clippings/cyberSecurityNewsToday
  - clippings/cyberSecurityUpdates
  - clippings/cyberUpdates
  - clippings/hackerNews
  - clippings/hackingNews
  - clippings/softwareVulnerability
  - clippings/cyberAttacks
  - clippings/dataBreach
  - clippings/ransomwareMalware
  - clippings/howToHack
  - clippings/networkSecurity
  - clippings/informationSecurity
  - clippings/theHackerNews
  - clippings/computerSecurity
slurped: 2025-04-11T20:23
title: "SpyNote: Beware of This Android Trojan that Records Audio and Phone Calls"
---

Malware / Mobile Security

![SpyNote Android Trojan](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRDrb0x9EAmzx0XTLVrEsK_rk0VtLmu96T1HtOBwR02i6hppBsmf0KLoVHLVOj14DgPAnqdx1KV-sbHnVlWcMif96mdXpEnywNHAvoRbjTmkSiqVxX8NorXJzjf3WtJgwlLVPzW9OQ2Tnx-MMGo2pcwSreXwT_FFMzKyAHMzu3eC9JQks5yYf2gbnZUZMU/s728-rw-e365/android.jpg "SpyNote Android Trojan")

The Android banking trojan known as [SpyNote](https://thehackernews.com/2023/08/european-bank-customers-targeted-in.html) has been dissected to reveal its diverse information-gathering features.

Typically spread via SMS phishing campaigns, attack chains involving the spyware trick potential victims into installing the app by clicking on the embedded link, according to F-Secure.

Besides requesting invasive permissions to access call logs, camera, SMS messages, and external storage, SpyNote is known for hiding its presence from the Android home screen and the [Recents screen](https://developer.android.com/guide/components/activities/recents) in a bid to make it difficult to avoid detection.

"The SpyNote malware app can be launched via an external trigger," F-Secure researcher Amit Tambe [said](https://blog.f-secure.com/take-a-note-of-spynote/) in an analysis published last week. "Upon receiving the intent, the malware app launches the main activity."

But most importantly, it seeks accessibility permissions, subsequently leveraging it to grant itself additional permissions to record audio and phone calls, log keystrokes, as well as capture screenshots of the phone via the [MediaProjection API](https://developer.android.com/guide/topics/large-screens/media-projection).

A closer examination of the malware has revealed the presence of what are called diehard services that aim to resist attempts, either made by the victims or by the operating system, at terminating it.

[![SpyNote Android Trojan](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnhjrE30Qkp976NHiWuIsPUFgJLQM_mct4eKEpTRxieOwlAIT_0dL3jX_CklrrEAZOQ5Ltc5HqyXm2M60019w092gyYlf_Qip9OQ-2CE8TbXEZRcaS1FqfnDHUrMd18HHlCSQGOrJZOVDnVJ1TO11n-ujAZwUj9MgoKlyUD-KaDEceYxhCrI5y3Kn9cEoC/s728-rw-e365/call.jpg "SpyNote Android Trojan")
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnhjrE30Qkp976NHiWuIsPUFgJLQM_mct4eKEpTRxieOwlAIT_0dL3jX_CklrrEAZOQ5Ltc5HqyXm2M60019w092gyYlf_Qip9OQ-2CE8TbXEZRcaS1FqfnDHUrMd18HHlCSQGOrJZOVDnVJ1TO11n-ujAZwUj9MgoKlyUD-KaDEceYxhCrI5y3Kn9cEoC/s728-rw-e365/call.jpg)
This is accomplished by registering a [broadcast receiver](https://developer.android.com/reference/android/content/BroadcastReceiver) that's designed to restart it automatically whenever it is about to be shut down. What's more, users who attempt to uninstall the malicious app by navigating to Settings are prevented from doing so by closing the menu screen via its abuse of the accessibility APIs.

"The SpyNote sample is spyware that logs and steals a variety of information, including key strokes, call logs, information on installed applications, and so on," Tambe said. "It stays hidden on the victim's device making it challenging to notice. It also makes uninstallation extremely tricky."

"The victim is eventually left only with the option of performing a factory reset, losing all data, thereby, in the process."

The disclosure comes as the Finnish cybersecurity firm [detailed](https://blog.f-secure.com/android-guncelleme-dissecting-a-malicious-update-installer/) a bogus Android app that masquerades as an operating system update to entice targets into granting it accessibility services permissions and exfiltrate SMS and bank data.
### Update:

Following the publication of the story, Google sent the following statement to The Hacker News -

_Based on our current detection, no apps containing this spyware are found on Google Play. Google implemented user protections for this spyware ahead of this report's publication. Users are protected by_ [_Google Play Protect_](https://support.google.com/googleplay/answer/2812853?hl=en)_, which can warn users or block apps known to exhibit malicious behavior on Android devices with Google Play Services._

Found this article interesting? Follow us on [Twitter __](https://twitter.com/thehackersnews) and [LinkedIn](https://www.linkedin.com/company/thehackernews/) to read more exclusive content we post.