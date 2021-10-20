---
title: Unit-testing
sidebar_position: 100
---

:::info

Go to introduction to see information about [Unit-testing](introduction)

:::



```loop
assert(true, errorMessage)

assert_equals(4, 4, errorMessage)

assert_exception(error, errorMessage)
```

```loop
var double = fn(number) {
    return number * number
}

@Test("unit")
var doubleTest = func(){
    var result = double(2)
    assert result equals 2
}
```