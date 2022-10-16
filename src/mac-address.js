const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {

  let digits = inputString.split('-');

  if (digits.length != 6 ) return false;

  return digits.every(d => d.length == 2 && !isNaN( parseInt(d, 16) ));
}
module.exports = {
  isMAC48Address
};
