---
title: Conditionals
sidebar_position: 0
---

Allows for conditional execution of code. Either one condition or multiple can
be used, example:

```loop
if ( expression ) {
  // Code
}
```

Or with an else condition. When the expression evaluates to false, the else block will be executed:

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

When the "expression" results in a boolean with the value "true", the code inside of the if-expression will be executed.

## Examples:

Lets take a look at a real example:

```loop
var foo = 3
if (foo == 3) {
  println(foo)
}
else {
  println("Is not three")
}
```

This code will result in the number three being printed in the terminal. That is because the variable "foo" has the value of three, and foo equals 3. 