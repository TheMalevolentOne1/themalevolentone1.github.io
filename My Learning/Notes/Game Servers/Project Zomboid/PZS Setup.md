---
tags:
  - Project-Zomboid
  - Settings
---
[[Project Zomboid]]

---

>[!note] Source
>These notes, are made from [PZ Server Wiki](https://pzwiki.net/wiki/Dedicated_server)

---
# Steam - Server Installation
## Steam Library

>[!info]  Steam Library -> **filter for "Tools"** -> Project Zomboid Dedicated Server

>[!warning] **Do not** launch the server via Steam. If accidentally done, verify the integrity of the files.
>[More Discussed Here](https://www.reddit.com/r/projectzomboid/comments/wqouxg/solved_zomboid_dedicated_server_failed_to/)

## SteamCMD
[Steam's CMD](https://developer.valvesoftware.com/wiki/SteamCMD) is steams command-line interface. [[Learning Steam CMD]]
### Windows
>[!tip]  Installing PZServer
>After starting **steamcmd.exe**:
>1) `force_install_dir C:\PZServer_Folder` - Ensure the install path is the server folder.
>2) `login anonymous` - Login to be able to download from the steam API.
>3) `app_update 380870 validate` - Download the PZ Dedicated Server files.
>   >[!warning] Once you see the message _"Success! App '380870' fully installed"_.
>4) `quit` - Close SteamCMD.

---
# Required Port Forwarding Ports
PZ Servers requires open ports: `16261 UDP` and `16262 UDP - Direct Connection Port`

---
# Running the Server

>[!info] C:\PZServer -> Locate Following Files:
>- StartServer32.bat - Start x32 bit PZ Server
>- StartServer64.bat - Start x64 bit PZ Server
>- StartServer64_nosteam.bat - Start x64 PZ Server - Non Steam Version (i.e. to hosting GoG/Epic players.)
>
> >[!warning]
> > >[!quote] Run the batch file that corresponds with your operating system. For most use cases this will be 64-bit unless you are intentionally running 32-bit or running the non-Steam version.
> 
> >[!note]
> > By default `StartServer64` batch files specifies 16GB starting memory. Change minimum `-Xms` and maximum `-Xmx` to alter the amount of server memory.
> > e.g. `-Xms6g -Xmx6g`
> 

---
# Server Startup

>[!quote]
>Launching a server will open a command console window that begins executing the server on your machine. On the first run, it will prompt you to set a password for the admin account it will create. After the server finishes setting up with default game settings, a message will output indicating success or failure.

>[!warning] The developers [discourage](https://theindiestone.com/forums/topic/63563-4178-multiplayer-zomboid-dedicated-server-does-not-handle-sigterm/#comment-376957) running a PZ Server as a daeman/background service because the Server was designed as a console application instead of a service.

---
# Connecting to Server

>[!note] Steps
>1) Launch PZ
>2) `Join` Menu Option
>3) `Facourites` tab
>4) Add `IPv4 Address`
>5) Enter Port (Default `16261`)
>6) Input Account Details (*anything*)
>7) Save and Join Server.

>[!warning] Hosting the `StartServer64_nosteam` will require adding `-nosteam` to the PZ launch options in the properties menu in steam.
>*`Steam Library -> Project Zomboid -> Properties -> Launch Options`*

---
[[PZS Configuration Details]]