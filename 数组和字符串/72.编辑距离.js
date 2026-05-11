/**
 * @param {string} word1
 * @param {string} word2
 * @return {number} dp转移方程
 */
var minDistance = function (word1, word2) {
  let [m, n] = [word1.length, word2.length];
  console.log(m, n);
  //生成二维数组，word1+1为行，word2+2为列
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  //初始化，当其中一个字符串为空时，操作次数时确定的
  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < n + 1; j++) {
    dp[0][j] = j;
  }
  //填表
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, //删除
          dp[i][j - 1] + 1, //插入
          dp[i - 1][j - 1] + 1, //替换
        );
      }
    }
  }
  //   console.log(dp[m][n]);
  //   console.log(dp);
  return dp[m][n];
};
minDistance("horse", "ros");
