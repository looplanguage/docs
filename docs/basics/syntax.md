---
title: Syntax
sidebar_position: 0
---

:::caution

Not all features mentioned here are implemented

:::

The basic language syntax of Loop will be explained here. Only the very basics
will be explained here. If the feature has more to it a link to the
documentation entry will be provided for more detail.

## Entry Point

Every Loop program will start with the file provided when invoking the Loop
executable.

For example, this in `example.loop` and invoking it with `./loop example.loop`
will print `"Hello World!"`

```loop
print("Hello World!")
```

## Standard Input & Output

To read from standard input (stdin) and write to standard output (stdout) Loop
provides some easy helpers.

### Input

For input you can use the `input` function. For example to accept user input
without a prompt:

```loop
// Variable "test" will contain the value of what the user typed in.
test := input("")
```

You can also accept user input with a prompt, for example:

```loop
// Variable "test" will contain the value of what the user typed in.
test := input("Prompt > ")
```

### Output

It's extremely simple to output to stdout. There are two built-in functions for
this.

#### print

Allows you to directly print to stdout without a newline.

```loop
// No new line, results in "Hello World!"
print("Hello")
print(" World!")

// Explicit new line
print("Hello World!\n")
```

#### println

Allows you to print to stdout with an implicit new line.

```loop
// Implicit new line
println("Hello World!")

// Implicit & Explicit new line (results in two new lines)
println("Hello World!\n")
```

## Variables

In Loop every expression can be assigned to a variable for future reference.
This includes things like functions and loops. Declaring a variable is simple
and concise.

The most basic feature is assigning an integer to a variable.

```loop
x := 100;
```

It's also possible to assign functions and then call it. Calling a function
requires parenthesis. Without them, it will result in the function reference
being returned.

```loop
// Defines a new function named "func"
func := fn() {}

// Calls the function "func", notice the parenthesis
func()
```

[More about Variables](../concepts/variables.md)

## Functions

A function is a a simple way to bundle common instructions that might need an
alternate input. Defining a function is a simple, for example to create a
function that doubles it's input:

```loop
// Defines a new function called double with one parameter named "x"
double := fn(x) {
  // Returns the input "x" multiplied by 2
  return x * 2
}

// Evaluates to 200
double(100)
```

[More about Functions](../concepts/types/functions.md)
