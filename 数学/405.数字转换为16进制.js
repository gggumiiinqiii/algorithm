/**
 * @param {number} num
 * @return {string}
 * 十六进制123456789abcdef
 * num.toString(16)可以转换为对应的进制，对于负数需要 执行>>>0
 */
var toHex = function (num) {
  if (num === 0) return "0";

  const hex = "0123456789abcdef";
  // 关键一步：将 num 视为无符号的32位整数
  let n = num >>> 0;
  let result = "";

  while (n > 0) {
    let reminder = n % 16;
    result = hex[reminder] + result;
    n = Math.floor(n / 16);
  }

  return result;
};
console.log(toHex(16));
