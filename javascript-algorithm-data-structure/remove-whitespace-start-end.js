// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

const str = "   Hello, World!   ";
const trimmed = str.replace(/^\s+|\s+$/g, '');
console.log(trimmed);  // Output: "Hello, World!"