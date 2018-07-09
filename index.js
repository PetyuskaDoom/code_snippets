// Reverse a string

// ****************************************
// Example 1:
function reverseString1(str) {
  // return 'TEST';
  const strArr = str.split('');
  // const strArr = str.split(' ');
  
  strArr.reverse();

  console.log(strArr);
  return strArr.join('');
}

const output1 = reverseString1('hello');
// const output = reverseString('hello world');

console.log(output1);


// ****************************************
// Example 2:
function reverseString2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

const output2 = reverseString2('goodbye');

console.log(output2);


// ****************************************
// Example 3:
function reverseString3(str) {
  let revString = '';

  for(let i = str.length - 1; i >= 0; i--) {
    // revString = revString + str[i];
    revString += str[i];
  }
  return revString;
}

const output3 = reverseString3('balloon');

console.log(output3);


// ****************************************
// Example 4:
function reverseString4(str) {
  let revString = '';

  for(let i = 0; i <= str.length - 1; i++) {
    revString = str[i] + revString;
  }
  return revString;
}

const output4 = reverseString4('ireland');

console.log(output4);


// ****************************************
// Example 5:
function reverseString5(str) {
  let revString = '';

  for(let char of str) {
    revString = char + revString;
  }
  return revString;
}

const output5 = reverseString5('gabriela');

console.log(output5);


// ****************************************
// Example 6:
function reverseString6(str) {
  let revString = '';

  str.split('').forEach(function(char) {
    revString = char + revString;
  });
  return revString;
}

const output6 = reverseString6('agnes');

console.log(output6);


// ****************************************
// Example 7:
function reverseString7(str) {
  let revString = '';

  str.split('').forEach(char => revString = char + revString);
  return revString;
}

const output7 = reverseString7('ewelina');

console.log(output7);


// ****************************************
// Example 8:
function reverseString8(str) {
  return str.split('').reduce(function(revString, char) {
    return char + revString;
  }, '');
}

const output8 = reverseString8('catherine');

console.log(output8);


// ****************************************
// Example 9:
function reverseString9(str) {
  return str.split('').reduce((revString, char) => char + revString, '');
}

const output9 = reverseString9('monika');

console.log(output9);

