// IMPORTANT IMPORTANT IMPORTANT:
// please read main.js instead of this file
// this is more about practice

// Some Common Regex Expressions:

// 1. Character Sets

// 1.1. Match any of these characters: [baow]
/[baow]/

// 1.2. Match everything except these characters: [^baow]
/[^baow]/

// 1.3. Match "baow" as a whole String, not separate characters:
/(baow)/

// 1.4. Match all lowercase letters: [a-z]
/[a-z]/

// 1.5. Match all uppercase letters: [A-Z]
/[A-Z]/

// 1.6. Match all numbers: [0-9]
/[0-9]/


// 2. Regular Expression Flags

// Commonly Used:

// 2.1. Global (g):
    // Matches all occurrences of the pattern within the input string.
// 2.2. Case Insensitive (i):
    // Makes the pattern match case-insensitively.
// 2.3. Multiline (m):
    // Alters behavior to match the start and end of each line within the input string.

// Other Flags:

// 2.4. Single Line (or Dot All) (s):
    // Allows the dot (.) to match newline characters as well.
// 2.5. Unicode (u):
    // Enables full Unicode support, matching Unicode characters as single characters.
// 2.6. Sticky (y):
    // Requires the match to start exactly at the lastIndex property of the input string.


// 3. Character Types

// 3.1.1. Select all newline characters (Linux and macOS): \n
/\n/

// 3.1.2. Select all newline characters (all Operating Systems): [\r\n]
/[\r\n]/

// 3.2.1. Match all alphanumeric characters and underscores: \w
/\w/
// 3.2.2. Match any character that is not alphanumeric or underscore: \W
/\W/

// 3.3.1. Match all digit characters 0-9: \d
/\d/
// 3.3.2. Match any character that is NOT a digit: \D
/\D/

// 3.4.1. Select all whitespace: \s
/\s/
// 3.4.2. Select everything that is not whitespace: \S
/\S/

// 3.5.1. Select everything (including newline characters): [\s\S]
/[\s\S]/

// 3.5.2. Select everything (excluding newline characters): .
/./

// 3.6. Select dot characters (.): \.
/\./
// Since the dot is a special character in regex, we need to escape it with a backslash (\)

// 3.7. Select all "N" characters at start of a line: ^N
/^N/
// You should combine this with Regular Expression Flags if you want to match multiple lines.
