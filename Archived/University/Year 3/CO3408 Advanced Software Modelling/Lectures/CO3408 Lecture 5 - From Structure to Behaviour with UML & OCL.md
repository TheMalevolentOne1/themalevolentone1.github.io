---
tags:
  - CO3408
  - Advanced-Software-Modelling
---
[[CO3408 Advanced Software Modelling]]
[[CO3408 Lecture 4 - Modelling System Structure & Behaviour with UML & OCL]]

---
# Lecture Documents
[[CO3408 Lecture 5.pdf]]
[[CO3408 L5 - Lab 5 - OCL & UML.pdf]]


---
# Written Notes
![[CO3408 Lecture 5 - Note 1.png]]
![[CO3408 Lecture 5 - Note 2.png]]
![[CO3408 Lecture 5 - Note 3.png]]

---
# Learning Objectives
- Differentiate between structural and behavioural modelling
- Model components, classes, and interactions using UML
- Represent system behaviour using state machines
- Apply OCL constraints within behavioural contexts

---
# Part 1 - Structural Modelling
## Components Diagrams
**Purpose** - Show the high-level structure of a system. How components interact through interfaces.

**Key Elements**:
- **Component** - Modular part of a system. (e.g. UserInterface, Controller, Database)
- **Interface** - Defines provided/required operations.
- **Dependency** - Shows how one component relies on another.

E.g. User Interface -> Controller -> Database Service
### Example Across Components (Order -> Payment)
![[CO3722 L5 - ComponentDiagram.png]]
## UML Class Diagrams (Structural View)
- Class diagrams model:
  - Attributes
  - Operations
  - Associations
  - Generalisation / Inheritance
- Relationships:
  - Association - "uses a" or "has a"
  - Aggregation - whole-part (weak)
  - Composition - whole-part (strong, lifecycle bound)
  - Inheritance - "is a" relationship

E.g. BankAccount -> SavingsAccount -> PremiumAccount
## Class Relationships

| Relationship | Description                         | Example                       |
| ------------ | ----------------------------------- | ----------------------------- |
| Association  | "Uses" or "knows" another class     | Customer -> BankAccount       |
| Aggregation  | Whole-part (independent lifecycles) | Department -> Employee        |
| Composition  | Whole-part (dependent lifecycles)   | Order -> OrderItem            |
| Inheritance  | Generalisation (is-a)               | SavingsAccount -> BankAccount |

## UML & OCL Example
![[CO3408 L5 - UML & OCL Example.png]]
## ER Diagram / Database
![[CO3722 L5 - Database ER.png]]
## Adding Precision with OCL
- OCL (Object Constraint Language) adds mathematical precision to UML:
  - Ensures model consistency, validity, and completeness
  - Prevents illegal states (e.g. negative balances, invalid references)
  - Supports tool-based verification and test generation
  - Independent of implementation - works at the model level

- -> UML + OCL = precise, verifiable models before coding

---
# Part 2 - Behavioural Modelling
## Behavioural Modelling in UML
- Behavioural diagrams capture how objects and components interact over time.

- Types of behavioural diagrams:
  - Sequence Diagrams - Message interactions between objects
  - Activity Diagrams - Workflows and process logic
  - State Machine Diagrams - System states and transitions

- These diagrams complement class and component diagrams by showing dynamic behaviour.
## UML Sequence Diagrams (Concept)
- Show how objects interact through message exchanges over time.
- Illustrate communication between components
- Emphasise lifelines, message activation bars, return messages.
- Explain why sequence diagrams help visualise workflows and scenarios
## BankAccount Sequence Diagram Example
![[CO3408 L5 - BankAccount Sequence Diagram.png]]
## From Behaviour to State Modelling
- State:
  - Configuration of object attributes at a given time.

- Event:
  - An occurrence that triggers a change of state.

- Transition:
  - Movement from one state to another due to an event.

- Example
  - withdraw(amount) (amount <= balance) / balance := balance - amount
## State Machine - Core Concepts
- A state machine (state transition system) consists of:
  - S - Set of States
  - Σ - Set of events or inputs
  - δ – Transition function
  - s₀ – Initial state

- Formal Representation:
  - M = (S, Σ, δ, s₀) 
## ATM System Example (Behavioural View)
- States:
  - Idle -> Card Inserted -> Pin Verified -> Transaction Selected -> Processing -> Card Ejected
- Transitions:
  - insertCard()
  - verifyPIN()
  - selectTransaction()
  - completeTransaction()
  - ejectCard()

- UML State Diagram:
  - Show transitions with event labels and guard conditions.
## Bank Account State Model
- States:
  - Active
  - Overdrawn
  - Closed
- Transitions
  - deposit(amount)
  - withdraw(amount)
  - close()
- Guards:
  - withdraw(amount) [balance >= amount] / balance := balance - amount
  - Each transition must preserve the invariant balance >= -limit.

---
# Part 3 - OCL in the Modelling Lifecycle
## Where OCL Fits in the Lifecycle
- OCL is used after modelling and before implementation
- UML gives structure & behaviour
- OCL adds precision and rules not expressible in diagrams
- Constraints checked before code exists -> cheaper fixes

`Requirements -> UML Models -> OCL Constraints -> Code/Tests -> Deployment`
## What Can Be Used in OCL
- OCL Supports:
  - Basic types: String, Boolean, Integer, Real
  - Classes & Attributes from UML models
  - Query operations: methods that do not alter state
  - Associations: navigate related objects

E.g. `context Jar inv PositiveWeight: self.totalWeight() > 0`

---
# Summary
- UML provides the visual structure and behaviour.
- OCL provides *formal rules* for correctness.
Together both provide precise verifiable models before code

- Behavioural diagrams show object interactions and workflows
- Structural models ensure clarity and maintainability
- Applying both gives early defect detection and consistent design.

---
[[CO3408 Lecture 6 - Concurrency in Software Modelling]]