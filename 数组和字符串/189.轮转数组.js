/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // let length = nums.length;
  // if (length < k) {
  //   k = k % length;
  // }
  // for (i = length - 1; i >= 0; i--) {
  //   nums[i + k] = nums[i];
  // }

  // for (let i = 0; i < k; i++) {
  //   nums[i] = nums[length + i];
  // }
  // for (let i = 0; i < k; i++) {
  //   nums.splice(length, 1);
  // }
  // console.log(nums);

  //   let length = nums.length;

  //   if (length < k) {
  //     k = k % length;
  //   }
  //   // 3次反转就行了
  //   reverse(nums, 0, length - 1);
  //   reverse(nums, 0, k - 1);
  //   reverse(nums, k, length - 1);
  // 头插法，头部添加尾部移入得数据
  k = k % nums.length;
  while (k >= 1) {
    nums.unshift(nums.pop());
    k--;
  }
  console.log(nums);
};

function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// rotate([1, 2], 3);
module.exports = rotate;
