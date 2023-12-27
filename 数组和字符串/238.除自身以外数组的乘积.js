/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 前缀积*后缀积
var productExceptSelf = function (nums) {
  var n = nums.length;
  if (n < 2) return nums;
  var ans = new Array(n).fill(1);
  var mul1 = nums[0];
  var mul2 = nums[n - 1];
  // n=4,i=1 双指针，记录前缀积和后缀积，前缀积*后缀积得出最终结果
  for (var i = 1; i < n; ++i) {
    //全是1去乘以前面的数字
    ans[i] *= mul1;
    mul1 *= nums[i];
    ans[n - i - 1] *= mul2;
    mul2 *= nums[n - i - 1];
  }
  console.log(ans, mul1, mul2);
  return ans;
};
productExceptSelf([6, 2, 3, 4]); ///[ 24, 72, 48, 36 ] 144 144
module.exports = productExceptSelf;
