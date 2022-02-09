---
title: Functions
sidebar_position: 200
---

## Simple Function Declaration

Declaring functions in Loop is easy, you just use the `fun` keyword accompanied by it's arguments and function body. For example:

```loop
fn(one, two, three) {
  // Body
}
```

If you'd like to call a function again (which is it's primary use-case of course). Then you can assign a function to a variable, which is as easy it sounds.

```loop
// Notice the "var fn ="
var adder = fn(one, two, three) {
  return one + two + three
}

// Now you can call the function like this:
adder(1, 2, 3) // Returns 6
```

## Closures

"A closure is a record storing a function together with an environment" - [Wikipedia](<https://en.wikipedia.org/wiki/Closure_(computer_programming)>)

Because functions are considered first-class in Loop it means they can also contain their own environment. Creating a function automatically creates an environment for that function. Take this as an example:

```loop
var closure = fn(x) {
  var num = x
  return fun(y) {
    return x * y
  }
}

var outer = closure(100) // Returns a function reference
outer(10) // Returns 1000
```

## Built-in Funtions

In the Loop interpreter are native functions that are built-in, you do not need any packages to use these.

### print

Prints the value of the expresion that is passed as argument.

```loop
print("Hello, world")       // Prints: "Hello, world" in the terminal

print("Hello, ", "world")  // Prints: "Hello, world" in the terminal
```

### println

Does exactly the same as the `print()` function, but with a "new-line" at the end.

```loop
println("Hello, world")       // Prints: "Hello, world" in the terminal with a new-line
```

### len

The `len()` functions returns the number of elements in an array or the number of characters in a string.

```loop
var length = len("Loop")           // Variable "length" has the value: 4

var length = len([1, 2, 3, 4, 5])  // Variable "length" has the value: 5 
```

### format

The `format()` functions replaces '%a' in a string with a expression that you passed as an argument. Below you wil find an example:

```loop
var result = format("Name: %a", "Raj")  // result will have a string with the value: "Name: Raj"
```

You can also do this with multiple '%a':

```loop
var result = format("Name: %a, Age: %a", "Raj", 14)  
// result will have a string with the value: "Name: Raj, Age: 14"
```