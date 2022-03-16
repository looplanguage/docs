---
title: Loops
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

// You can also do loops without the parenthesis
for "hello" {
    // Code
}
```

The first for-loop it will repeat forever, because the condition is "true". The same goes for the second for-loop, "hello" will evaluate to "truthy", and thus ewill loop forever.

You can write a loop with **and** without the parenthesis around it. In the documentation we use without as the default and we encourage you the user to do the same.

### Examples:

The for-loop listed below loops works as follows:

A variable is created, called "n" with the value 1, then the code block is executed. Afterwords the for-loop checks if "n" equals or is greater than 100, if that is not the case, "n" gets one-upped. 
Then everythin repeats itself, until "n" is greater or the same as 100.

```loop
// This will loop from 1 (including) to 100 (excluding)
for var n = 1 to 100 {
    // Code
}
```

In this example, the for-loop loops through the array. In this case you have a variable called "value" and it iterates through the array, element by element. When it executed the code block and it is at the last element in the array. It stops repeating the code block, and continues the rest of the program.

```loop
// Loop through the array
var array = [1, 10, 4]
for var value in array {
    // Code
}
```

## Break

The break keyword will stop the loop and "break" out of the loop. Break also has
the functionality to return a value with it.

Examples given below:

```loop
// Break without returning a value
for true {
    break
}
```

The first example is very simple, the for-loop will execute the code-block forever because the condition is "true". But because the only statement in the code-block is "break", it will immediately break at the first iteration.

:::caution

Feature is not implemented yet

:::

```loop
// Break with a value
var result = for (var i = 1 to 100) {
    if i == 10 {
        // Breaks and return the value of 'i'
        break i
    }
}
```

In the last example you have a loop which goes from 1 to 100. The current value of loop gets assigned to "i". In the loop there is an if-expression, when "i" equals 10, it breaks out of the loop. In this case the break returns a value with it, the value of "i" is returned. Which means that the value of "i" get assigned to "result". In this specific loop, the variable "i" will never reach a value higher than 10.