---
tags:
  - Video-Notes
  - Flutter
---
[[Video Notes]]

---

<iframe title="Flutter Course for Beginners – 37-hour Cross Platform App Development Tutorial" src="https://www.youtube.com/embed/VPvVD8t02U8?start=102&amp;feature=oembed" height="113" width="200" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"></iframe>

---
Course: absolute beginners
# Chapter 1 - Developer Accounts
Unnecessary. Do not need 30 minutes of how to setup a google and apple developer account.

---
# Chapter 2 - Setup
Already have the flutter setup steps known from uni.

---
# Chapter 3 - Introduction To Dart
Dart is the programming language that powers flutter.

DartPad

`flutter create <ProjectName>`
`code .` -> command to bring up visual studio code in terminal

Android Studio for phone emulator.

the lib folder is where the code is written. 

[Dart KeyWords](https://dart.dev/language/keywords)
[Dart DataTypes](https://dart.dev/language/built-in-types)

final variable in dart

`final name = 'foo';` 

Final is a variable whose value cannot be changed. Final gives more flexible in assigning a variable later in the code, while informing the dart language that the variable once assigned is not going to change.

Function parameters are defined in the declaration or signature, while function arguments are the values or objects passed to the function when it is invoked.

Saving triggers flutters `hot reload` feature, so code does not need to be rerun, by executing changes. Very cool imo.

String Formatting
`print('$firstName $lastName');`

```dart
String getFullName(String firstName, String lastName) => 
	'$firstName $lastName';
```
<sub>Dart has arrow functions</sub>

---
# Chapter 4 - Dart control statements and collections
If/Else - don't need.

Operators - don't need.

Lists in Dart
```dart
final listVar = ['item1','item2','item3']
// Square Brackets inform dart of List
```

Sets in Dart - List of unique things (No Duplicates)
```Dart
final setVar = {'item1','item2','item3'} 
// Curly Brackets inform dart of Set
```

Maps in Dart
Maps are used to hold key-value pairs of information
```Dart
final person = {'name' : 'personName', 'age': 20}
```

---
# Chapter 5 - Null-Safety
[Sound Null-Safety](https://dart.dev/null-safety) in Dart

Controls whether a variable can be null.

Dart has null-safety by default, therefore variables must be set to nullable.
```dart
var i = 43; // not nullable
final b = 32; // also not nullable
int? b = 12; // nullable
int? b = null;
```
<sub>From Dart's Website Source</sub>

Null-Coalescing Operator (`??`)
Instead of doing multiple if/else if/else statement to decide whether a value is null or not the `??` in Dart.
```dart
const String? first = null;
const String? second = 'bar';
const String? last = 'bat';
final firstNonNull = first ?? second ?? last;
```

Null-Aware Assignment Operator (`??=`)
```dart
void test(String? first, String? second, String? last)
{
	String? name;
	first ??= name;
}
```
if first is already non-null do nothing. Otherwise assign it to the value of name.

Conditional Invocation
```dart
List<String>? names = ["foo","bar"];
final length = names.length ?? 0;
```
the length variable will be names.length unless names List is null then length is 0

[Understanding Null Safety](https://www.dart.dev/null-safety/understanding-null-safety)

---
# Chapter 6 - Dart Enumerations, Classes & Objects
## Enumerations
Named list of related items
```dart
enum PersonProperties
{
	firstName, lastName, age
}
void test()
{
	const String? name = 'foo';
	const String? otherName = 'foo';

	PersonProperities.firstName.name; // .name obtains the value
}
```

## Switch Statement
Already known.

## Classes in Dart
```Dart
class Person
{
	void breathe()
	{
		print("Person Breathing");
	}
}
```

## Objects
An object is an instance of a class.

## Constructors 
Class initialisation of object

## Methods
Functions of classes

## Inheritance and Subclassing
### Deprived Class
```dart
class DerivedClass extends BaseClass
```
DeprivedClass is a class that inherits from a base class i.e. BaseClass, using the extends keyword. This relationship allows DeprivedClass to inherit properties and methods from BaseClass.
### Abstract Class
```Dart
abstract class BaseClass
```
Abstract classes serve as blueprints for derived classes, similar to C# interfaces, but cannot be instantiated directly. Unlike interfaces, they can include functionality.
### Factory Constructors
Can return instances of that are not of the same class
```dart
class Cat
{
	final String name;
	Cat(this.name);

	factory Cat.fluffBall()
	{
		return Cat("Fluff Ball");
	}
}

void test()
{
	final fluffBall = Cat.fluffBall();
	print(fluffBall.name)
}
```
Factory constructors in Dart are special constructors that can return instances of a class (or even a subclass) rather than always creating a new instance of the same class. Unlike regular constructors, they offer flexibility in how objects are created, which is useful when you need to manage object initialization, such as reusing existing instances or returning different subtypes.

The factory constructor does not necessarily need to return the same instance of its own class, it can return an instance of another class.
### Custom Operators
Defining custom operations in dart on own classes

```dart
void test()
{
	final cat1 = Cat("Foo");
	final cat2 = Cat("Foo");
	
	if (cat1 == cat2) 
	{ 
		 print("They are equal"); // Is Foo the Same?
	} 
	else 
	{ 
		 print("they are not equal"); // Is the Cat Objects the same?
	}
}
```
The code above will result in not equal as internally the classes handling of the equality, doesn't account for it, which can be resolved with a custom operator.

```dart
@override
bool operator ==(covariant Cat other) => other.name == name;

@override
int get hashCode => name.hashCode;
```

- **operator =\=\*\*: Defines how equality is evaluated. Here, it compares the name of two Cat instances.
- **@override**: Indicates we’re replacing the default == behavior inherited from the Object class.
- **covariant**: Allows the parameter type to be restricted to Cat instead of the default Object, ensuring type safety.
- **hashCode**: Must be overridden alongside == to maintain consistency in hash-based collections (e.g., Set, Map). It generates a hash from the name.

A hash code is a unique numeric value assigned to each class instance, used to identify objects in collections.

---
# Chapter 7 - Advanced Dart
Extensions, Futures, Streams, Async Await, Generators, and Generics.

---
# Chapter 8 - Future
Data to be returned in the future. 
A part of Asynchronous Programming
## Async/Await
```dart
Future<int> futureThatMultipliesByTwo(int a)
{
	return Future.delayed(const Duration(seconds: 3), () => a * 2);
}

void test() async
{
	final result = await futureThatMultipliesByTwo(10);
	print(result);
}
```
`await` waits for the Future to return a value.

---
# Streams
An asynchronous "pipe" of data.
It either completes successfully, never completes, or errors.
A future that sends data down a pipe that never ends, and continues.
## Awaiting for Stream Data
```dart
Stream<String> getName()
{
	return Stream.periodic(const Duration(seconds: 10), (_) => return 'foo');
}

void test()
{
	await for (final value in getName())
	{
		print(value);
	}
}
```

---
# Generators 
Do not need.

---
# Generics
Avoid writing the same code over and over again.

```dart
class PairOfStrings
{
	final String value1;
	final String value2;
	PairOfStrings(this.value1, this.value2);
}

class PairOfIntegers
{
	final int value1;
	final int value2;
	PairOfStrings(this.value1, this.value2);
}
```

Generic Class:
```dart
class Pair<T>
{
	final T value1;
	final T value2;
	
	Pair(this.value1, this.value2);
}
```

---
# Project Thing
Do not have time for.

---
# Using flutter create
flutter create application_name

---
# Quick Look Around#

---

