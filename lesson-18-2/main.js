// Javascript Classes
// JS allows classes to have their property values changed directly (see 1.)
// thus we don't need getters and setters, but you will still see
// a lot of them written by other people and you are encouraged to do the same
// for two simple and important reasons:
// reason 1: it massively increases code readability
// reason 2: you can make the object properties "private", 
// then they will only be accessible via getters and setters

// in the example below we have added getters and setters to improve readability
// however since the properties are not private, we can still acess them without the getters and setters
// for an example with private properties + getters and setters see (lesson-18-5 and lesson-18-6)
class Pizza {
  constructor(pizzaType, pizzaSize){
    this.pizzaType = pizzaType;
    this.size = pizzaSize;
    this.crustType = "Neapolitan";
  }
  bake(){
    console.log(`Baking a ${this.size} ${this.pizzaType} ${this.crustType} crust pizza`);
  }
  getSize(){
    return this.size;
  }
  setSize(size){
    this.size = size;
  }
}

const myPizza = new Pizza("pepperoni", "small");
// 1. changing class property directly
myPizza.crustType = "Chicago-Style";
myPizza.bake();