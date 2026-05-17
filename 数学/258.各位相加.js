/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let result = 0;
  //先取出各个位数上面的值
  while (num > 0) {
    result += num % 10;
    num = Math.floor(num / 10);
  }

  if (result < 10) {
    return result;
  } else {
    return addDigits(result);
  }
};
addDigits(38);
