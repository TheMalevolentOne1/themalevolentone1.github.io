---
tags:
  - CO1605
  - Systems-Analysis-and-Database-Design
---
[[CO1605 Systems Analysis and Database Design]]

---
# Lecture Documents
[[CO1605 Lecture 1.pdf]]
[[CO1605 L1 - Lab 1 - Introduction to Systems Analysis.pdf]]

---

```mermaid
flowchart TD
    %% Environment
    subgraph ENV["Environment"]
        direction LR

        INPUT["Inputs"]
        OUTPUT["Outputs"]

        %% System boundary
        subgraph SYS["System Boundary"]
            direction TB

            PROCESS["What the system does"]
            CONTROL["How the system is controlled"]

            PROCESS --> CONTROL
            CONTROL --> PROCESS
        end

        INPUT --> PROCESS
        PROCESS --> OUTPUT

        INPUT -->|"Feed-forward"| CONTROL
        OUTPUT -->|"Feedback"| CONTROL
    end

    %% Styling
    style ENV fill:#ffffff,stroke:#0000ff,stroke-width:4px,color:#0000ff
    style SYS fill:#ffffff,stroke:#ff0000,stroke-width:3px,stroke-dasharray:10 8,color:#ff0000
    style PROCESS fill:#292929,stroke:#555,color:#ffffff
    style CONTROL fill:#f5f5f5,stroke:#777,color:#222
    style INPUT fill:#12b8c9,stroke:#777,color:#ffffff
    style OUTPUT fill:#158000,stroke:#777,color:#ffffff
```

---
[[CO1605 Lecture 2 - UML - Use Case Diagrams]]
