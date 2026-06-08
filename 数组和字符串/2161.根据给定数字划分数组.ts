/**
 * O(n)的时间复杂度，O(n)的空间复杂度
 * @param nums
 * @param pivot
 * @returns
 */
function pivotArray(nums: number[], pivot: number): number[] {
  let results: number[] = [];
  let n = nums.length;
  let equalLength = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] < pivot) {
      results.push(nums[i]);
    } else if (nums[i] == pivot) {
      equalLength++;
    }
  }
  for (let i = 0; i < equalLength; i++) {
    results.push(pivot);
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > pivot) {
      results.push(nums[i]);
    }
  }

  return results;
}
console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
