/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const dp = Array.from({ length: rowIndex + 2 }, () =>
    Array(rowIndex + 2).fill(0),
  );
  dp[1][1] = 1;
  for (let i = 2; i < rowIndex + 2; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
    }
  }
  return dp[rowIndex + 1].slice(1);
};
console.log(getRow(10));
// [
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 1, 0, 0, 0 ],
//   [ 0, 1, 1, 0, 0 ],
//   [ 0, 1, 2, 1, 0 ],
//   [ 0, 1, 3, 3, 1 ]
// ]
