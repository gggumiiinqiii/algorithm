/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *  核心思想

  - index 指向第一个可能为 0 的位置（即前面非零元素都已就位，该放下一个非零的地方）
  - 每找到一个非零，就把它交换到前面，同时把当前位置置 0（因为非零已经挪走了，这里空出来了）
  - 相当于非零元素向左挤，0 自然被推到右边

  时间复杂度 O(n)，空间复杂度 O(1)，原址修改。
 */
var moveZeroes = function (nums) {
  let n = nums.length;
  let index = 0;
  let item = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      item = nums[i];
      nums[i] = 0;
      nums[index++] = item;
    }
  }
  console.log(nums);
};
module.exports = moveZeroes;
