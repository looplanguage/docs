---
title: Attributes
sidebar_position: 400
---

:::caution

Not all features mentioned here are implemented

:::

In Loop you can give segments of code an attribute to their change default
behavior.

## Attribute Scopes

Attributes are scoped based depending on where they were put in your code. They
differ from [regular scoping](./scoping.md) in that they "apply" to certain
segments and aren't always dependant on curly brackets.

### General Scopes

A simple example of a scope is the "root" scope. Which means that an attribute
applies to **all** code (including it's imports).

```loop
@Strict

// Code
```

The above code will force strict types on all code in the file it's in
(including the imported files).

Let's say that we don't want this attribute on the entire file, we can utilize
the general scoping rules as well. For example if we only want strict-type
checking in an if-expression:

```loop
// Code (no strict type checking here)

@Strict
if (true) {
  // Strict type checking attribute will only be affected in this scope
}

// More code (no strict type checking here)
```

It's also possible to apply multiple attributes on a single scope, like if we
want strict type checking but also want to force JIT a function.

```loop
@Strict
@JIT
var double = fn(x: Int) {
  // This function will be force executed in JIT mode
  // This function will be in strict type-checking mode
}
```

### Variable Scopes

Attributes can be applied to variable declaration statements. An example of this
scope is the following, which will call a function if the containing value was
changed.

```loop
@Changed(y)
var x = 100;

var y = fn(name, new_value) {
  print(name, new_value);
}

x = 3000;
x = 5000;
```

Now let's dissect this a little bit.

First, we create a new variable called "x" and assign 100 to it. Then we give it
the attribute [Changed](./attributes.md#changed) this attribute will invoke the
passed function argument when the corresponding variable was changed.

```loop
@Changed(y)
var x = 100;
```

Next we define the function that we will invoke (notice that for attributes we
don't need to define a function before using it as a parameter in an attribute).
This function just prints the variable name and it's new value.

```loop
var y = fn(name, new_value) {
  print(name, new_value);
}
```

Finally we change the value of "x" twice to test invocation of the function.
This will call the function "y" twice with the name in both cases being "x" (as
string) and new_value being 3000 in the first instance and 5000 in the second
instance.

```loop
x = 3000;
x = 5000;
```

## Attributes

A detailed description of all attributes that Loop has by default

### Strict

Require all variables, parameters and return types to be explicitly defined. If
this is not the case an error will be outputted.

**Can be applied to:**

- General Scopes
- Variables

**Parameters:** None

```
@Strict
```

### JIT

Forces a function to be executed in JIT-mode. This also implicitely makes the
function strictly typed (as this is a requirement for the JIT compiler).

**Can be applied to:**

- Functions

**Parameters:** None

```
@JIT
```

### Changed

Invokes a function whenever the value was changed. The function won't be
executed on first assign.

**Can be applied to:**

- Variable declarations

**Parameters:**

- Function

```
@Changed(func: Function)
```
