/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
var maximumProfit = function (prices, n_k) {
  // 注意参数名避免与长度冲突
  const n = prices.length;
  if (n < 2 || n_k === 0) return 0;

  // 使用 BigInt 防止精度丢失
  const NEG_INF = BigInt("-999999999999999999");

  // dp[j][s]: 完成了 j 笔交易，当前处于状态 s 的最大利润
  // 空间复杂度从 O(n*k) 优化为 O(k)
  let dp = new Array(n_k + 1);
  for (let j = 0; j <= n_k; j++) {
    dp[j] = [NEG_INF, NEG_INF, NEG_INF];
  }

  // 初始化第 0 天的状态
  dp[0][0] = 0n; // 空仓
  dp[0][1] = BigInt(-prices[0]); // 做多买入
  dp[0][2] = BigInt(prices[0]); // 做空卖出

  // 从第 1 天开始遍历
  for (let i = 1; i < n; i++) {
    const price = BigInt(prices[i]);

    // ⚠️ 关键细节：必须倒序遍历 j，防止在同一天内发生“多次交易”的覆盖错误
    for (let j = n_k; j >= 0; j--) {
      // 保存前一天的状态，用于今天的推导
      const prevEmpty = dp[j][0];
      const prevLong = dp[j][1];
      const prevShort = dp[j][2];

      // 状态 0：空仓
      // 保持空仓，或者由前一笔交易的“做多”平仓，或者由“做空”平仓
      dp[j][0] = prevEmpty;
      if (j >= 1) {
        dp[j][0] = max(dp[j][0], dp[j - 1][1] + price); // 注意这里用的是上一轮(j-1)的多头状态
        dp[j][0] = max(dp[j][0], dp[j - 1][2] - price); // 注意这里用的是上一轮(j-1)的空头状态
      }

      // 状态 1：做多持仓
      // 保持持有，或者由当前的“空仓”状态买入开多
      dp[j][1] = max(prevLong, prevEmpty - price);

      // 状态 2：做空持仓
      // 保持做空，或者由当前的“空仓”状态卖空开仓
      dp[j][2] = max(prevShort, prevEmpty + price);
    }
  }

  // 最终结果一定是在最后一天处于“空仓”状态的最大利润
  let ans = 0n;
  for (let j = 0; j <= n_k; j++) {
    ans = max(ans, dp[j][0]);
  }

  return Number(ans);
};

function max(a, b) {
  return a > b ? a : b;
}
