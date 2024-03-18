// global scope
var x = 1; 
let y = 2;
const z = 3;

console.log(`global ${x}`);
console.log(`global ${y}`);
console.log(`global ${z}`);


function myFunc(){
  // function scope
    // function scope looks inside itself, does not find x,y,z
    // then moves up to global scope, finds them and gets them
  console.log(`function ${x}`);
  console.log(`function ${y}`);
  console.log(`function ${z}`);  
  {
    // block scope
      // block scope looks inside itself, does not find x,y,z
      // then moves up to parent (function scope), does not find them there either
      // moves up to global scope, finds them and gets them
    console.log(`block ${x}`);
    console.log(`block ${y}`);
    console.log(`block ${z}`);  
  }
}

myFunc();