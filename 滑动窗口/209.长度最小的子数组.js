/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let [left, right] = [0, 0];
  let total = 0; //记录当前数组累加的值
  let minLength = Number.MAX_SAFE_INTEGER; //记录最小值
  while (right < nums.length) {
    total += nums[right];
    right++;
    while (total >= target) {
      minLength = Math.min(minLength, right - left);
      //开始滑动，总数减小
      total -= nums[left];
      left++;
    }
  }

  console.log(minLength, Number.MAX_SAFE_INTEGER);
  return minLength == Number.MAX_SAFE_INTEGER ? 0 : minLength;
};

module.exports = minSubArrayLen;
