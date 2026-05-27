/**
 * @param {number[][]} grid
 * @return {number}
 * 报错就try catch处理，边界不处理
 */
var islandPerimeter = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  let sum = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        let circle = 4;
        //左边是1
        try {
          if (grid[i][j - 1] == 1) {
            circle--;
          }
        } catch {}
        //右边是1
        try {
          if (grid[i][j + 1] == 1) {
            circle--;
          }
        } catch {}
        //上边是1
        try {
          if (grid[i - 1][j] == 1) {
            circle--;
          }
        } catch {}
        //下边是1
        try {
          if (grid[i + 1][j] == 1) {
            circle--;
          }
        } catch {}
        sum += circle;
      } else {
        continue;
      }
    }
  }
  return sum;
  console.log(sum);
};
islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);
