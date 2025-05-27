/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = 0;
  let n = 0;
  //0 1 0 3 12
  // 定义一个临时变量表示当前数值，定义一个index索引
  // 如果当前值不为0，取出当前变量、然后当前值置为0，索引0设置为当前数值，然后遍历可得
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      n = nums[i];
      nums[i] = 0;
      nums[index++] = n;
    }
  }
  console.log(nums);
};
module.exports = moveZeroes;
