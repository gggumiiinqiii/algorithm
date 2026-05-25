/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 相同元素只能出现k次
 * https://leetcode.cn/contest/weekly-contest-503/problems/limit-occurrences-in-sorted-array/
 */
var limitOccurrences = function (nums, k) {
  let nLength = nums.length;
  let result = [];
  let countK = 0;
  for (let i = 0; i < nLength; i++) {
    countK++;
    result.push(nums[i]);
    //大于k就pop
    if (countK > k) {
      result.pop();
    }
    let resLength = result.length;
    //最后一位不等于下一个num count就置为0
    if (result[resLength - 1] !== nums[i + 1]) {
      countK = 0;
    }
  }
  return result;
};
console.log(limitOccurrences([1, 2, 3], 1));
