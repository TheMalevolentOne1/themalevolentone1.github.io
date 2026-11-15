---
tags:
  - CO2412
  - Computational-Thinking
---
[[CO2412 Computational Thinking]]
[[CO2412 Lecture 9 - BFS & DFS]]

---
# Lecture Documents
[[CO2412 Lecture 10.pdf]]
[[CO2412 L10 - Lecture Transcript.pdf]]
[[CO2412 L10 - Lab 10 - Binary To ASCII Exercise.pdf]]

---
# Object Based Modelling & ASCII Codes
## Assignment Demo Sessions
Commenced Week 12 and onward.
No additional explanations required (Verbal Assignment).
Make sure the code is the same as uploaded.
Code will be assessed based on Assignment Brief.
No two consecutives unjustifiable absence
Laptops expected to be charged
## Object Based Programming
A component based approach to Software Development. Systems are created first by defining a set of classes.

The system can then be expanded by further adding capabilities to existing classes, so that new systems can be created from existing classes (Inheritance (Reuse)) which reduces development time.
## OBP and UML (Unified Modelling Language)
The UML facilities the modelling of those classes/objects.

Programmers can use class diagrams to create them for the purposes of organising Software Development.
### UML Example
![[UML Example.png]]

The world is made up of objects, and software typically simulates the real world, as such the program mimics the behaviour of Real World objects.

E.g. A calculator.

This is generally true whether conforming to an OOP methodology or not.
## UML Packages
Provides organisation for diagram elements
Packages are represented as a tabbed folder.
![[UML Packaging.png]]

---
# Object Modelling
## Objects & Classes
The class can also be used as a template or factory for making objects.

The object structure has Properties (Public/Protected/Private) members and methods which specify the object's behaviour, which should be consistent with the operations, being expected to be carried out.

Properties and Behaviour together are referred to as Features and a class is used to categorise these properties and behaviours.
### An Example
![[Car UML Example.png]]
In the class `Car` as in the image above, it is specified that the car has specific **attributes**:
- Car Make
- Car Model
- Car Engine Size
- Car Gears

The `Car` class also has a set of methods:
- Turn On Ignition
- Take Passengers
- Reverse
## Abstraction
Object-Based programming models a particular part of the real world.
- The more attributes and behaviours that are included the more it becomes to its real world counterpart.

As system designers it is imperative that relevant choices are made to ensure the behaviour of the class is able to **accurately** match its real-world equivalent.

The process is known as **Abstraction**
## Inheritance
Cars, trucks, motorcycles, buses, are all forms of `Vehicles`.

In OOP terms they're sub-classes to the Vehicle **Base Class**.

The `Vehicle` **Base Class** has the following attributes:
- ignition
- engine
- gear

With the following methods for its behaviour:
- Turn Ignition On
- Turn Ignition Off
- Engage Gear
- Engage Neutral

In OOP using `Vehicle` as the *Base Class* for the `Car` as the example, refers to Inheritance, where each `Car, Truck, Motorbike` is a sub-class to the `Car`.

Each sub-class can add its own attributes and behaviours.
## Polymorphism
A method can have the same name with different classes, by using Polymorphism so that the sub-classes are recognised the same as the Common Base Class `Vehicle`.

From a modelling point of view, this allows the modeller to use the language of the client rather than make up artificial terminologies to capture the requirements.
## Encapsulation
Methods and attributes are under access modifiers. (Public, Protected, and Private)

Most Electronics as an example work this way. The user doesn't care how their TV works, they simply understand that it can be turned on, off and a channel can be selected.
## Message Sending
In a system, objects work together. This is done by sending messages to one and another.

e.g. in the TV example as above, the TV and Remote communicate with infra-red technology, which processes the command and processes the output by turning the tv on, off or changing the channel.

A different message is sent depending on the method wanting to be triggered.
## Associations
Objects are typically related to each other in some manner. 

An example of an **Unidirectional Association** i.e. we drive a car, the car doesn't drive us.

Other associations include
- bidirectional e.g. marriage
- objects can also be associated in different ways (e.g. married partners who work together are both married, and yet still colleagues to each other.)
### Multiplicity
Classes can also associate with more than one other class.
A person can travel by car and a person can also travel by bus.
### Aggregation
A computer consists of many parts; monitor, keyboard, mouse, CPU, SSD or HDDs, etc
A computer is an aggregation of its components which is another form of association.
### Composition
A strong relationship  between an aggregate object and its component objects.
A CPU has little use if the computer is dispensed.

Objects and Associations are the **Spine** of a system.
## Attributes
Attributes are a property of a class.
Classes may have **0 or greater** attributes.
Every object has a value for every attribute.
e.g.
Optionally: Associate a type with an attribute with a default value.
`{ make::String }` without default value
`{ gears::Integer = 5 }` with default value
## Operations/Methods (Class Behaviours)
A method is something the class can do, which can optionally accept parameters, and return values (functions).
e.g.
`{ takePassengers(p:Integer) }` with parameter
`{ reverse():Boolean }` with return
## Hiding Information
Choosing which information to show, to make diagrams more readable uses ellipses to illustrate which aspects are hidden.

Angle brackets are also used to group information.
![[class diagram 3 tables.png]]
A **forth box** can also be used to indicate a classes responsibilities.
## Constraints
A more formal way is to add a constraint to the class.
e.g. with constraints
`{ engineSize = 1400cc or 1600cc or 1800cc }`
`{ gears = 5 or 6 }`
## Identifying Classes
Classes are generally the nouns that describe the entities.

Attributes are nouns related to class nouns.

Operations/Methods are the verbs (The things the class does).

---
# Raw Data
All data on a computer is stored as *binary information* - collection of 0s and 1s.

Computers are very simple and only deal with a few concepts:
- Electronic Circuit ON or OFF
- Magnetic state UP or DOWN
- Light ON or OFF
- Frequency A or B
- Voltage HIGH or LOW

This allows data to be communicated or stored in different formats.
## Binary Data
Typically, people use *base 10* the decimal system using the digits 0 - 9.
## Hexadecimal
![[hexadecimal.png]]
![[Keyboard ASCII.png]]
What does it say: H e l l o

---
[[CO2412 Lecture 11 - Inheritance Based Structures - Interfaces]]