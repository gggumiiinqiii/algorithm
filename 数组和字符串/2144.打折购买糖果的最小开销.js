/**
 * @param {number[]} cost
 * @return {number}
 * 买走所有的糖果
 * 从最大开始买，贪走最大价值的糖果
 */
var minimumCost = function (cost) {
  cost.sort((a, b) => b - a);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < cost.length; i++) {
    if (count > 0 && count % 2 == 0) {
      count = 0;
      continue;
    } else {
      count++;
      sum += cost[i];
    }
  }
  return sum;
};
minimumCost([5, 5]);
