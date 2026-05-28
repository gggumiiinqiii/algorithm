/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 像数组中的每个整数添加+，'-',串联起来，得到表达式的累加，统计结果等于target的数值
 * p = (target+sum)/2
 * 在nums数组中挑出一些正数，让它们的和恰好等于P的组合数，01背包问题
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((a, b) => a + b);
  if (Math.abs(target) > sum) return 0;
  //必须是偶数
  if ((target + sum) % 2 !== 0) return 0;

  const p = (target + sum) / 2;
  const dp = Array.from({ length: nums.length + 1 }, () =>
    new Array(p + 1).fill(0),
  );
  //前0个元素凑成和为0的方法数就是1
  //使用前i个数字凑成和为j的方法数
  //dp[i][j] = dp[i-1][j]+dp[i-1][j-num](j>=nums)
  dp[0][0] = 1;
  //外层遍历物品
  console.log("ppp", dp, p);
  for (let i = 1; i <= nums.length; i++) {
    const num = nums[i - 1];
    for (let j = 0; j <= p; j++) {
      if (j < num) {
        //放不下当前数值
        dp[i][j] = dp[i - 1][j];
      } else {
        // 5个硬币凑10块钱，最后一块是3
        // [4][7]+[4][10]
        //不选的方法加选的方法
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - num];
      }
    }
  }
  console.log(dp);
  return dp[nums.length][p];
};

findTargetSumWays([1, 1, 3, 1, 1], 3);
