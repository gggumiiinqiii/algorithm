/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const length = prices.length;
  let result = 0;
  for (let i = 0; i < length - 1; i++) {
    if (prices[i + 1] - prices[i] > 0) {
      result = result + prices[i + 1] - prices[i];
    }
  }
  console.log(result);
  return result;
};
module.exports = maxProfit;
