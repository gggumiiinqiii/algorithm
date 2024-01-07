/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let cc = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let startIndex = 0;
  let endIndex = cc.length - 1;
  let ishuiwen = true;
  while (startIndex < Math.ceil(cc.length / 2)) {
    if (cc[startIndex] != cc[endIndex]) {
      ishuiwen = false;
      break;
    }
    startIndex++;
    endIndex--;
  }
  return ishuiwen;
};
module.exports = isPalindrome;
