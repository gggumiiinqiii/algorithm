function getAverages(nums: number[], k: number): number[] {
  let n = nums.length;

  let left = 0;
  let right = left + k;
  let sum = 0;
  let firstIndex = right;
  //先都置为-1
  let avgs = new Array(n).fill(-1);
  //  console.log(avgs);
  //Math.floor
  //前后不足k就置为-1,left-K>0,right+k<n
  //计算第一位
  for (let i = 0; i < right + k + 1; i++) {
    sum += nums[i];
  }
  //如果大于了n的长度就直接返回avgs
  if (2 * k + 1 > n) {
    return avgs;
  } else {
    avgs[firstIndex] = Math.floor(sum / (2 * k + 1));
  }
  //从后一个开始
  for (let i = right + k + 1; i < n; i++) {
    sum = sum - nums[left] + nums[right + k + 1];
    // console.log(right + k + 1);
    avgs[right + 1] = Math.floor(sum / (2 * k + 1));
    left++;
    right++;
  }
  // console.log(avgs);
  return avgs;
}
console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
console.log(getAverages([10000], 0));
console.log(getAverages([8], 10000));
