---
tags:
  - Go-Learning
  - Week-One
---
[[Ten Projects in Go Projects]]
# Objective
The focus for week 1 is a Command-Line Interface (CLI) for a **task list** in the **GO** Language.
# Research
## Requirements
### Functional
- The *User* must be able to view all tasks.
- The *User* must be able to add a new task.
- The *User* must be able to remove an existing task.

- The *Program* must be able to access the task file, for persistent storage.
### Non-Functional
- The *User* wants an easily human-readable output.
- The *User* wants to add a task description for additional information on the task needing to be completed.
### MoSCoW
- Must be able to view all tasks.
- Must be able to add a new task. 
- Must be able to remove an existing task.
- Must be able to persist tasks across program restart.
- Must have a unique identifier (`incremental int ID`) for every task.

- Should have a Task Description for more information.

- Could be listed alphabetically.
- Could have minimal error handling e.g. no existing, or duplicate. 
- Could have no stack traces. Clean human-readable outputs

- Won't be able to add or remove tasks with from an interactive CLI menu, only as command-line arguments.
## Required Libraries
- [`os`](https://pkg.go.dev/os) - For File Handling (Reading/Writing). 
- [`errors`] - For creating new Errors.
- [`fmt`] - Format library to display to terminal.
- [`path/filepath`] For Filepath handling
- [`testing`](https://pkg.go.dev/testing) - For Program Unit Testing.
- [`encoding/json`](https://pkg.go.dev/encoding/json) - for JSON parsing.
- [`strings`] For ToLower function.
# Design
## Commands
`tasklist all` - *list* all tasks.
`tasklist add <TASK_NAME> [DESCRIPTION]` - *add* new task.
`tasklist remove <TASK_ID>` - *remove* existing task.

>[!note]
>**`#` represents a unique identifier.**
>**`<>` must have included.**
>**`[]` optional**

### Tasklist All

```mermaid
---
title: All Tasks
---
flowchart LR
	u(( )) --> v
	v{Is Tasks List Empty?}
	v -->|Yes| r1[No Tasks Added]
	v -->|No| r2[Show Tasks]
	r1 & r2 --> e(( ))
```

```
$ tasklist all

|--------------------|
| TASKLIST MANAGER   |
|--------------------|
|  #. Task One!      |
|  #. Task Two!      |
|  #. Task Three!    |
|--------------------|
```

### Tasklist Add

```mermaid
---
title: Add Task
---
flowchart LR
	u(( )) --> t[/Task Input/] --> v
	v{Is Task a Duplicate?}
	v -->|Yes| r1[Task Already Exists]
	v -->|No| r2[Added New Task #]
	r1 & r2 --> e(( ))
```

```
$ tasklist add <TASK_NAME> [TASK_DESCRIPTION]

|------------------|
| TASKLIST MANAGER |
|------------------|
|  Task Added - #  |
|------------------|
```

### Tasklist Remove

```mermaid
---
title: Remove Task
---
flowchart LR
	u(( )) --> t[/Task ID Input/] --> v
	v{Does Task Exist?}
	v -->|Yes| r1[Task # Deleted]
	v -->|No| r2[No Task Exists]
	r1 & r2 --> e(( ))
```

>[!note] 
>Potentially have an alias: `delete`

```
$ tasklist remove <TASK_ID>

IF NONE

|------------------|
| TASKLIST MANAGER |
|------------------|
|  No Task Found!  |
|------------------|

ELSE

|------------------|
| TASKLIST MANAGER |
|------------------|
|   Task Deleted   |
|------------------|
```
# Implementation
>[!important] 
>
>- Main - Command-Line Arguments ONLY.
>- Tasks - Handles the Struct (Appending to, and From) Tasks Slice, File Handling and JSON Un/Marshaling.
## Main Implementation

```mermaid
flowchart LR
    A(["Start: main()"]) --> B{"Arguments provided?"}

    B -- No --> C["Print: No Arguments Provided"]
    C --> Z(["Exit"])

    B -- Yes --> D{"EnsureStorageExists() successful?"}
    D -- No --> E["Print: Storage could not be created"]
    E --> Z

    D -- Yes --> F["DecodeAllJSONTasks()"]
    F --> G{"Decoding error?"}

    G -- Yes --> H["Print error"]
    H --> Z

    G -- No --> I["Convert subcommand to lowercase"]
    I --> J{"Select subcommand"}

    J -- test --> T1["Print byte(int(1))"]
    T1 --> T2["Print byte(1)"]
    T2 --> Z

    J -- all --> K["ShowAllTasks()"]
    K --> Z

    J -- add --> L{"Task name provided?"}
    L -- No --> M["Print: Missing Task Name"]
    M --> Z

    L -- Yes --> N["Read task name"]
    N --> O["Initialize description as empty string"]
    O --> P{"Description provided?"}

    P -- Yes --> Q["Read task description"]
    P -- No --> R["Keep empty description"]
    Q --> S["AddTask(name, description)"]
    R --> S

    S --> U{"AddTask error?"}
    U -- Yes --> V["Print error"]
    V --> W["Print: Task Not Saved"]
    W --> Z

    U -- No --> X["Print: Task Added"]
    X --> SAVE["SaveAllTasks()"]

    J -- remove --> AA{"Task ID provided?"}
    AA -- No --> AB["Print: Missing Task ID"]
    AB --> Z

    AA -- Yes --> AC["Read task ID as string"]
    AC --> AD["Convert ID using strconv.Atoi()"]
    AD --> AE{"Conversion error?"}

    AE -- Yes --> AF["Print: Task ID provided is not a number"]
    AF --> Z

    AE -- No --> AG["RemoveTask(id)"]
    AG --> AH{"Removal error?"}

    AH -- Yes --> AI["Print removal error"]
    AH -- No --> SAVE
    AI --> SAVE

    J -- help --> AJ["Print HELP MENU and commands"]
    AJ --> SAVE

    J -- Unknown --> AK["Print: Argument Not Recognised"]
    AK --> SAVE

    SAVE --> Z

```

## Tasks Implementation
### doesIdExist - Boolean Function
```mermaid
---
config:
  theme: mc
  layout: dagre
---
flowchart TB
    Start(["Start (taskID)"]) --> Init["Initialise variable i as range of tasks slice"]
    Init --> Check{"Is the Task ID the same as the index i"}
    Check -- Yes --> ReturnTrue["return true"]
    Check -- No --> Next["Next iteration"]
    Next --> Check
    Next -. Loop ends .-> ReturnFalse["return false"]
    ReturnTrue --> End(["End"])
    ReturnFalse --> End
     Start
     Init
     Check
     ReturnTrue
     Next
     ReturnFalse
     End
```
# Testing

# Limitations

# Security Considerations

# Future Progress
