/**
 * @param {number} n
 * @return {boolean}
 * 分解
 * 一定是2**a * 3**b * 5**c
 */
var isUgly = function (n) {
  if (n < 1) return false;
  while (n % 2 == 0) {
    n = n / 2;
  }
  while (n % 3 === 0) {
    n = n / 3;
  }
  while (n % 5 == 0) {
    n = n / 5;
  }
  return n == 1;
};
console.log(isUgly(6));
