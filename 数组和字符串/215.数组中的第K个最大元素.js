/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 快速排序 找到最后一个值，根据最后一个值，划分左边和右边，然后依次递归
 */
var findKthLargest = function (nums, k) {
  const target = nums.length - k;
  function quickSelect(left, right) {
    const pivot = nums[right];
    let p = left;
    for (let i = left; i < right; i++) {
      if (nums[i] < pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]];
        p++;
      }
    }
    [nums[p], nums[right]] = [nums[right], nums[p]];
    //   console.log(p, target, nums);
    if (p == target) return nums[p];
    else if (p < target) return quickSelect(p + 1, right);
    else return quickSelect(left, p - 1);
  }
  return quickSelect(0, nums.length - 1);
};
var quickSort = function (nums, left, right) {
  if (left >= right) return;
  const pivot = nums[right];
  let p = left;
  for (let i = left; i < right; i++) {
    if (nums[i] < pivot) {
      [nums[i], nums[p]] = [nums[p], nums[i]];
      p++;
    }
  }
  [nums[p], nums[right]] = [nums[right], nums[p]];
  quickSort(nums, p + 1, right);
  quickSort(nums, left, p - 1);
};
let gg = [3, 2, 1, 5, 6, 4];
// console.log(quickSort(gg, 0, gg.length - 1));
// console.log(gg);
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
