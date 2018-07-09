// Reverse an integer

// ****************************************
// Example 1:
function reverseInt(int) {
  // Turn the number into a string and reverse it.
  const revString = int.toString().split('').reverse().join('');

  // Change the string back into a number.
  return parseInt(revString) * Math.sign(int);
}

const output = reverseInt(12345);

console.log(output);
