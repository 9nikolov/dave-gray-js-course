// Higher Order Functions

// 1.1. reduce() function
// The reduce() method in JavaScript is used to reduce an array into a single value
// (from left to right index).
// It iterates over each element of the array, applying a function that you provide.
// 1.2. The reduce() function relies on four key components:
// I.   Source Array: The array reduce() was called upon.
// II.  Accumulator: The accumulated value computed over previous iterations, or the initial value if provided.
// III. Current Value: The current element being processed in the array.
// IV.  Current Index: The index of the current element being processed.

// I.   Source Array
const numbers = [1, 2, 3, 4, 5];

// Sum of all numbers using reduce
// II.  Accumulator (acc)
// III. Current Value: (cur)
// IV.  Current Index: (0)
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

// printing reduce() result
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
