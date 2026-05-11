/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 荷兰国旗问题，双指针，i遍历数组遇到0就和p0交换(i++,p0++)，遇到2就和p2交换(p2--)
 */
var sortColors = function (nums) {
  let n = nums.length;
  let p0 = 0;
  let p2 = n - 1;
  let i = 0;
  while (i <= p2) {
    if (nums[i] == 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      p0 += 1;
      i += 1;
    } else if (nums[i] == 2) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]];
      p2 -= 1;
    } else {
      i += 1;
    }
  }
  console.log(nums);
};
sortColors([2, 0, 1]);
