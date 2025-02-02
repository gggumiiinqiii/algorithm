/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let length = nums.length;
  if (length == 1) {
    return nums[0];
  }
  // dp计算
  let dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[length - 1];
};
module.exports = rob;
