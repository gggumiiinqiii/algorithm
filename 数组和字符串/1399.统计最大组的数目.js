/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let result = {};
  //记录结果集
  for (let i = 1; i <= n; i++) {
    let temp = digitSum(i);
    if (result[temp]) {
      result[temp].push(i);
    } else {
      result[temp] = [i];
    }
  }
  //最大长度的索引
  let maxLength = 0;
  //记录每个长度 对应的数字
  let resultArr = {};
  Object.keys(result).forEach((key) => {
    let length = result[key].length;
    maxLength = Math.max(maxLength, length);
    if (resultArr[length]) {
      resultArr[length]++;
    } else {
      resultArr[length] = 1;
    }
  });

  return resultArr[maxLength];
  function digitSum(n) {
    let result = 0;
    while (n > 0) {
      result += n % 10;
      n = Math.floor(n / 10);
    }
    return result;
  }
};
module.exports = countLargestGroup;
