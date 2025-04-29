/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number} 结果没问题，超时了
 */
var countCoveredBuildings = function (n, buildings) {
  let count = 0;
  if (n == 0) {
    return count;
  }
  //dfs向4个方向搜索
  function dfs(x, y) {
    let xl = 0,
      xr = 0,
      yt = 0,
      yb = 0;
    for (let i = 0; i < n; i++) {
      if (board[i][y] == 1 && i < x) {
        yb = 1;
      }
      if (board[i][y] == 1 && i > x) {
        yt = 1;
      }
      if (board[x][i] == 1 && i < y) {
        xl = 1;
      }
      if (board[x][i] == 1 && i > y) {
        xr = 1;
      }
      if (xl && xr && yt && yb) {
        return true;
      }
    }
    return false;
  }
  const board = Array.from({ length: n }, () => Array(n).fill(0));

  buildings.forEach(([x, y]) => {
    board[x - 1][y - 1] = 1;
  });
  console.log(board);
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (board[x][y] == 1) {
        if (dfs(x, y)) {
          count++;
        }
      }
    }
  }
  console.log(count);
  return count;
};
// countCoveredBuildings(3, [
//   [1, 2],
//   [2, 2],
//   [3, 2],
//   [2, 1],
//   [2, 3],
// ]);
countCoveredBuildings(4, [
  [2, 4],
  [1, 2],
  [3, 1],
  [1, 4],
  [2, 3],
  [3, 3],
  [2, 2],
  [1, 3],
]);
