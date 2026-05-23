/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let row = triangle.length;
  let col = triangle[row - 1].length;

  const dp = Array.from({ length: row }, (item, index) => {
    let res = Array.from({ length: col }).fill(0);
    for (let i = 0; i < triangle[index].length; i++) {
      res[i] = triangle[index][i];
    }
    return res;
  });

  //row 4 col4
  for (let i = 1; i < row; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      //首部
      if (j == 0) {
        dp[i][j] = dp[i][j] + dp[i - 1][j];
        //尾部
      } else if (j === triangle[i].length - 1) {
        dp[i][j] = dp[i][j] + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i][j] + dp[i - 1][j],
          dp[i][j] + dp[i - 1][j - 1],
        );
      }
    }
  }

  return Math.min(...dp[row - 1]);
};
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
// console.log(minimumTotal([[-10]]));
