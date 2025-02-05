/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let res = 0;
  let count = 1;
  let number = x;
  let jiwei = 0;
  //计算有几位数字
  while (number > 0) {
    number = Math.floor(number / 10);
    count = count * 10;
    jiwei++;
  }
  console.log(count, jiwei);
  count = count / 10;
  let number1 = x;
  //遍历取出最后的位数组成一个新的数字
  while (number1 > 0) {
    let b = number1 % 10;
    res = res + b * count;
    count = count / 10;
    number1 = Math.floor(number1 / 10);
  }
  return x == res;
};
module.exports = isPalindrome;
