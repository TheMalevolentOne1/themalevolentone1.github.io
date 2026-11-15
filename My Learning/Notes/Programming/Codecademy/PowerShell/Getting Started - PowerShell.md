---
tags:
  - PowerShell
---
[[PowerShell Language Notes]]

---
# What is PowerShell
[PowerShell](https://en.wikipedia.org/wiki/PowerShell) is a command-line shell and scripting language.

> [PowerShell is Open-Source](https://github.com/PowerShell/PowerShell)

Useful in automating Administration tasks, as the scripting language can perform "any group of actions".
## Example Display Text
```powershell
Write-Host "Hello World"
```

> Personal Opinion: Microsoft had to be weird and do THAT?. Even C++ and Python have shorter text display functions. What is the user input `Read-Host`?.

---
# Tasks
Enter the following command into the command line and hit Enter.
```powershell
Write-Host "Hello, World!"
```

---
# Basic Commands
PowerShell commands are called `CmdLets` pronounced **command-lets**. A command's name describes its function and is typically a verb or a noun. 
## Command-Name Example
```powershell
Get-Date
```

This command has the verbs `Get` and the noun `Date` which indicates its purpose, being to obtain the current date, and presented in the terminal. 

> The `Get-Date` command uses the `Write-Host` function to display the full date and time.
## Help Cmdlets
```powershell
Get-Command -Verb Get -Noun Host
```

This command will use the `Write-Host` function to display all the `CmdLets` that have the verb **"Get"** in the function name. This is the same with the noun parameter.
## Clear Terminal
```powershell
Clear-Host
```

Clears the terminal session. `clear` can also be used.

---
# Tasks
1) Start by outputting today’s date.
```powershell
Get-Date
```
2) Now output any text you want using `Write-Host`.
```powershell
Write-Host Hello World
```
3) Output only commands with Date as a noun.
```powershell
Get-Command -noun Date
```
4) Lastly, clean up your terminal session by running a single command.
```powershell
Clear-Host
```

---
# Using The Terminal
Command Completion is a tool for suggesting a command based on a few letters. Triggered by the `Tab` key, the terminal will attempt to autocomplete the rest.
```powershell
Get-D
```
## Example Tabbed Autocorrect Results
- Get-DAClientExperienceConfiguration
- Get-DAConnectionStatus
- Get-DAEntryPointTableItem
- Get-DAPolicyChange
- Get-Date

> Autocorrect suggestions follow alphabetical order. May also Display a list of potential command options..
## Terminal History
```
Get-History
```

> The command `history` also works to retrieve the history for the PowerShell session.
> The `Up` and `Down` arrow keys can be utilised to scroll through previously used commands.


---
# Tasks
1) Type `Get-` into the terminal and hit `Tab`.
```powershell
Get-
```

In the online editor of `Codecademy` for PowerShell this resulted in a list of all potential options being displayed.
2) Type `Get-Ti` and hit the Tab key.
```powershell
Get-Ti
```

This will autocorrect to `Get-TimeZone` instead of displaying a list.
3) Run the command Get-Host
```powershell
Get-Host
```

`Write-Host` displays the following host information.

| Display Name     | Variable Type         | Purpose                                                          |
| ---------------- | --------------------- | ---------------------------------------------------------------- |
| Name             | `String`              | The name of the host application (e.g., "ConsoleHost").          |
| Version          | `System.Version`      | The version number of the host application.                      |
| InstanceId       | `System.Guid`         | A unique identifier for this instance of the host.               |
| UI               | `PSHostUserInterface` | An object to interact with the host's User Interface.            |
| CurrentCulture   | `CultureInfo`         | The culture settings used for formatting (dates, numbers).       |
| CurrentUICulture | `CultureInfo`         | The culture settings used for UI text (e.g., error messages).    |
| PrivateData      | `Object`              | Host-specific data or custom objects.                            |
| DebuggerEnabled  | `Boolean`             | Indicates if the debugger is currently enabled.                  |
| IsRunspacePushed | `Boolean`             | `True` if a new runspace has been entered (e.g., nested prompt). |
| Runspace         | `Runspace`            | The operating environment where commands are executed.           |
4) Use the `up` and `down` arrow keys to look at your command history. Choose one of the two commands you’ve already run and hit **Enter**.

I chose the `Get-Host` to rerun and continue the tasks.
5) Type `Get-Hi` and hit the Tab key. Hit Enter to review the command history.

I typed `Get-Hi` clicked tab to autocorrect to `Get-History` and then continued.

---
# Writing Scripts
To run a `PowerShell Script` the file extension is `.ps1`.
## Example All Host Commands
```PowerShell
# Display all the commands that act on the Host itself.
Write-Host "All Commands that can Act on the Host:"
Get-Command -noun Host
```

This file will display the following output.
### Script Output
```PowerShell
All Commands that can Act on the Host:

CommandType     Name  
-----------     ----                                     
Function        Clear-Host                               
Cmdlet          Get-Host                                 
Cmdlet          Out-Host                                 
Cmdlet          Read-Host                                
Cmdlet          Write-Host
```

---
# Tasks
1) Print out a prompt and then the current date.

> To start, on the first line of **script.ps1** use `Write-Host` to output a prompt about the date. Something like **The Current Date Is:**.

```powershell
Write-Host "The Current Date is:"
Get-Date
```
2) On the second line of **script.ps1** use `Get-Date` to output the current date.

Already done in the first task.
3) Now in the Terminal.
```shell
./script.ps1
```

---
# Summary
Current Progression:
- How PowerShell can automate our work within an operating system
- Common commands such as:
    - `Get-Date`
    - `Write-Host`
    - `Get-Command`
    - `Get-History`
- Using terminal shortcuts to increase productivity
- Writing scripts help us run complex tasks

---
# Quiz - Getting Started
1) run output.ps1
`./output.ps1`
2) Which one of the following commands will NOT help you retrieve your terminal history.
`Get-Command`
3) What does the command `Write-Host "Good Day"` do when run in the terminal?
Prints `Good Day` to the terminal.
4) Which one of the following commands will erase all the text from your current terminal session?
`Clear-Host`
5) Which of the following commands prints the current date when run in the terminal?
`Get-Date`
6) In what situation should you use PowerShell over a graphical user interface?
Automating a repetitive administration task.
7) True or False: PowerShell can only be used on the Windows operating system.
I answered True which was incorrect. I'm aware that it is Open-Source so this is unfortunate.

> Incorrect. PowerShell is available for the Windows, Mac and Linux operating systems.
8) Fill in the command, so it produces the following output in the terminal:

```powershell
CommandType     Name  
-----------     ----                                     
Function        Clear-Host                               
Cmdlet          Get-Host                                 
Cmdlet          Out-Host                                 
Cmdlet          Read-Host                                
Cmdlet          Write-Host
```

I answered `Get-Command -noun Host` based on drag and drop.
![[fillinblanks get command noun host.png]]
9) Fill in the blanks to complete the sentence.
![[fillintheblanks_powershell_cmdlets.png]]
10) Which key on the keyboard is used for terminal autocompletion

[[Variables & Operations - PowerShell]]