/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const m = board.length;
  const n = board[0].length;

  // 深度优先搜索函数
  function dfs(i, j, k) {
    // 如果越界、当前单元格字符不匹配或者已经访问过，返回 false
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) {
      return false;
    }
    // 如果已经匹配到单词的最后一个字符，返回 true
    if (k === word.length - 1) {
      return true;
    }
    // 保存当前单元格的字符
    const temp = board[i][j];
    // 标记当前单元格为已访问
    board[i][j] = "/";
    // 向四个方向进行深度优先搜索
    const found =
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1);
    // 恢复当前单元格的字符
    board[i][j] = temp;
    return found;
  }

  // 遍历二维网格的每个单元格
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}

module.exports = exist;
