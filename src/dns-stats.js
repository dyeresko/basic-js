const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};

  for (let i = 0; i < domains.length; i += 1) {
    let doms = domains[i].split(".").reverse();
    let k = 1;
    let str = "";
    for (let j = 0; j < doms.length; j += 1) {
      for (let m = 0; m < k; m += 1) {
        str += "." + doms[m];
      }
      k += 1;
      if (res[str]) {
        res[str] += 1;
      } else {
        res[str] = 1;
      }
      str = "";
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
