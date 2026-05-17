/**
 * @param {number} n
 * @return {boolean}
 * 复杂度太高
 */
// var isPowerOfTwo = function (n) {
//   if (n == 1) return true;
//    n&1==1是积数
//   if (n & 1 == 1) return false;

//   return isPowerOfTwo(n / 2);
// };
var isPowerOfTwo = function (n) {
  // (n&(n-1)) == 0是2的幂次方
  return (n & (n - 1)) == 0 && n > 0;
};
console.log(isPowerOfTwo(34));
