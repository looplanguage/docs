---
title: Unit-testing
sidebar_position: 100
---

:::info

Go to introduction to see information about [Unit-testing](introduction)

:::

# Unit Testing

The example listed below show all the different functions to make a test pass or fail.

## Error Message

At every example that will be shown below you will have a variable called: "errorMessage". This message is printed
into the terminal when the test does not pass. The message is custom, so you can decide what it says. This feature
might help to debug your failed code test.

## Assert

The function "assert" checks if the given argument is "true". You will need this function if you I.E. want to check
if one number is greater than another.

```loop
assert(true, errorMessage) // "errorMessage" is optional
```

## Assert Equals

Checks if the two given value's are the same. You could use it to check if "x" equals "y",
or check if "z" is of type: string. When these two values are the same, the test passes.

```loop
assert_equals(4, 4, errorMessage) // "errorMessage" is optional
```

## Assert Exception

The "assert_exception" function checks if the functions that you called returns an exception.
You might need this to check if your error handling works as intended.

```loop
assert_exception(error, errorMessage) // "errorMessage" is optional
```

## Example

Shown below is a function with one parameter, called "Double". When the function is called the parameter gets doubled and returned.
Below the function is the test to test "Double"

```loop
var Double = fn(number) {
    return number * 2
}

@Test()
var doubleTest = fn() {
    var result = double(2)
    var excepted = 4
    var errorMessage = "Error -> expected: {expected}, got: {result}"
    assert_equals(result, excepted, errorMessage) // This will work!
}
```

Lets take a look at the test: "doubleTest". There are four lines, we go line by line. The first line calls the function
that we want to test, and it stores its return value in a variable called: "result". The next line is very simple
it is a [variable declaration](../concepts/variables), where "excepted" gets assigned the value of "4". On the next line you see
a variable called: "errorMessage", this is user-created message that gets printed in the terminal when the test does not pass.
At the end, we see the actual test. It takes three arguments; the result; what is expected; and the optional error message.

In this case, the test passes because result (value is 4) is the same as expected (value is 4). The error message 
will **not** be shown.

```loop
@Test()
var doubleTest = fn() {
    var result = double(2) // Which returns the integer of 4                                       
    var excepted = 4
    var errorMessage = "Error -> expected: {expected}, got: {result}"
    assert_equals(result, excepted, errorMessage) // This will work!
}
```
