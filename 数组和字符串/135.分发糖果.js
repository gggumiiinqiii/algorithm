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
    if (
      ratings[i - 1] > ratings[i] &&
      ratings[i - 1] > Number(ratings[i - 2] ?? 0)
    ) {
      candy[i - 1] = Math.max(candy[i], candy[i - 2] ?? 0) + 1;
    } else if (ratings[i - 1] > ratings[i]) {
      candy[i - 1] = candy[i] + 1;
    }
  }
  let gg = candy.reduce((a, b) => a + b);
  return gg;
};
module.exports = candy;
