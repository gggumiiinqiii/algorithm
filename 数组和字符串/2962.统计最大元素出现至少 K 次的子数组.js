/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  // 找出数组中的最大值
  const maxVal = Math.max(...nums);
  const n = nums.length;
  let res = 0;
  let count = 0;
  let left = 0;
  for (let right = 0; right < n; right++) {
    if (nums[right] === maxVal) {
      count++;
    }
    console.log("right", right, count);
    while (count >= k) {
      // 存一下从right-之后所有的子数组都满足
      res += nums.length - right;
      //  console.log("res", res);
      if (nums[left] === maxVal) {
        count--;
      }
      left++;
    }
  }
  // console.log(res);
  return res;
};
module.exports = countSubarrays;
