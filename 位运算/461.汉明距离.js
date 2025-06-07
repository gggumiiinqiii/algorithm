/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // 异或相同变成0，不同变成1
  let xor = x ^ y;
  let count = 0;
  while (xor !== 0) {
    count += xor & 1; //检查二进制的最后一位是不是1
    xor >>= 1; //右移1位
  }
  return count;
};
hammingDistance(1, 4);
