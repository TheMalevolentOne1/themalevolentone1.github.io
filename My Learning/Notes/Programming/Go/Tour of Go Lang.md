---
tags:
  - Go
---
[[Notes]]
[The Tour of Go](https://go.dev/tour/)

---
# What is the Tour?
The tour of go is described as an *interactive introduction* to Go in "four sections" (Basics, Methods & Interfaces, Generics, and Concurrency) with each section concluding with a few exercises so what is learned and established in theory can be practiced.
## Key Notes
- Tour is fully interactive with a provided in-browser code window and *Run* button.
- Includes a *Format* button to correct the syntax formatting (using the [gofmt tool](https://pkg.go.dev/cmd/gofmt))of the code, for example, having to write code without any tabs, the format lib will place the required indentation.
- Throughout the tour there is a series of slides and exercises to complete which can be navigated with either the manual *previous* and *next* buttons or the *PageUp* and *PageDown* keys.
# Go - Offline
Tour available as standalone program. Builds and runs code samples on local machine itself rather than `go.dev` server.

>[!note] Tour Program Note
> The Web-Server for Tour runs on it's own. However, the UI Code Editor in the Browser requires the Go Complier) 

To run Tour locally first [Go](https://go.dev/doc/install) must be installed on the machine. Once installed, the tour can be downloaded using the following command:
- `go install golang.org/x/website/tour@latest`

Places a `tour` binary into the [GOPATH](https://pkg.go.dev/cmd/go#hdr-GOPATH_environment_variable)'s *bin* directory, allowing Go to run the program.

The Tour can be run from the cmd with `tour`. 
## Go Playground
The Tour is built on top of the [Go Playground](https://go.dev/play/) which is a web service that runs on `golang.org`'s servers. 

The service receives the go program, compiles, links, and runs the program inside a sandbox then returns the output.
### Limitations
- Limits to execution time, CPU and memory usage as well as programs being unable to access external network hosts.
- Time begins at `2009-11-10 23:00:00 UTC`. This makes it easier to cache programs by giving them a deterministic output. 

[CurrentTime.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/2%20-%20Current%20Time.go)
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Playground Current Time:", time.Now())
}
```
<sub>Basic Go Program for checking Current Time</sub>

>[!note]
>While Go, does has cases where it is [non-deterministic]() (for example, intentional Non-Determinism was introduced into standard Go to prevent Denial of Service attacks)
>
>In addition, the Go Playground, due to its caching, suppresses the non-deterministic randomness, even in programs where it would typically be utilised, (i.e. if printed a map would be in an unpredictable order, whereas in the Go Playground it is fixed) to maintain a predictable output.

>[!example] Mini Exercise - Significance of the Time
> >[!hint] My Guess
>  >A mini exercise states that the time of the *Go Playground* has significance, my immediate question is that this will affect `Epoch` standard time. (This was a tad silly in hindsight given Epoch can just be assigned to a constant date variable.)
>  
>  >[!success] Actual Reason
>  > - The fixed value of the playground is the date Go was open-sourced and announced to the public. [Source](https://go.dev/blog/1year)
>  > - This is a piece of **Go Trivia**, more akin to an easter egg, limited only to Playground.
>  > 

---
# The Go Basics
## Packages, Variables & Functions
### Packages
Every program in Go is made of packages, which start running in the package `main`.

By convention, the *package name* is the same as the **last element** of the import path. For instance, the "math/rand" package comprises files that begin with `package rand`.

[RandomNumber.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/3%20-%20Random%20Number.go)
```go
package main

import (
	"fmt"
	"math/rand"
)


func main() {
	fmt.Println("Random Number:",rand.Intn(10))
}
```
<sub>Random Number Example</sub>
### Imports
```go
import (
	"fmt"
	"math"
)
```
<sub>Go `import` Libs Example</sub>

>[!quote]
>This code groups the imports into a parenthesized, "factored" import statement. Under the hood, this is run as individual import statements for each string path specified.
>
> >[!example] On Run
> >`import "fmt"`
> >`import "math"`

[SquareNumber.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/4%20-%20Squared%20Number.go)
```go
package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("Squared Number:", math.Sqrt(7)) 
}
```
<sub>Go Squared Number Example</sub>
### Exported Names
In Go, a name (variable, function, etc) is **exported** (public) if it begins with a **capital letter** (e.g. *Println* is exported from the `fmt` library). Lowercase names are **unexported** (private).

**Unexported** names in Go cannot be accessed or invoked outside of it's own package. The Go compiler will throw an **unexported name** making it a very easy to resolve.

>[!example] Error Fixing Task
>In the exercise the `math.Pi` variable is lowercase causing the error.
> >[!error]
> >```
> ># example
> >
> >.\prog.go:9:19: undefined: math.pi (but have Pi)
> >Program exited: exit status 1
> >```
> 
> >[!success] Resolution
> >`math.pi` to `math.Pi`
> >
> >`3.141592653589793`
### Functions
Go Functions can take **zero** or **more arguments**.

[AddFunction.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/5%20-%20Add%20Function.go)
```go
package main

import "fmt"

func add(a int, b int) int {
	return a + b
}

func main() {
	fmt.Println("5 + 5 =", add(5,5)) // 5 + 5 = 10
}
```
<sub>Add Function Example</sub>

>[!note] Important Distinction
>Notice that the type comes ***AFTER*** the variable name.

When *two* or *more* named function parameters share a type, the type can be omitted from all but the last.

[MultipleParametersShorthand.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/6%20-%20Multiple%20Parameters%20Shorthand.go)
```go
package main

import "fmt"

func add(a, b int) int {
	return a + b
}

func main() {
	fmt.Println("5 + 5 =",add(5,5))
}
```
<sub>Two or More Named Parameters Shorthand Example</sub>
### Multiple Results
A function can return *any number* of results.

[MultipleReturnResults.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/7%20-%20Multiple%20Returns.go)
```go
package main

import "fmt"

func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
```
### Named Return Values
Go Return Values can be named and if named are treated as variables and defined as such at the top of the function.

>[!note]
>The name of these Return Values should be used to *document* the meaning.

A `return` statement without the *Argument Returns* is referred to as a *naked* return without any specified arguments.

[NamedReturnValues.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/8%20-%20Named%20Return%20Values.go)
```go
package main

import "fmt"

func add(x, y int) (sum int) {
	sum = x + y
	return // naked return
	//return sum //not naked return
}

func main() {
	fmt.Println("Naked Return Add Example:",add(8,8))
}
```
<sub>Go - Add Naked Return</sub>
### Variables
The `var` statement declares a *list of variables*, and the type is last.

[Variables.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/9%20-%20Variables.go)
```go
package main

import "fmt"

var num1, num2, num3 int // Package-Level Declaration

func main() {
	var i int // Function-Scope Declaration
	fmt.Println(i, num1, num2, num3)
}
```
#### Vars With Initialisers
Variable declaration can include an initialiser (`= 10` infers integer, `= "Hello"` infers string). Where an initialiser is present, the type can be omitted as the variable will take the type from the initialiser.

[VariablesWithInitialisers.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/10%20-%20Variables%20with%20Initializers.go)
```go
package main

import "fmt"

var i, j int = 1, 2 // Explict Type

func main() {
	var c, py, js = 1, true, "no!" // Implicit Type
	
	fmt.Println(i, j, c, py, js)
}
```
<sub>Go Explicit and Implicit Variable Type Declaration</sub>
### Short Variable Declarations
At **function-level** the variable short assignment `:=` can be used for variable declaration with an implicit type. Outside of functions every statement must begin with a *keyword* (var, func, etc) and so `:=` is unavailable.

[Short Variable Declaration.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/11%20-%20Short%20Variable%20Declaration.go)
```go
package main

import "fmt"

func main() {
	num := 10
	fmt.Println("Short Variable Declaration:", num)
}
```
### Basic Types
Go's basic types include:
- `string`

- `int (CPU dependent 32 or 64 bit limit machine OS dependent)
- `int8`
- `int16`
- `int32`
- `int64`

- `byte` alias for `uint8`

- `complex64`
- `complex128`

While `int` may have the same allocated size as an `int32` or `int64`, it is not the same in Go and still must be **explicitly type converted**. 

It is recommended, best practice to use `int` *only* when there is a specific reason to use a sized or unsigned integer (for example, an in-game bank balance that doesn't need to go into negatives). In addition, like `import` statements variables can be wrapped in parenthesis' in order to create multiple in one statement.

[Basic Types.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/12%20-%20Basic%20Types.go)
```go
package main

import (
    "fmt"
)

// All Exported except number
var (
    Status      bool    // Boolean
    Temperature float32 // Float32
    Balance     uint64  // Unsigned (No Negatives) Integer64
    number      byte    // Alias for uint8
)

// Printf  (Like in C) uses Format Verbs unlike python's fstring String Interpolation
func main() {
    fmt.Printf("Status Type: %T \n", Status)
    fmt.Printf("Temperature Type: %T \n", Temperature)
    fmt.Printf("Balance Type: %T \n", Balance)
    fmt.Printf("Number Type: %T \n", number)
}
```
### Zero Types
Variables declared without an explicit value are given a **zero value** by default, for each type:
- 0 for *Numeric* types
- false for *Boolean* type
- "" for empty strings

[ZeroValues.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/13%20-%20Zero%20Values.go)
```go
package main

import "fmt"

var (
	boolZero bool
	intZero int
	floatZero float64
	strZero string
)

func main() {
	fmt.Println("Zero Types:")
	fmt.Printf("Boolean Type - %v \n", boolZero
	fmt.Printf("Integer Type - %v \n", intZero)
	fmt.Printf("Float Type - %v \n", floatZero)
	
	// %q is Quoted String as %s and %v prints nothing as the self/value is empty.
    fmt.Printf("String Type - %q \n", strZero) 
}
```
### Type Conversions
In Go, the expression `T(v)` converts the Value **v** of the variable to its type **T**.

[TypeConversions.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/14%20-%20Type%20Conversions.go)
```go
package TypeConversions

import "fmt"

func main() {
    var (
        i int = 42
        f float64 = float64(i) // Explicit Type Conversion
        u uint = uint(f)
    )
    
    fmt.Println(i, f, u)
}
```

>[!note] A note about the difference between C/C++ and Go Type Conversion
>Unlike in C, Go assignment between items of different type requires **explicit conversion**.
>
> >[!success] Example of Explicit
> >```go
> >var i int = 42
> >var f float64 = float64(i)
> >```
> 
> >[!example] Example of Implicit
> >```go
> > var i int = 42
> > var f float64 = i // Implicit Type Conversion which is NOT allowed in Go
> >```
> >
> > >[!error] Error Caused
> > > `cannot use i (variable of type int) as float64 value in variable declaration`
### Type Inference
During variable declaration when not specifying a type either by `var` or the shorthand `:=` the variable's type is inferred from the value on the *right-hand side*. 

```
var i int
j := i // j is an int
```

However, when the right-hand side contains an *untyped numeric constant* (e.g. any number (`1`), decimal (`1.2`), or complex (`12i`)) the new variable may be an `int`, `float64`, or a `complex128` type depending on the precision of the constant value assigned.

[TypeInference.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/15%20-%20Type%20Inference.go)
```go
package main

import "fmt"

func main() {
	i := 120
	f := 12.5
	c := 0.867 + 0.5i
	
	fmt.Printf("Integer: %T \n", i) // int
	fmt.Printf("Float: %T \n", f) // float64
	fmt.Printf("Complex: %T \n", c) // complex128
}
```
### Constants
Constants are variables that cannot be changed. It can be a character, string, boolean, or numeric value. Finally, constants **cannot** be declared using the `:=` syntax.

>[!note] Difference between `var` and `const`
>- `var` creates the variable at **Run-Time** which allocates memory in RAM and can be referenced with a memory pointer.
>- `const` creates the constant at **Compile-Time** and do not have memory addresses for a pointer.

[Constants.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/16%20-%20Constants.go)
```go
package main

import (
	"fmt"
	"math"
)

const pi float64 = 3.141592653589793

func main() {
	// Calculate Circle Area
	// πr2 (Radius is 12)
	fmt.Println(pi * math.Pow(12, 2))
}
```
### Numeric Constants
Numeric constants are *high-precision* values. Instead of being *Integers* are *untyped constant* takes the type needed by its context, they are not limited by the size of any standard `int`. An `int` can store a maximum of a *64-bit integer* and sometimes less, therefore numeric constants can be useful, for equations or algorithms requiring large numbers.

>[!note] Bitshift Operations
>Bitshift operations are performed with `<<` and `>>`.
>### Bitshift Quick Reference
> | Expression | Meaning              | Result                         |
> | ---------- | -------------------- | ------------------------------ |
> | 1 << n     | 2^n              | power of two                   |
> | x << n     | x * 2 ^ n | multiply by power of two       |
> | x >> n     | x / 2 ^ n   | integer divide by power of two |
>
>```
>1 << 1 
>(start 0001 because 1 is 0001 in binary, shift left to 0010 which becomes 2 in denary.)
>
>1 << 100
>(1 followed by 100 zeros)
> (1 (0001) left shifts 100 places to 1267650600228229401496703205376 (10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000))
> 
> 1 >> 1
> (start with 0001 right shift one place becomes 0000 as the 1 falls off.)
>```

[NumericConstants.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/17%20-%20Numeric%20Constants.go)
```go
package main

import "fmt"

const (
	LargeInt = 1 << 100
	SmallInt = LargeInt >> 99
)

func convertInt(x int) int { return x }
func convertFloat(x float64) float64 { return x }

func main() {
	// fmt.Println(convertInt(LargeInt)) causes the unsigned constant causes an overflow to the 64 bit integer
	fmt.Println(convertInt(SmallInt))
	fmt.Println(convertFloat(LargeInt))
	fmt.Println(convertFloat(SmallInt))
}
```

>[!warning] Note about Comments
>Go does not like comments at the end of files as it gives an EOF error.
## Flow Control Statements
### For
[Go For Statement - All.go](https://github.com/TheMalevolentOne1/Go-Lang-Learning-Tour/blob/main/18%20-%20For%20Loop.go)
Go uses one loop construct. The basic `for` loop is comprised of three components separated by semicolons:
- The **initial statement** is executed *before the first* iteration. (e.g. for `i := 0`)
- The **condition expression** is evaluated *before every* iteration. (e.g. for *init*; `i < 10`)
- The **post statement** is executed at the *end of each* iteration. (e.g. for *init*; *condition*; `i++`)

```go
package main

import "fmt"

func main() {
	for i := 0; i < 10; i++ { fmt.Println(i) }
}
```

The *init statement* will often be a variable declarations, and any variables declared are only accessible in the scope of the for loop. Finally, the loop will stop iterating once the Boolean condition evaluates to **false**.

>[!important] Note on the lack of surrounding brackets
>Unlike other languages like C, JS, or Java, there are no parentheses surrounding the for statement and braces `{}` are always required.

#### The *init* and *post* statements are **optional**, therefore
```go
package main

import "fmt"

func main() {
	i := 0
	for ; i < 10; {
		i = i + 2
	}
	fmt.Println(i)
}
```
<sub>Go Example - Initialization & Post Statements are Optional</sub>

>[!note] `i` variable above *for statement*
>In the example above, the *init statement* is empty (i.e. `for ;`) therefore what is evaluated on condition check, is the function-level `i` variable until `i` reaches or surpasses 10 and the condition boolean turns false.
>

The **For Statement** is also Go's *While* loop, to utilise *for* as a *while* loop, the semicolons can be dropped, as demonstrated below:

```go
package main

import "fmt"

func main() {
	// For Loop Example (for init; condition; post statement {})
	i := 0
	for i < 10; i += 2 {
		fmt.Println(i)
	}
	
	// While Loop Example (for condition {})
	j := 0
	for j < 10 {
		fmt.Println(j)
		j = j + 2
	}
}
```

To make a **Forever** loop, the condition can be omitted entirely, and is expressed compactly as:

```go
package main

func main() {
	for {
	}
}
```
### If Statement
The Go *If Statement* is like the for statement. The condition does not need to be wrapped around parentheses `()` but braces `{}` are required.

```go
package main

import (
	"fmt"
	"math"
)

func isEven(n int) {
	if x % 2 == 0 {
		return true
	} else {
		return false
	}
}

func main() {
	fmt.Println(isEven(3)) // false
	fmt.Println(isEven(4)) // true
	fmt.Println(isEven(1)) // false
}
```

Like the *for statement* Go's if statement can start with a *short statement to execute* before the *condition*. 

`if init; condition {}`

>[!note]
Variables declared **inside** a *short if statement* are available inside any of the `else` blocks as well.

```go
package main

import "fmt"

func evenNumber(n int) int {
    if n%2 == 0 {
	    j := "this variable is inside function-level scope!"
        return n
    } else {
	    fmt.Println(j)
        return 0
    }
}

func main() {
    if a := evenNumber(22); a == 22 {
        // Example of If Shorthand if var_named := something; var_named != valid_state {}
        // Would probably be beneficial in a program developed through a state machine.
        fmt.Println(oddNumber(3))
        fmt.Println(oddNumber(5))
        fmt.Println(evenNumber(4))
        fmt.Println(evenNumber(1))
    }
}
```

---
# Exercise - Loops & Functions
>[!example] Exercise Task
>Implement a *square root function*, given a number *x* we want to find the number *z* for which z^2 is most nearly *x*.
>
Computers typically compute the square root of *x* using a loop. Starting with some guess *z*, which can be adjusted based on how close z^2 is to *x*, producing a better guess.
>
>`z -= (z\*z - x) / (2*z)
>
> Repeating this adjustment makes the guess better and better until an answer is reached that is as close to the actual square root as is possible.
>
>Implement this in `func` Sqrt provided. A cecent starting point for z is 1, no matter what the input. To begin with, repeat the calculation 10 times and print each z along the way.
>
>See how close to the answer is achieved for various values x (1, 2, 3, ...) and how quickly the guess improves.
>
>Hint: To declare and initialize a floating point value, give it floating point syntax or use a conversion:
>`z := 1.0`
>`z := float64(1)`
>

I struggled to understand what it was asking me and fail to understand the formula even more. Why am I being made to do this as a way to go through the Tour of Go?

Turns out it is the [Newton-Raphson method]() I asked an LLM to change its variables into something easier for me to understand which resulted in this, rather than an abstract 'z' and 'x'.

$$
NewGuess = \frac{(Current Guess \times Current Guess) - Target Number}{2 \times Current Guess}
$$

```My-Understanding-After-Much-Staring
implement func that loops 10 times against equation to and print z each time to see how the guess improves.

My mistake was thinking it was asking for a recursive algorithm. 
```

```go
package main

import "fmt"

func sqrtRoot(x float64) {
    var z float64 = 1.0 // Initial Guess

    for i := range 10 {
        z -= ((z * z) - x) / (2 * z)
        fmt.Println(i, " ", z)
    }
}

func main() {
    sqrtRoot(1)
}
```

```txt
x = 1

0   1
1   1
2   1
3   1
4   1
5   1
6   1
7   1
8   1
9   1

x = 2

0   1.5
1   1.4166666666666667
2   1.4142156862745099
3   1.4142135623746899
4   1.4142135623730951
5   1.414213562373095
6   1.4142135623730951
7   1.414213562373095
8   1.4142135623730951
9   1.414213562373095

x = 16

0   8.5
1   5.1911764705882355
2   4.136664722546242
3   4.002257524798522
4   4.000000636692939
5   4.000000000000051
6   4
7   4
8   4
9   4

x = 64

0   32.5
1   17.234615384615385
2   10.474036101145005
3   8.292191785986859
4   8.005147977880979
5   8.000001655289593
6   8.00000000000017
7   8
8   8
9   8
```

>[!note]
>The exercise was not as bad as I initially expected and is actually rather fun to use once finished to see how the results.

---

Tomorrows stuff:
switch
switch evaluation order
switch switch with no condition
Defer
stacking defers

day after
further types: structs, slices, and maps (**Go DOES NOT have CLASSES**)

