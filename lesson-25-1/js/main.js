// Higher Order Functions

// 1. A higher order function is a function that does at least one
// of the following:
// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as it's result
// 2. In "lesson-25-1" we are going to explore the following high order functions:
// 2.1. forEach()
// 2.2. filter()
// 3. In "lesson-25-2" map()
// 4. In "lesson-25-3" reduce()

import { posts } from "./posts.js";

// 2.1. forEach()
// posts.forEach((post) => {
//   console.log(post);
// });

// 2.2.1. filter()
const filteredPosts = posts.filter((post) => {
  return post.userId === 1;
});
console.log(filteredPosts);

// 2.2.2. combining filter() + forEach()
// const filteredPosts = posts.filter((post) => {
//   return post.userId === 1;
// });
// filteredPosts.forEach((post) => {
//   console.log(post);
// });
