/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const n = prices.length;
  if (!n) return 0;
  let result = 0;

  const dp = Array.from({ length: n }, () => new Array(k * 2 + 1).fill(0));

  for (let i = 0; i < k * 2 + 1; i++) {
    if (i == 0) {
      dp[0][i] = 0; //无操作
    } else if (i % 2 == 0) {
      dp[0][i] = 0; //卖
    } else {
      dp[0][i] = -prices[0]; //买
    }
  }
  console.log(dp);
  //从第二天开始算
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < k * 2 + 1; j++) {
      if (j % 2 == 0) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i]); //卖
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i]); //买
      }
    }
  }
  console.log(dp);
  //取最后一天不持有股票的最优解

  for (let i = 0; i < k * 2 + 1; i++) {
    if (i % 2 == 0) {
      result = Math.max(dp[n - 1][i]);
    }
  }
  return result;
};
// console.log(maxProfit(2, [2, 4, 1]));
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));
