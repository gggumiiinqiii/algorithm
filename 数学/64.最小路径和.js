/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = grid;

  // 初始化第一列；一直累加
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i][0] + dp[i - 1][0];
  }

  // 初始化第一行：一直累加
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j] + dp[0][j - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i][j] + dp[i - 1][j], dp[i][j] + dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
};
minPathSum([
  [1, 2, 3],
  [4, 5, 6],
]);
