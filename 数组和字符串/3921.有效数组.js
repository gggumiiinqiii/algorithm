/**
 * @param {number[]} nums
 * @return {number[]}
 * 先for循环找到每个数组最右边的最大值构建一个数组
 * 再来一个for循环找到每个数组最左边的最大值然后依次对比
 */
var findValidElements = function (nums) {
  const length = nums.length;
  if (length <= 2) return nums;
  const result = [];
  const rightMaxArray = new Array(length);
  let rightMax = -Infinity;
  for (let i = length - 1; i >= 0; i--) {
    rightMaxArray[i] = rightMax;
    rightMax = Math.max(rightMax, nums[i]);
  }
  let leftMax = -Infinity;
  for (let i = 0; i < length; i++) {
    if (
      i == 0 ||
      i == length - 1 ||
      nums[i] > leftMax ||
      nums[i] > rightMaxArray[i]
    ) {
      result.push(nums[i]);
    }
    leftMax = Math.max(leftMax, nums[i]);
  }

  return result;
};
findValidElements([1, 2, 4]);
