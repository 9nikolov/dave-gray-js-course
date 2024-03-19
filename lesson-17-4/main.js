// Objects - using For Each Loop with Objects

const person = {
  name: "Nikola",
  age: 22,
  city: "Veliko Tarnovo",
  job: "Frontend Developer / Web Designer"
};

console.log('----- 1ST FOR EACH LOOP RESULT -----');

// for each loop, 
// that goes through each key in the person object and returns their values
for(let keyValue in person){
  console.log(person[keyValue]);
}

console.log('\n');
console.log('----- 2ND FOR EACH LOOP RESULT -----');
// for each loop,
// that will print all of the keys and their values
for (let key in person){
  console.log(`${key}: ${person[key]}`);
}