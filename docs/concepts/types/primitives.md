---
title: Primitives
sidebar_position: 100
---

# Primitives

Listed below are all the different types that Loop has out of the box. A quick overview:

| Type            | Syntax      |
| -----------     | ----------- |
| Integer (64bit) | `int`       |
| Float (64bit)   | `float`     |
| String          | `string`    |
| Boolean         | `bool`      |

if you want to define an array just add `[]` to the type. Just like this:
```
int[] array := [1, 2, 3, 4, 5]
```

All the types have an explanations and some examples.

## Integer

An integer is a primitive value that can be up to 64bits in length. You can define an integer like this:

```loop
integer := 10 // Positive integer
integer := -200 // Negative integer
```

Or you can staticly type it like this:

```loop
int i := 10
```

### Methods

#### Convert to string

```loop
// Returns 123 to string
123.to_string()
```

## Booleans

A boolean is a primitive value that can either be true or false. You can define a boolean like this:

```loop
boolean := true
boolean := false
```

And just like integers:

```loop
bool boolean := true
```

### Methods

#### Convert to integer

This method will cause an exception if the string is unable to be converted.
 - true = 1
 - false = 0

```loop
// Converts the boolean true to 1
var boolean = true
boolean.to_int()
```

## Strings

A string is a sequence of characters inside `"`'s. You can define a string like this:

```loop
text := "hello world" // Multiple words
string text := "Another string!"
```

### Methods

#### Convert to integer

This method will cause an exception if the string is unable to be converted.

```loop
// Converts the string "123" to integer
"123".to_int()
```

## Null

Loop only has one primitive indicating the absence of a value. Which is "null", a Null value indicates "not a value". You can define something to be null like this:

```loop
has_nothing := null
```

The Null primitive will result in "false", for example.

```loop
has_nothing := null

if has_nothing {
  // Will not print
  println("Hi!")
} else {
  // This will print
  println("Bye!")
}
```

## Arrays

An array is a list of values. They can either be of the same type, or multiple types. The elements themselves can be of any type. An array with only single types can look like this:

```loop
int[] array := [100, 50, 300]
array := ["hello", "world", "!"]
```

Or even arrays in arrays, as long as they are the same type:

```loop
array := [[100], [999, 10]]
```

### Accessing Arrays

Accessing an array is simple. You use the index operators (square brackets []). Let's take the previous example and use it here to access the "100" value in the sub array.

```loop
array := [[100], [9999, 10]]
value := array[0][0] // sets the value of "value" to 100
```

Or a simpler array:

```loop
array := [100, 200, 300]
value := array[1] // sets the value of "value" to 200
```

### Methods

#### array.add(element1, element2, ...)

```loop
// Initialize new array
int[] x = [0, 1]
x := [0, 1]        // Does the same as the line above
// Add 2 to the array
x.add(2)

// Array will now be [0, 1, 2]
x

// It's also possible to add multiple to the array at once
x.add(3, 4, 5)

// Array will now be [0, 1, 2, 3, 4, 5]
x
```

#### array.remove(index: Integer)

```loop
x := [0, 1, 2]

// Removes index 0 from the array
x.remove(0)

// Removes index 1 from the array
x.remove(1)

// Array will now be [1]
x
```

#### array.length()

```loop
// Initialize array with 3 elements
x := [0, 1, 2]

// Returns 3
x.length()
```

## Hashmaps

A hashmap is a way to bind keys to values. The key is limited in what types they can be, currently these types are allowed as keys:

- String
- Integer
- Boolean

Hashmap keys are required to be unique, they can have spaces as well (if you're using a string as key).

Creating a hashmap is easy and might seem familiar if you've used other languages before. An example with a few sample key value pairs is as follows:

```loop
hashmap := {
  "key1": "value",
  "key2": "value"
}
```
