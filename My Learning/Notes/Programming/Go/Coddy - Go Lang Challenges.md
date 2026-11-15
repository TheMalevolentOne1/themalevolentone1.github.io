---
tags:
  - Coddy
  - Go
---
[[Notes]]

---
# Fundamentals
## Introduction To Go
### Hello World

>[!example] Task
>Use the code view to write a program that outputs `Hello, World!`

```go
package main
import ("fmt")

func main() {
    fmt.Println("Hello, World!")    
}
```

### Println

>[!note]
>Println is from the `fmt` stands for *format* or formatted I/O. Text displayed to the terminal also has a newline.

>[!example] Task
>In this challenge, you'll practice using `fmt.Println()` to display multiple values on the same line.
>
>Your task is to use `fmt.Println()` to print the text `Alex 25 coding` on a single line.
>
>Remember that `fmt.Println()` can accept multiple arguments, and it will automatically add spaces between them.

```go
package main
import "fmt"

func main() {
    fmt.Println("Alex", "25", "coding")
}
```

>[!error] No Issues
### Go Comments

>[!example] Task
>Fix the code so that only `Hello, Go!` is printed.
>
>- Add `//` at the start of the line that prints `Goodbye!`
>- The line printing `Goodbye!` should become a comment so it does NOT run
>- Do not delete any line, and do not change the line that prints `Hello, Go!`
>

```go
package main
import "fmt"
func main() {
    // Type your code below
    // Turn the line below into a comment so it stops running
    //fmt.Println("Goodbye!")

    fmt.Println("Hello, Go!")

}
```

>[!error] No Issues
## Variables & Basic Data Types
### What is Variable
>[!example] Task
>In this challenge, you'll practice declaring variables using the `var` keyword in Go. Your task is to declare two variables: `name` as a string with the value "Gopher" and `age` as an integer with the value 5. Then, the program will print these values.

```go
package main
import "fmt"

func main() {
	var name string = "Gopher"
	var age int = 5
	fmt.Println("My name is", name, "and I am", age, "years old.")
}
```

>[!note] Unsigned Integer
>The Go Language supports the `uint` datatype which stands for Unsigned Integer which is different to a regular `int` as it does not support negative numbers, therefore it has increased positive limit.
>
>```
>int8 - the set of all signed 8-bit integers (-128 to 127)
>int16 - the set of all signed 16-bit integers (-32768 to 32767)
>```
>
>[source](https://go.dev/ref/spec#Numeric_types)
>

>[!error] No Issues!

---
# Golang Challenges - Level 1 - Chapter 1
## Level 1 - Sum & Divide

>[!example] Task
>Write a function that will take two numbers, calculate the sum of all numbers between them (inclusive), and divide that sum by the sum of the two entered numbers.
>
>For the numbers `4` and `10`:
>1. Calculate the sum of all numbers between `4` and `10`:
>    `4 + 5 + 6 + 7 + 8 + 9 + 10 = 49`
>2. Divide this sum by the sum of the two entered numbers:
>    `49 / 4 + 10` 
>3. The result will be:
>    `3.5`

```go
func sumAndDivide(a1 int, a2 int) float64 {
    num := 0
    
    for i := a1; i <= a2; i++ {
        num += i
    }
    
    total := float64(num) / float64(a1 + a2)
    return total
}
```

>[!error] Issues
>- [Short Variable Declaration](https://go.dev/tour/basics/10)
>- [Go Integer Division](https://www.digitalocean.com/community/tutorials/how-to-do-math-in-go-with-operators#:~:text=If%20you%20run%20the%20following%20example%20of%20dividing%2080%20/%206%2C%20you%E2%80%99ll%20receive%2013%20as%20the%20output%20and%20the%20data%20type%20will%20be%20int%3A) - Must cast variables to `float64`.
>- [Function Return Type](https://www.w3schools.com/go/go_function_returns.php)

---
This website has an annoying skills system that reduces energy levels for quizzes and for programming challenges, therefore I will seek an alternative site that can better fit what I want to do and learn. 

While Go is a general purpose language, it can be utilised for backends, it may be useful to replicate the jokes system that Tony taught in [[CO3404 Distributed Systems]], or a basic web application like it.