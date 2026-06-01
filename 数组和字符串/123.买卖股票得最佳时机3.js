/**
 * @param {number[]} prices
 * @return {number}
 * 只能买两次，卖两次
 * 先算前几次的最优解，然后依次递增，制定几个状态
 */
var maxProfit = function (prices) {
  const n = prices.length;
  if (!n) return 0;
  let result = 0;
  const dp = Array.from({ length: n }, () => new Array(5).fill(0));
  console.log(dp);
  dp[0][0] = 0; //无操作
  dp[0][1] = -prices[0]; //第一天第一次买入
  dp[0][2] = 0; //第一天第一次买入并立刻卖出
  dp[0][3] = -prices[0]; //第一天完成一次买卖后再次买入
  dp[0][4] = 0; //第一天完成两次买卖
  //从第二天开始算
  for (let i = 1; i < n; i++) {
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
  }
  console.log(dp);
  //取最后一天不持有股票的最优解
  return Math.max(dp[n - 1][0], dp[n - 1][2], dp[n - 1][4]);
};
console.log(maxProfit([3, 2, 6, 5, 0, 3]));
