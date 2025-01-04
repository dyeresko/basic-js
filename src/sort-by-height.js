const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = [...arr];
  let temp;
  for (let i = 0; i < res.length; i += 1) {
    for (let j = 0; j < res.length - i - 1; j += 1) {
      let index = j + 1;
      if (res[j + 1] === -1) {
        while(index < res.length && res[index] === -1) {
          index += 1;
        }
      }
      if (res[j] > res[index]) {
        temp = res[j];
        res[j] = res[index];
        res[index] = temp;
      }
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
