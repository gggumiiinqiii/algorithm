/**
 * @param {number[]} nums
 * @return {boolean} 是否能分割成两个和相等的子集
 * 思路：0/1 背包 — 能否从 nums 中选出一些数，和恰好为 total/2
 * dp[i] 表示能否凑出和 i，对每个 num 倒序遍历，避免同一数字被重复使用
 */
function canPartition(nums: number[]): boolean {
  const total = nums.reduce((a, b) => a + b, 0);
  // 总和为奇数，不可能平分
  if (total % 2 !== 0) return false;

  const target = total / 2;
  // dp[i] 表示能否选出若干数字，使其和为 i
  const dp = new Array(target + 1).fill(false);
  dp[0] = true; // 凑出和为 0 不需要选任何数字

  for (const num of nums) {
    // 倒序遍历，确保每个数字只被用一次（0/1 背包）
    //从数字1开始记录
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
      console.log(i, dp[i]);
    }
  }

  return dp[target];
}
console.log(canPartition([1, 5, 11, 5]));
