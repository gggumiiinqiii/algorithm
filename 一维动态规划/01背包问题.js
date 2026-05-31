/**
 * @param {number[]} weight - 物品的重量数组
 * @param {number[]} value - 物品的价值数组
 * @param {number} W - 背包的最大容量
 * @return {number} - 能够获得的最大价值
 * 给你一个背包，它能承受的最大重量为 W。
 * 现有 n 件物品，每件物品都有自己的重量 $weight[i]$ 和价值 $value[i]$。
 * 问：在不超过背包最大载重的情况下，如何选择物品，使得背包中物品的总价值最大？
 * dp[i][j] = dp[i-1][j-weight[i]]+value[i]
 * 取最大值 Math.max(dp[i-1][j],dp[i-1][j][j-weight[i]]+value[i])
 */
function knapsack2D(weight, value, W) {
  const n = weight.length;
  //初始化DP数组，行数为物品数量，列数为背包容量
  const dp = Array.from({ length: n }, () => new Array(W + 1).fill(0));
  //i表示前i件物品，j代表当前背包的剩余容量
  for (let j = weight[0]; j <= W; j++) {
    dp[0][j] = value[0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= W; j++) {
      //容量不够
      if (weight[i] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }
  console.log(dp);
  console.log(dp[n - 1][W]);
}
/*
[ 0, 0, 0, 0, 15 ]
[ 0, 0, 0, 15, 15 ]
[ 0, 0, 15, 15, 15 ]
[ 0, 15, 15, 15, 15 ]
[ 0, 15, 15, 15, 35 ]
[ 0, 15, 15, 20, 35 ]
[ 0, 15, 15, 20, 40 ]
*/
function knapsack1D(weight, value, W) {
  const n = weight.length;
  const dp = Array(W + 1).fill(0);
  for (let i = 0; i < n; i++) {
    // 必须从后向前遍历背包容量！
    // 且当容量 j 小于当前物品重量时，由于装不下，dp[j] 保持原值即可，所以循环到 weight[i] 停止
    for (let j = W; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
      console.log(dp.slice());
    }
  }
}
// 测试用例
const weight = [1, 3, 4];
const value = [15, 20, 40];
const W = 4;
console.log(knapsack1D(weight, value, W)); // 输出: 35 (选择物品0和物品1，重量1+3=4，价值15+20=35)
