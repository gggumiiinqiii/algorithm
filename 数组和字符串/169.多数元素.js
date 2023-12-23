/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // let length = nums.length;
  // let whatsValue = null; // > length/2
  // let dedupNumsArr = [...new Set(nums)];
  // dedupNumsArr.forEach((item) => {
  //   if (nums.filter((numsItem) => numsItem == item).length > length / 2) {
  //     whatsValue = item;
  //   }
  // });
  // console.log(whatsValue);
  // return whatsValue;
  nums.sort((a, b) => a - b);
  console.log(nums[Math.floor(nums.length / 2)]);
  return nums[Math.floor(nums.length / 2)];
};
module.exports = majorityElement;
