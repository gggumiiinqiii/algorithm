function longestConsecutive(nums) {
  if (!nums.length) {
    return 0;
  }

  let numSet = new Set(nums);
  let maxLength = 0;

  for (let num of numSet) {
    // 只考虑当前数字作为序列的起点，如果 num-1 存在于数组中，说明当前数字不是起点
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // 找到当前数字作为起点的最长连续序列的长度
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentLength += 1;
      }

      // 更新最大长度
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}
module.exports = longestConsecutive;
