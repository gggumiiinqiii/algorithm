/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   // 双重for循环会超时
//   let low = Infinity;
//   let result = 0;
//   for (let i = 0; i < prices.length; i++) {
//     // 最小值
//     low = Math.min(low, prices[i]);
//     // 最大值
//     result = Math.max(result, prices[i] - low);
//   }
//   console.log(result);
//   return result;
// };
function maxProfit(prices) {
  let n = prices.length;
  //dp前i天的最大收益
  let dp = new Array(n).fill(0);
  let min = Infinity;
  for (let i = 1; i < n; i++) {
    min = Math.min(min, prices[i - 1]);
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
  }
  console.log(dp);
  return dp[n - 1];
}
module.exports = maxProfit;
