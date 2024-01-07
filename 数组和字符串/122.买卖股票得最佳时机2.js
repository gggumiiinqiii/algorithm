/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const length = prices.length;
  let result = 0;
  for (let i = 0; i < length - 1; i++) {
    // 当天买 第二天卖了再买第二天的票，一直贪心累加
    if (prices[i + 1] - prices[i] > 0) {
      result = result + prices[i + 1] - prices[i];
    }
  }
  console.log(result);
  return result;
};
module.exports = maxProfit;
