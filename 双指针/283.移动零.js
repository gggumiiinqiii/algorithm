/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let n = nums.length;
  // let left = 0;
  // let right = 0;
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] == 0) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  console.log(nums);
};
module.exports = moveZeroes;
