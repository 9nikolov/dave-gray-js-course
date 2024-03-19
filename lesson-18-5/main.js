// JavaScript Classes: 
// Real Private Properties (#) vs. Conventional (Fake) Private Properties (_) with Getters and Setters
// (#) achieves real private properties, it was introduced in ES12 in 2021.
// (_) does not achieve is just a convention that developers made to tell each other, 
// that the given property should not be edited directly, however there is really nothing
// stopping you from doing that.
// The reason (_) might still be used is compability, since ES12 is relatively new.
// Another reason is legacy code

class Car {
  // Private property using ES12 private class fields (#).
  // IMPORTANT: HAS TO BE DECLARED ABOVE CONSTRUCTOR, 
  // IMPORTANT: THEN YOU CAN USE IT INSIDE THE CONSTRUCTOR 
  #brand; 

  // Constructor to initialize the private property.
  constructor(brand) {
    this.#brand = brand;
  }

  // Getter method to access the private property.
  get brand() {
    return this.#brand;
  }

  // Setter method to set the private property.
  set brand(newBrand) {
    this.#brand = newBrand;
  }
}

// Creating an instance of the Car class with true private properties.
const myCarTruePrivate = new Car("Toyota");

// Accessing the true private property using the getter.
console.log(myCarTruePrivate.brand); // Output: Toyota

// Modifying the true private property using the setter.
myCarTruePrivate.brand = "Honda";
console.log(myCarTruePrivate.brand); // Output: Honda

// Class with "fake" private properties using conventional underscore prefix.
class CarWithUnderscore {
  // Private property conventionally marked with underscore.
  constructor(brand) {
    this._brand = brand; 
  }

  // Getter method to access the private property.
  get brand() {
    return this._brand;
  }

  // Setter method to set the private property.
  set brand(newBrand) {
    this._brand = newBrand;
  }
}

// Creating an instance of the Car class with conventional private properties.
const myCarWithUnderscore = new CarWithUnderscore("Toyota");

// Accessing the conventional private property using the getter.
console.log(myCarWithUnderscore.brand); // Output: Toyota

// Modifying the conventional private property using the setter.
myCarWithUnderscore.brand = "Honda";
console.log(myCarWithUnderscore.brand); // Output: Honda
