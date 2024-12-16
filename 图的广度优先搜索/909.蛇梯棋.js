/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const N = board.length;

  // 将棋盘的编号转换为二维坐标 N是6
  const getCoordinates = (square) => {
    const row = Math.floor((square - 1) / N);
    const col = (square - 1) % N;
    const x = N - 1 - row; // -1是因为数组从0开始算
    const y = row % 2 === 0 ? col : N - 1 - col; //因为蛇梯是坏绕的
    return [x, y];
  };

  // 广度优先搜索 (BFS)
  const queue = [[1, 0]]; // [当前格子编号, 当前步数]
  const visited = new Set();
  visited.add(1);

  while (queue.length > 0) {
    const [current, steps] = queue.shift();

    // 如果到达终点，返回步数
    if (current === N * N) return steps;

    // 掷骰子，尝试走 1 到 6 格
    for (let dice = 1; dice <= 6; dice++) {
      let next = current + dice;
      console.log(next, queue);
      if (next > N * N) break;

      const [x, y] = getCoordinates(next);

      // 如果有蛇或梯子，移动到目标位置
      if (board[x][y] !== -1) {
        next = board[x][y];
      }

      // 如果该位置未访问过
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  // 无法到达终点
  return -1;
};
module.exports = snakesAndLadders;
