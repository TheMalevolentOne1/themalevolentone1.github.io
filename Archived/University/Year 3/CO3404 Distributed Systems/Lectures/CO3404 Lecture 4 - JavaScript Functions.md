---
tags:
  - CO3404
  - Distributed-Systems
---
[[CO3404 Distributed Systems]]
[[CO3404 Lecture 3 - REST & Intro to NodeJS]]

---
# Lecture Documents
[[CO3404 Lecture 4.pdf]]
[[CO3404 L4 - Lab 4 - Adding Database to Jokes App.pdf]]
## Demos
[[CO3404 L4 - Promises.zip]]

[[CO3404 L4 - Middleware.zip]]

[[CO3404 L4 - Simple API.zip]]

Connect to a database using callbacks:
[[CO3404 L4 - Data Basic.zip]]

Connect to a database using promises:
[[CO3404 L4 - MySQL Basic Promise.zip]]

---
# Written Notes
>[!NOTE] Mistaken Proceeding
>I am aware the numbers for the note pages are wrong.

![[CO3404 Lecture 4 - Note 1.png]]
![[CO3404 Lecture 4 - Note 2.png]]
![[CO3404 Lecture 4 - Note 3.png]]
![[CO3404 Lecture 4 - Note 5.png]]

---
# Learning Objectives
- Write named functions, anonymous functions, and arrow functions.
- Write a function that takes another function as a callback parameter.
- Write an anonymous function as a function argument.
- Call an asynchronous asynchronous API functions such setTimeout and fetch.
- Explain the basic operation of code that uses promises
- Create and test a sample node express API application

---
# Function Declaration
Many ways to define / declare functions, somewhat due to various browser incompatibilities and some enhancements to the language as it has evolved.

For named functions, the function is moved to the top of the file by the parser if not in a block so it can be called before its declaration.

```javascript
getData() // can be run before declaration
function getData();
```

---
# Function Expression
A function expression creates an anonymous function and effectively assigns its address to its assigned variable.

```javascript
getData();
const getData = function() { ... }
```

The assigned function has only the scope it was defined, which allows more control over clashing functions that share the same name from various libraries.

>[!NOTE] Reason for modern day usage
>Typically these days, function expressions are used to provide better scope control, unless a named function is needed or more appropriate.

---
[[CO3404 Lecture 5 - Promises, Middleware & Databases]]