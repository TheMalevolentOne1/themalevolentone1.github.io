---
tags:
  - CO3008
  - Honours-Degree-Project
  - D2
---
[[CO3008 Honours Degree Project]]
[[CO3008 D1 - Proposal]]
[[CO3008 Assignment Brief Notes]]

---
# Brief Specification for D2
> [!PDF|orange] [[CO3008 Assignment Brief 2026 Final.pdf#page=1&selection=85,0,86,25&color=orange|CO3008 Assignment Brief 2026 Final, p.1]]
> > This deliverable will form the first three sections of your project report, and should consist of approximately 4000 words.

> [!PDF|orange] [[CO3008 Assignment Brief 2026 Final.pdf#page=2&selection=2,0,35,25&color=orange|CO3008 Assignment Brief 2026 Final, p.2]]
> ## [Introduction](#1.%20introduction)
>This should expand (or clarify) the problem space your project is situated in. 
> >- In this section you should clearly identify what the problem is and should be broken down into component parts where necessary. 
> >- You should discuss any appropriate standards and legal implications at this point.
> >- You should also indicate why the problem is significant and worthy of attention.
> >- You should discuss the impact of both solving and not solving your stated problem at this point. 
> >
> >- Finally you should discuss how you are going to work towards solving the problem. 
> >  
> >- You should state a single high level aim within the context of the problem defined and list 6 to 8 objectives that are progressive and measurable that work towards meeting that aim.

> Relevant Notes: [[CO3008 D2 - Introduction, State of The Art, Methodology]]

>[!PDF|orange] [[CO3008 Assignment Brief 2026 Final.pdf#page=2&selection=39,0,44,31&color=orange|CO3008 Assignment Brief 2026 Final, p.2]]
>## [State of the Art (Literature Review)](#2.%20State%20of%20The%20Art)
> >- This should be a review of the current body of knowledge in your chosen problem area and should clearly outline the boundary between what is known in your chosen area of work and what is not known. 
> >- This should be in the form of an academic literature review. 
> >- You should also note any different research methodologies that have been applied within the existing body of knowledge in your chosen problem area and note any implications for your own work.

> Relevant Notes: [[CO3008 Lecture 5 - State of the Art - Part 1]], [[CO3008 Lecture 6 - State of the Art - Part 2]].

> [!PDF|orange] [[CO3008 Assignment Brief 2026 Final.pdf#page=2&selection=48,0,57,49&color=orange|CO3008 Assignment Brief 2026 Final, p.2]]
>## [Methodology](#3.%20Methodology)
>This should outline a high level plan for how you are going to address the problem. 
> >- It may be informed by the methodologies identified in the ‘State of the Art’ section and should outline how your methodology is going help achieve all the objectives outlined in pursuit of the main aim presented in your introduction.
> >- You should discuss how you will progress through the objectives and how you will know when they have been completed. 
> >- If your practical work involves development, this section should also briefly discuss the development methodology that is to be used. 
> >- You should also outline your intended process for evaluation at this point (to check whether or not you have addressed the projects overall aim). 
> >
> >- Finally you should provide an expanded indication on how you plan to use your remaining time/resources on the project.

> Relevant Notes: [[CO3008 D2 - Introduction, State of The Art, Methodology]]

---
# Assignment Feedback
>[!success] 68 / 100 marks
## Supervisor
```
The academic style has improved compared to D1. The main aim and objectives are clearly articulated and appear reasonable. The work includes relevant and valid references; however, certain sections—particularly claims in the Introduction and methodological descriptions in the Methodology—would benefit from appropriate citations. Some conclusions require stronger justification and verification (for instance, the assertion that there are no mechanisms for timetable synchronization). Formatting of bibliography is not consistent. 
```
### Areas for Improvement
```
1.  Ensure that all conclusions are fully justified and verified. Support them with appropriate references.
2. Carefully review your citations and reference list to ensure accuracy and completeness. Verify that all methods and techniques discussed are appropriately referenced.
3. Incorporate screenshots of existing applications in D3 to provide clearer context and support the definition of requirements.
4. Adhere strictly to the template provided on Blackboard, ensuring that the original formatting remains unchanged.
5. Attend scheduled meetings with your supervisor to receive guidance and improve the quality of your deliverable.
```

>[!success] 68 / 100 supervisor marks
## Second Marker
```
Good coverage in introduction with a comprehensive (and perhaps ambitious) set of associated objectives. Some attempt to observe gaps in the literature. Methodology is discussed on an objective-by-objective basis, whereas an introduction to your options, analysis of your requirements, and selection of an overarching 'approach' to your project would have been preferred here (word count is within tolerance but is still invested in the wrong area here).
```
### Areas for Improvement
```
Introduce your sections (state-of-the-art; methodologies) to demonstrate your understanding of their utility. It is not clear why you have considered a literature review, or your approach to conducting or organising this. These concerns are best addressed via a 100–200-word introduction to summarise your approach.
```

>[!success] 68 / 100 second marker marks

---
# Original Proposal Problem Statement
>[!QUOTE] Problem Statement
>The problem this project seeks to address is that many students struggle with effective time management (Hyseni Duraku, Z., Davis, H. and Hamiti, E. (2023)), particularly when attempting to balance coursework, part-time employment, and exam deadlines. While numerous planning tools exist, that are highly popularised, such as Google Calendar, Notion, and Obsidian, all have the same inherent flaw, that they are manual and require the user to remember and adjust everything change that is necessary. For example, a problem that may arise is updating their calendar for an upcoming exam. 
>
>To meet the minimal viable, this project proposes to develop an adaptive study planner, a web-based system designed to pull student information from university-provided sources (e.g. Timetable System) to automate the process of scheduling these activities into the calendar. For examination timetables, optical character recognition, planned to be used as to extract the relevant character data from the image provided, deducing exam dates and adding them to the user's calendar. 
>
>The expansive version of this project seeks to use other tools like natural language processing to analyse notes, for keywords or dates that could be recommended to add to the calendar. Further integrating with existing university platforms such as BlackBoard could also be implemented allowing for updates when coursework deadlines are assigned.

---
# 1. Introduction
Students in higher education constantly face significant challenges in organisation, scheduling and cognitive difficulties which adversely, affects their academic performance and overall wellbeing. Two clear problems that stand out are the high demands for executive-functioning of effective and efficient time-management and a heavy reliance on manual data entry, which is common in existing planning tools. These problems are made exceedingly worse under conditions of academic stress, mental health difficulties, or simply dynamic changing nature of university, and personal commitments. The manual-entry problem places a consistent loop of cognitive and temporal burden on students, during academic pressures when executive-function is low.

Many of the widely available mainstream tools, which are widely advertised to students, for instance Google Calendar, Notion, Todoist, Obsidian, and many other platforms, which all suffer from the same inherent limitation of manual data entry, requiring the student to enter every exam, lab, lecture, deadline, reading list, room change, or any other forms of scheduling. In the event of inconsistent notices provided for timetable changes, which leaves students with little time to adjust their planners to account for this change; which as a result may lead to missed deadlines, lectures, lab, etc therefore proceeding to unnecessary stress.

The significance and impact of this problem is board. Poor academic organisation, in particular a consistent failure to sustain up-to-date scheduling information, leading to a repeated cycle of preventable academic stress. As a discussed in a paper (Pascoe, M. C., Hetrick, S. E. and Parker, A. G. (2019)), which assessed the impact of academic stress on students, concluding with the result that academic-related stress has an impact on students leading to a negative academic performance, decreased learning capacity, increased risk of developing mental health problems like depression and anxiety, and sleep disturbances, the paper also clarifies academic stress and burnout to include exhaustion, depersonalisation, cynicism, and inefficacy, or reduced accomplishment stating that “increased stress is associated with substance use among students” (Pascoe, M. C., Hetrick, S. E. and Parker, A. G. (2019)). In contrast, successfully removing this limitation for timetable, deadline, and examination entry would provide immediate and widespread benefit to the student demographic, by providing a web platform which utilises technologies to reduce the amount of manual data entry required by the student, therefore relieving some of the existing cognitive load.

From a legal and ethical perspective, any system that accesses official university timetabling or assessment/examination data must fully comply with UK GDPR and Data Protection Act (2018). Due to the project being developed independently of the university, the only lawful basis for acquiring student's personal information for processing, is obtaining explicit consent under Article 6(1)(a) of General Data Protection Regulation (2016). Robust, and easily revokable consent systems will need to be developed to maintain lawful. For instance under an individual's right of erasure.
## 1.1. The Project Aim
The primary high-level aim of this project is to benefit students through the development of a web-based adaptive student study planner which removes the need for manual data entry, for timetable, and assignment deadlines by securely synchronising with the official university timetable resources, for instance the BlackBoard system for deadline and examination timetable resource collection, thereby reducing some of the preventable academic stress from the student.
## 1.2. The Project Objectives
1. Investigate all supported ways of exportin data from the BlackBoard Learn platform, university TimeTable system, and other supporting systems. For instance transferring the pre-existing Outlook Calendar schedule and plan a system that can handle and process the supported data types. For example, examination timetables should be images, for OCR to work, to assess and extract the schedule content.
2. Identify and document, the existing BlackBoard Learn REST API and OAuth for M365 authentication and the current basic authentication process for the existing university TimeTable.
3. Develop a reliable notes system which can reliable create, edit, and delete notes in markdown format. Saved to the user's account.
4. Configure an automatic time-based timetable synchronisation service that refreshes the data sources to pull any new data that has not yet been previously added to the user's schedule and updating any pre-existing changes.
5. Plan and develop a secure encryption system for the user's account information, and markdown notes to ensure proper security for data protection.
6. Build an adaptive, user-centric dashboard that  combines the timetable, upcoming deadlines, recent notes, suggested daily study blocks, and a visual tracking the days notes were created as an indicator of progress.
7. Ensure the implementation developed is fully GDPR compliant and is transparent in the storage, collection, and removal processes, to inform the user of how to permanently delete all their user data.
8. Perform comprehensive and thorough unit-testing of each component of the application to ensure full functionality, and proper guard boundaries to avoid anomalous behaviour.
9. __Some form of student rating thing.  

---
# 2. State of The Art
## 2.1. The Nature and Impact of Academic-Related Stress on Students and Executive Functioning
Academic stress in students has been heavily researched and is well-established as a major issue in higher education. Pascoe, Hetrick and Parker (2020), in a major narrative review that collected data from various studies, including large-scale OECD, PISA surveys of over 540,000 students across 72 countries (OECD, 2017) and national student health data, found that in both secondary and higher education students routinely reported high levels of academic-related stress, primarily driven by the pressure of grade expectations. However, fear of poor performance, heavy workloads, and a difficulty to consistently keep track of changing timetables, deadlines, and personal circumstances can all affect a student’s academic performance. Their analysis showed that ongoing academic demands are strongly associated with poor mental health, such as depression, and anxiety, disrupted sleep, reduced physical activity, and increased substance use. Crucially, the review repeatedly highlights a consistent burden of manually monitoring and updating dynamic schedules, especially during peak times, for instance during an examination period, precisely when cognitive resources are low therefore the constant requirement to reassess scheduling for updates creates a broader cycle of consistent academic stress which directly impacts the physical and mental wellbeing of the student and consequential results in a poorer academic performance (Pascoe, Hetrick and Parker, 2020) overall.

Recent research by Pérez-Jorge, D. et al. (2025) highlights that academic stress has a significant impact on executive functioning, that students in higher education rely on to sustain day-to-day organisation and planning. In a mixed study of 256 undergraduate and postgraduate students at the university of La Laguna, participants completed an adapted version of the SISCO Inventory of Academic Stress with a portion of the group followed by small focus-group sessions. The findings illustrated a relationship between what students considered an excessive number of assignments, exam pressure, and those with self-reported difficulties in concentration, and organisation, in particular, students with family, and work priorities seemed to be the most effected. The results demonstrate how academic stress decreases the cognitive capacity particularly in activities requiring executive functioning of higher education students needed to maintain regular schedules around their timetables, deadlines, and other personal commitments.

The research results illustrate that academic stress has a significant impact on a student’s physical and mental wellbeing, depleting the cognitive energy needed to maintain accurate and up-to-date schedules, especially during peak times when cognitive load, for instance examination, and revision is very high. By creating a cycle of improper scheduling can create a disorganised calendar for the student, which could result in missed deadlines, exams or personal responsibilities, for example part-time work. leading to further depletion of executive functioning and is a contributor to worsening academic performance. 
## 2.2. The Lack of Interoperability in Mainstream Planning Tools
The core limitation present in widely available digital planning calendars and tools is their fundamental dependency on manual data entry. For every lecture, deadline, room change, or examination, students must manually enter and update their schedules which may be gathered from a variety of sources such as emails, learning management systems, outlook calendar events, or from numerous alternative sources. This reliance is highlighted in a paper by Banihashem et al. (2022), which discusses that while current learning systems excel at assessing student performance data, once tasks are started, they fail to automate the “pre-action”, being the essential organisation and scheduling linked to executive functioning that is required to begin learning. While this does not directly reflect a student planner system, it does demonstrate the trend of manual data reliance across student systems which continues to deplete executive functioning. Furthermore, many mainstream applications such as Google Calendar, Notion, and Todoist lack native integration with learning management systems like BlackBoard; these platforms operate without any connectivity to a student’s institutional module resources, or timetable, therefore requiring the student to manually change all their planner or scheduling information.
## 2.3. Data Extraction for Legacy Institutional Systems
A common technical limitation in Higher Education systems is the reliance on legacy web applications, secured by HTTP basic authentication, which despite the essential nature of the data, notable lack public facing API endpoints prevent easy retrieval of the student data. These legacy systems can manage numerous services for example, academic timetabling, student course and personal information, and attendance monitoring. Past research (Bisbal et al. (1999)) which noted that a significant problem in existing interfacing interface approaches in that during that time they were designed exclusively with the browser in focus, therefore lacking a well-documented easily accessible API for external integration with internal systems. Consequently, this means that the legacy system acts as a presentation layer for human interaction rather than a gateway allowing browser, and external API access for instance, for developers. This limitation results in valuable institutional data being produced solely for visual consumption, effectively blocking attempts at automated processing or external retrieval.

To address the rigidity of these legacy systems without the time-consuming, overhead of requesting the university redevelopment their existing systems. The "wrapping" strategy offers a viable solution. Bisbal et al. (1999) describe wrapping as the process of encapsulating existing data or programs within a new interface, essentially providing the legacy component with a modern appearance while retaining its original functionality.
## 2.4. Secure Note-Taking and GDPR Compliance
Developing independent software for higher education requires strict adherence to the General Data Protection Regulation (GDPR), particularly when processing personal data such as student study habits and private daily or study notes. Voigt and von dem Bussche (2017) emphasise that under the principle of "Privacy by Design", data protection safeguards must be integrated securely into the core development process rather than added as a mere side objective. This is particularly critical for applications that rely on web scraping institutional data, as the system effectively acts as a ‘data controller’ for the information it retrieves and stores. Consequently, the system design must prioritise "Data Minimisation" as mandated under Article 5, ensuring that only the specific data required for scheduling such as module codes and dates is retained, while extraneous personal information is immediately discarded to reduce the application's overall risk profile.

To secure sensitive user-generated content, such as personal revision notes, the system must implement "Encryption at Rest" rather than relying solely on HTTPS for transmission. Bertino and Sandhu (2005) discusses in a paper, that perimeter defences are frequently insufficient to protect plaintext data against more significant internal threats or privilege escalation attacks, such as SQL injection. To mitigate this risk, the design of the system must ensure that user data is inaccessible without the unique decryption key associated with the user's session.
## 2.5. Gaps in Research
The existing literature on this topic comprehensively links the relationship between academic stress and impaired executive functioning. However, despite significant technological advancements over the last few decades, interventions to relieve this burden, persist. Pascoe, M.C., Hetrick, S.E. and Parker, A.G. (2019), establish in their research that students experience a heightened level of stress during peak academic periods, precisely when cognitive resources for maintaining manual schedules are low, whereas Pérez-Jorge et al. (2025) reported that stress directly compromises the student’s organisational capabilities that are required in effective planning. However, both studies remain general to the problem, identifying the student’s academic cycle of stress and disorganisation, without exploring how a system could be designed to tackle this problem. Consequently, psychologically academic stress in students is well understood, however the technology through automated scheduling could reduce some of the cognitive overhead of the student, remains elusive.

Furthermore, current research on learning management systems identifies critical limitations in ‘pre-action’ support. Banihashem et al. (2022) highlights that existing educational technologies excel at tracking student performance once tasks commence, however tasks that are yet provided have no automation for the beginning organisation and scheduling that executive functioning demands. A way to minimise this gap is to clearly aggregate a student’s relevant information, including timetables, deadlines, assignments, and examination timetables into a unified planning application thereby removing some of the manual-entry requirements as typically seen in mainstream recommendations.

Many higher education institutions rely on legacy systems, which prioritise the presentation layer and do not have any external API endpoints, therefore for data to be collected on these systems the technical concept of ‘wrapping’ being to encapsulate the presentation layer within a modern interface. Bisbal et al. (1999) details principles for encapsulating legacy applications within modern interfaces, demonstrating how existing data can be accessed and integrated into modern systems, without requiring institutional system redevelopment. There is a significantly limited amount of research in applying these wrapping techniques to a student planning application representing a significant gap in the nature of the problem, compared to modern practical implementation.

Finally, no existing solution adequately combines automated institutional data extraction with the privacy-by-design architecture that GDPR compliance mandates. Mainstream planning tools such as Google Calendar, Notion, and Todoist operate without native integration to learning management systems like Blackboard, requiring complete manual data entry while offering limited protection for sensitive student content. Voigt and von dem Bussche (2017) emphasise that data protection must be embedded within core development processes, and Bertino and Sandhu (2005) argue that encryption at rest is essential for protecting against internal threats. Current tools address neither institutional integration nor robust encryption for user-generated study materials, leaving students without a solution that reduces scheduling burden while maintaining appropriate data security.

This research therefore addresses a clearly defined gap within the existing literature: the absence of an integrated, privacy-compliant system that automates schedule aggregation from legacy institutional sources, and learning management systems, thereby reducing the cognitive load that exacerbates academic stress during critical academic periods.

---
# 3. Methodology
## 3.1. Problem Analysis (Objectives 1 & 2)
The initial phase of development follows a waterfall approach, which is categorised for its sequential linear progression. Each phase must be fully completed before proceeding to the next. This methodology was selected for the problem as it requires comprehensive requirements gathering prior to any development work occurring, ensuring that the technical constraints of existing systems or implementations are fully understood before decisions are made. Described by Royce (1970) analysis and specifications are imperative during the early stages of a project, which is essential for completing the first two objectives being the investigation of exploring methods for data exploration, authentication processes, and ensuring compatible data handling early on.

The requirements gathering process involves investigating all supported methods of exporting data from the BlackBoard Learn platform, the university timetabling system, and any other necessary integrations such as with Outlook Calendar to sync events in the student planner. This investigation requires thorough documenting of the available data export formats such as CSV, where direct API access is available. As researched in the state of the art Bisbal et al (1999) noted that legacy systems often lack well-documented API endpoints making external integration require alternative methods, which is where the implementation of the wrapping strategy is necessary to ensure proper encapsulation for the data being presented visually to the browser. For examination timetables which are typically provided as images, or PDF documents therefore one requirement for analysis is the implementation of Optical Character Recogniton technology to extract the character data from the image and import this data into the schedule.

The documentation phase involves identifying and recording the existing BlackBoard REST API capabilities, OAuth authentication processes for Microsoft Office 365 integration, and the current HTTP basic authentication solution utilised by the university legacy application timetable system. The documentation phase serves as the foundation in the design phase ensuring the available design accommodates the specific constraints and requirements of the data source from the platform being extracted from. Once analysis of the existing data sources is concluded then proceeded by the design and development phases therefore avoiding unforeseen technical limitations discovered later in  the development process which may stall or hinder the development of the project.
## 3.2. Privacy-By-Design Ethics (Objectives 3 & 4)
Once the problem analysis phase is complete the project will proceed to establish a robust security-focused design ensuring full compliance with UK GDPR and the data protection act (2018). As emphasised by Voigt, P. and Von dem Bussche, A. (2017) data protection must be integrated into the core development process rather than as a secondary addition, and therefore the security must be planned during the early phases of the project to maintain a secure design across all subsequent and proceeding design phases. The project must maintain privacy-by-design which requires the implementation of encryption-at-rest for all user-generated content, secure session management, and easily revokable consent mechanisms therefore requiring a system that is privacy focused with transparency In the management, storage and collection of data during user registration.

Following the recommendations of Bertino and Sandu (2005) who argue that perimeter defences are insufficient to protect plaintext data against internal threats, and therefore the system must be designed to ensure that user-data remains inaccessible without the unique decryption key associated with that user. To meet this requirement for the project, AES-256 encryption for stored markdown notes and bcrypt hashing for user passwords. The encryption for the project needs to be designed prior to the development of the notes and dashboard systems, ensuring all user-generated content and passwords are securely stored.

In order to fully comply with the GDPR law, the project will follow the principle of data minimisation as described under article 5 of GDPR. Data extraction must only obtain the specific information required for scheduling, for example module codes, names, and resources. The design must also ensure that proper right to erasure mechanisms are in place as to easily allow the user to access, or permanently delete all account information, notes, or calendar notices, allowing users to easily consent and withdraw their consent with the immediate deletion of their data upon termination of user account.
## 3.3. Core Feature Development (Objectives 5, 6, & 7)
Once the foundational security and data protections are established, the next phase begins with the project shift to core feature development, encompassing the 5th, 6th, and 7th project objectives which primarily focus on two of the most critical components of the entire system, time-based timetable synchronisation and  a fully functional markdown-based note-taking system which integrates into a seamless user dashboard interface which establishes links between the other pages of the web application and the central user dashboard. These two objectives are imperative to the project’s main aim of reducing overall academic stress to help maintain adequate executive functioning for the students day-to-day.

The design and implementation of the timetable synchronisation system begins with the development of a CRUD (Create, Read, Update, and Delete) time-based functions, which will operate in the background to facilitate reliable updates to the user’s schedule. Functions triggered at a specific time interval passing, for example every 3 months and 15 minutes, provide the backbone enabling the system to store newly fetched data, retrieve and display that content onto the user’s dashboard, override any previously cached entries or any with updated information, and clearing out the outdated, for example the time an class has passed and therefore it is now redundant data. The system trigger for these operations will be both user and server driven. For the user when they go to access their schedule an immediate update is sent to ensure all information is accurate and up-to-date as provided by the timetable system, on the other hand, for the system itself will send requests, slowly and incrementally like normal traffic as to not overwhelm the timetable server with requests all at once for all of the users, once every midnight, as to both not disrupt for the performance for the user by significantly using server resources for all of the necessary timetable update requests.

To maintain data integrity within the scheduling system, the server-based timetable synchronisation trigger will begin an iterative loop that scans the database of all registered users individually. This allows the system to evaluate whether any calendar entries, including notes or one-time schedule events, are no longer relevant for instance, a past lab session or expired assignment deadline and should be removed or overwritten with up-to-date data. However, recognising that some users may wish to retain specific events for personal reference or future review, the application will include a user-toggleable setting that allows individuals to toggle this behaviour on or off. This ensures that no valuable scheduling entries are unintentionally deleted as part of the system’s automation, with the user remaining in control of how long their notices persist beyond their original dates.

The user dashboard will be built with responsiveness and a user-centric design in mind. Students logging into the platform will be brought to this interface which will function as the central point for which the timetable and scheduling data will be presented, for example a recent notes list. Through the work of De Vreugd et al (2024) a paper that which discussed the value of visual self-tracking tools to integrate better student awareness into their studies.

To support a data-reliant structured approach, all data sources will be downloadable and converted in .ics as a well-recognised calendar-friendly format for easier integration with the calendar system, and makes importing and exporting of third party schedules data simpler on both the system and user. Due to the timetable system being made and designed as human-interactive, then the data received from the timetable will need to be processed and converted from the HTML content.

 In conclusion, this platform hopes to reduce the need for manual work on the student, by enhancing time-awareness, and supports consistent academic involvement in a GDPR complaint and efficient manner. These features form, the core user experience of the application and directly drive toward to the project’s overall aim of reducing the cognitive demand caused by disorganisation and stress in higher education.
## 3.4. Testing and Evaluation
The final objective in the project will be unit testing which forms the foundations to reassuring quality assurance process and will be repeatedly performed throughout all major components of the development lifecycle ensuring accurate functionality and avoiding anomalous behaviour as features scale. Each key fundamental of the system is to be built around distinct logical modules allowing the testing process to cover them individually while maintaining modularity. The components primarily to be unit testing will be the TimeTable synchronisation, OCR Implementation, Markdown Notes Handling, User Login and Authentication processes, and the AES-256 encryption and decryption for the user data. Testing allows for project errors to be resolved before new modules or systems are layered together removing potential logic errors before it scales and interlinks with the other systems. 

Each functionality within the notes subsystem will undergo specific tests to verify note creation, editing, deletion, and markdown rendering in both preview and storage modes. Particular testing focus is placed on verifying that formatting rules render correctly across headings, bold, italics, and list handling syntax, while also ensuring database integrity when back-end encryption is applied to note content at rest. Any numeric or symbolic markdown structures will undergo test parsing and sanitisation for cross-site scripting prevention. All encryption and authentication logic must also withstand brute-force attempts and invalid input strings during testing, ensuring that passwords, scheduling data, and study notes never fall out of encrypted form during processing. 

Finally, final unit tests will ensure that GDPR-compliance mechanisms tied to account deletion and data erasure. Once triggered, the test will verify that user-linked data across notes, credentials, and calendar events are fully removed from the system with no residual information retaining.


---
# 4. References
Abbott-Jones, A.T. (2021) Dyslexia in higher education. Cambridge: Cambridge University Press. Available at: https://doi.org/10.1017/9781009032162 (Accessed: 20 November 2025).

Banihashem, S.K. et al. (2022) 'A systematic review of the role of learning analytics in enhancing feedback practices in higher education', Educational Research Review, 37, p. 100489. doi: 10.1016/j.edurev.2022.100489.

Bertino, E. and Sandhu, R. (2005) 'Database security—concepts, approaches, and challenges', IEEE Transactions on Dependable and Secure Computing, 2(1), pp. 2–19. doi: 10.1109/TDSC.2005.9.

Bisbal, J., Lawless, D., Wu, B. and Grimson, J. (1999) 'Legacy information systems: issues and directions', IEEE Software, 16(5), pp. 103–111. doi: 10.1109/52.795108.

De Vreugd, L. et al. (2024) 'Learning analytics dashboard design and evaluation to support student self-regulation of study behaviour'. Available at: https://www.researchgate.net/publication/384866549

General Data Protection Regulation (2016) Article 6: Lawfulness of processing. Available at: https://gdpr-info.eu/art-6-gdpr/

Information Commissioner's Office (2023) A guide to individual rights. Available at: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/ (Accessed: 26 November 2025).

OECD (2017) PISA 2015 results (volume III): students' well-being. Paris: OECD Publishing. doi: 10.1787/9789264273856-en.

Pascoe, M.C., Hetrick, S.E. and Parker, A.G. (2019) 'The impact of stress on students in secondary school and higher education', International Journal of Adolescence and Youth, 25(1), pp. 104–112. doi: 10.1080/02673843.2019.1596823.

Pérez-Jorge, D. et al. (2025) 'Examining the effects of academic stress on student well-being in higher education', Scientific Reports, 15(1). Available at: https://www.nature.com/articles/s41599-025-04698-y (Accessed: 26 November 2025).

Royce, W.W., 1970. _Managing the development of large software systems_. In: Proceedings of IEEE WESCON.

Voigt, P. and Von dem Bussche, A. (2017) The EU General Data Protection Regulation (GDPR): A practical guide. Cham: Springer International Publishing. doi: 10.1007/978-3-319-57959-7. Available at: https://doi.org/10.1007/978-3-319-57959-7 (Accessed: 24 November 2025).

Wijbenga, L. et al. (2024) 'Emotional problems and academic performance: the role of executive functioning skills in undergraduate students', Journal of Further and Higher Education, 48(2), pp. 196–207. doi: 10.1080/0309877X.2023.2300393.

---
[[CO3008 - D2 Introduction, SOA, & Methodology Receipt.pdf]]

![[CO3008 - D2 Introduction, SOA, & Methodology Receipt.pdf]]

---
[[CO3008 D3 - Design and Implementation]]