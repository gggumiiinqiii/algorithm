//  卡特兰数。以每个 i（1到n）为根，左边 i-1 个节点构成左子树，右边 n-i 个节点构成右子树，
// 左右子树的组合数相乘然后累加。
//   dp[n] = 所有 dp[i-1] × dp[n-i] 的加总。
//   出口：dp[0] = dp[1] = 1（空树只有一种形态）。
//这也太难了
function numTrees(n: number): number {
  const dp = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      sum += dp[j - 1] * dp[i - j];
    }
    dp[i] = sum;
  }
  return dp[n];
}
console.log(numTrees(3));
