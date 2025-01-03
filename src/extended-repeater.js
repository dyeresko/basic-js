const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  let i = 0;
  do {
    result += str;
    let j = 0;
    do {
        if (options.addition !== undefined) {
          result += options.addition;
          if (options.additionSeparator) {
            if (options.additionRepeatTimes && j !== options.additionRepeatTimes - 1) {
              result += options.additionSeparator;
            }
          } else if (options.additionRepeatTimes && j !== options.additionRepeatTimes - 1) {
              result += "|";
          }
        }
      j += 1;
    } while (j < options.additionRepeatTimes)
    if (options.separator) {
      if (options.repeatTimes && i !== options.repeatTimes - 1){
        result += options.separator;;
      }
    } else if (options.repeatTimes && i !== options.repeatTimes - 1){
        result += "+";
    }
    i += 1;
  } while (i < options.repeatTimes)
  return result;
}

module.exports = {
  repeater
};
