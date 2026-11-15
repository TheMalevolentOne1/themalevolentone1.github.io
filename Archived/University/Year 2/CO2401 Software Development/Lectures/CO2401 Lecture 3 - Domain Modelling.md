---
tags:
  - ULan
  - CO2401
  - Software-Development
---
njh bn[[CO2401 Software Development]]
[[CO2401 Lecture 2 - UML Introduction & CRC Cards]]

---
# Lecture Documents
[[CO2401 Lecture 3.pdf]]
[[CO2401 L3 - Lab 3 - Worksheet.pdf]]

---
### Recap ([[CO2401 Lecture 2 - UML Introduction & CRC Cards]])

The previous lecture discussed CRC cards and class diagrams, as well as their different relationships.

![[Relationship-Class Diagram.png]]
<sub>Class Diagram Relationship Symbols</sub>

---

# Key Software Development Concepts

Abstraction: Using the right level of detail hiding irrelevant details

Modularity: Structuring a system into interacting components (modules) through decomposition of the system.

Coupling: Links between modules (Loose Coupling is good)

Cohesion: The simplicity of the purpose of module (High Cohesion is good)

---

# Object Oriented Design

Break system into _**classes**_ of objects with:
- Data (attributes)
- Functionality (methods) to manipulate the data

Helps provide a better match to reality than other development approaches.

Other objects interact (Collaborate) via:
- Calling each other's methods
- Must not directly change another objects data

Requirements are captured by a set of Use Cases
- Objects collaborate to deliver each Use Case.

#### Advantages of Object Orientation

Encourages good software engineering principles
- Abstraction:
  - Modelling of only appropriate domain entities in the code
  - Design Level (focus on **'what'**.)

- Encapsulation
  - Combining data and functionality in one entity
  - Hiding of inner workings from  other entities that don't need to see it
  - Implementation Level (focus on **flow**)

- Loose Coupling
  - Objects have minimum knowledge of each other

- Tight Cohesion
  - A good object has a single purpose

---
# Design: Working out how
UML diagrams become more detailed:
- Communication is aimed at developers not clients
- Detailed class diagrams
- Sequence diagrams
  - Show objects' roles in implementing use cases

- State diagrams for complex software classes
- Package diagram showing organisation of software
- Deployment diagram: physical layout of software

---

# Conceptualising the Domain

![[Conceptual domain.png]]
<sub>Diagram of conceptualising the domain</sub>

---

# Conceptual Class Model

![[Conceptual-Model.png]]

---

# What about the interface

![[interfaces.png]]

---

# Identifying Classes

Choosing suitable classes and attributes is crucial
- Avoid adding unnecessary complexity to the system

Creative Process
- There will be changes as you learn about the domain

Look for **things** in the text of the requirements:
- Objects represent "things" in the system domain so nouns and noun phrases can help identify possible classes
- The list of things give candidate classes for further analysis

#### Noun Phrase Example: Car Hire Company

##### CHC Example Information: 

The **CHC (Car Hire Company)** stocks **cars** of a **number of different models**. It may have **any number of cars** of each **model**. The **system** should for each **model** hold the **model's name** and **engine size**. No two **models** have the same name.

A **customer** can borrow any **car** of a particular **model** that is not currently out on **loan**. However, no **customer** can have more than 3 cars on **loan** at once. A hired **car** must be returned within 14 **days**. When a customer returns a car it immediately becomes available on **loan** to other customers.

Each car has a unique **Registration number**.

Each customer of the **hire company** has a **unique Customer ID**, the system also  holds each **customer's name**.

##### CHC Use Case Analysis (Methods)

_**Get Number Available**_: The **staff member** identifies the **model** of the car. The system displays the **number of cars available**.

_**List Models**_: The **staff member** identifies the **customer**. The **system** displays a **list** of **models** and **return date(s)** for the **car(s)** that the **customer** currently has out on **loan**.

_**Hire Car**_: The **staff member** identifies the **car** and the **customer** who is borrowing it. The **system** records the **fact** that it is no longer available for loan, due to the **fact** that the **car** is on **loan** to the **member** that was identified and the **date it was hired**.

_**Return Car**_: The staff member identifies the car. The system records the fact that this car is now available for loan and that it is no longer hired out to the customer who returned it.

Removing **synonyms** gives a list of [**Candidate Classes**](CO2401%20Lecture%202%20-%20UML%20Introduction%20&%20CRC%20Cards.md####%20Candidate%20Classes):
- Car Hire Company
- Car
- number of models
- number of cars
- model
- system
- model name
- customer
- loan
- day
- registration number
- customer number
- customer name
- staff member
- number of cars available
- list
- return date(s)
- fact
- date it was hired

##### Rejecting Candidate Classes

Is it simple property of some other candidate class?

---
[[CO2401 Lecture 4 - Detailed Design and Code Generation]]