/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = []; //存索引
  //单调递减栈
  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      console.log(i);
      console.log(stack);
      const preIndex = stack.pop();
      answer[preIndex] = i - preIndex;
    }
    stack.push(i);
  }
  console.log(answer);
  return answer;
};
module.exports = dailyTemperatures;
