// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

// "abc123" – ≥6 characters, contains 12

// "x9y99z" – ≥6 characters, contains 99

// "hello22" – ≥6 characters, contains 22

let sampleWord = "astronaut";
let pwRegex = /^(?=.{6,})(?=.*\d\d).*$/;
let result = pwRegex.test(sampleWord);