/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 找到每一个细胞周围的情况，然后对这个细胞进行处理
 */
var gameOfLife = function (board) {
  //m行n列
  let m = board.length;
  let n = board[0].length;
  let cloneBoard = JSON.parse(JSON.stringify(board));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      setBoard(i, j, cloneBoard, m, n, board);
    }
  }
  console.table(board);
};
function setBoard(i, j, cloneBoard, m, n, board) {
  let cellTable = [0];
  let currentCell = cloneBoard[i][j];
  let sum = 0;
  cellTable[1] = i - 1 >= 0 && j - 1 >= 0 ? cloneBoard[i - 1][j - 1] : null;
  cellTable[2] = i - 1 >= 0 ? cloneBoard[i - 1][j] : null;
  cellTable[3] = i - 1 >= 0 && j + 1 < n ? cloneBoard[i - 1][j + 1] : null;
  cellTable[4] = j - 1 >= 0 ? cloneBoard[i][j - 1] : null;
  cellTable[5] = j + 1 < n ? cloneBoard[i][j + 1] : null;
  cellTable[6] = i + 1 < m && j - 1 >= 0 ? cloneBoard[i + 1][j - 1] : null;
  cellTable[7] = i + 1 < m ? cloneBoard[i + 1][j] : null;
  cellTable[8] = i + 1 < m && j + 1 < n ? cloneBoard[i + 1][j + 1] : null;
  sum = cellTable.reduce((a, b) => a + b);
  //console.log(sum, cellTable);
  //活细胞的情况
  if (currentCell == 1) {
    if (sum < 2) {
      board[i][j] = 0;
    } else if (sum > 3) {
      board[i][j] = 0;
    }
  } else {
    if (sum == 3) {
      board[i][j] = 1;
    }
  }
}
module.exports = gameOfLife;
