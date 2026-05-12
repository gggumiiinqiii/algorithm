/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let res = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];

    // 关键点：因为 prevMax 会在计算后被改变，
    // 而计算 prevMin 时需要用到旧的 prevMax，
    // 所以我们先存一下旧值，或者直接用临时变量计算。
    let tempMax = prevMax;

    prevMax = Math.max(curr, tempMax * curr, prevMin * curr);
    prevMin = Math.min(curr, tempMax * curr, prevMin * curr);

    res = Math.max(res, prevMax);
  }

  return res;
};
