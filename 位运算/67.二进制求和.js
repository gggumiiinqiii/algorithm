/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  function padZero(str, length) {
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  }
  let result = "";

  if (a.length >= b.length) {
    b = padZero(b, a.length);
  } else {
    a = padZero(a, b.length);
  }
  let carry = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    let tmp = Number(a[i]) + Number(b[i]);
    if (carry == 1) {
      tmp = tmp + 1;
    }
    if (tmp > 1) {
      carry = 1;
    } else {
      carry = 0;
    }
    result = String(tmp % 2) + result;
  }
  if (carry == 1) {
    result = "1" + result;
  }
  //   console.log(result);
  //   console.log(a, b);
  return result;
};
module.exports = addBinary;
