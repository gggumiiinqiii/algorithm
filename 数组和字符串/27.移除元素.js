/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //得直接修改nums里面得值，不能直接赋值哎
  // nums = nums
  //   .map((item) => {
  //     if (item == val) {
  //       return false;
  //     } else {
  //       return item;
  //     }
  //   })
  //   .filter((item) => item !== false);
  // console.log(nums, nums.length);
  // return nums.length;
  //额外得数组空间
  //   let stashIndex = [];
  //   nums.forEach((item, index) => {
  //     if (item == val) {
  //       stashIndex.push(index);
  //     }
  //   });
  //   stashIndex.forEach((item, index) => {
  //     nums.splice(item - index, 1);
  //   });
  //   console.log(nums, nums.length);
  //   return nums.length;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k++] = nums[i];
    }
  }
  console.log(nums, k);
  return k;
};
module.exports = removeElement;
