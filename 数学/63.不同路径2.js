/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 第一行，第一列中只要有一个格子是障碍，后面所有格子都是0
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  if (obstacleGrid[0][0] == 1) return 0;
  dp[0][0] = 1;
  // 初始化第一列：如果上一格可达且当前无障碍，则为 1
  for (let i = 1; i < m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 0 && dp[i - 1][0] === 1 ? 1 : 0;
  }

  // 初始化第一行：如果左边一格可达且当前无障碍，则为 1
  for (let j = 1; j < n; j++) {
    dp[0][j] = obstacleGrid[0][j] === 0 && dp[0][j - 1] === 1 ? 1 : 0;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  console.log(obstacleGrid, dp, m, n);
  return dp[m - 1][n - 1];
};
console.log(uniquePathsWithObstacles([[0, 1, 0, 0]]));
