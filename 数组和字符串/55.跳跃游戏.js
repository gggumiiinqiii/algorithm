/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const length = nums.length;
  if (length == 1) {
    return true;
  }
  let can = 0;
  // for循环得return是整个函数得return
  for (let i = 0; i < length - 1; i++) {
    can--;
    can = Math.max(can, nums[i]);
    // 如果当前得最大值可以到底部就返回true
    if (can >= length - 1 - i) {
      return true;
      // 如果当前得最大值是0就返回false
    } else if (can == 0) {
      return false;
    }
  }
};
module.exports = canJump;
