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
