// Javascript Classes
// syntax sugar (under the hood JS does not have real classes)

class Pizza {
  constructor(pizzaType, pizzaSize){
    this.pizzaType = pizzaType;
    this.size = pizzaSize;
    this.crustType = "original";
  }
  bake(){
    console.log(`Baking a ${this.size} ${this.pizzaType} ${this.crustType} crust pizza`);
  }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.bake();