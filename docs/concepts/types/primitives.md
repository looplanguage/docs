---
title: Primitives
sidebar_position: 100
---

# Primitives

## Types

Listed below are all the different types that Loop has out of the box. All the types have an explanations and some examples.

### Integer

An integer is a primitive value that can be up to 64bits in length. You can define an integer like this:

```loop
var integer = 10; // Positive integer
var integer = -200; // Negative integer
```

## Booleans

A boolean is a primitive value that can either be true or false. You can define a boolean like this:

```loop
var boolean = true;
var boolean = false;
```

## Strings

A string is a sequence of characters inside `"`'s. You can define a string like this:

```loop
var string = "hello"; // A single word
var string = "hello world"; // Multiple words
```

## Null

Loop only has one primitive indicating the absence of a value. Which is "null", a Null value indicates "not a value". You can define something to be null like this:

```loop
var has_nothing = null;
```

The Null primitive will result in "false", for example.

```loop
var has_nothing = null;

if (has_nothing) {
  // Will not print
  print("Hi!")
} else {
  // This will print
  print("Bye!")
}
```

## Arrays

An array is a list of values. They can either be of the same type, or multiple types. The elements themselves can be of any type. An array with only single types can look like this:

```loop
var array = [100, 50, 300];
var array = ["hello", "world", "!"];
```

However like said previously, they're not limited to a single type. Here you can see a mix of elements (which is considered valid):

```loop
var array = [100, "hello", 50, "world", 300, "!"];
```

Or even arrays in arrays:

```loop
var array = [[100], ["hello"]];
```

### Accessing Arrays

Accessing an array is simple. You use the index operators (square brackets []). Let's take the previous example and use it here to access the "100" value in the sub array.

```loop
var array = [[100], ["hello"]];
var value = array[0][0] // sets the value of "value" to 100
```

Or a simpler array:

```loop
var array = [100, 200, 300];
var value = array[1] // sets the value of "value" to 200
```

## Hashmaps

A hashmap is a way to bind keys to values. The key is limited in what types they can be, currently these types are allowed as keys:

- String
- Integer
- Boolean

Hashmap keys are required to be unique, they can have spaces as well (if you're using a string as key).

Creating a hashmap is easy and might seem familiar if you've used other languages before. An example with a few sample key value pairs is as follows:

```loop
var hashmap = {
  "key1": "value",
  "key2": "value"
}
```
