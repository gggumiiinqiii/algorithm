/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  console.log(temperatures);

  const stack = [];
  const length = temperatures.length;
  const answer = Array.from({ length }).fill(0);
  const maxTemp = Math.max(...temperatures);
  for (let i = 0; i < length; i++) {
    stack.length = 0;
    if (temperatures[i] == maxTemp) {
      answer[i] = 0;
      continue;
    }
    for (let j = i + 1; j < length; j++) {
      if (temperatures[j] <= temperatures[i]) {
        stack.push(temperatures[j]);
      } else {
        answer[i] = stack.length + 1;
        console.log(temperatures[i]);
        console.log(stack);
        break;
      }
    }
  }
  console.log(answer);
  return answer;
};
module.exports = dailyTemperatures;
