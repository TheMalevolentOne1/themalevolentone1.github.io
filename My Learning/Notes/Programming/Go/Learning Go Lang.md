---
tags:
  - Programming
---
[[Notes]]
[[Coddy - Go Lang Challenges]]

---
# Go
Go compiles directly into machine code rather than relying on an interpreter like Python. It uses [GoRoutines](https://go.dev/tour/concurrency/1) to handle numerous tasks at once.
## Installing Go Lang
1) Install [Go](https://go.dev/doc/install).
2) Type `go version` in terminal to verify installation.
3) Open VS Code and press `Control + Shift + X`.
4) Find the [Go Extension](https://marketplace.visualstudio.com/items?itemName=golang.go).
5) Create a new folder and direct VSCode into it.
6) `go mod init projectName`.
> Creates the `go.mod` file which stores  the name of the module, dependencies, and the go version. Its the Go equivalent of `package.json` in NodeJS.
7) Create a new file inside the folder called `main.go`.
## Variable Declaration
### Standard
The standard declaration in Go uses the keyword `var` and requires types to be specified however they can be initialised without a value unlike shorthand.

```go
var username string = "User 1" // string explicit typing
```

### Shorthand
Shorthand omits the `var` keyword and automatically infers variable type based on the value assigned to it.

```go
username := "User 1" // infers from variable type string
```

---
# My First Program
```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello World!")
}
```
<sub>Hello World! Go Program</sub>

>[!note] Different Bracket Style
>While I typically like to use a style as demonstrated below in JS, I discovered in that [semicolons are inserted automatically](https://go.dev/doc/effective_go#:~:text=Instead%20the%20lexer%20uses%20a%20simple%20rule%20to%20insert%20semicolons%20automatically%20as%20it%20scans).
># JavaScript
> >```js
> >if a < b 
> >{
> >	console.log("Hello World!");
> >}
> >```
> # Go Example Like Above
> ## [Because](https://go.dev/doc/faq#semicolons:~:text=Why%20are%20there%20braces%20but%20no%20semicolons%3F%20And%20why%20can%E2%80%99t%20I%20put%20the%20opening%20brace%20on%20the%20next%20line%3F%20%C2%B6) therefore
> >```go
> >if a < b {
> >	fmt.Println("Hello World!")
> >}
> >```
> >
> >

---

[[Go Project - Basic Messaging Application]]