// Conditionals: Ternary Operator
// Just like if-else but with different syntax.
// The idea is to save time writing and space.

// syntax
// condition ? ifTrue : ifFalse;
// Example:
    
// IMPORTANT: In JavaScript, any non-empty string is considered truthy.
// Since the variable soup contains the string 'Chicken Noodle Soup', 
    // it is considered truthy. Therefore, the condition soup evaluates to true.
let soup = 'Chicken Noodle Soup';
    
let response = soup ? 'Yes, we have soup.' : 'Sorry, we don\'t have soup today.';
console.log(response);


let isCustomerBanned = true;
let cakeAccess = isCustomerBanned ? 'NO, cake for you' : 'here is your cake';
console.log(cakeAccess);

// Chaining Ternary Operators
// you can chain them just like if else (its just the syntax that is different)
// Example:
const x = 5;
const result = x > 5 ? "greater than 5" : x < 5 ? "less than 5" : "equal to 5";
console.log(result); // Output: "greater than 5"
