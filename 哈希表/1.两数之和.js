/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  //通过hash表的值来计算
  for (let i = 0; i < nums.length; i++) {
    //有这个数并且索引不同就直接赋值
    if (map.has(target - nums[i]) && i != map.get(target - nums[i])) {
      result = [i, map.get(target - nums[i])];
      break;
    }
  }
  console.log(result);
  console.log(map);
  return result;
};
module.exports = twoSum;
// twoSum([2, 7, 11, 15], 9)
// twoSum([3, 2, 4], 6)
// twoSum([2, 3, 3], 6)
