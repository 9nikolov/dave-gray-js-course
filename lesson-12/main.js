// Loops
let myNumber = 0;

// while
// while the condition is true execute the code inside
while(myNumber < 50){
    myNumber++;
    console.log(myNumber);

}

// do while
// will execute the code atleast once, even if it does not meet the condition
do{
    console.log(myNumber);
}while(myNumber < 50)


// for loop
console.log('start of \'for loop\' execution:'.toUpperCase());
for(let i = 0; i <= 10; i++){
    console.log(`value of i ${i}`);
}

// PART OF ES6+ (for each loop)

// 'continue' keyword
// In JavaScript, continue is a keyword used within loops to skip the current iteration and move on to the next one. 
// When encountered, continue immediately stops executing the rest of the code block for the current iteration and proceeds to the next iteration in the loop.
// Here's a simple example to illustrate its usage:
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skips the rest of the code block for i = 2
  }
  console.log(i);
}