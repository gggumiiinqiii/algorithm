/**
 * @param {number[]} nums - 升序排列的无重复元素数组
 * @param {number} target - 目标值
 * @return {number} - 目标值在数组中的索引，若不存在则返回应插入的位置
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  // 二分查找标准模板：闭区间 [left, right]
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid; // 找到目标，直接返回索引
    } else if (nums[mid] > target) {
      right = mid - 1; // 目标在左半部分，缩小右边界
    } else if (nums[mid] < target) {
      left = mid + 1; // 目标在右半部分，缩小左边界
    }
  }
  // 未找到时，left 即为 target 应插入的位置
  return left;
};
console.log(searchInsert([1, 3, 5, 6], 7));
