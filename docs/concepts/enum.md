---
title: Enum
sidebar_position: 300
---

An enum is a set of named values. An enum can be assigned any expression and thus allows for a lot of power. An enum (by default) uses auto incremented integers as values. Enums are a constant data structure and can not be assigned to. Enums are scoped, see [scoping](./scoping.md) for more information.

## Basics

Creating an enum is as simple as providing the `enum` keyword and an identifier followed by curly braces.

```loop
enum Colors {
  Red,
  Green,
  Blue
}
```

This creates an enum named `Colors` and is constant. Accessing values is simple and can be done as follows.

```loop
Colors.Red    // 0
Colors.Green  // 1
Colors.Blue   // 2
```

## Expressive Values

An enum allows in addition to primitive values, any expression as it's value. The key is always required to be a valid identifier (starts with a character or underscore and followed by alphanumerics). An example with car manufacturers could be the name of the manufacturer and an array of vehicles that they've produced.

```
enum Cars {
   Volkswagen = ["Fox", "ID3", "Golf"]
   Audi = ["E-Tron", "Q5"]
}
```
