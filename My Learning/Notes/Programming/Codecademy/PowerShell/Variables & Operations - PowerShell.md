---
tags:
  - PowerShell
---
[[PowerShell Language Notes]]
[[Getting Started - PowerShell]]

---
# Variables Types & Advanced Usage
Variables store a piece of data, such as the results of a command. 
## Variable Types
The following are some common types of variables:
- `Int`: integers like `2`, `-5`, `99`
- `String`: zero or more characters enclosed in double quotes like `"Codecademy!"`, `"3X4mP|3"`
- `Boolean`: two possible values: `$True` and `$False`
- `Array`: a collection of items like `25, "red", $False, 16.30`
## Creating Variables
Variables are referenced using a dollar sign `$`.

```PowerShell
$my_string_variable = "Hello World"
```

This syntax indicates that PowerShell is a dynamically typed language.

> PowerShell Variables are NOT case-sensitive and can include spaces and special characters when enclosed in curly brackets `{}`. 
> 
> The example uses underscores which are recommended as variables with special characters within their name can be difficult to work with, especially in programs that may require scaling.
## Using Variables
```PowerShell
PS > $my_string_variable
Hello World
```

When referencing the defined variable into the PowerShell terminal will proceed to `Write-Host` the value stored.
## User Input
```PowerShell
PS > $my_input = Read-Host -Prompt "Enter a number"
```

The above example will output the `-Prompt` string and then wait for the user to input a value. The value will then be stored in the variable named `$my_input`.

---
# Tasks
1) In the PowerShell terminal, create a variable called `$pi` and assign it the value `3.14`.
```PowerShell
$pi = 3.14
```
2) Print the value of the variable called `$pi`.
```PowerShell
$pi
```
3) Create a variable called `$name` and assign your name to it as a string.
```PowerShell
$name = "Here a name"
```
4) Use `Read-Host` with the prompt, `"Enter your age"`, and save the input to a variable called `$age`.
```PowerShell
$age = Read-Host -prompt "Enter your age:"
```
5) Copy and paste the following command on the PowerShell terminal.
```PowerShell
Write-Host "Hello, $name! You are $age years old."
```

---
# Variable Types & Advanced Usage
Enforcing types, creating multiple variables, and a few variable-related cmdlets.

The following are some common types of variables:
- `Int`: integers like `2`, `-5`, `99`
- `String`: zero or more characters enclosed in double quotes like `"Codecademy!"`, `"3X4mP|3"`
- `Boolean`: two possible values: `$True` and `$False`
- `Array`: a collection of items like `25, "red", $False, 16.30`

> The default type of any uninitialized variable is `$null`. 
>
> PowerShell uses [Dynamic Typing](https://en.wikipedia.org/wiki/Type_system#Dynamic-type-checking-and-runtime-type-information)
## Get Variable Type
```PowerShell
ps > $my_string_variable = "Hello World"
ps > $my_string_variable.GetType().Name
String
```
## GetType Function Return Type
```PowerSHell
ps > $($my_string_variable.GetType()).GetType()

IsPublic IsSerial Name        BaseType
-------- -------- ----        --------
False    True     RuntimeType System.Reflection.TypeInfo

```
## Constrained Variables
In order to **enforce** a certain type on a variable, a _constrained variable_ must be created via casting.

```PowerShell
ps > [Int]$age = 25
ps > $age
25

ps > $age = "twenty five"
Cannot convert value "twenty five" to type "System.Int32". Error: "Input string was not in a correct format."
```
## Creating Multiple Variables
PowerShell allows creating multiple variables using one statement.

```PowerShell
$i = $j = $k = 0
```
### Assigning Multiple Variable Values

```PowerShell
$number, $colour, $bool = 25, "red", $false
```

---
# Tasks
1) At the top of the **variable_types.ps1** file, create a constrained variable of type `Int` and the name `$num_1`. Assign `$num_1` the value `42`.
```powershell
[Int]$num_1 = 42
```
2) Create another constrained variable in the the **variable_types.ps1** file of type `Int` and the name `$num_2`. Give `$num_2` the value `"forty two"`.
```Powershell
[Int]$num_2 = "forty two"
```

You will encounter an error, but it works as intended! Data of `String` type cannot be assigned to a variable expecting an `Int`.

3) Now create three variables using one comma-separated statement.
	1. The first variable should be called `$name` and initialized to your name in a string format.
	2. The second variable should be called `$color` and initialized to your favorite color in a string format.
	3. The third and final variable should be called `$date` and assign `(Get-Date).DateTime` to it.
```Powershell
$name, $color, $date = "Here is a name!", "Red", (Get-Date).DateTime
```
4) Initialize the `$date_data_type` variable to the data type of the `date` variable
```PowerShell
$date_data_type = $date.GetType().Name
```

---
# Environmental Variables
[Environmental Variables](https://en.wikipedia.org/wiki/Environment_variable) store information related to the current session such as the Operating System and user sessions like the terminal. Global variables which means they can be easily accessed across commands and programs. Typically created by the OS but can also be utilised to configure the production environment.
## List Environmental Variables
```powershell
Get-ChildItem Env:

Name                           Value
----                           -----
ALLUSERSPROFILE                C:\ProgramData
APPDATA                        C:\Users\USER\AppData\Roaming
CommonProgramFiles             C:\Program Files\Common Files
CommonProgramFiles(x86)        C:\Program Files (x86)\Common Files
CommonProgramW6432             C:\Program Files\Common Files
---SNIP---
```
## Specify Environmental Variable
```powershell
(Get-ChildItem Env:USERDOMAIN).Value
TheMalevolentOnes-Laptop

OR

$ENV:USERDOMAIN
```

The two most common utilised environmental variables utilised in PowerShell are `HOME` and `PATH`.

`HOME` - Indicates the current user's home directory.
`PATH` - Includes all directories where applications look for executables.
## Creating an Environmental Variable
```Powershell
$Env:EXAMPLE_VAR = "value"
```

---
# Tasks
1) List all the environment variables using the PowerShell Terminal
```powershell
ps > Get-ChildItem Env:
```
## Command Explanation
`Get-ChildItem` - Cmdlet lists all the items in a specific location similar to `ls` in Unix-like systems or `dir`.
`Env:` - The drive containing all the environmental variables showing their `names` and `values`.
2) Create a new environment variable called `USERS` and assign your name as the value. Be sure to use all capital letters.
```PowerShell
$Env:USERS = "THE-MALEVOLENT-ONE"
```
If you list all the environment variables again, you will now see `USERS` in the list.
```
Get-ItemChild Env:
```
3) Print the value of the environment variable `USERS`.
```PowerShell
Get-ChildItem Env:USERS
```
3) Run the `environment_variables.ps1` script file in the terminal by typing `./environment_variables.ps1`.
```powershell
ps > ./environmental_variables.ps1

Hello, THE MALEVOLENT ONE!

Name Value
---- -----
BROWSERSLIST_IGNORE_OLD_DATA 1
EIN_IMAGE ubuntu
EXPIRES_AT 1757976864
HOME /home/ccuser
HOSTNAME 1db8d50e334e
LANG en_US.UTF-8
LOG_LEVEL 2
PATH /opt/microsoft/powershell/7:/home/cc…
POWERSHELL_UPDATECHECK Off
PSModulePath /home/ccuser/.local/share/powershell…#
PWD /home/ccuser/workspace/lps-vo4
SESSION_ID 1502cce7-7b73-4376-875b-66ed84fc23b9
TERM xterm
TZ Etc/UTC
USERS THE MALEVOLENT ONE
WORKSPACE_SERVICE_HOST https://workspace.production-eks.cod…
```

---
# Arithmetic Operations
| Operator | Name           | Description                                                                  |
| -------- | -------------- | ---------------------------------------------------------------------------- |
| `+`      | Addition       | Adds numbers, concatenates strings and arrays.                               |
| `-`      | Subtraction    | Subtracts or negates numbers.                                                |
| `*`      | Multiplication | Multiplies numbers or copies strings and arrays a specified number of times. |
| `/`      | Division       | Divides numbers.                                                             |
| `%`      | Modulo         | Returns the remainder of a division operation.                               |

> Arithmetic operators are binary operators, which means they act on two operands. Their syntax in PowerShell is `<Operand_1> <Arithmetic Operator> <Operand_2>`.
>
> Arithmetic operators, `+` and `*`, also work on strings and arrays.
## Assignment Operators
|Operator|Name|Description|
|---|---|---|
|`=`|Assignment|`$x = 3` assigns value `3` to variable `x`.|
|`+=`|Addition Compound Assignment|`$x += 3` is short for `$x = $x + 3`.|
|`-=`|Subtraction Compound Assignment|`$x -= 3` is short for `$x = $x - 3`.|
|`*=`|Multiplication Compound Assignment|`$x *= 3` is short for `$x = $x * 3`.|
|`/=`|Division Compound Assignment|`$x /= 3` is short for `$x = $x / 3`.|
|`%=`|Modulo Compound Assignment|`$x %= 3` is short for `$x = $x % 3`.|
## Unary Operators
|Operator|Name|Description|
|---|---|---|
|`++`|Increment|`$x++` is short for `$x = $x + 1`.|
|`--`|Decrement|`$x--` is short for `$x = $x - 1`.|
## Equality Comparison Operators
| Operator | Name                          | Description                                                   |
| -------- | ----------------------------- | ------------------------------------------------------------- |
| `-eq`    | Equal (==)                    | `$x -eq $y` is `True` if `x` and `y` are equal.               |
| `-ne`    | Not Equal (!=)                | `$x -ne $y` is `True` if `x` and `y` are not equal.           |
| `-gt`    | Greater Than (>)              | `$x -gt $y` is `True` if `x` is greater than `y`.             |
| `-lt`    | Less Than (<)                 | `$x -lt $y` is `True` if `x` is less than `y`.                |
| `-ge`    | Greater Than or Equal to (>=) | `$x -ge $y` is `True` if `x` is greater than or equal to `y`. |
| `-le`    | Less Than or Equal to (<=)    | `$x -le $y` is `True` if `x` is less than or equal to `y`.    |
## Logical Operators
|Operator|Name|Description|
|---|---|---|
|`-and`|And|`$x -and $y` is `True` only if `$x` and `$y` are both `True`.|
|`-or`|Or|`$x -or $y` is `True` if either `$x` or `$y` is `True`.|
|`-xor`|Xor|`$x -xor $y` is `True` if only, but not both, `$x` or `$y` is `True`.|
|`!` or `-not`|Not|`!$x` is `True` when `$x` is `False` and `False` when `$x` is `True`.|
## Operator Precedence
The Operator Precedence is the order of operations in which PowerShell evaluates operators used in the same expression.

The **PowerShell Operator Precedence** is:
1) Parentheses `()`
2) Unary Operators `++, --`
3) Boolean Operators `!, not`
4) Arithmetic Operators `*, /, %, +, -`
5) Comparison Operators `-eq, -ne, -gt, -ge, -lt, -le` | `-contains` `-notContains`
6) Equality Operators `-and, -or, -xor`
7) Assignment Operators <code>=, +=, -=, *=, /=, %=</code>

---
# Arithmetic Operator Tasks
1) In the PowerShell terminal, add two numbers `5` and `2`.
```PowerShell
ps > 5+2
7
```
2) Now subtract `7` from `49` in the terminal.
```powershell
ps > 49-7
42
```
3) Multiply the string `"hello"` by 3.
```powershell
ps > "hello" * 3
hellohellohello
```
4) Next, divide the number `64.209` by `3`.
```powershell
ps > 64.209 / 3
21.403
```
5) Finally, get the remainder of the division of `39` by `4`.
```powershell
ps > 39 % 4
3
```

---
# Assignment & Unary Operator Tasks
1) In the script file, `number_one.ps1`, use the multiplication compound assignment operator to multiply the variable `$number` by `3`.
```PowerShell
$number *= 3
```
2) On the next line, use the addition compound assignment operator to add `6` to the variable `$number`.
```PowerShell
$number += 6
```
3) On the next line, use the division compound assignment operator to divide the variable `number` by `3`.
```PowerShell
$number /= 3
```
9) On the next line, use the subtraction compound assignment operator to subtract the variable `$original_number` from the variable `$number`.
```PowerShell
$number -= $original_number
```
10) On the next line, use a unary operator to subtract `1` from the variable `$number`.
```
$number--
```
11) Finally, type `./number_one.ps1` on the terminal to run the script.
```powershell
ps > ./number_one1.ps1
```

---
# Equality Comparison Tasks
1) In the PowerShell terminal, check if the string `"happy"` is equal to the string `"coding"`.
```powershell
ps > "happy" -eq "coding"
False
```
2) Using the greater than operator, check if the integer `5` is greater than the integer `2`.
```powershell
ps > 5 -gt 2
True
```
3) Using the less than or equal operator, check if `43.15` is less than or equal to `43.15`.
```powershell
ps > 43.15 -le 43.15
True
```

---
# Logical Operator Tasks
1) In the **logical_operators.ps1** script file, check if both variables `$number_1` and `$number_2` are less than `50`. Assign the Boolean result to a variable called `$both_are_less_than_50`.
```powershell
[Bool]$both_are_less_than_50 = $number_1 -lt 50 -and $number_2 -lt 50
```
2) Check whether the variable `$number_1` OR `$number_2` is greater than `100`. Make the variable `$one_is_higher_than_100` equal to its result.
```powershell
$one_is_higher_than_100 = $number_1 -gt 100 -or $number_2 -gt 100
```
3) Check whether ONLY one variable `$number_1` or `$number_2` is less than or equal to `10` and assign the result to a variable `$only_one_is_less_than_10`.
```powershell
$only_one_is_less_than_10 = $number_1 -le 10 -xor $number_2 -le 10
```
4) Using one of the two logical operators for negation, `-not` or `!`, verify that the variable `$name` is not equal to the string `codecademy`. Make the Boolean variable `$name_is_not_codecademy` equal to its result.
```powershell
[Bool]$name_is_not_codecademy = !($name -eq "codecademy")
```
5) Run the script from the terminal by typing `./logical_operators.ps1`.
```powershell
ps > ./logical_operators.ps1
```

---
# Operator Precedence Tasks
1) In the script file named `expression_precedence.ps1`, we have three expressions that return `8`, `6`, and `False` respectively. These results are not what we are looking for. Let’s use parentheses `( )` to acquire the desired results.

For `expression_1`, we want `4` as a result. Put parentheses around the expression `2 + 4 * 2`.
```powershell
$expression_1 = 5 % (2 + 4 * 2) - 1
Expression 1 returns: 4
```
2) We want `2` to be the result of `expression_2`. Enclose the expression `3 * (2 + 1)` with parentheses
```powershell
$expression_2 = (5 * 4) % (3 * (2 + 1))
```
3) The way it is now, `expression_3` is currently returning `False`. We want this to be `True`.

Remove parentheses around `3 + 2 -ne 5` and put parentheses around `2 -ne 5` instead. Remove parentheses around `5 -gt 8` and put parenthesis around the `-gt` operator expression `2 * 5 -gt 8`.
```powershell
$expression_3 = 3 + (2 -ne 5) -and (2 * 5 -gt 8)
```

---
# Summary
Current Progression:
- How to create variables in a variety of ways
- Variable types and constrained variables
- Listing and creating environment variables
- Manipulate variables and data with operators
- Using arithmetic [operators](https://www.codecademy.com/resources/docs/powershell/operators)
- Using assignment and unary operators to change data
- Using equality and type comparison operators to compare two pieces of data
- Using logical operators that enable us to create complex comparison statements
- Order of operation

[[Objects & Arrays - PowerShell]]
