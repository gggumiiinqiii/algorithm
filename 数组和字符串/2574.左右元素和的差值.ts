function leftRightDifference(nums: number[]): number[] {
  //
  let n = nums.length;
  let pre = new Array(n).fill(0);
  let last = new Array(n).fill(0);
  let sum = 0;
  let results = [];
  for (let i = 0; i < n - 1; i++) {
    sum += nums[i];
    pre[i + 1] = sum;
  }
  sum = 0;
  for (let i = n - 1; i > 0; i--) {
    sum += nums[i];
    last[i - 1] = sum;
  }
  results = pre.map((item, index) => {
    return Math.abs(item - last[index]);
  });
  return results;
}
console.log(leftRightDifference([10, 4, 8, 3]));
console.log(leftRightDifference([1]));
