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
  // Set default values for options
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  // Convert null to the string 'null'
  const processedAddition = addition === null ? 'null' : String(addition);

  // Repeat the addition string
  const repeatedAddition = Array(additionRepeatTimes)
    .fill(processedAddition)
    .join(additionSeparator);

  // Repeat the main string with the addition
  const repeatedString = Array(repeatTimes)
    .fill(str + repeatedAddition)
    .join(separator);

  return repeatedString;
}

module.exports = {
  repeater
};
