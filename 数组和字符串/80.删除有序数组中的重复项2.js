/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // let k = 1;
  // let d = 0;
  // for (let i = 0; i < nums.length - 1; i++) {
  //   if (nums[i] !== nums[i + 1]) {
  //     nums[k] = nums[i + 1];
  //     k++;
  //     d = 0;
  //   } else {
  //     d++;
  //     if (d < 2) {
  //       nums[k] = nums[i + 1];
  //       k++;
  //     }
  //   }
  // }
  // console.log(k, nums);
  // return k;
  let count = 1; // Count for the current element
  let duplicateCount = 0; // Count for duplicate occurrences

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      duplicateCount++;
    } else {
      duplicateCount = 0;
    }

    if (duplicateCount < 2) {
      nums[count] = nums[i];
      count++;
    }
  }
  console.log(count, nums);
  return count;
};
module.exports = removeDuplicates;
