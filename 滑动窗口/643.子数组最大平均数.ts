function findMaxAverage(nums: number[], k: number): number {
  let n = nums.length;
  let left = 0;
  let right = left + k;
  let maxSum = 0;
  let sum = 0;
  for (let i = left; i < right; i++) {
    sum += nums[i];
  }
  maxSum = sum / k;
  //从第k个字符开始滑动
  for (let i = right; i < n; i++) {
    sum = sum - nums[left] + nums[right];
    maxSum = Math.max(maxSum, sum / k);
    left++;
    right++;
  }
  console.log(maxSum);
  return maxSum;
}
findMaxAverage([1, 12, -5, -6, 50, 3], 4);
findMaxAverage([5], 1);
