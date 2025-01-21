/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let setNumber = 0;

  while (n > 0) {
    if (n % 2) {
      setNumber++;
    }
    // 相当于 n >>> 1
    n = Math.floor(n / 2);
  }
  return setNumber;
};
module.exports = hammingWeight;
