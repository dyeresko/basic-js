const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = "";
  let counter = 0;
  let currentCharacter = "";
  for (let i = 0; i < str.length; i += 1) {
    if (currentCharacter === str[i]) {
      continue;
    }
    currentCharacter = str[i];
    for (let j = i; j < str.length; j += 1) {
      if (currentCharacter === str[j]) {
        counter += 1;
      } else {
        if (counter > 1) {
          res += counter + str[i];
        } else {
          res += str[i];
        }
        counter = 0;
        break;
      }
    }
  }
  if (counter > 1) {
    res += counter + currentCharacter;
  } else {
    res += currentCharacter;
  }
  return res;
}

module.exports = {
  encodeLine
};
