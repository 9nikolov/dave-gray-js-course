// Objects - Destructuring Objects
// Destructuring helps extract values from objects easily.
// The syntax is weird but in practice saves time. 

const person = {
  name: "Nikola",
  age: 22,
  city: "Veliko Tarnovo",
  job: "Frontend Developer / Web Designer"
};

// FIRST WAY of Destructuring Objects 
// Here, we assign the value of the "guitar" property from the person object to a variable called "myVariable".
const { guitar: myVariable } = person;

// SECOND WAY of Destructuring Objects 
// With this approach, we create variables with the same names and values as those in the person object.
const { name, age, city, job } = person;

console.log(name); // Output: Nikola
console.log(age); // Output: 22
console.log(city); // Output: Veliko Tarnovo
