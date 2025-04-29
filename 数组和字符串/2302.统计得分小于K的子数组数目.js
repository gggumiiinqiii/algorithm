/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}前缀和+二分
 */
var countSubarrays = function (nums, k) {
  const n = nums.length;
  const sum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    let low = i,
      high = n - 1;
    let ans = i - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const s = sum[mid + 1] - sum[i];
      const len = mid - i + 1;
      const score = s * len;
      if (score < k) {
        ans = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    if (ans >= i) {
      res += ans - i + 1;
    }
  }
  //   console.log(res);
  return res;
};
module.exports = countSubarrays;
