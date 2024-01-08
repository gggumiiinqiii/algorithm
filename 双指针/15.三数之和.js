/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 两个数之和加起来等于第三个数的负数
var threeSum = function (nums) {
  let sortNums = JSON.parse(JSON.stringify(nums)).sort((a, b) => a - b);
  let oneResult = [];
  let result = [];
  for (let xxx = 2; xxx < sortNums.length; xxx++) {
    // 避免重复数字,target一样不需要再找一遍了
    if (xxx > 2 && sortNums[xxx] === sortNums[xxx - 1]) {
      continue;
    }
    oneResult = twoSum(
      [...sortNums.slice(0, xxx), ...sortNums.slice(xxx + 1)],
      sortNums[xxx]
    );
    // console.log(oneResult, sortNums[xxx]);
    if (oneResult) {
      result = result.concat(oneResult);
    }
  }
  // console.log(result);
  console.log(removeDuplicateArrays(result));
  return removeDuplicateArrays(result);
};
function removeDuplicateArrays(originalArray) {
  // 将每个子数组中的元素进行排序，并将其转换为字符串
  // slice再sort就不会修改源数组
  const sortedArrays = originalArray.map((arr) =>
    arr.slice().sort().toString()
  );
  // 使用 Set 去除重复的字符串
  const uniqueArraysSet = new Set(sortedArrays);
  // 将 Set 中的字符串还原为数组形式
  const uniqueArrays = Array.from(uniqueArraysSet).map((str) =>
    str.split(",").map(Number)
  );
  return uniqueArrays;
}
// 两数之和
var twoSum = function (nums, target) {
  let length = nums.length;
  let firstIndex = 0;
  let secondIndex = length - 1;
  target = 0 - target;
  // console.log(target);
  let find = false;
  let result = [];
  while (firstIndex < secondIndex) {
    if (nums[firstIndex] + nums[secondIndex] < target) {
      firstIndex++;
    } else if (nums[firstIndex] + nums[secondIndex] > target) {
      secondIndex--;
    } else {
      find = true;
      result.push([nums[firstIndex], nums[secondIndex], 0 - target]);
      firstIndex++;
      // break;
    }
  }
  return find && result;
};

module.exports = threeSum;
