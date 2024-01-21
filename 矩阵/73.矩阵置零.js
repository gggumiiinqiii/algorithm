/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 如果一个元素为0，则将其所在行和列的所有元素都设为0。
 */
var setZeroes = function (matrix) {
  //m行n列
  let m = matrix.length;
  let n = matrix[0].length;
  let zeroIndex = [];
  //记录哪一行需要置为0
  let zeroI = new Set();
  //记录那一列需要置为0
  let zeroJ = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        zeroIndex.push({ i: i, j: j });
      }
    }
  }
  for (let i = 0; i < zeroIndex.length; i++) {
    zeroI.add(zeroIndex[i].i);
    zeroJ.add(zeroIndex[i].j);
  }
  console.log(zeroIndex);
  console.log(zeroI, zeroJ);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (zeroI.has(i)) {
        matrix[i][j] = 0;
      } else if (zeroJ.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  console.table(matrix);
};
module.exports = setZeroes;
