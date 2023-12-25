/**
 * @param {number[]} nums
 * @return {boolean}
 */
var jump = function (nums) {
  const length = nums.length;
  if (length == 1) {
    return 0;
  }
  // // 覆盖范围
  // let curDistance = 0; //当前覆盖最远距离下标
  // let ans = 0; // 记录走得最大步数
  // let nextDistance = 0; //下一步覆盖最远距离下标
  // for (let i = 0; i < length; i++) {
  //   nextDistance = Math.max(nums[i] + i, nextDistance); // 更新下一步覆盖最远距离下标
  //   // console.log(nextDistance);
  //   if (i == curDistance) {
  //     // 遇到当前覆盖最远距离下标
  //     ans++; // 需要走下一步
  //     curDistance = nextDistance; // 更新当前覆盖最远距离下标（相当于加油了）
  //     if (nextDistance >= length - 1) break; // 当前覆盖最远距到达集合终点，不用做ans++操作了，直接结束
  //   }
  // }
  // console.log(ans);
  // return ans;

  // 初始化dp数组，dp[i]表示达到位置i所需的最小跳跃次数
  const dp = Array(length).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0; // 起始位置的最小跳跃次数为0

  for (let i = 0; i < length; i++) {
    for (let j = 1; j <= nums[i] && i + j < length; j++) {
      // 更新能够从当前位置跳跃到位置得最小跳跃次数
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }
  console.log(dp);
  return dp[length - 1];
};
module.exports = jump;
