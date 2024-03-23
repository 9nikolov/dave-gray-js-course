// Regular Expressions (Regex)

// It's useful to understand the basics of Regex and refer to resources when needed.

// For practicing regex:
// https://regexone.com/

// For testing regex expressions:
// https://regexr.com/

// Regex + JS Cheatsheet:
// https://fireship.io/lessons/regex-cheat-sheet-js/

// .test() - JS Regex  Method
// In JavaScript, the .test() method is used to test if
// a string matches a regular expression pattern.
// Here's how you can use it:
// this will match all lowercase characters
const regex = /[a-z]/;
const string = "example string";
if (regex.test(string)) {
  console.log("String matches the pattern");
} else {
  console.log("String does not match the pattern");
}
