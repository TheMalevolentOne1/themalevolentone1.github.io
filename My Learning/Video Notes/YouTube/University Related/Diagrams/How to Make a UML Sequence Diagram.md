---
tags:
  - Video-Notes
  - UML-Diagram
---
[[Video Notes]]

---

<iframe title="How to Make a UML Sequence Diagram" src="https://www.youtube.com/embed/pCK6prSq8aw?feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>

---
# Sequence Diagrams
Sequence diagrams are a type of diagram that show how objects in a system or classes in a code interact with each other.

They show the sequence of events.

They help demonstrate or show the requirements of a program.
## The Example
The example is the interaction that happens at ATM.
![[Stick-Figures-Objects-Sequence-Diagram.png]]  
<sub>In a sequence diagram people are represented by stick figures and objects by rectangles.</sub>

Should be in sequential order.
# Parts of ATM System (Classes)
- Person (actor)
- ATM (object)
- Bank Server (object)
- Bank Account (object)
## Lifelines
Lifelines are vertical hash lines that show the existence of an object or actor over time. Moving down the line indicates more time is passing.

Lifelines are created for every actor and object.

Think of the steps of the process.
# Process Description
The person will go to the ATM and put their card in.

That will be the first message.

Messages show the information being sent between objects. Sequence diagrams show the order of events.

This is done by, moving down the lifeline with each message.
## Expected Process
- **Actor** connects lifeline to ATM lifeline and label "Insert Card"
- The ATM verifies card by contacting the bank server lifeline.
- The **Return** or **Reply** Message, is sent back to the actor. Which are usually right to left. Dashed lines. (Receiving Object back to Requesting Object)
- The **Bank Server** responds back with "Card OK"
- The **ATM** goes back to the actor to "Request Pin" as this is requesting information from the user, the line is solid not dashed.
- In the event of two or more message sequences such as the card may or may not be valid. Alternative Frames are employed.
![[Sequence-Diagram-YT-Vid-UML.png]]  
<sub>From Video: Screenshot of Alternative Frame.</sub>

After the **ATM** has requested a pin, the user's response is a **return** message in a dashed line called "pin entered".

The ATM will then ask the bank server to verify the pin. Another alternative frame is employed here to account for the verification or rejection of the pin.

Success in the pin, will result in the **ATM** then asking the user "How much would you like to withdraw" once again the user responds with a dashed line to include the amount they wish to withdraw.

Unsuccess will result in the ATM rejecting the card.
![[Video-Notes-UML-Sequence-Diagram-P2.png]]
<sub>Sequence Diagram continued from above.</sub>
## Activation Boxes
Once all the steps processes are complete, the next step is to add the activation boxes.

Activation Boxes show when and for how long is performing a process. It shows at a glance when they are activate and when they are ideal.
![[Video-Notes-UML-Sequence-Diagram-Activation-Boxes.png]]  
<sub>Sequence Diagram: Activation Boxes</sub>