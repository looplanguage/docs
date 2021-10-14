---
title: Packages
sidebar_position: 100
---

## What Are Packages

A package is a single Loop file which exports values. Generally public packages export a multitude of other packages. An example of a single package is this:

```
// filename: test_package.loop
var double = fun(x) {
  return x * 2
}

export {
  "double": double
}
```

This will result in a hashmap being exported with one key value pair called "loop" which exports the function "double". To use this package in your program you could do this:

```
// filename: program.loop
import "./test_package.loop" as test

// This code will result in 1000
test["double"](500)
```

Like said previously packages can import other packages, so you can build a main package for all your math functions and export them together so your main program only has to import one package.

## Remote Packages

Loop also has support for remote package importing. An example is the `std` package from Loop itself:

```
// Option 1
import "github.com/looplanguage/std" as std
```

This will automatically download the latest (released) version from github and define it as "std". It's also possible to specify a version, which we advise if you want consistent behavior. You can either select a specific version like this:

```
// Option 2
import "github.com/looplanguage/std@1.3.2" as std
```

Or you can specify it with placeholders, like you only want to update minor & patch versions:

```
// Option 3
import "github.com/looplanguage/std@1.x.x" as std
```

We advise going for option 3, all official packages uses semantic versioning. Meaning that if you want to stay secure while still being on a version without breaking changes you only select a major version (in this case the "1").
