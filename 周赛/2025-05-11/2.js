/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // 计算整个矩阵的总和
  let totalSum = 0;
  for (let row of grid) {
    for (let num of row) {
      totalSum += num;
    }
  }

  // 如果总和是奇数，直接返回 false
  if (totalSum % 2 !== 0) return false;
  const half = totalSum / 2;

  // 检查水平分割
  let rowSum = 0;
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n; j++) {
      rowSum += grid[i][j];
    }
    if (rowSum === half) return true;
  }

  // 检查垂直分割
  let colSums = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      colSums[j] += grid[i][j];
    }
  }

  let colSum = 0;
  for (let j = 0; j < n - 1; j++) {
    colSum += colSums[j];
    if (colSum === half) return true;
  }

  return false;
};
canPartitionGrid([
  [1, 4],
  [2, 3],
]);
