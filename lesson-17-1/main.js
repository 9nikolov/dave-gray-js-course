// Objects
// objects syntax: objects come in key-value pairs, defined in curly braces

const personObject = {
  // object properties
  name: "Nikola",
  age: 22,
  // object array
  hobbies: ["walking", "running", "programming", "web design", "eating", "music"],
  // nested object (object within the object)
  beverage: {
    favoriteBeverage: "sparkling water",
    favoriteSoftDrink: "coca-cola",
    favoriteAlcohol: "whiskey"
  },
  // functions
  sayHello: function(){
    return "Hello World!"
  },
  askForFavoriteBeverage: function(){
    // keyword "this" refers to the object itself
    // its like saying personObject.beverage.favoriteBeverage
    return `Give me some ${this.beverage.favoriteBeverage}, please.`;
  }
}

console.log(personObject.beverage.favoriteSoftDrink);
console.log(personObject.sayHello());
console.log(personObject.askForFavoriteBeverage());