// IMPORTANT:
// var - function scoped
// When you overwrite the value of a var variable inside a function or any nested block, 
// it affects the variable declared in the nearest enclosing function scope or the global scope
//  if there's no enclosing function. However, it doesn't affect variables declared outside of 
// the current function or block. 
// This behavior is specific to var variables and does not apply to let or const variables, 
// which are block-scoped and do not exhibit this behavior.


// global scope
var x = 1; 
let y = 2;
const z = 3;

console.log(`global ${x}`);
console.log(`global ${y}`);
console.log(`global ${z}`);


function myFunc(){
  // function scope
  var x = 10; 
  let y = 20;
  const z = 30;
  {
    // block scope
    var x = 100; // var is always function scoped
    // thus changing the value of "var" in this current block,
    // will affect the function scope 
    let y = 200; // let is block scoped
    const z = 300; // const is block scoped
    console.log(`block ${x}`);
    console.log(`block ${y}`);
    console.log(`block ${z}`);  
  }

  console.log(`function ${x}`);
  console.log(`function ${y}`);
  console.log(`function ${z}`);  
}

console.log(`global end ${x}`);
console.log(`global end ${y}`);
console.log(`global end ${z}`);  

myFunc();