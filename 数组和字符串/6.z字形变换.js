/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) {
    return s;
  }
  let depulate = numRows + numRows - 2; //经历这样一次重复 4
  let xx = Math.ceil(s.length / depulate); //需要重复几次
  let k = 0;
  let i = 0;
  // 14 3
  let dp = Array.from(
    Array.from(Array(numRows), () =>
      Array(Math.ceil(s.length / numRows) + numRows).fill(0)
    )
  );

  for (let j = 0; j < xx; j++) {
    let kkk = numRows - 1;
    let kkkl = k;
    for (let llg = 0; llg < depulate; llg++) {
      if (s[i] == undefined) {
        break;
      }
      if (llg < numRows) {
        dp[llg][k] = s[i++];
      } else {
        dp[--kkk][++kkkl] = s[i++];
      }
    }

    k = k + numRows - 1;
  }
  k++;

  console.table(dp);
  let cc = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < s.length; j++) {
      if (dp[i][j]) {
        cc = cc + dp[i][j];
      }
    }
  }
  console.log(cc);
  return cc;
};

module.exports = convert;
