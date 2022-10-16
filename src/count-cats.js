const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
	let counter = 0;
	for (let row of matrix) {
		let index = 0;
		while (index != -1) {
			index = row.indexOf("^^", index);
			if (index == -1) break;
			counter++;
			index = index + 1;
		}
	}
	return counter;
}

module.exports = {
  countCats
};
