// var, let, const

// up to year 2015 there was only var
// you will mostly find it in legacy code
var x = 1;
// var for legacy code
// let for variable whose value will need to be reassigned later
// const whenever possible (when value won't change)

// global scope
var x = 1;
let y = 2;
const z = 3;

// local scope - block
// if, for, switch statements are also block local scope
{
  let y = 4;
  console.log(y);
}

// local scope - function
function myFunction(){
  const y = 5;
  console.log(y);
}

console.log(y);
myFunction();

