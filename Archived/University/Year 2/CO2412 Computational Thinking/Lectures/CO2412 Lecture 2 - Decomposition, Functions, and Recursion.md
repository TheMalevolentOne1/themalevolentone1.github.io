---
tags:
  - "#Computational-Thinking"
  - "#CO2412"
---
[[CO2412 Computational Thinking]]
[[CO2412 Lecture 1 - Introduction To Python Programming Language]]

---
# Lecture Documents
[[CO2412 Lecture 2.pdf]]
[[CO2412 L2 - Lab 2 - Worksheet.pdf]]

---
# Decomposition, Functions, and Recursion
## Decomposition
The process of breaking complex problems down into small more manageable pieces which are easier to understand.

Breaking the process down into small parts, means that the small parts can then be examined in more detailed and more in-depth.

Dealing with many simultaneous problems at varying stages can be overwhelming and more difficult than breaking a problem down into small parts and solving each one, one at a time.
### Decomposition In Programming
Functions can be used to implement decomposition.
```python
alphabet = input("Enter Alphabet: ")
sort_alphabet(alphabet)
if verify_alphabet(alphabet):
	print("Verified Alphabet")
else:
	print("Incorrect Alphabet")
```
## Functions
Functions are named blocks of code, and their purpose is to meet one distinct task. 

Functions can have variables, call themself (Recursion) or other functions. They can return a value and may accept arguments.
### Difference between Parameters and Arguments
**Function Parameters**: Names listed in the function's definition.
**Function Arguments**: Real values passed to the function when called.
## Methods
The reason functions inside of classes are called methods, is because their distinct purpose is to set and get data about the instances (Object of the class), such as through the usage of "setters and getters" for private member variables. Therefore, they can also be referred to as **Instance Methods**.
### Python Class Example
```python
class My_Class:
	def instance_method(self):
		return "Instance Method!"
```
They have one default parameter - _self_ which points at the instance of the class (so itself).
## Static Methods
A static method does not receive a first argument.

A Static Method is attached to the class and not the instance of the object it is being called from.
### Python Static Method
```python
class My_Class:
	@staticmethod
	def static_method(self):
		return "Static Method!"
```

---
# Recursion and Iteration
## Recursion
Recursion is the process of repeating a set of steps until a condition is met. As a form of decomposition, it breaks down a problem into small instances of the same problem in order to devise the solution. The way this is done is by the function calling itself, until the **Base Case** condition is met.

"Recursion is a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem."
## Iteration#
Iteration is the process of executing a set of instructions multiple times.

The two different types of loops utilised are:
- For Loops
- While Loops
## Recursive Examples:
### Factorial
The factorial of a non-negative integer `n` denoted by `n!` is the product of all.

- 0! = 1
- N! = N * (N - 1) if N > 0

e.g. 5! = 5x4x3x2x1 = 120

Another way of showing: 5! - 5(4!)

0! = 1 as there is exactly one way of arranging 0 objects. 
### Max Number
```python
# A = Array
# n = Number to locate in Array
def find_max_record(A, n):
	if (n == 1):
		return A[0]
	return max(A[n-1], find_max_record(A, n - 1))

# Example Usage
A = [1, 4, 45, 6, -10, 10, 2]
n = len(A)
print(find_max_record(A, n))
```
### Infinite Recursive Calls
In the event that the **Base Case** logic is wrong, this may result in *infinite recursion*.
```python
def factorial(n):
	return 1 if (n == 1) else n * factorial(n - 1)

# Example Usage
num = -5
print(f"Factorial of: {num} is {factorial(num)}")
```

`n` is only checked to be 1, therefore if the number is a negative value. 

Infinite recursion is the result as negative numbers when times by position results in a result that can never be 1 or 0 and therefore is infinite.

Python has a default recursion limit (typically 1000), so infinite recursion will eventually raise a **RecursionError** for negative inputs which are not handled by the **Base Case** to prevent infinite recursion.
### Recursion VS Iteration
#### Factorial Recursion
```python
def factorial(n):
	return 1 if (n == 0 or n == 1) else n * factorial(n - 1)

# Example Usage
num = 5
print(f"Factorial of: {num} is {factorial(num)}")
```
#### Factorial Iteration
```python
def factorial(n):
	fact = 1
	for i in range(1, num + 1):
		fact = fact * i
	print(f"Factorial of {num} is {fact}")

# Example Usage
num = 5
factorial(num)
```
### Recursion Or Iteration
The question to which is better to use cannot be simply answered, as both solutions have their benefits and drawbacks.

| Recursion |                               Advantage                               |                              Disadvantage                              |
| :-------: | :-------------------------------------------------------------------: | :--------------------------------------------------------------------: |
|           |                           Shorter to write                            | Deep Recursion can exceed the call stack limit (e.g. python's is 1000) |
|           |                           More elegant code                           |                      Less intuitive to understand                      |
|           | Ofted used in development of abstract data types (Stacks, and Queues) |                                                                        |
|           |                      Favourite of Mathematicians                      |                                                                        |

| Iteration |         Advantage         |                                             Disadvantage                                              |
| :-------: | :-----------------------: | :---------------------------------------------------------------------------------------------------: |
|           |      More Intuitive       |                        Verbose, and less elegant code than recursive solutions                        |
|           | Control Stays Within Loop | Recursive specific actions like ones used in tree or graph algorithms may be inefficient in iteration |
|           | Favourite of Programmers  |                                                                                                       |
## Recursion is not Always Better!
To calculate a recursive solution to generate the `'n'th` term in the Fibonacci Sequence.

The problem with the size (Number of steps required) grows **exponentially**. E.g. 2n which is too large and is not feasible for recursion.

To calculate the same problem iteratively the same problem is **linear** (Takes `n` steps)

Usually expressed as O(2n) and O(n).

---
[[CO2412 Lecture 3 - Complexity and Efficiency]]