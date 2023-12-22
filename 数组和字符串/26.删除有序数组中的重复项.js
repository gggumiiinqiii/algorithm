/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i + 1];
      k++;
    }
  }
  console.log(k, nums);
  return k;
};
// var removeDuplicates = function (nums) {
//     let k = 0;
//     let stashIndex = [];
//     for (let i = 0; i < nums.length - 1; i++) {
//       if (nums[i] !== nums[i + 1]) {
//         k++;
//       } else {
//         stashIndex.push(i);
//       }
//     }
//     k = k + 1;
//     stashIndex.forEach((item, index) => {
//       nums.splice(item - index, 1);
//     });
//     console.log(k, nums, stashIndex);
//     return k;
//   };
module.exports = removeDuplicates;
