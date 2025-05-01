/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  //然后在对应的行中找，二分
  let left = 0;
  let right = matrix.length - 1;
  let n = matrix[0].length;
  let mid;
  //第一层for循环找到对应的行
  function getRow() {
    while (left <= right) {
      mid = Math.floor((right + left) / 2);
      //   console.log("mid", mid, matrix[mid][0], matrix[mid][n - 1]);
      if (matrix[mid][0] <= target && matrix[mid][n - 1] >= target) {
        return mid;
      } else if (matrix[mid][0] > target) {
        right = mid - 1;
      } else if (matrix[mid][0] < target) {
        left = mid + 1;
      }
    }
    return -1;
  }
  let row = getRow();
  //   console.log("11", row);
  if (row == -1) {
    return false;
  }
  left = 0;
  right = n;
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    // console.log("mid2", mid);
    if (matrix[row][mid] == target) {
      return true;
    } else if (matrix[row][mid] > target) {
      right = mid - 1;
    } else if (matrix[row][mid] < target) {
      left = mid + 1;
    }
  }
  return false;
};
module.exports = searchMatrix;
