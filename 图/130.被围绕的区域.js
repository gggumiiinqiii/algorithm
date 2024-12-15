var solve = function (board) {
  if (!board || !board.length) return;

  const m = board.length;
  const n = board[0].length;

  // DFS函数，用于标记与边界相连的'O'
  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== "O") {
      return;
    }

    board[i][j] = "#"; // 标记已访问

    // 向四个方向搜索
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  // 从边界开始搜索
  for (let i = 0; i < m; i++) {
    dfs(i, 0); // 左边界
    dfs(i, n - 1); // 右边界
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j); // 上边界
    dfs(m - 1, j); // 下边界
  }

  // 处理整个矩阵
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X"; // 将被围绕的'O'变成'X'
      } else if (board[i][j] === "#") {
        board[i][j] = "O"; // 将标记的'#'变回'O'
      }
    }
  }
};
module.exports = solve;
