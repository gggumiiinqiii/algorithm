/**
 * 峰值元素是指其值严格大于左右相邻值的元素。

给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞ 。

你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
 * @param nums 
 * @returns 
 */
function findPeakElement(nums: number[]): number {
  let left = 0,
    right = nums.length - 1;

  // 二分查找：每次比较 nums[mid] 和 nums[mid + 1]
  // 如果 mid < mid+1，右边在上升，峰值在右侧
  // 如果 mid > mid+1，右边在下降，峰值在左侧（含 mid）
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1; // 峰值在右侧
    } else {
      right = mid; // 峰值在左侧（mid 可能就是峰值）
    }
  }
  // left === right, 收敛到峰值
  return left;
}
console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
