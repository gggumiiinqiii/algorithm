/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// 只有一个唯一解,总是超时唉
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  let currentGas = 0;
  let startIdx = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    currentGas += gas[i] - cost[i];
    //如果当前油量为负,重新开始选择起点
    if (currentGas < 0) {
      startIdx = i + 1;
      currentGas = 0;
    }
  }
  if (totalGas < totalCost) {
    return -1;
  }
  console.log(startIdx);
  return startIdx;
};

// canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) // 3
// canCompleteCircuit([2, 3, 4], [3, 4, 3]) // -1
// canCompleteCircuit([3, 1, 1], [1, 2, 2]) // 0
module.exports = canCompleteCircuit;
