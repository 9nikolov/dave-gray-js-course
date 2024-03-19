// Objects - deleting Object properties + checking if an object property exists

const person = {
  name: "Nikola",
  age: 22,
  city: "Veliko Tarnovo",
  job: "Frontend Developer / Web Designer"
};

delete person.city;
console.log(`Does object "person" have a property called "city" (TRUE OR FALSE) ----- ${person.hasOwnProperty("city")}`);