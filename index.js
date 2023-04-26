// Only Odds
// Create a const named getOddNumbers that accepts an array of numbers as its parameter.
const getOddNumbers = [2, 4, 6, 8, 10, 11, 12];
// Create a const oddArr with an empty array
const oddArr = [];
// Creat a for loop to set understanding for the odd number and how to select if tom the main array getOddNumber array
for (let i = 0; i < getOddNumbers.length; i++) {
  // If the number is odd, push it into the oddArr.
  if (getOddNumbers[i] % 2 !== 0) {
    oddArr.push(getOddNumbers[i]);
  }
}
console.log(oddArr);



// Vowel versus Consonant
// Create a variable that stores input
const str = "Hello";
// Create two variables whcih accumulates total of vowels and constants
let vowelCount = 0;
let consonantCount = 0;
// Creat an array that holds all vowels
const vowelsArr = ["a", "e", "i", "o", "u"];
// Creat a for loop to get every character
for (let i = 0; i < str.length; i++) {
  const character = str[i];
  if (vowelsArr.includes(character)) {
    vowelCount++;
  } else {
    consonantCount++;
  }
  console.log(`${str} has ${consonantCount} consonants and ${vowelCount} vowels`);
}




//Reverse Arrays
// Create an array with the input
const inputArr = [1,2,3];
// Create an array to store the reversed array
const reversedArr = [];
//inputArr in reversed order:
for (let i = inputArr.length - 1; i >= 0; i--) {
    // add the current element to the new array
    reversedArr.push(inputArr[i]);
}
console.log(reversedArr);



//FizzBuzz
// Creat a for loop to descripe the range of numbers
for (let i = 1; i <= 100; i++) {
// Condition to print FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
// Condition to print Fizz      
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
// Condition to print Buzz        
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  