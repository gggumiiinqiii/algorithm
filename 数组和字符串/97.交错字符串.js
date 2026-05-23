/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 * 判断s3是不是可以由s1+s2按照顺序排列
 */
var isInterleave = function (s1, s2, s3) {
  let s1L = s1.length,
    s2L = s2.length,
    s3L = s3.length;
  if (s1L + s2L !== s3L) return false;
  const dp = new Array(s1L + 1).fill(0).map(() => new Array(s2L + 1).fill(0));

  dp[0][0] = true;
  //初始化s1
  for (let i = 1; i <= s1L; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }
  //初始化s2
  for (let j = 1; j <= s2L; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }
  console.log(dp.slice());
  for (let i = 1; i <= s1L; i++) {
    for (let j = 1; j <= s2L; j++) {
      const p = i + j - 1;
      const fromS1 = dp[i - 1][j] && s1[i - 1] === s3[p];
      const fromS2 = dp[i][j - 1] && s2[j - 1] === s3[p];
      dp[i][j] = fromS1 || fromS2;
    }
  }

  console.log(dp);
  return dp[s1L][s2L];
};
//这个确实可以
console.log(isInterleave("aabcc", "dbb", "aadbbcbc"));
