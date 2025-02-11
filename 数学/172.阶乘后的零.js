/**
 * @param {number} n
 * @return {number}
 * 计算有多少个5相加
 */
var trailingZeroes = function (n) {
  let count = 0;
  while (n >= 5) {
    count += Math.floor(n / 5);
    n /= 5;
    console.log(n);
  }
  return count;
};
module.exports = trailingZeroes;
