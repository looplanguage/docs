---
title: Struct
sidebar_position: 500
---

A struct is simply a structure of data. It's used to accompany values and associated methods.

## Basics

Defining and using a struct is easy and expressive. Let's define a struct of a person with their name, age and email.

```loop
struct Person {
  name: String,
  age: Integer,
  email: String
}
```

Now it's possible to create an instance of this struct by calling it like a function.

```loop
// Creates an empty Person with the default values
var john = Person()
```

A struct is type safe and it's values can never be null. By default the values are set to their most basic variant.

```loop
john.name   // evaluates to an empty string ""
john.age    // evaluates to a zero 0
john.email  // evaluates to an empty string ""
```

## Constructors

It's also possible to specify values to "construct" a class with. We're using the "Person" struct from the last few examples.

```loop
// Notice the curly braces initializing the values
var jane = Person({ name: "Jane", age: 52, email: "jane@example.org" })

// It's also possible to initialize some values (no age, so that will be 0 by default)
var jane = Person({ name: "Jane", email: "jane@example.org" })
```

Besides this you can also specify a constructor method in your struct if you prefer different default values, or to do logic on inputs.

```loop
struct Person {
  name: String,
  age: Integer,
  email: String,

  // Parameterless constructor
  // Allows the above constructing to work with curly braces
  constructor() {
    if self.name == "Jane" {
      print("Hi Jane!")
    } else {
      print("Hey unknown!")
    }
  }
}

// Notice that curly braces are still allowed
// This also prints "Hi Jane!"
var jane = Person({ name: "Jane", email: "jane@example.org" });
```

If you create a constructor with parameters, it's no longer possible to pass a hashmap as argument to initialize the struct. You then have to follow the constructors parameters.

```loop
struct Person {
  name: String,
  age: Integer,
  email: String,

  // Parameter constructor
  // Doesn't allow constructing with a hashmap
  constructor(name: String) {
    self.name = name;
    self.age = 30;
    self.email = "unknown@example.com"
  }
}

// Notice there are no curly brackets
var jane = Person("Jane")
```

## Methods

While we just mentioned the first called method in a struct (the constructor). You can define your own methods to call on your structs. We're again using the "Person" struct, however now without a constructor. Methods can take parameters and also return values just like functions.

### Without Parameters

The simplest type of methods are the ones without parameters, let's start with a simple greet method that greets the person.

```loop
struct Person {
  name: String,
  age: Integer,
  email: String,

  // Define a new method named greet without any parameters
  greet() {
    print("Hello " + self.name + "!")
  }
}
```

To call this method you first need to instantiate a new variant of the struct and then call it on that.

```loop
// New instance of Person with the name "Sam"
var sam = Person({ name: "Sam" })

// Prints "Hello Sam!"
sam.greet();
```

Besides this simple method you can also do something more advanced, like modifying it's values, performing logic and returning values. Like if someone ages up check if they're at the retirement age of 65 and return true or false depending on if they are at that age.

```loop
struct Person {
  name: String,
  age: Integer,
  email: String,

  // Define a new method named ageUp
  ageUp() {
    // Increases the age
    self.age += 1;

    // Check if the age is higher than or equals to 65
    if self.age >= 65 {
      // If the age equals 65, congratulate them with their retirement
      if self.age == 65 {
        print("Congratulations on your retirement, " + self.name + "!")
      }

      // Return that they are indeed at the retirement age
      return true
    }

    // Return that they are not at the retirement age
    return false
  }
}

var ash = Person({ name: "Ash", age: 63 });

// Ages Ash up to 64, retired will equal to false
var retired = ash.ageUp();

// Ages Ash up to 65, retired will equal to true
// And "Congratulations on your retirement, Ash!" will be printed
var retired = ash.ageUp();


// Ages Ash up to 66, retired will equal to true
// Nothing will be printed
var retired = ash.ageUp();

// ashAge will equal to 66
var ashAge = ash.age
```

### With Parameters

Methods without or with parameters act just the same, the only difference (just like in function) is that you can give additional data to the method making it reusable. Let's add a method to the Person struct that changes their name.

```loop
struct Person {
  name: String,
  age: Integer,
  email: String,

  // Define a new method named greet without any parameters
  setName(name) {
    self.name = name;
  }
}
```

You might think to yourself why you want to make a method for this instead of straight up assigning to "person.name". We get back to this in [Access Modifiers](#access-modifiers).

## Access Modifiers

Structs allow a range of access modifiers to control what in your code can access the contents of a struct.

- **public**: Can be accessed anywhere in your code
- **private**: Can only be accessed by methods in your struct
- **internal**: Can only be accessed by the same package as your struct is defined in

To define a property's acess modifier you can put the keyword (see above) before your property.

```loop
struct Person {
  // Explicitely designated as public
  public name: String,

  // Explicitely designated as private
  private age: Integer,

  // Implicitely designated as public
  email: String,
}
```

It's also possible to set access modifiers for properties based on their getter and setter.

```loop
struct Person {
  // Explicitely designated public getter and a private setter
  // This allows only class methods to set the name, but you can get the name
  // from anywhere
  name: String { public get; private set; },
}

var alex = Person({ name: "Alex" });

// Prints "Alex"
println(alex.name)

// Throws a compiler error as property "name" has a private setter
alex.name = "Chris"
```

And finally you can also specify access modifiers on your methods, for example to only make a method available inside of your struct.

```loop
struct Person {
  name: String;
  age: Integer;

  // Define a private method to check if a person is at the retirement age
  private checkIfRetired() {
    if self.age >= 65 {
      return true
    }

    return false
  }

  // Define a public method to age a person up and returns if the person is retired
  public ageUp() {
    self.age += 1;

    return self.checkIfRetired();
  }
}
```
