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

// or, withour parenthesis 

if expression  {
  // Code
} else if expression {
  // Code
} else if expression {
  // Code
} else {
  // Code when not a single expression equals to true
}
```

When the "expression" results in a boolean with the value "true", the code inside of the if-expression will be executed.

You can write a if-expression with **and** without the parenthesis around it. In the documentation we use without as the default and we encourage you the user to do the same.

## Examples:

Lets take a look at a real example:

```loop
foo := 3
if foo == 3 {
  println(foo)
}
else {
  println("Is not three")
}
```

This code will result in the number three being printed in the terminal. That is because the variable "foo" has the value of three, and foo equals 3. 

### Expression

Since conditionals statements in Loop are not statements, but actually expressions, they evaluate to a value. This allows you to do things like this:

```loop
foo := if true {
  "true"
}
else {
  "false"
}
```

Something important to note, is that this if-expression gets evaluated ones. It will not be evaluated everytimr you use it.