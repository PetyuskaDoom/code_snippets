// Max character: Return the character that is most common in a string.

// ****************************************
// Example 1:
function maxCharacter(str) {
  const charMap = {};  // Empty object literal
  let maxNum = 0;
  let maxChar = '@';

  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++;
    }
    else {
      charMap[char] = 1;
    }
  });

  // console.log(charMap);

  for(let char in charMap) {
    // node inspect index5, type c, then repl, ctrl+c to return to debug mode, press c to get to the next iteration and type repl
    // debugger; 

    //console.log(`${charMap[char]} - ${maxNum} - ${maxChar} - ${char}`)
    if(charMap[char] > maxNum) {
      // console.log(`${charMap[char]} - ${maxNum} - ${maxChar} - ${char}`)
      maxNum = charMap[char];
      maxChar = char;

    }
  }
  return maxChar;
}

const output = maxCharacter('ssnnkkk');

console.log(output);
