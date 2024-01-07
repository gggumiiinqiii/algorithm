/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let length = height.length;
  let firstIndex = 0;
  let secondIndex = length - 1;

  // 模拟的结果第一*最后
  let result = 0; //最高的水量
  let nowResult = 0; //当前水量
  //移动高度较小的指针
  while (firstIndex < secondIndex) {
    nowResult =
      Math.min(height[firstIndex], height[secondIndex]) *
      (secondIndex - firstIndex || 1);
    result = Math.max(nowResult, result);
    if (height[firstIndex] < height[secondIndex]) {
      firstIndex++;
    } else {
      secondIndex--;
    }
  }
  console.log(result);
  return result;
};
module.exports = maxArea;
