---
title: Loop Expression
sidebar_position: 300
---

## For Loop

The For-loop allows to repeat the code written in its block, to be repeated
until the condition evaluates to: "true" or "truthy".

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

The break keyword will stop the loop and "break" out of the loop. Break also has the functionality to return a value with it.

Examples given below:

```loop
// Break without returning a value
for (true) {
    break
}

// Break with a value
for (var i from 1 to 100) {
    if (i == 10) {
        // Breaks and return the value of 'i'
        break i
    }
}
```
