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
	for (let i = 0; i<domains.length; i++) {
		domains[i] = domains[i].split('.').reverse();
	}

	let obj = {};
	for (let i = 0; i<domains.length; i++) {
		for (let j = 1; j <= domains[i].length; j++) {
			let appearance = "." + domains[i].slice(0, j).join(".");
			obj[appearance] ? obj[appearance]++ : obj[appearance] = 1;
		}
	}
	
	return obj;
}

module.exports = {
  getDNSStats
};
