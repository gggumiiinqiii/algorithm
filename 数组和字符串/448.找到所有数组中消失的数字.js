/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  console.log(nums);
  const result = [];
  const arrMap = new Map();
  for (let i = 1; i <= nums.length; i++) {
    arrMap.set(i, 0);
  }
  for (let i = 0; i < nums.length; i++) {
    arrMap.set(nums[i], 1);
  }
  for (let item of arrMap) {
    if (item[1] === 0) {
      result.push(item[0]);
    }
  }
  console.log(arrMap);
  console.log(result);
  return result;
};
findDisappearedNumbers([1, 1]);
