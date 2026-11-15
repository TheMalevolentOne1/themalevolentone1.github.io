---
tags:
  - UCLan
  - Software-Development
  - CO2401
---
[[CO2401 Software Development]]

---
# Lecture Documents
[[CO2401 Lecture 1.pdf]]
[[CO2401 L1 - Lab 1 - Worksheet.pdf]] 

---
Useful reading materials:
1) The Art of Unit Testing 2nd Edition - Roy Osherove
2) Sommerville. I. (2016) Software Engineering. Tenth Edition. Global Edition. Harlow: Pearson Education Limited

| **Assignment Components** | **Mark Weighting** |
| ------------------------- | ------------------ |
| Coursework                | 50%                |
| Exam                      | 50%                |

---
# Recap
## What is Software?
Software is a computer program associated with documentation. If software is made for a specific requirement it is called a **software product**.
## What is Software Development?
One of the main activities in software engineering is the process of **software development**, in which a software product is built using well-defined scientific principles, methods, and procedures. 

It requires extensive research and requirement gathering to be able to design, model, and develop the software product.

![[Software-Development-Process.jpeg]]
<sub>Diagram of Software Engineering process.</sub>

---
# Software Development Life Cycle (SDLC)

![[Waterfall.jpg]]
<sub>Diagram of the waterfall methodology</sub>

---
# Requirements Engineering and Use Case Modelling
## What are Requirements?
- **Requirements** are descriptions of the **services** that a software system must provide and the constraints under which it must operate.
- **Requirement Specification** is a structured document that sets out the services the system is expected to provide. Therefore should be **precise** so that it can act as a contract between the system procurer and the software developer.
## Understanding Requirements
- **Whose** requirement?
- A system's property that provides value to its **stakeholder**
- To understand requirements you need to understand your stakeholders.

![[Stakeholders-Software-Devs-Lecture-1.png]]
<sub>Image above Stakeholders in a software product.</sub>

---
# Types of Requirements
## User Requirements
- Statements in natural language plus diagrams of the services the system provides and its operational constraints
- Written for customers
## System Requirements
- A structured document setting out detailed descriptions of the system's functions, services, and operational constraints
- Defines what should be implemented so may be part of a contract between client and contractor.

---
# User VS System Requirements
The following is an example regarding a system called MentCare, that handles mental health care patient information.
## User Requirement Definition
1. The MentCare system shall generate monthly management reports showing the cost of drugs prescribed by each clinic during that month.
## System Requirements Specification
- 1.1 A summary page of the drugs prescribed, their cost and the prescribing clinics should be provided on the last working day of each month.
- 1.2 The system shall generate the report for printing after 17:30 on the last working day of the month.
- 1.3 A report shall be created for each clinic and shall list the individual drug names, the total number of prescriptions, the number of doses prescribed and the total cost of the prescribed drugs

---
# Requirements Engineering (RE)
**RE** is the process of understanding and defining what services are required from the system and identifying the constraints on the system's operation and development. Critical stage in the software process, as such that a mistake in this stage inevitably lead to later problems during the system's design and functionality.

The **RE** Process includes the following:
- Feasibility Study
- Requirements Elicitation and Analysis
- Requirements Specification
- Requirements Validation
- Requirements Management
## Feasibility Study
Before beginning requirements engineering (RE) a company may conduct a feasibility study.

The feasibility study mains to answer three main questions:
1) Does the system contribute to the overall objectives to the organisation?
2) Can the system be implemented within schedule and budget using current technology?
3) Can the system be integrated with other systems that are used?
## Requirements Elicitation and Analysis
it is an iterative process that can be represented as as a circular process of activities.

Two approaches to requirement elicitations include:
- Interview
- Observation or ethnography

![[Requirements-Elicitation.png]]
<sub>Requirements Elicitation Diagram</sub>
## Requirements Specification
A process to formally document the user and system requirements when creating a software requirement document.

It can be written in a variety of ways:
- Natural language specification: Expressive and universal but could be vague, ambiguous or misinterpreted
- Structured specification: Written in a standard way e.g. using templates
- Use cases: A way to describe the user and the system interactions
- Software requirements document: an official statement of what software developers should implement.
## Requirements Validation
A process of checking the requirement for:
- Validity: check that the requirements reflect what the real needs of the system users
- Consistency: there shouldn't be different descriptions of the same system function
- Completeness: the requirement document should include requirements that define all functions and constraints intended by the system user.
- Realism: using current knowledge of technology, check that requirement can be implemented within the budget.
- Verifiability: Conduct tests to demonstrate that the delivered system meets each of the specified requirements
## Requirements Management
Requirements management is the process of understanding and controlling changes to system requirements.

Planning is an essential first stage in the requirements management process and therefore tools can be used to support it for:
- Requirements storage
- Traceability management
- Change management

![[Requirements-Management.png]]
<sub> Diagram of requirements management</sub>

---
# Agile Methods and Requirements
Many agile methods argue that producing detailed system requirements is a waste of time as the requirements change so quickly.

Agile methods usually use incremental requirements engineering and may express requirements as 'user stories'.

While this is practical for business systems, it poses problematic for systems that require pre-delivery analysis (e.g. critical systems) or systems developed by several teams.
![[agile-methods.png]]
<sub>Agile Methods</sub>

In practice RE (Requirements Engineering) is an iterative process. The output of an RE process is a system requirements document. 

The early process most effort is focused toward understanding:
- High-Level business requirement and non-functional requirements
- User requirements for the system

Within the outer rings of the diagram below more effort will be devoted to eliciting and understanding:
- Non-Functional Requirements
- Detailed System Requirements

---
# Overview
User Stories:
- Brief Statement of actor, need and purpose.

Structured Requirements Document:
- Complete, consistent set of requirements in structured language.

Use Case Model:
- Set of use case descriptions
- Diagram of actors and use case names

---
# Functional and Non-Functional Requirements
Software system requirements are often classified as functional and non-functional requirements.

Functional requirements are a statement of services the system should provide:
- How the system should react to particular inputs
- How the system should behave in particular situations

Non-functional requirements are constraints on the services or functions offered by the system. This includes:
- Time constraints
- Constraints on the development process
## Functional Requirements
Describes what the system should do. System services or functionality.

These requirements depend on:
- The type of software
- The expected users of the software
- The general approach taken by organisation when writing the requirements

When expressed as **user requirements** functional requirements should be written in natural language so that users and managers can understand them. They should describe the functional system requirements:
- System functions
- System inputs and outputs and exceptions in detail.
### Example Functional Requirements for MentCare System
A user shall be able to search for the appointments lists for all clinics.

The system shall generate each day, for each clinic, a list of patients who are expected to attend appointments that day.

Each staff member using the system should be uniquely be identied by their 8-digit employee number.
## Non-Functional Requirements
Non functional requirements that are those not directly concerned with the specific services delivered by the system to its users. These define system constraints and properties such as:
- Reliability
- Response time and storage requirements

Non-functional requirements may be more **critical** than functional requirements. If these are not met, the system may be useless.

**Product Requirements**:
Requirements which specify that the delivered product must behave in a particular way e.g. execution speed, reliability, etc.

**Organisation Requirements**:
Requirements which are consequence of organisational policies and procedures. E.g. process standards used, implementation features, etc.

**External Requirements**:
Requirements which arise from factors which are external to the system and its development process. e.g. interoperability requirements, legislative requirements, etc
### Non-Functional Requirement Types
![[Non-Functional Requirements.png]]
<sub>Non-Functional Requirements</sub>
### Example Non-Functional Requirements for MentCare
**Product Requirement**:
The MHC-PMS shall be available to all clinics during normal working hours (Mon-Fri 8:30-17:30). Downtime within normal working hours shall not exceed five seconds in any one day.

**Organisational Requirement**:
Users of the MHC-PMS system shall authenticate themselves using their health authority identity card.

**External Requirements**:
The system shall implement patient privacy provisions as set out in NStan-03-2006 priv.

---
# System Requirement Document
1) Introduction: Purpose, Scope, Overview

2) System Overview:
 - Functional Requirements
 - Usability Requirements
 - Performance Requirements
 - System Interface, Operations, Modes and states, physical characteristics
 - System Security
 - Information management
 - Policies and regulations
 
 3) Verification (Checking): same structure as section 2
 4) Appendices: Assumptions and Dependencies; abbreviations.
## Requirement Language
Writing software requirements involves using a structured and specific language to articulate the functionalities, constraints and characteristics of a software system.

The language is crucial for effective communication between stakeholders, including developers, testers and end-users.

Requirements that are mandatory and therefore the language used to describe them should indicate such, therefore it is recommended to use the word `shall`. Preferences or goals that are desirable should use the word `should`. Anything else can use `may`. **MoSCoW** Analysis is another way of writing this.
### Guidelines for Writing Requirements
- Use text highlighting to identify key parts of the requirement
- Avoid the use of computer terminology
- Include an explanation (rationale) of why a requirement is necessary

### Requirements should be:
- Unambiguous
- Consistent with other requirements
- Complete: measurable and detailed
- Includes only one requirement
- Feasible
- Verifiable
### Syntax of Requirements
[<font color="blue">Condition</font>], [<font color="orange">Subject</font>], [<font color="red">Action</font>], [<font color="lightgreen">Object</font>], [<font color="lightblue">Constraint</font>]

- <font color="blue">When a hostile plane is detected, </font><font color="orange">the system</font> <font color="red">shall launch</font> <font color="lightgreen">the missile</font> <font color="lightblue">within 0.002 seconds.</font>
- <font color="blue">If the student is enrolled, </font><font color="orange">the system</font> <font color="red">shall register</font> <font color="lightgreen">the student</font> <font color="red">on the module.</font>
- <font color="orange">The system</font> <font color="red">shall display</font> <font color="lightgreen">the results</font> <font color="lightblue">at midnight.</font>
- <font color="orange">The light</font> <font color="red">shall flash</font> <font color="lightblue">within 2 seconds.</font>

---
# Stakeholder Requirements Document
Introduction:
- Purpose, Scope, Overview, Stakeholders

Business Management Requirements:
- Business Context, Goals, Information Context

Business Operational Requirements:
- Processes, Policies, Rules, Constraints, Quality

User Requirements
Concept of Proposed System
Project Constraints

---
# Problems with Requirement Elicitation
Stakeholders don't really know what they want, and therefore they express requirements within their own terms. Different stakeholders may have conflicting requirements, as a result.

Organisation and politcial factors may influence the system requirements.

The requirements may change during the analysis process, as well as new stakeholders may emerge and therefore the business environment may change, which leads to the requirements potentially needing changing along with it.

---
# Introduction to Unified Modelling Language (UML)
A set of standard notations for modelling object-oriented systems. It is not a methodology as it defines diagrams and does not defined how to build a system.

UML is a language used for software-intrusive systems, aspects include:
- Visualising
- Specifying
- Designing
- Constructing
- Documenting

A model is an abstract representation of something that is too complex to work with in its entirety.

UML can be used across all phases of the SLC (Software Development Life-Cycle):
- During analysis used to document business processes
- During implementation used to document methods and attributes of a class
- During deployment used to document hardware components of a syste
## UML Diagrams for Analysis
Use Case Model:
Diagram and Descriptions
- Functional System Behaviour - as seen by the **user**

Activity Diagrams:
- Models business activities (**processes**)

Class Diagrams: (_Design Not Specification_)
- Static Structure of the system
- Objects, Attributes, and Operations

---
# Use Case Model
System behaviour **from a user perspective**.
- Use Cases: Descriptions off interaction with user
- Diagram to summarise use cases and actors

Uses
- Defines what should be implemented
- Estimate overall project size
- Plan increments
- Help create test cases: define desired behaviour 
## Use Case Diagrams
Use case diagrams show the user's main interactions with the system.
![[Use Case Diagram Example.jpg]]
<sub>Example of a use case diagram for a student management system</sub>

**Actors** represented as stick figures could be humans or other systems.

The **box** around the diagram (except actors) indicates the system boundary.

**Lines** are what links the actors with the interactions.

**Class of interactions*** are represented as a named ellipse.
### Use Case Text

| **Title**             | **Info**                                                            |
| --------------------- | ------------------------------------------------------------------- |
| **Name**              | UC-1: Mark Coursework Summary                                       |
| **Summary**           | Lecturer attaches feedback and marks to a student’s work.           |
| **Rationale**         | Student will read feedback. Marks contribute to the module mark.    |
| **Primary Actor**     | Lecturer                                                            |
| **Users**             | Lecturer                                                            |
| **Preconditions**     | Student has submitted work, and the Lecturer is logged in.          |
| **Basic Process**     | 1. Lecturer opens work.                                             |
|                       | 2. Lecturer checks for plagiarism.                                  |
|                       | 3. Lecturer reads work, adding comments.                            |
|                       | 4. Lecturer allocates a mark to the work.                           |
| **Alternative Paths** | 1. In step 1, if the work cannot be opened, notify the student.     |
|                       | 2. In step 2, if plagiarism is detected, arrange a cheat interview. |
| **Postconditions**    | Feedback is available for the student.                              |
|                       | Mark has been recorded.                                             |

### Use Case MentCare System Example
![[MentCare System Use Case.png]]
<sub>MentCare Use Case Diagram </sub>

---
# Lecture Summary
Requirements can range from abstract statements to detailed specification
- Agile approaches not always appropriate

UML a set of diagramming tools to model/describe a system
- Can be used from requirements not engineering
- Through to domain analysis
- Through to system design

Use Case Models used to describe a system's functionality and users interactions with the system
- From a user perspective, can be understood by the client
- Can be used in both traditional and agile development.

---
[[CO2401 Lecture 2 - UML Introduction & CRC Cards]]