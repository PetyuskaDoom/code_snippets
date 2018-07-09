// Fizzbuzz: Write a program that prints all numbers from 1 to 100.
// For multiples of 3, instead of the number, print the word Fizz.
// For multiples of 5 print the word Buzz. For number that are 
// both multiples of 3 and 5 print the word FizzBuzz.

// ****************************************
// Example 1:
function fizzBuzz() {
  for(let i = 1; i <= 100; i++) {
    // if((i % 3 === 0) && (i % 5 === 0)) {
    if(i % 15 === 0) {
      console.log('FizzBuzz');
    }
    else if(i % 3 === 0) {
      console.log('Fizz');
    }
    else if(i % 5 === 0) {
      console.log('Buzz');
    }
    else {
      console.log(i);
    }
  }
}

// Call the function
fizzBuzz();