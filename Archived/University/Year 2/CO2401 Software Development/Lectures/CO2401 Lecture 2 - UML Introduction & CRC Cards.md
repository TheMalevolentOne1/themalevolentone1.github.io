---
tags:
  - CO2401
  - Software-Development
---
[[CO2401 Software Development]]
[[CO2401 Lecture 1 - Introduction to Requirements & Use Cases]]

---
# Lecture Documents
[[CO2401 Lecture 2.pdf]]
[[CO2401 L2 - Lab 2 - Worksheet.pdf]]

---
# Recap ([[CO2401 Lecture 1 - Introduction to Requirements & Use Cases]])

**Requirements** are formal descriptions of what software should do. They outline the functionalities, features, constraints, and characteristics that a software must have to meet the needs and expectations of users and stakeholders.

---
# OO (Object-Oriented) Analysis and Design
Why draw diagrams?

Before building something, we often create drawings to describe its look and behaviour.
- Plans / Blueprints

UML is a language that was discussed in the first lecture.

The purpose of modelling a language is to represent the key features of a system.
## Candidate Classes
Deciding the overall architecture of an OO (Object Oriented) system can be hard.
- What objects/classes should we create?
- How many objects should we create?
- Should we use inheritance/abstract classes

There are numerous ways to build a system, a way of deciding how objects/classes maybe needed is by looking at the User Stories and Use Case model.
## Class, Responsibility and Collaborators - CRC Cards
A collaborative approach to determining the overall system architecture.

![[Empty-CRC-Card.png]]
<sub>Empty CRC Card Example</sub>

Describe each class on a small card with the following details:
- Name of class
- List of responsibilities
  - Things it **knows**
  - Things it **does**

Collaborators (Deprived Classes)
  - Other classes used by this class.
### Purpose of CRC Cards

Used as a collaborative medium to brainstorm division of a programs components. 

Allows the team to build a common mental model of how a program might work.

Allows quick visual test of alternative approaches/architecture before development begins.

Can be useful when changing/restructuring a program.
### OO Design with CRC Cards
Identify User Stories/Use Cases (Scenarios)

Finding entities in the system
- Things in specification or domain or description

Filter out duplicate and insignificant entities

Assign responsibilities to classes
- The operations that a class supports

Identifying collaborations between classes
- Represent relationships between classes

Check that structure will support scenarios
### Using CRC Cards
Use to develop and check design
- Walk through typical scenarios 'Use Cases'

Expect to modify

Use in group discussion:
- Anthropomorphise
  - Pretend the class is 'alive' an active participate
- Keep related cards close together
- Allows for different perspectives to be heard
- Identify common patterns/outliers
### CRC Cards Advantages
Suited to iterative development

Easy to add/remove and rearrange cards

Good for collaborative communication

Can be used very easily in development
- e.g. in foundations stage of DSDM

Finished OO (Object Oriented) analysis with CRC cards can provide architectural design guidelines.

Encourages development team to 'role play' through different usage scenarios.

New issues can be identified e.g. missing component
### CRC Cards Disadvantages
Requires team participation

Both from business side and developers

Can become difficult to manage with very large systems

Too many cards to manage

Does not track sequence when running through scenarios

Lacks detail

Some organisations will require more formal representation of overall architecture
### Example: CRC analysis
Perform a **CRC analysis** for a library:

Scenarios:
- User returns book
- User borrows a recording
- User searches catalogue for a journal
- Damaged item is removed from the catalogue

Expand use cases or user stories.

Identify candidate classes.

Create CRC Cards

Walk through scenarios.
#### User Stories (Library Example)
Tip: Look for nouns

As a **user** I want to be able to get a **return receipt** for my **book** so that I don't get mistakenly fined.

As a **user** I want to be able to borrow a **recording** so I can watch it at **home**.

As a **student** I want to be able to search the **catalogue** for a **journal** so I can get a good mark on my **assignment**.

As a **librarian** I want to remove a **damaged item** from the **catalogue** so that it can be repaired.
#### Identify some potential classes (Library Example)
![[CRC-Potential-Classes.png]]
<sub>CRC Potential Library Classes</sub>
![[potential-classes-crc-2.png]]
<sub>Library Example: Identifying classes</sub>
#### Create CRC Cards (Library Example)
![[create-crc-cards.png]]
<sub>Library Example CRC Cards</sub>
### Walk through scenario
User borrows a book (has a library card number and a book number to borrow)

How do we know they are a registered user?

With the current CRC cards we don't.

![[CRC-Cards-Correct.png]]
<sub>CRC Cards now with User List.</sub>

**User** **borrows** a **book** (has a **library card number** and a **book number** to borrow)
- we check UserList for details on that specific user (collaborates with user class to return user object for that user) if that user exists.
- User object checked for what items they already have (can they borrow more?) if eligible to borrow.
- We check catalogue for item to be borrowed? if item exists then return item object of the appropriate book.
- Item object checked for reference only: if not reference only
- Item object checked if it is out on loan: if available
- User object borrows item
  - adds item to their borrowed items list
  - sets items borrowed status to "borrowed"

### Formalising CRC Cards

Swap **responsibilities** for properties/methods

Properties (things for class **knows**) can also be written on the back of the card.

![[formalising-crc-cards.png]]
<sub>Formalising CRC Cards</sub>
### Why Use CRC Cards

Simplicity. 

At a high level they can be used with clients.

CRC cards encourage discussion as it promotes learning between team members. 

Participants can experience how the system will work.

Check consistency of structure and use cases

Incremental
- in early design don't worry about details
- in detailed design can record properties on back

---
# Class Diagram

Shows the different objects, their relationship, their behaviours, and attributes.

Provide visual representation of the structure and relationship of classes in a system.

Classes are the building block of objects
- Class diagrams are the building blocks of UML
## Why Class Diagram?
To illustrate data models for information systems, no matter how simple or complex

To understand the general overview of the schematics of an application.

Visually express any specific needs of a system and  that information  to achieve business goals.
## Components of Class Diagram
![[annotated-crc-card.png]]
<sub>Annotated Class Diagram</sub>
## Member Access Modifiers
Classes have different access levels depending on visibility.

| Access Level | Symbol |
|--------------|--------| 
|Public        | (+)    |
|Private       | (-)    |
|Protected     | (#)    |

![[example-class-diagrram-with-data-modifers.png]]
<sub>Class Diagram Example</sub>
## Class Relationships

![[Class-relationship-diagram.png]]
<sub>Class Relationship Diagram</sub>

![[animal-classes.png]]
<sub>Class Diagrams for various animals</sub>

### Inheritance
Class Diagrams with titles in _italics_ or the class name may be wrapped in **<<'class'>>** (Single quotes not needed) are **abstract classes**.

![[abstract-class-inheritance.png]]
<sub>Class Diagram Inheritance</sub>
### Associations
![[Association-Class-Diagrams.png]]
<sub>Class Diagram Association</sub>
### Aggregation
Aggregations are used to represent a "part of" relationship and indicate that one class (the whole) contains or is composed of one or more instances of another class (the part).

![[aggregation line class diagrams.png]]
<sub>Class Diagram Aggregation</sub> 
### Composition
Composition indicate a strong "has a" relationship between two classes.

![[composite example.png]]
<sub>Class Diagram Composition</sub>

In the example above, the **classes** *Lobby* and *Bathroom* classes cannot exist without the **Hotel** class.
### Multiplicity
The multiplicity number is used to indicate the number of instances in a class:
**"0..1"**: Zero or one instance
**"1"**: One exact instance
**"0..\*"**: Zero or more instances
**"1..\*"**: One or more instances
**"n"**: Exactly `n` instances

![[Multiplicity.png]]
<sub>Class Diagram Multiplicity</sub>

---
# Lecture Summary

UML provides notation for modelling system

An object is some entity relevant to a system
- it has behaviour - methods
- It has state - properties / attributes

A class is a blueprint for objects
 - Defines the properties and methods of objects

Class Diagram shows types of entity and their relationships

CRC cards allow developers to role-play objects in a system walkthrough.

---
[[CO2401 Lecture 3 - Domain Modelling]]