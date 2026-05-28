/**
 * @param {number[]} nums
 * @return {number}
 * //滑动窗口
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let left = 0;
  let right = nums.length;
  let result = [];
  while (left < right) {
    if (nums[left] == 1) {
      debugger;
      result.push(1);
      max = Math.max(max, result.length);
      left++;
    } else {
      result = [];
      left++;
    }
  }
  console.log(result);
  return max;
};
findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
