---
tags:
  - Project-Zomboid
  - Settings
---
[[Project Zomboid]]
[[PZS Setup]]

---

>[!info] Source
>These notes are made from the [PZ Server Wiki Config](https://pzwiki.net/wiki/Server_settings)

---
Windows: `%USERPROFILE%\Zomboid\server`
Linux: `$HOME/Zomboid/Server`

# Four Primary Server Files
`servertest.ini` - Non-Gameplay related Server Settings including mod configuration.
`servertest_SandboxVars.lua` - The Sandbox Server Settings.
`servertest_SpawnRegions.lua` - Add Custom Spawn Areas to the map. 
`servertest_SpawnPoints.lua` - Add Potential Spawn Points to the map for a profession without a Spawn Region in that area.

---
# `servertest.ini` Configuration Settings
## Global Server Configurations

```
PVP=true
```
>Players can harm each other.

```
PVPLogToolChat=true
```
> PVP is logged to Admin chat.

```
PVPLogToolFile=true
```
>PVP is logged to a file.

```
PauseEmpty=true
```
>Game time stops when there are no players online.

```
GlobalChat=true
```
> Toggles the global chat.

```
ChatStreams=s,r,a,w,y,sh,f,all

/s - Talk to people on screen including dead
/r - Transcript radio broadcasts
/a - Talk to admin
/w - Whisper to someone (distance irrelevant)
/y - Yell to someone on screen a bit further (attracts zombies)
/sh - Talk to people with whom a safehouse is shared
/f - Talk to people in the same faction
/all - Talk to everyone online
```
> Removing ANY from the list, removes the specific chatstream.

```
Open=true
```
>Clients may join without being in the whitelist. Otherwise Administrators must create username/password combinations.

```
ServerWelcomeMessage=Server Welcome Message!
```
>The first welcome message visible in the chat panel. Displayed immediately after player login. RGB colours can be used to change the colour of the welcome message. 
>
>Also can use < LINE>, without the space, to create a separate lines within your text. Use: \<RGB:1,0,0> This message will show up red!

```
DisplayUserName=true
```
>Display usernames above player's heads in-game.

```
ShowFirstAndLastName=false
```
>Display the first and last name above player's heads.

```
UsernameDisguises=false
```
>Disguises Player Usernames when wearing items with the dedicated tag `isdisguise`. Server Admins can **always** see usernames.

```
HideDisguisedUserName=false
```
>Hides Disguised Usernames from Chat/Over-head Displays keeping them hidden.

```
SwitchZombiesOwnershipEachUpdate=false
```

```
SpawnPoint=0,0,0
```
>Force every new player to spawn at these world coordinates. (ignored when `0,0,0`)

>[!note] PZ has an [Online Interactive Map](https://www.map.projectzomboid.com) which can be used to find specific map coordinates.

```
SafetySystem=true
```
>Players can enter/leave PVP on an individual basis. 
>A player in PVP mode can be harmed by a **PVP & Not PVP** player.

> [!quote] 
> This is shown by the "unobscured skull and crossbones on the left of the screen."

> [!warning] When SafetySystem=false, players are free to hurt each other at any time if PVP is enabled.

```
ShowSafety=true
```
>Display Skull Icon over players heads who are in PVP mode.

```
SafetyToggleTimer=2
```
>Toggle delay in-between entering and leaving PVP mode.

```
SafetyCooldownTimer=3
```
>Delay when player can re-enter or leave PVP mode again, since last time.

```
SafetyDisconnectDelay=15
```
>How long the player character remains vulnerable in the world before the server logs them out. (e.g. Alt+F4 or Crash leading to server connection dropping silently not closing gracefully.)
> Min: 0, Max: 60, Default: 60

```
SpawnItems=
```
>Items types new players spawn with. Separate multiple item types with commas.
>E.g. Base.Axe, Base.Bag_BigHikingBag

```
DefaultPort=16261
```
>Set the default starting port for Player Data.
>IF `UDP` this, is one of *two* ports used.
>Min: 0, Max: 65535, Default: 16261

```
UDPPort=16262
```
>The second UDP port (`16262`) was introduced to facilitate direct client-to-server communication, bypassing Steam's networking relay.
>
>The primary port (`16261`) handles the initial server connection and Steam-related queries. Once the client establishes the connection, gameplay traffic can use the dedicated direct UDP port rather than being routed through Steam's networking API, to improve performance.

```
ResetID=8564414
```
>Reset ID determines `server soft-reset`.
>If number matches client, then the client must create a new character.
>Used in *conjunction* with **PowerServerID**. It is strongly advised to back these ideas up somewhere.
>Min: 0, Max: 2147483647 (32 bit int max limit)

```
WorkshopItems=
```
>List Workshop Mod IDs for the server to download. Each must be separated by a semicolon. Example: 
>
>WorkshopItems=514427485
>
>Example Workshop IDs:
>[Phoenix Beta 1.4 "Final Straw"](https://steamcommunity.com/sharedfiles/filedetails/?id=514427485)

```
Mods=
```
>Enter mod loading ids here.
>ID can be found at `\Steam\steamapps\workshop\modID\mods\modName\info.txt`.

```
Map=Muldraugh, KY
```
>Enter the foldername of the mod found in \Steam\steamapps\workshop\modID\mods\modName\media\maps\

```
DoLuaChecksum=true
```
>Kick clients whose game files don't match the servers.

>[!warning] Linux
> >[!quote]
> >While this option is important and should be kept to true for security, there is a bug that makes it flag false positives on Linux servers preventing some clients to connect and therefore forcing Linux server owners to set it to false. Please advance with caution.

```
DenyLoginOnOverloadedServer=true Public=false
```
> Shows the server on the in-game browser.
> Steam-enabled servers are **always** visible in the [Steam Server Browser](https://partner.steamgames.com/doc/features/multiplayer/game_servers).

```
PublicName=PZ Server
```
>Name of the server, in in-game and *if applicable* steam server browser.

```
PublicDescription=My PZ Server!
```
> The Public Description of the server in-game and the steam server browser.

```
MaxPlayers=32
```
>Max number of players that can play **on** the server, excluding admins.
>Min: 1, Max: 100, Default: 32

```
PingLimit=0
```
>Ping limit (ms) beofre player kick.
>Min: 0, Max: 2147483674, Default: 0 (Disabled)

```
DropOffWhiteListAfterDeath=false
```
>Remove players from server after death from whitelist. 
>Prevents new characters being made after death for `Open=false` servers.

```
NoFire=false
```
> All forms of fire are disabled *except for campfires*.

```
AnnounceDeath=false
```
>Announces player deaths into global chat.

```
AnnounceAnimalDeaths=false
```
>Announces animal deaths into global chat.

```
SaveWorldEveryMinutes=0
```
>Loaded parts of the map are saved after the set number of *real-world minutes* have passed.
>Min: 0, Max: 2147483647, Default: 0

```
MaxAccountsPerUser=0
```
> The limit for the amount of accounts a single Steam User can create on the server.

```
AllowCoop=true
```
> Allows Co-op/Splitscreen Players.

```
SleepAllowed=false
```
>Sleep is not *NEED* but players are **allowed** to sleep when their survivor becomes tired.

```
KnockedDownAllowed=false
```
>[!warning] WIP: Activating this setting may cause visual desynchronization of player positions.

```
SneakModeHideFromOtherPlayers=true
```
> Username is hidden while sneaking from other players.

```
UltraSpeedDoesnotAffectToAnimals=false
```
> Animals affected by events that speed up game time to "Ultra Speed". E.g. all players sleeping in beds.

```
SteamScoreboard=false
```
> Show Steam Usernames and Avatars in the players list.

```
SteamVAC=true
```
> Enable the [Steam VAC (Value's Anti Cheat) System](https://help.steampowered.com/en/faqs/view/571A-97DA-70E9-FF74).

```
UPnP=true
```
> Attempts to auto configure port forward rules on UPnP-enabled internet gateways. Otherwise fallback to default ports.

```
VoiceEnable=true
```
> VOIP (Voice Over Internet Protocol) is enabled.

```
VoiceMinDistance=10.0
```
> The minimum tile distance over which VIOP sounds can be heard.
> Min: 0.00, Max: 100000.00, Default: 10.00

```
VoiceMaxDistance=100.0
```
> The maximum tile distance over which VIOP sounds can be heard.

```
Voice3D=true
```
> Toggles directional audio for VOIP.

```
SpeedLimit=70.0
```
>The maximum speed limit that can be achieved in vehicles.
>Min: 10.00, Max: 150.00, Default: 70.00

```
server_Browser_announced_ip=
```
>Sets the IP from which the server is broadcast.

>[!note]
> >[!quote]
> >This is for network configurations with multiple IP addresses, such as server farms

```
PlayerRespawnWithSelf=false
```
> Players can respawn in-game at the same coordinates they died.

```
PlayerRespawnWithOther=false
```
>Players can respawn at the coordinates of the split screen/Remote Play player's location.

```
DisableSafehouseWhenOwnerConnected=false
```
>Safehouses act like a normal house if an owner of the safehouse is connected to the user.

>[!note] The safehouse is turned back into one from a regular building securing it once the player goes offline.

```
Faction=true
```
> Players can create factions

```
FactionDaySurvivedToCreate=0
```
> Players must survive a certain number of in-game days to be able to create a faction.
> Min: 0, Max: 2147483647, Default: 1

```
FactionPlayersRequiredForTag=1
```
> The number of players required as faction members before a faction owner can create a group.
> Min: 1, Max: 2147483647, Default: 1

## Radio Moderation

```
DisableRadioStaff=false
```
>Disables radio transmissions from players with an access level.

```
DisableRadioAdmin=true
```
> Disables radio transmissions from players with 'admin' access level

```
DisableRadioGM=true
```
> Disables radio transmissions from players with 'gm' access level

```
DisableRadioOverseer=false
```
> Disables radio transmissions from players with 'overseer' access level

```
DisableRadioModerator=false
```
> Disables radio transmissions from players with 'moderator' access level

```
DisableRadioInvisible=true
```
> Disables radio transmissions from invisible players

```
ClientCommandFilter=

e.g. -vehicle.*;+vehicle.damageWindow;+vehicle.fixPart;+vehicle.installPart;+vehicle.uninstallPart

```
> Semicolon-separated list of commands that will not be written to the cmd.txt server log. 
> For example:  
> `-vehicle.*` - Inputting * means do NOT write any vehicle command. 
> `+vehicle.installPart` - means DO write that command

```
ClientActionLogs=ISEnterVehicle;ISExitVehicle;ISTakeEngineParts;
```

>[!note]
>>[!quote]
> >Semicolon-separated list of actions that will be written to the ClientActionLogs.txt server log.

```
PerkLogs=true
```
> Track changes in player perk levels in PerkLog.txt server log file.

```
ItemNumbersLimitPerContainer=0
```
> Maximum number of items that can be placed into a container.
> Min: 0, Max: 9000, Default: 0 (No Limit)

```
BloodSplatLifespanDays=0
```
> Number of days before old blood splatters are removed.
> Removal happens when map chunks are loaded.
> Min: 0, Max: 365, Default 0 (Will never disappear)

```
AllowNonAsciiUsername=false
```
> Allows the use of Non-ASCII (Cyrillic/Unicode) Characters in usernames.

```
BanKickGlobalSound=true RemovePlayerCorpsesOnCorpseRemoval=false
```
> Play a server sound globally on kick.
> 
> Remove player corpses when [`HoursForCorpseRemoval`](https://projectzomboid.com/modding/zombie/SandboxOptions.html#hoursForCorpseRemoval) triggers removing all corpses from the ground.

```
TrashDeleteAll=false
```
> Players can use the "delete all" button at bins.

```
PVPMeleeWhileHitReaction=false
```
> Whether the player will stagger when hit during PVP.

```
MouseOverToSeeDisplayName=true
```
> Players will have to hover the mouse cursor over someone to see their display name.

```
HidePlayersBehindYou=true
```
>Automatically hide players that cannot be seen (same way as zombies).

```
PVPMeleeDamageModifier=30.0
```
> The PVP Damage Multiplier for *PVP Melee Attacks*.
> Min: 0.00, Max: 500.00, Default: 30.00

```
PVPFirearmDamageModifier=50.0
```
> Damage Multiplier for *PVP Ranged Attacks*.
> Min: 0.00, Max: 500.00, Default: 50.00

```
CarEngineAttractionModifier=0.5
```
> Modifies the range in-which zombies are attracted towards cars.

```
PlayerBumpPlayer=false
```
> Controls whether players collide into each other. (E.g. being knocked over when ran into.)

```
MapRemotePlayerVisibility=1
```
> Controls Display of Remote Players on the in-game map.
> 1 - Hidden
> 2 - Friends
> 3 - Friends & Nearby Players
> 4 - Everyone
> Min: 1, Max: 4, Default: 1

```
BackupsCount=5
```
> Amount of local backups held at one time. 
> As covered in this [article](](https://loafhosts.com/guides/project-zomboid-backups-and-saves/)) - Warns when the backup limit is reached and manual backup is refused until one is deleted.
> Min: 1, Max: 300, Default: 5

>[!note]
>A backup made by schedule, when at the limit, deletes the oldest backup that is not locked (to protect it).

```
BackupsOnStart=true
```
> Backup on Server Startup.

```
BackupOnVersionChange=true
```
>Backup on Server Version update.

```
BackupPeriods=0
```
>Min: 0, Max: 1500, Default: 0

```
DisableVehicleTowing=false
```
> Disables Vehicle Towing

```

```

## Safehouse Settings

```
SafehousePreventsLootRespawn=true
```
>Prevents loot respawning once a player has claimed the building as a Safehouse.

```
PlayerSafehouse=false
```
>Both admins and players can claim safehouses.

```
AdminSaehouse=false
```
>**Only** admins can claim safehouses.

```
SafehouseAllowTrespass=true
```
>Allow non-members to enter safehouses uninvited.

```
SafehouseAllowFire=true
```
>Allow fire to damage safehouses.

```
SafehouseAllowLoot=true
```
>Allow non-members to loot from safehouses.

```
SafehouseAllowRespawn=false
```
> Players will respawn in a safehouse that they were a member of before death.

```
SafehouseDaysSurvivedToClaim=0
```
> Players must survive a certain number of in-game days before being allowed to claim safehouses.
> Min: 0, Max: 2147483647, Default: 0

```
SafehouseRemovalTime=144
```
> The time before players are automatically removed from a safehouse they have not visited.
> Based on real-world hours.
> Min: 0, Max: 2147483647, Default: 144

```
SafehouseAllowNonResidential=false
```
> Governs whether players can claim non-residential buildings.

```
SafehouseDisableDisguises=true MaxSafezoneSize=20000
```
> Controls whether disguises are disabled in safehouses.
> Sets the Maximum Allowed Safezone Size permitted.
> Min: 0, Max: 2147483647, Default: 20000

```
AllowDestructionBySledgehammer=false
```
> Allow players to destroy world objects with sledgehammers.

```
SledgehammerOnlyInSafehouse=false
```
> Allow players to destroy world objects **only** in their safehouse.
>Requires `AllowDestructionBySledgehammer` to be true.

```
War=false WarStartDelay=600
```
>Time in seconds before the war starts.
>Min: 60, Max: 2147483647, Default: 600

```
WarDuration=3600
```
>War duration in seconds.
>Min: 60, Max: 2147483647, Default: 3600

```
WarSafehouseHitPoints=3
```
> Safehouse hit point limit.
> Min: 0, Max: 2147483647, Default: 3

```
ServerPlayerID=
```
> The ServerPlayerID determines if a character is from *another server* or a *single-player* game.
> This value may be changed on soft resets.

```
RCONPort=27015
```
> Port for RCON (Remote Console)
> Min: 0, Max: 65535, Default: 27015

```
RCONPassword=
```
>RCON Password

## Discord Integration

```
DiscordEnable=false
```
>Enables global chat integration with a Discord channel.

```
DiscordToken=
```
>Discord Bot Access Token

```
DiscordChatChannel=
```
>The Discord Chat Channel Name

```
DiscordLogChannel=
```
> The Discord Logs Channel Name.

```
DiscordCommandChannel=
```
> The Discord Commands Channel Name.

```
WebhookAddress=
```
> The Slack Incoming Webhook URL

```
Password=
```
> Server Password that Clients need to join the server.

>[!warning] Ignored when hosting a server via the Host button.

