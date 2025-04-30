/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let res = 0;
  nums.forEach((item) => {
    if (getUnit(item) % 2 == 0) {
      res++;
    }
  });
  function getUnit(n) {
    let count = 0;
    while (n > 0) {
      count++;
      n = Math.floor(n / 10);
    }
    return count;
  }
  return res;
};
module.exports = findNumbers;
