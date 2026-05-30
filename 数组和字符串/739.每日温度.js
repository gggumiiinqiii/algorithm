/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 找栈，先经后出
 * 寻找右侧第一个比他大的数，并计算距离
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let n = temperatures.length;
  let result = new Array(n).fill(0);
  //维护一个什么栈
  // for (let i = n - 1; i >= 0; i--) {
  //   while (
  //     stack.length &&
  //     temperatures[i] >= temperatures[stack[stack.length - 1]]
  //   ) {
  //     stack.pop();
  //   }
  //   if (stack.length) {
  //     result[i] = stack[stack.length - 1] - i;
  //   }
  //   stack.push(i);
  // }
  //从右往左，
  for (let i = 0; i < n; i++) {
    //while循环
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let preIndex = stack.pop();
      result[preIndex] = i - preIndex;
    }
    stack.push(i);
  }
  console.log(result);
  return result;
};
module.exports = dailyTemperatures;
