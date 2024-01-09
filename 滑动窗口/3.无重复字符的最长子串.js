/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let charSet = new Set();
  let max = 0;

  while (right < s.length) {
    if (!charSet.has(s[right])) {
      // 如果字符不重复，添加到 Set 中，并更新最大长度
      charSet.add(s[right]);
      max = Math.max(max, charSet.size);
      right++;
    } else {
      console.log(charSet, s[left]);
      // 如果字符重复，左指针右移，并从 Set 中移除重复字符
      charSet.delete(s[left]);
      left++;
    }
  }

  return max;
};

module.exports = lengthOfLongestSubstring;
