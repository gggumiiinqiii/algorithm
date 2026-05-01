/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 动态规划是将大问题分解为小问题，并通过存储中间状态来避免重复计算的核心思想
 */
var uniquePaths = function (m, n) {
  let result = 0;
  const dp = Array.from({ length: m }, () => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
console.log(uniquePaths(3, 7));
