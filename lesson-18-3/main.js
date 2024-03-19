// source (https://www.w3schools.com/js/js_class_inheritance.asp)

// JavaScript Classes: 
// Class Inheritance
// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:
// Inheritance is useful for code reusability: 
// reuse properties and methods of an existing class when you create a new class.

// Example
// Create a class named "Model" which will inherit the methods from the "Car" class:
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    // The super() method refers to the parent class.
    // By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();



