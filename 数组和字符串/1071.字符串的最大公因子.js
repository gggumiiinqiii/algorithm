/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let str1length = str1.length;
  let str2length = str2.length;
  //求最大公因子6 3 3
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  let max = gcd(str1length, str2length);
  let a = str1length / max;
  let b = str2length / max;
  let key = str1.slice(0, max);
  if (key.repeat(a) === str1 && key.repeat(b) === str2) {
    return key;
  } else {
    return "";
  }
};
console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
