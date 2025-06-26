/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let result = [];
  arr.forEach((item, index) => {
    if (fn(item, index)) result.push(item);
  });
  return result;
};
