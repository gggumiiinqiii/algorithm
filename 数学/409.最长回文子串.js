/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  var set = new Set();
  var count = 0;
  //遍历有一个就记录+2，并且删除这个数
  for (var i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      count += 2;
      set.delete(s[i]);
    } else {
      set.add(s[i]);
    }
  }
  return set.size > 0 ? count + 1 : count;
};
console.log(longestPalindrome("abccccdd"));
