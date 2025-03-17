/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let length = height.length;
  let leftMax = Array.from({ length }).map((item) => 0); //左侧最大高度
  let rightMax = Array.from({ length }).map((item) => 0); //右侧最大高度
  let canArr = Array.from({ length }).map((item) => 0); //该位置的接水量
  // 找出该位置左侧的最大值
  for (let i = 1; i < length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }
  // 找出该位置右侧的最大值
  for (let i = length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
  }
  // 左侧和右侧的最小值 - 当前位置 表示为当前位置的储水量
  for (let i = 1; i < length - 1; i++) {
    let min = Math.min(leftMax[i], rightMax[i]);
    canArr[i] = Math.max(min - height[i], 0);
  }
  console.log(height);
  console.log(leftMax);
  console.log(rightMax);
  console.log(canArr);
  // 储水量累加
  let sum = canArr.reduce((a, b) => a + b);
  console.log(sum);
  return sum;
};
module.exports = trap;
