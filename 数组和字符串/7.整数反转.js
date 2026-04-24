/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;

  while (x != 0) {
    res = res * 10 + (x % 10);
    //math.trunc是去掉小数部分
    x = Math.trunc(x / 10);
  }
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
    return 0;
  } else {
    return res;
  }
};
module.exports = reverse;
