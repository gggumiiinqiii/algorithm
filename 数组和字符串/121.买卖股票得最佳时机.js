/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 双重for循环会超时
  let low = Infinity;
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i]);
    result = Math.max(result, prices[i] - low);
  }
  console.log(result);
  return result;
};
module.exports = maxProfit;
