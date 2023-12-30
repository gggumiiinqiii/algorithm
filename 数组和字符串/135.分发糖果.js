/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let length = ratings.length;
  let candy = Array.from({ length }).map((item) => 1);
  for (let i = 1; i < length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1;
    }
  }
  for (let i = length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
      candy[i - 1] = Math.max(candy[i - 1], candy[i] + 1);
    }
  }
  let gg = candy.reduce((a, b) => a + b);
  console.log(gg);
  return gg;
};
module.exports = candy;
