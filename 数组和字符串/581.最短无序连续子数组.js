/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let left = nums.length - 1,
    right = 0;

  // 从左往右：遇到比当前 max 小的，就是乱序，更新右边界
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < max) right = i;
    max = Math.max(nums[i], max);
  }

  // 从右往左：遇到比当前 min 大的，就是乱序，更新左边界
  let min = Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > min) left = i;
    min = Math.min(nums[i], min);
  }

  return left >= right ? 0 : right - left + 1;
};
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
