const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numberStr = n.toString();
  let sum = 0;
  do {
    for (let i = 0; i < numberStr.length; i += 1) {
      sum += +numberStr[i];
    }
    if (sum === 1 || sum < 10) {
      return sum;
    }
    numberStr = sum.toString();
    sum = 0;
  } while (numberStr.length > 1)
}

module.exports = {
  getSumOfDigits
};
