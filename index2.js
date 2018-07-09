// Validate a pallindrome

// ****************************************
// Example 1:
function isPallindrome(str) {
  const revString = str.split('').reverse().join('');
  console.log(`${revString} === ${str}`);

  // Check to see if the reversed string is equal to the original passed in string and return true of false.
  // No need for a if statement.
  return revString === str;
}

const output = isPallindrome('monika');

console.log(output);
