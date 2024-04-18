let myString: string | null = "Hello";

// Assuming that we're sure myString won't be null
console.log(myString!.toUpperCase()); // No compilation error

myString = null;

// Without non-null assertion operator (!), this would cause a compilation error
console.log(myString!.toUpperCase()); // Runtime error: Cannot read property 'toUpperCase' of null
