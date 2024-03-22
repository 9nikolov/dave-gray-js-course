// Higher Order Functions

// 1. map() function

// 1.1. simple example:
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// 2. Using map() on an Array of Objects
// 2.1. When you use map() on an array of objects and manipulate one of their properties,
// the resulting array will contain only the manipulated properties.

// Example:
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// Manipulating the age property of each person
const ages = people.map((person) => person.age + 1);

console.log(ages); // Output: [31, 26, 36]

// 2.2. If you want to preserve the original objects and modify specific properties,
// then each time the map() function iterates, you have to return an object,
// and specify which properties you want to keep

// Example:

const updatedPeople = people.map((person) => {
  return {
    name: person.name,
    age: person.age + 1,
  };
});

console.log(updatedPeople); // Output: [31, 26, 36]
