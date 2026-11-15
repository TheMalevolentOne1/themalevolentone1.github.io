---
tags:
  - CO3408
  - Advanced-Software-Modelling
---
[[CO3408 Advanced Software Modelling]]
[[CO3408 Lecture 3 - Formal Specification Methods & Their Latest Industry Uses]]

---
# Lecture Documents
[[CO3408 Lecture 4.pdf]]
[[CO3408 L4 - Lab 4 - OCL Chapter.pdf]]
[[CO3408 L4 - Lab 4 - UML for Java Developers.pdf]]

---
# Written Notes
![[CO3408 Lecture 4 - Note 1.png]]
![[CO3408 Lecture 4 - Note 2.png]]

---
# Learning Objectives
- Understand UML class and behavioural diagrams for system modelling
- Learn how to apply OCL constraints: invariants, preconditions, and postconditions
- Apply OCL to real-world examples (e.g. BankAccount)
- Model system behaviour using sequence or activity diagrams

---
# UML Class Modelling
**Purpose** - Represent system structure: classes, attributes, operations and relationships

**Key UML Elements**:
- Classes & Attributes
- Associations, Multiplicities, Aggregations, & Compositions
- Inheritance / Generalisation

>[!EXAMPLE] BankAccount
>Class: BankAccount Attributes:
>- balance: Real
>- accountNumber: String
>- Operations: 
>  - deposit(amount: Real)
>  - withdraw(amount: Real)
>- Association: Customer -> BankAccount (1..\*, 1..1)

---
# OCL with Class Diagrams
![[CO3408 L4 - OCL with Class Diagrams.png]]
## What is the Object Constraint Language (OCL)
- A declarative language used to describe rules about UML models.
- Designed to be used alongside UML models
- Based on set theory and first-order logic
- Used for constraints (Invariants), behavioural specification (pre/post), derived values
- Ensures model consistency and integrity:
  - No side effects
  - Purely evaluative (no data modifications)
## Why UML Alone Is Not Enough?
- Missing constraints
- Ambiguity in natural language

---
# Object Constraint Language (OCL)
OCL is a formal declarative, side-effect language.

**Purpose** - Express constraints that cannot be captured in diagrams.

**Types of OCL Expressions**:
- Invariants - must always hold
- Preconditions - must be true before operation
- Postconditions - must be true after operation
## Background OCL?
- OCL was created to make UML models more precise and verifiable by expressing constraints that diagrams alone couldn't show
- It started as a part of the UML standardisation process in the mid-1990s
## Why OCL?
- UML alone is insufficient to specify detailed constraints
- Examples: "No negative values", "deprived attribute formulas", "operation contracts"
- Complements UML designs with precision
- Formally specifies rules that cannot be shown visually
- Improves consistency, traceability, and verifiability of models
- OCL bridges the gap
## Core Principles of OCL

|          Principle          | Meaning                                                                               |
| :-------------------------: | ------------------------------------------------------------------------------------- |
|           Formal            | Meaning Formal Syntax and semantics are mathematically defined — no ambiguity         |
|      Side-effect Free       | OCL expressions only query the model — they never change system state                 |
|         Declarative         | States what must hold, not how to implement it                                        |
| Rooted in FOL & Set Theory  | Uses quantifiers (forAll, exists), logic (and, or, implies) and set operations        |
| Model-Level, not Code-Level | Attached to UML artifacts (class, operation, association) rather than implementation  |

## OCL Syntax Basics
- Expressions begin with a UML context
- Use self to refer to current object
- Operations similar to programming languages
  - and, or, not, implies
  - =, <>, <, >

- Collection operations: forAll, exists, size, select, collect
## Types of OCL Constraints
- Invariants - must always hold
- Preconditions - must be true before operation
- Postconditions - must be true after operation

---
# OCL & First-Order Logic
- OCL constraints are not invented in isolation, they are grounded in formal logic.
- Formal link enables precision, tool support and verifiability.
## Key First-Order Logic (FOL) Concepts
|**FOL Concept**|**Symbol**|**OCL Equivalent / Usage**|
|---|---|---|
|Universal quantifier|$\forall$|`forAll()` over collections|
|Existential quantifier|$\exists$|`exists()` over collections|
|Logical AND|$\land$|`and`|
|Logical OR|$\lor$|`or`|
|Negation|$\neg$|`not`|
|implication|$\rightarrow$|`implies`|
## Overview on FOL
First-Order Logic is a formal system used to describe objects, their properties and relationships.

Provides a precise, unambiguous way to specify conditions, constraints and rules.

**Key Concepts**:
- Predicates: Properties or Relationships 
	E.g. isCustomer(c) or owns(c, a)
	- c being the customer variable
	- a being the account variable.

$$\forall a \in \text{BankAccount}: \text{balance}(a) \ge 0$$

## OCL Preconditions Example
BankAccount(withdraw)
- context BankAccount::withdraw(amount: Real) pre SufficientFunds: amount > 0 and amount <= self.balance
- Withdrawals are only allowed if the account has enough funds.

>[!EXAMPLE] OCL & FOL Withdraw Example
>```OCL
>context bankAccount::withdraw(amount: Double) pre SufficientFunds: amount <= self.balance
>```
>```FOL
>∀a ∈ BankAccount: balance(a) ≥ 0
>
>∀a ∈ BankAccount, ∀amt ∈ Double: deposit(a, amt) → balance(a)_after = balance(a)_before + amt
>```
## OCL Postconditions Example#
BankAccount(deposit)
- context BankAccount::deposit(amount: Real) post BalanceIncreased: self.balance = self.balance@pre + amount
- After deposit, the balance increases by the deposited amount.

>[!EXAMPLE] OCL & FOL Deposit Example
>```OCL
context BankAccount::deposit(amount: Double) post BalanceIncreased: self.balance = self.balance@pre + amount
>```
>```FOL
> ∀a ∈ BankAccount, ∀amt ∈ Double: deposit(a, amt) → balance(a)_after = balance(a)_before + amt
>```

## OCL Invariants Example
BankAccount(balance)
- context BankAccount inv PositiveBalance >= 0
- The balance must never be negative.

---
# UML Behavioural Modelling
**Purpose** - Show dynamic behaviour of the system.

**Diagram Types:**
- Sequence Diagram: Interactions between objectives over time
- Activity Diagram: flow of operations or control

E.g.
- BankAccount despoit sequence:
  - Customer calls deposit(amount)
  - BankAccount updates balance
  - Notify Customer

![[CO3408 L4 - Sequence Diagram.png]]
## Sequence Diagram Example
- Shows interactions between objects in time order
- Focus on messages / calls across lifelines
- Useful for scenario walkthroughs (e.g. use-case realisation)

---
# Combing UML & OCL
- UML Diagrams show structure and behaviour
- OCL adds formal precision: invariants, preconditions, postconditions

Example mapping:
- UML ElementOCL ConstraintBankAccount.balanceinv PositiveBalanceBankAccount.withdraw()pre SufficientFunds, post BalanceUpdatedFan.activate()
## Advantages & Limitations
### Positive for...
- Improves model accuracy
- Detects design errors early
- Supports tool-based verification
- Encourages disciplined thinking
### However...
- Can be complex for beginners
- Doesn't specify system behaviour (not executable)
- Requires modelling tool support

---
# Strengths & Weaknesses of OCL
## Strengths
- Precise & unambiguous - removes informal interpretation
- Declarative & side-effect free - safe for specification
- Fits UML natively - Attaches to classes, operations, states
- Rich Expressiveness - Supports FOL-style quantifiers & sets
- Good for Contracts - Invariants, Pre/Post Conditions, & guards
## Limitations
- No execution / behaviour - only constraints, does not simulate
- Not Turing Complete - cannot express arbitrary algorithms
- Learning Curve - Logic-based thinking can challenge modellers
- Tooling Uneven - Supports varies by UML environment
- Can be ignored - constraints not enforced unless tooling integrated.

---
# Summary
- UML + OCL = Precise, Verifiable Models
- OCL Types: invariants, preconditions, and postconditions
- Behavioural Diagrams show object interactions / workflow
- Applying examples (BankAccount, Temperature Control) demonstrates real-world usage.

---
# Resources
[IBM Rational Software Delivery Platform: UML Modelling (2 of 9)](https://www.youtube.com/watch?v=7yEqm_YIhBc)

---
[[CO3408 Lecture 5 - From Structure to Behaviour with UML & OCL]]