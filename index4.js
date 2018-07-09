// Capitalise letters, return a string with the first 
// letter of every word capitalised.

// ****************************************
// Example 1:
function capitalisedLetters1(str) {
  const strArr = str.toLowerCase().split(' ');

  for(let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(' ');
}

const output1 = capitalisedLetters1('helLo ewelina, how are you today?');

console.log(output1);


// ****************************************
// Example 2:
function capitalisedLetters2(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
      console.log(word);
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
}

const output2 = capitalisedLetters2('helLo gabriela, how are you today?');

console.log(output2);


// ****************************************
// Example 3:
function capitalisedLetters3(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

const output3 = capitalisedLetters3('helLo agnes, how are you today?');

console.log(output3);


// ****************************************
// Example 4:
function capitalisedLetters4(str) {
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}

const output4 = capitalisedLetters4('helLo sandra, how are you today?');

console.log(output4);


// ****************************************
// Example 5:
function capitalisedLetters5(str) {
  return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

const output5 = capitalisedLetters5('helLo catheRine, how are you today?');

console.log(output5);
