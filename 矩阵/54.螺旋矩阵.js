/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 第一行，最后一列，最后一行，第一列，然后向内移动1并进行重复计算
var spiralOrder = function (matrix) {
  let m = matrix.length; // m行
  let n = matrix[0].length; //n列
  let totalLength = m * n;
  let jilun = Math.ceil(m / 2); //2行为一轮
  let rounds = 0;
  let result = [];
  //模拟走过的路径，走过了就不能再走了
  while (rounds < jilun) {
    for (let i = rounds; i < n - rounds; i++) {
      result.push(matrix[rounds][i]); //第一行 1 2 3
      if (result.length == totalLength) {
        console.log("result1", result);
        return result;
      }
    }
    for (let i = rounds + 1; i < m - rounds; i++) {
      result.push(matrix[i][n - rounds - 1]); //最后一列 6 9
      if (result.length == totalLength) {
        console.log("result2", result);
        return result;
      }
    }
    for (let i = n - rounds - 2; i >= rounds; i--) {
      result.push(matrix[m - rounds - 1][i]); //最后一行 8 7
      if (result.length == totalLength) {
        console.log("result3", result);
        return result;
      }
    }
    for (let i = m - rounds - 2; i > rounds; i--) {
      result.push(matrix[i][rounds]); //第一列 4
      if (result.length == totalLength) {
        console.log("result4", result);
        return result;
      }
    }
    rounds++;
  }
};

module.exports = spiralOrder;
