function subarraySum(nums: number[]): number {
  let n = nums.length;
  let pre = new Array(n + 1).fill(0);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    pre[i + 1] = sum;
  }
  let total = 0;
  for (let i = 0; i < n; i++) {
    let start = Math.max(0, i - nums[i]);
    total += pre[i + 1] - pre[start];
  }
  console.log(pre);
  //下标[1,2] 6-2
  return total;
}
console.log(subarraySum([2, 3, 1]));
console.log(subarraySum([3, 1, 1, 2]));
