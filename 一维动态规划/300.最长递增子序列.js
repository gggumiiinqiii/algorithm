/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  //dp都填充1
  const dp = new Array(nums.length).fill(1);
  //遍历数组
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      console.log(i, j, nums[i], nums[j], dp[i]);
    }
  }
  console.log(dp);
  return Math.max(...dp);

  //   下面是二分查找的做法
  //   const tails = [];
  //   for (const num of nums) {
  //     let left = 0,
  //       right = tails.length;
  //     // 二分查找合适的位置
  //     while (left < right) {
  //       const mid = Math.floor((left + right) / 2);
  //       if (tails[mid] < num) {
  //         left = mid + 1;
  //       } else {
  //         right = mid;
  //       }
  //     }
  //     // 如果左边界在 tails 数组末尾，扩展数组
  //     if (left === tails.length) {
  //       tails.push(num);
  //     } else {
  //       tails[left] = num;
  //     }
  //   }
  //   console.log(tails);
  //   return tails.length;
};
// dp[i]：表示以 nums[i] 结尾的最长递增子序列的长度。
// 初始化 dp[i] = 1，表示每个元素至少可以作为长度为 1 的递增子序列。
// 使用两层循环：外层循环遍历每个元素 i，内层循环遍历 i 前面的所有元素 j，判断是否可以将 nums[i] 加到 nums[j] 形成递增子序列。如果可以，就更新 dp[i]。
// 最后返回 dp 数组中的最大值，即为最长递增子序列的长度。
module.exports = lengthOfLIS;
