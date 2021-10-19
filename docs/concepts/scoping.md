---
title: Scopes
sidebar_position: 300
---

Loop features block scoping, meaning that every block will define their own scope. A scope will always be able to access its outer scope. This allows you to create closures as well.

In Loop every variable is scoped. Because functions are variables internally as well they will be scoped too.

## General Scoping

Creating a scope is extremely easy and happens with almost every control expression.

```loop
// Curly braces define a "deeper" scope
{

}
```

This implies that an if-expression also has a deeper scope.

```loop
if (true) {

}
```

Scopes are not limited to a single depth, so you can nest them as deep as you'd like.

```loop
// root
var func = fn() {
  // Level 1 (deeper scope because an function-expression)
  {
    // Level 2 (deeper scope, implicitly defined)
    if(true) {
      // Level 3 (deeper scope because an if-expression)
    }
  }
}
```

## Example

The best way to illustrate this is with an example. We will be using the last code segment of the previous section. While doing this we will add some variable assignments and accessors.

```loop
// A new variable, accessable everywhere in our application
var global = 100;
var func = fn() {
  // Will print 100
  print(global)

  // A new variable, accessable only to this scope
  var scoped_a = 300;
  {
    if(true) {
      // Will print 300
      print(scoped_a)
    }
  }
}

// Will result in a error because this variable isn't defined in this scope
print(scoped_a)
```
