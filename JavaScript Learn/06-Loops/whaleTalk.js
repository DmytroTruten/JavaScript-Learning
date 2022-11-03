// contains some phrase
const input = "Dream big";

// contains lowercase letters
const vowels = ["a", "e", "i", "o", "u"];

// This will serve as a place to store the vowels from the input string.
const resultArray = [];

//Created a loop to iterate through each letter of the input variable text.
for (let i = 0; i < input.length; i++) {
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
  //The inner loop iterate through the vowels array each time the outer loop runs.
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

// Declared a variable that joins our resultArray into a single string and capitalizes all of it’s letters.
const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
