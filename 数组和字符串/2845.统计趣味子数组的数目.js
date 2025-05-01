/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, modulo, k) {
  let prefix = 0; // 前缀和，记录到当前为止 nums[i] % modulo == k 的元素个数
  let result = 0; // 最终答案：趣味子数组的数量
  const countMap = new Map();
  countMap.set(0, 1); // 初始情况下，前缀和为 0 出现过一次（方便计算从开头到某处直接符合的子数组）

  for (let num of nums) {
    // 如果当前元素满足 nums[i] % modulo == k，前缀加 1
    if (num % modulo === k) {
      prefix++;
    }

    //
    const key = (prefix - k + modulo) % modulo;

    // 如果之前有这样的 prevPrefix，加上它出现的次数
    result += countMap.get(key) || 0;

    // 记录当前 prefix % modulo 的出现次数
    const modVal = prefix % modulo;
    countMap.set(modVal, (countMap.get(modVal) || 0) + 1);
  }

  return result;
};

module.exports = countInterestingSubarrays;
