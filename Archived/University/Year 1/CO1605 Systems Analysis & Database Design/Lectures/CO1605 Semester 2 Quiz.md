---
tags:
  - CO1605
  - Systems-Analysis-and-Database-Design
---
[[CO1605 Systems Analysis and Database Design]]

---
# Questions
## Which of the following SQL statements would eliminate a row in a table called Employee?

```
A - REMOVE FROM Employee WHERE ...
(B) - DROP FROM Employee WHERE ...
C - DELETE FROM Employee WHERE ...
D - INSERT INTO Employee WHERE ...
```

>[!fail] Incorrect (C) 

## Which of the following SQL keywords is used to delete a database table?

```
A - DELETE
(B) - DROP
C - REMOVE
D - ROLLBACK
```

>[!success] Correct

## Match the stages of normalisation to the short explanation of the stage

```
1) First Normal Form - There are no transitive dependencies in the structure.
2) Second Normal Form - The data is aesthetically pleasing.
3) Third Normal Form - There are no repeating groups in the structure.
4) UNF - The data is completely un-normalised.
```

>[!note]
>Options for each:
>- There are no transitive dependencies in the structure.
>- There are no repeating groups in the structure.
>- The data is aesthetically pleasing.
>- The data is completely un-normalised.
>- The data values are alphabetically sorted.
>- There are no part-key dependencies in the structure.

>[!fail] Incorrect

## Which description best matches the approach to installing systems?

```
1) Direct Approach - The new system is gradually installed, based on components or increments.
2) Phrased Approach - The new system is installed in one branch or department only for a period of time.
3) Parallel Approach - The old and the new system co-exist for a period of time.
4) Single Location Approach - The new system is installed in half of the branches or departments first.
```

>[!note]
>Options for each:
>- The new system is gradually installed, based on components or increments.
>- The new system is installed, but the old system is kept in the disaster recovery site.
>- The old and new system co-exist for a period of time.
>- The new system is installed in half of the branches or departments first.
>- The new system is installed in one branch or department only for a period of time.

>[!fail] Incorrect

## Which of the following is an anomaly that could jeopardise the integrity of a dataset that has not been normalised?

```
(A) - Update
B - Create
C - Drop
D - Edit
```

>[!success] Correct 

## The main reason tables would be de-normalised is to:

```
A - Reduce data duplication
B - Increase speed of data retrieval
(C) - Increase referiential integrity
D - Reduce storage space
```

>[!fail] Incorrect (B)

## A sequence of query and/or update statements that are to be performed as a single unit is called a:

```
A - Transaction
B - Rollback
C - Flashback
(D) - Commit
```

>[!fail] Incorrect (A)

## A primary key that is made up of more than one attribute is called a:

```
A - Combination Key
B - Candidate Key
(C) - Composite Key
D - Consistency Key
```

>[!success] Correct

## Locks that are placed assuming that a conflict is likely to occur are called:

```
(A) - Pessimistic Locks
B - Explicit Locks
C - Implicit Locks
D - Optimistic Locks
```

>[!success] Correct

## A database schema:#

```
A - Is a description of the data in the database.
B - Is used for debugging programs.
(C) - Comprises all the forms, queries, and reports used in a database application.
D - Is a data dictionary for a database table.
```

>[!fail] Incorrect (A)

## What would be the main benefit of using a parallel approach to installing a new system?

```
(A) - Everyone would only have the new system to concentrate on.
B - The old system would be there as a back up.
C - The system would be trialled in a department or location, so bugs found would not affect the rest of the system.
D - There would not need to be interfaces between the new and old systems.
```

>[!fail] Incorrect (B)

## Which of the following commands is NOT a Data Definition Language (DDL) command?

```
(A) - GRANT
B - CREATE
C - DROP
D - ALTER
```

>[!success] Correct

## Question 13 Using the table below, how many rows would be returned from the following query:

`SELECT * FROM my_contacts WHERE first_name LIKE 'A%';`

### My Contacts Table

| **last_name** | **first_name** | **email**                   | **gender** | **birthday** |
| ------------- | -------------- | --------------------------- | ---------- | ------------ |
| Chevrolet     | Maurice        | bookman4u@objectville.net   | M          | 1962-07-01   |
| Kroger        | Renee          | poorrenee@mightygumball.net | F          | 1976-12-03   |
| Spatner       | John           | jpoet@objectville.net       | M          | 1963-04-18   |
| Manson        | Anne           | am86@objectville.net        | F          | 1977-08-09   |
| Jacobs        | Anne           | anne99@objectville.net      | F          | 1968-02-05   |
| Soukup        | Alan           | soukup@breakneckpizza.net   | M          | 1966-07-01   |
| Prophet       | Francine       | prophet@breakneckpizza.net  | F          | 1975-12-02   |
| Gardner       | Shannon        | sgardner@breakneckpizza.net | M          | 1982-05-11   |
| Green         | Robert         | rob1212@objectville.net     | M          | 1966-09-08   |
| Davinci       | Andrea         | chef4you@objectville.net    | F          | 1974-10-30   |

```
(A) - 4
B - 3
C - 1
D - None
```

>[!success] Correct

## The key that uniquely identifies a record in a database is called a:

```
A - Combination Key
B - Foreign Key
(C) - Primary Key
D - Relational Key
```

>[!success] Correct

## Locks that are placed assuming that a conflict is unlikely to occur are called

```
A - Implicit Locks
(B) - Optimistic Locks
C - Explicit Locks
D - Pessimistic Locks
```

>[!success] Correct

## Which of the following does a database not store?

```
A - Data
B - Metadata
C - Relationships
(D) - Programs
```

>[!success] Correct

## A technique for validating that a UK postcode is entered correctly is:

```
(A) - Format Check
B - Presence Check
C - Range Check
D - Consistency Check
```

>[!success] Correct

## An attribute in one table that references a unique record in another table is called a:

```
A - Determinant
(B) - Foreign Key
C - Referential Attribute
D - Functional Dependency
```

>[!success] Correct

## A program whose job is to create, process and administer databases is called the:

```
A - Database Modelling System
(B) - Database Management System
C - Relational Model Manager
D - Data Business Management Service
```

>[!success] Correct

## What check ensures that the numeric data entered is within the correct minimum and maximum values?

```
A - Check Digit
B - Completeness
C - Consistency
(D) - Range
```

>[!success] Correct

---
[[CO1605 Systems Analysis and Database Design]]