/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      //如果当前九宫格中有数值
      if (board[i][j] !== ".") {
        //如果某个数字不符合条件就直接返回false
        if (!isValid(board, i, j, board[i][j])) {
          console.log(i, j, false);
          return false;
        }
      }
    }
  }
  console.log(true);
  return true;
};
function isValid(board, row, col, num) {
  //行校验
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] == num && i !== col) {
      return false;
    }
  }
  //列校验
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] == num && i !== row) {
      return false;
    }
  }
  //宫校验
  const startRow = Math.floor(row / 3) * 3; //3的倍数
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] == num && i !== row && j !== col) {
        return false;
      }
    }
  }
  return true;
}
module.exports = isValidSudoku;
