/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function (s) {
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
  console.log(s);
  //首先判断是不是回文，然后找出所有子串并统计？
  let count = 0;
  let result = [];
  //输出所有子串，暴力枚举
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < s.length && j + i <= s.length; j++) {
      // result.push(s.slice(j, j + i));
      console.log("11", i, j, j + i, s.substring(j, j + i));
      if (isPalindrome(s.substring(j, j + i))) {
        count++;
      }
    }
  }
  return count;
  console.log(result);
};
console.log(countSubstrings("aaa"));
