/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays1 = function (nums, k) {
  const n = nums.length;
  //以i结尾的最长严格递增增长度
  const inc = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      inc[i] = inc[i - 1] + 1;
    }
  }
  // a第一个子数组的位置，a+k-1第一个子数组的最后一个位置，a+2k-1第二个子数组的最后一个位置
  for (let a = 0; a + 2 * k - 1 < n; a++) {
    if (inc[a + k - 1] >= k && inc[a + 2 * k - 1] >= k) {
      return true;
    }
  }
  return false;
  console.log(inc);
};

console.log(hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3));
