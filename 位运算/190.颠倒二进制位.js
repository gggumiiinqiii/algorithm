/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // 存储最终结果
  let revRes = 0;
  for (let i = 0; i < 32 && n > 0; i++) {
    revRes |= (n & 1) << (31 - i);
    n >>>= 1;
  }
  console.log(revRes >>> 0);
  return revRes >>> 0;
};
module.exports = reverseBits;
