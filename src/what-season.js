const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 //spring, summer, autumn (fall), winter


function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';

  if (!(date instanceof Date)) throw new Error("Invalid date!");
  
  if (Object.entries(new Date()).length != Object.entries(date).length) {
  	throw new Error("Invalid date!");
  }

  if (date.getMonth() >= 2 && date.getMonth() <= 4) return "spring";
  if (date.getMonth() >= 5 && date.getMonth() <= 7) return "summer";
  if (date.getMonth() >= 8 && date.getMonth() <= 10) return "autumn";
  return "winter";
}

module.exports = {
  getSeason
};
