---
tags:
  - CO1605
  - Assignment-Report
---
[[CO1605 Systems Analysis and Database Design]]

---
# Assignment Brief
[[CO1605 Assessment 1 Brief.pdf]]

---
# Assignment Feedback
Unrecoverable, during third year. Turn-It in session expired.

---
# Dinoland Report
## Contents Page
1) Introduction
2) Analysis
   a) Use Case Diagram
   b) Activity Diagram
   c) Textual Description
3) Requirements
   a) Functional Requirements
   b) User Stories
   c) Non-Functional Requirements
   d) MoSCoW Analysis
     i) Must Have
     ii) Should Have
     iii) Could Have
     iv) Won't Have
 4) Concepts
    a) Lifecycle Options
    b) Importance of User Input
 5) References
## 1) Introduction
DinoLand a privately own museum owned and run by a palaeontologist called Florence, boasts a massive and growing collection of fossils from various places around the world, and aims to become the largest collection in the area. Florence founded the museum around a decade ago and has a limited budget dedicated for improving the viability of the museum, she intends to do this by implementing a new information new system. DinoLand consists of three main areas; the fossil collection which houses all the museum’s fossils and information about them, the natural history room which contains information about history and the museum itself, and the gift shop where customers can buy souvenirs to remember their time spent in the museum. The museum is open from 10 am to 6 pm and employs twelve members of staff. Staff have a range of responsibilities, from gift shop stock control and sales to serving customers as tour guides and performing cleaning duties. The museum uses a spreadsheet to store information on their artefacts, as well as how many they have. Included in the spreadsheet are the items that have been borrowed from other museums. Containing various details from item description, age, origin and cost. The gift shop’s spreadsheet stores information on stock levels, purchases from sales, and what items have been sold like the dinosaur and fossil related items. The sales are calculated and compared for accuracy. However, Florence has noticed some inconsistencies, in her records as the museum continued to expand therefore leading her to seek a more reliable system, that will solve her inconsistent sales issues and that fits her budget restraints.
## 2) Analysis
### a) Use Case Diagram
![[CO1605 - A1 - Dinoland Use Case Diagram.png]]
<sub>Dinoland Use Case Diagram</sub>
### b) Activity Diagram
![[CO1605 - A1 - Dinoland Activity Diagram State Transition Diagram.png]]
<sub>Dinoland Activity Diagram</sub>
### c) Textural Description
| **Use Case Name** | Buy Products |
|-------------------|--------------|
| **Description** | To capture a sale and its payment. |
| **Actors** | Customer (Initiator), Cashier |
| **Pre-conditions** | Customer wishes to buy something. |
| **Post-conditions** | A purchase has been made and recorded in the spreadsheet. |
| **Main Success Scenario** | 1. Use case begins when a customer enters the gift shop's till with an item to purchase.<br>2. The cashier records the details of the item into the spreadsheet.<br>3. The cashier calculates and informs the customer of the total cost of the sale.<br>4. The customer pays with cash.<br>5. The use case ends when the customer leaves with the purchased item. |
| **Alternate Paths** | **4a.** The customer has an insufficient amount of cash. Rejoin at **5i**.<br><br>**4b i.** The customer pays with card.<br>**4b ii.** The card service authorises the payment.<br>**4b iii.** The card service refuses the payment.<br><br>**5i.** The use case ends with the customer being unable to purchase the item and leaves. |

# 3) Requirements
### a) Functional Requirements
- The new information system should allow staff to manage and update the museum’s fossil collection, including new fossils either borrowed from other museums, or obtained from suppliers.
- Staff will be able to update the national history room’s information to ensure that it is up to date.
- The new system will allow staff to maintain the gift shop’s stock, ensuring that basic functionality is permitted, such as adding new items, tracking stock levels and updating prices on products or admission fees, as well as allowing staff to generate, print and provide customers with receipts.
- To maintain a level of sufficient security, user levels should be implemented to establish the various permission levels needed to facilitate the different areas of museum.
### b) User Stories
- As a customer, I want to be able to have access to various payment formats such as a choice between cash, card or both when purchasing products from the gift shop.
- As a stock manager, I want to be able to easily see the available stock, and which items may need to be ordered so that an accurate up-to-date stock level can be maintained and be able to account for any increases in purchasing that may occur.
- As a customer I want to be issued with a receipt so that if the product I have purchased, needs to be returned, for example if there is a problem or fault with it then I want to be able to use a receipt to be able to return or exchange the product to the gift shop.
### c) Non-Functional Requirements
- The museums new system should be able to handle, any influxes in activity such as if there is a school trip the system should be able to accurately maintain functionality due to the increase of usage.
- The new system must be able to be cost-effective to be able to fit and be maintainable within the limited budget provided for its creation.
- The system should be easy to use, so that it is easy for staff or customers to be able to use as necessary and to make relevant information easily available.
- The system should comply with any relevant legislation.
### d) MoSCoW Analysis
#### i) Must Have
- The system must comply with relevant legislation.
- The system must have the relevant user levels and permissions to maintain security.
- The system must be cost-efficient to fit within the limitations of the budget.
- The system must be user-friendly for the staff and customers.
- The system must be able to handle influxes in functionality, due to increased usage such as when school trips occur.
- The system must have support for maintainability and maintenance of the gift shops stock levels.
#### ii) Should Have
- The system should have the ability to allow staff to manage the information related to any fossils in the museum that have been borrowed.
- The system should have the necessary functionality, to maintain stock in the gift shop, ensuring that basic operations are in place to support it effectively.
#### iii) Could Have
- The system could have additional features for managing borrowed fossils such as tracking return dates or the conditions in which the fossils are in.
- Additional security levels, such as two factor authentication for staff to ensure that only the relevant staff have access to higher level permissions.
#### iv) Won't Have
- The system won’t have advanced features that are beyond the basic functional requirements needed to run the museum effectively.
- The system won’t have advanced monitoring systems that can handle temporary increases in activity.
- The system won’t have highly specialised software that wouldn’t fit the museum’s purpose.
# 4) Concepts
## a) Lifecycle Options
There are SDLCs (Software Development Life Cycles) that fit specific use cases. Different methodologies behind the development of software can include:

The Waterfall methodology, which takes a sequential approach to creating a piece of software, as it requires a lot of planning and research into the various problems that exist with a system, in order to be effective during the developmental and production stages during usage. As a model, it requires a lot of consideration regarding the type of project it is being used on and requires reassurance in the project that its requirements are unlikely to change in a way that is significantly substantial to the designs of the project, as this could hinder its effectiveness. Due to this for the museum, it may fit, as its inability to be a flexible strategy, may not pose a risk as the museum is unlikely to have its requirements vastly change in a way that would make it not ideal. (1)

The Agile methodology is an iterative and incremental approach to software development, which prioritises flexibility and customer feedback in its strategy, allowing the possibility of requirements to change, in varying numerous substantial ways, which means that in projects more likely to alter the requirements and design features of the software it is being used to create, leads to a more sustainable pace for the teams using it. However, a downside to the Agile methodology is that as a result of its flexibility it leads to more confusion regarding its endpoint, which can be detrimental to health of workers, as it can be demotivating to have a lack of an end. Due to the Agile methodology’s structure, it would not be an effective or ideal strategy for the museum to use. (1)
## b) Importance of User Input
The value of user input is imperative and invaluable during the process of designing and implementing a new system, as it allows that the experience the end user has, meets and validates the requirements set for the system’s end goal, as well as providing helpful feedback from users in improving the existing user experience, to make it easier and more viable for usage. User input is also important as understanding the user’s needs are vital to the success or failure of a new system during its implementation stage, as user’s can state positive and negative aspects and suggest improvements based on their feedback. A downside to this is that the feedback given may be biased, due to the basis of that it is based around a user’s opinion. Another benefit that user input can provide is that it can help identify issues early, which allows for a more reliable and effective system in the long run. By actively communicating with user’s this can help enforce a sense of trust and collaboration around the developers of the new system and its processes and its consumers, allowing for a high level of transparency and clarity. In conclusion by embracing user input and feedback it can allow for a more user-centric system to be developed allowing them to be more successful and impactful long term.
# 5) References
# References
- (1)   Thesing, T., Feldmann, C. and Burchardt, M. (2021) _Agile Versus Waterfall Project Management: Decision model for selecting the appropriate approach to a project_, _Procedia Computer Science_. Available at: [https://www.sciencedirect.com/science/article/pii/S1877050921002702](https://www.sciencedirect.com/science/article/pii/S1877050921002702%20) (Accessed: 09 February 2024).
- (2)   Callahan, J. and Lasry, E. (2004) _The importance of customer input in the ... - wiley online library_, _The importance of customer input in the development of very new products_. Available at: [https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-9310.2004.00327.x](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-9310.2004.00327.x%20) (Accessed: 09 February 2024).

---
[[CO1605 Systems Analysis and Database Design]]
