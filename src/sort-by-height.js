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
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] == -1) continue;
      let step = i + 1;
      while (arr[step] < j) {
        if (arr[step] == -1) {
          step++;
          continue;
        } else {
          break;
        }
      }
      if (arr[i] > arr[step]) {
        let temp = arr[i];
        arr[i] = arr[step];
        arr[step] = temp;
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
