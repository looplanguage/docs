---
title: Returns
sidebar_position: 100
---

The return statement allows you to early-return any body expression.

In functions this means that the following code will return "20" instead of "40"

```loop
double := fn(int x) {
  return 20
  return 40
}
```

A return statement will only return the nearest block. Meaning that the
following will not return it's outer function:

```loop
outer := fn(int x) {
  return fn() {
    return 20
  }()
}
```

There is one exception to this rule, which is if it's used in a loop. For
example, this will return the outer block (and stop the loop):

```loop
f := fn() {
  for true {
    return 20
  }
}
```
