const containsNearbyDuplicate = (nums, k) => {
  // 创建一个空对象，用于存储数字及其对应的索引
  const numIndexMap = {};

  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // 如果数字已经在对象中存在，并且其索引差小于等于 k，则返回 true
    if (numIndexMap[num] !== undefined && i - numIndexMap[num] <= k) {
      return true;
    }

    // 将数字存储到对象中
    numIndexMap[num] = i;
  }

  // 遍历完整个数组后仍未找到符合条件的索引，则返回 false
  return false;
};
module.exports = containsNearbyDuplicate;
