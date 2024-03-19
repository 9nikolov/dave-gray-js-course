// JSON: JavaScript Object Notation
// JSON is used to send and recieve data.
// JSON is a text format, that is completely language independent
// Meaning JSON is used to send and recieve data in many language, not just JavaScript

const person = {
  name: "Nikola",
  hobbies: ['programming', 'web design', 'walking', 'running'],
  hello: function() {
    console.log("Hello");
  }
}

console.log(person);
console.log(person.name);
person.hello();
console.log(typeof person);

// 1. convert object to JSON 
// JSON does not care about the methods, thus it ignores them
// and the sendJSON object will not have the methods at all
const sendJSON = JSON.stringify(person);
console.log(sendJSON);

// 2. convert JSON to Object
const serverJSONResponse = `{"name":"John Doe","age":30,"city":"New York","isStudent":false,"grades":[85,90,92],"address":{"street":"123 Main St","city":"New York","zipCode":"10001"}}`;
const JSONConvertedToObject = JSON.parse(serverJSONResponse);

console.log(JSONConvertedToObject);