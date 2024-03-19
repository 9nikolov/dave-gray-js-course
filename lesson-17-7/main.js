// Objects - Destructuring Objects as function parameters


const person = {
  name: "Nikola",
  age: 22,
  city: "Veliko Tarnovo",
  job: "Frontend Developer / Web Designer"
};
  
// Define a function named 'smile' which expects an object as a parameter
// This function utilizes destructuring syntax to directly extract the 'name' property from the passed object parameter.
// Despite the appearance that it expects a parameter named 'name', it actually expects an object with a 'name' property.
function smile({name}) {
  // Extract the value of the property 'name' 
  // from the object that was passed in to the smile() function
  // then use that value in this short string
  return `${name} smiled.`; 
}
  
// Call the 'smile' function with the 'person' object as an argument and print the result
console.log(smile(person)); // Output: "Nikola smiled."