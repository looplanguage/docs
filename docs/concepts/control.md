---
title: Control
sidebar_position: 200
---

## Conditional Expression

Allows for conditional execution of code. Either one condition or multiple can be used, example:

```loop
if ( expression ) {
  // Code
}
```

Or with an else condition:

```loop
if ( expression ) {
  // Code
} else {
  // Code when expression was false
}
```

Or, even more else conditions:

```loop
if ( expression ) {
  // Code
} else if ( expression ) {
  // Code
} else if ( expression ) {
  // Code
} else {
  // Code when not a single expression equals to true
}
```

## Return Statement

The return statement allows you to early-return any body expression.

In functions this means that the following code will return "20" instead of "40"

```loop
var double = fun(x) {
  return 20
  return 40
}
```

A return statement will only return the nearest block. Meaning that the following will not return it's outer function:

```loop
var outer = fun(x) {
  fun() {
    return 20
  }()
}
```

There is one exception to this rule, which is if it's used in a loop. For example, this will return the outer block (and stop the loop):

```loop
var fn = fun() {
  while(true) {
    return 20
  }
}
```

## For Loop

The For-loop allows to repeat the code written in its block, to be repeated until the condition evaluates to: "true" or "truthy".

```loop
// This will loop forever, because it will always evaluate to "true"
for (true) { 
    // Code
}

// This will loop forever, because "hello" is "truthy"
for ("hello") { 
    // Code
}
```

You can also do something like this:

```loop
// This will loop from 1 (including) to 100 (excluding)
for (var n from 1 to 100) { 
    // Code
}

// Loop through the array
var array = [1, 4, 10]
for (var value in array) { 
    // Code
}
```

## Break



## Goto



## Labels

