var countSubarrays = function (nums, minK, maxK) {
  // 双指针
  let [bad, minkPos, maxPos] = [-1, -1, -1];
  let valid = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      bad = i;
    }
    if (nums[i] == minK) {
      minkPos = i;
    }
    if (nums[i] == maxK) {
      maxPos = i;
    }
    valid = Math.min(minkPos, maxPos);
    count += Math.max(0, valid - bad);
  }
  //   console.log("1", count);
  return count;
};
countSubarrays([1, 3, 5, 2, 7, 5], 1, 5);
