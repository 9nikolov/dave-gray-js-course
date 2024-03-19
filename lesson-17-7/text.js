// Objects - Destructuring Objects as function parameters

// create object
const person = {
    name: "John",
    age: 30,
    city: "New York",
    job: "Software Engineer"
};
    
function smile({name}) {
    return `${name} smiled.`; 
}
    
console.log(smile(person));