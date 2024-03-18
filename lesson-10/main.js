alert('PC Principal here: All right, everyone, listen up. In order for better understanding, we\'ve asked students of Canadian origin to introduce you to their culture and—HEY, LESLIE, SHUT YOUR MOUTH!!!! Now where was I? Oh, yeah. We\'ve asked students of Canadian origin to introduce you to their culture and customs. So let\'s give them our undivided attention as they take us on a whirlwind journey through their diverse history. [hands microphone to Canadian kids]');
let myBoolean = confirm("Ok === True \nCancel === False");
console.log(myBoolean);

let name = prompt("Please enter your name:");
// Java way of thinking
// if (name !== null && name.length > 0) {
//     // removes white space from string
//     console.log(name.trim());
// }else{
//     console.log("You did not enter a name")
// }
// JavaScript way of thinking
// (because remember in JS, if string is not empty and is more than 0 characters,
// putting it in a if() will result in true)
if (name) {
    console.log(name.trim());
}else{
    console.log("You did not enter a name")
}


// Nullish Coalescing Operator (??)
// The nullish coalescing (??) operator is a logical operator 
// that returns its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.
// Examples:
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
