/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seen = new Set();

  const calculateSumOfSquares = (num) => {
    let sum = 0;
    while (num > 0) {
      sum += Math.pow(num % 10, 2);
      num = Math.floor(num / 10);
    }
    return sum;
  };

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = calculateSumOfSquares(n);
  }
  console.log(n == 1);
  return n === 1;
};
module.exports = isHappy;
