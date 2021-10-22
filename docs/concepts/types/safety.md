---
title: Type-Safety
sidebar_position: 0
---

# Safety

A type specifies a collection of values that have similar traits. 
Type safety makes sure that, when you have a variable of a specific type, you cannot assign a different value of a 
different type to the [variable](../variables). Type safety in a language is important, because it means that you have predictable and defined behaviour.

```loop
// Variable declaration
var int = 100
int = 200 // This will work!
```

A variable called "int" is declared with the value: 100, the value: 100 is of type "Integer". 
The row below the variable "Int" gets assigned the value of 200.

```loop
// Variable declaration
var int = 100
int = "Hello" // This will NOT work! Different types
```

Again a variable is declared with the value: 100, which we just learned is an "Integer". The row below "int" gets assigned
"Hello" which is of type "String". This is does not align with the idea of type-safety and thus results in an error.