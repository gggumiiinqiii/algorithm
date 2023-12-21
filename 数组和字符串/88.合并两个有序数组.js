/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //这个方法不行concat方法是给nums1重新赋值了一个地址，题目中需要修改nums中指针指向的内存地址
  // nums1 = nums1
  //   .concat(nums2)
  //   .filter((item) => Boolean(item))
  //   .sort((a, b) => a - b);
  nums1.splice(m,n,...nums2)
  nums1.sort((a, b) => a - b);
  console.log(nums1);
};
module.exports = merge;
