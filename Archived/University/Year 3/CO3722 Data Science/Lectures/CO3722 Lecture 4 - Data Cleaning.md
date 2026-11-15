---
tags:
  - CO3722
  - Data-Science
---
[[CO3722 Data Science]]
[[CO3722 Lecture 3 - Data Science Fundamentals]]

---
# Lecture Documents
[[CO3722 Lecture 4.pdf]]

---
# Written Notes
![[CO3722 Lecture 4 - Note 1.png]]

---
# Learning Objectives
- Discuss the process of `Data Cleaning`
- Evaluate a `Dataset` for **quality control**

---
# What is Data Cleaning
Data cleaning is performed due to the basis that data analysis is only as good as the data used and therefore it is important to consider what is 'garbage' (duplicate, or missing data fields) and processing that 'garbage' into a usable quality dataset to support decision making. The following are problems that can exist in datasets that haven't been cleaned:
- Incorrect Data
- Corrupted Data
- Incorrectly Formatted Data
- Duplicate Data
- Incomplete data within Dataset itself

>[!NOTE]
>There is no absolute way to prescribe the exact steps in the data cleaning process, however establishing a method is good practice.

---
# How to Clean Data

---
# Remove Unwanted/Duplicate Values
- Remove unwanted observations from the dataset including duplicate or irrelevant ones.
  - Duplication observations will happen most often during data collection.
  - May occur when you combine datasets from multiple places, scrape data, or receive data from clients or multiple departments.
- Irrelevant observations are when you notice observations that do not fit into the specific problem that is attempted to be analysed
  - For example if data regarding millennial customers is wanting to be analysed but the chosen dataset includes different generations then it is important to filter for the `irrelevant obervations`; data outside of the millennial generation.

---
# Fix Structural Errors
Structural errors are when measured or transferred data has strange naming conventions, typos, or incorrect capitalisation which can lead to inconsistencies in mislabelled categories or classses.
  - For example for you may find "N/A" and "Not Applicable" both appear but should be the analysed as the same category despite the difference.

---
# Filter Unwanted Outliers
Often there may be one-off anomalies in the data, where at a glance they do not fit the data that is being analysed and in this case where a legitmate reason can be provided then an outlier (improper data entry) can be removed helping to improve the performance of the data that is being worked with.

Sometimes the appearance of an outlier proves that a theory being worked on is valid, just because an outlier exists doesn't mean it is incorrect. Wherre an outlier proves irrelevant for analysis or a mistake then it is reasonable to consider it for removal.

---
# Handling Missing Data
Missing data cannot be ignored because numerous algorithms do not accept missing values, at a glance there are three options that can be taken to resolve this issue:
- First Option) Drop observations that have missing values however, this will result in the loss of information so it is important to be mindful of what information is being removed, why it is being removed, and how that is justified.
- Second Option) Input missing values based on other observations, this option also results in the potential to lose data integrity.
- Third Option) Might alter the way the data is used to effectively navigate null values.

---
# Quality Control
For quality control it is important to **validate** the data to ensure it maintains integrity, consistency, and performance.
## Validating Data
- Does the data make sense?
- Does the data follow the appropriate rules for its field?
- Does it prove or disprove the working theory or bring any new insights?
- Can trends be found in the data to help form the next working theory from the data?
- If a next theory cannot be found, is it due to a quality control issue.

---
# Components of Quality Data
**Validity** - The degree to which the data conforms to defined business rules or constraints.
**Accuracy** - Ensure the data is close to the true values.
**Completeness** - The degree to which all required data is known.
**Consistency** - Ensure the data is consistent within the same dataset and/or across multiple datasets.
**Uniformity** - The degree to which the data is specified using the same unit of measure.

---
# Summative Assessment Reflection
- What is your understanding of the [[CO3722 Assignment Brief]]?
- What are the key sections that are thought of to be important at this stage?
- Can some sample headings and format for structuring the report be proposed?

---
[[CO3722 Lecture 5 - Data Analysis using Visualisations]]