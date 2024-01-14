/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 判断某个数字是否可以放置在某个位置
function isValid(board, row, col, num) {
  // 检查行
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) {
      return false;
    }
  }
  // 检查列
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
      return false;
    }
  }
  // 检查宫
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}
// 解决数独
function solveSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === ".") {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, String(num))) {
            board[row][col] = String(num);
            if (solveSudoku(board)) {
              return true;
            }
            board[row][col] = ".";
          }
        }
        return false;
      }
    }
  }
  console.log(board);
  return true;
}
module.exports = solveSudoku;
