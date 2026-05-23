/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let start = 0; // 记录最长回文子串的起始位置
  let maxLen = 1; // 记录最长回文子串的长度

  // 辅助函数：从中心向两边扩散，返回回文串的长度
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // 循环结束时，left 和 right 指向的是非回文的位置，所以长度要减去2
    // 即 (right - 1) - (left + 1) + 1 = right - left - 1
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    // 情况1：回文中心是一个字符（奇数长度，如 "aba"）
    let len1 = expandAroundCenter(i, i);
    // 情况2：回文中心是两个字符之间（偶数长度，如 "abba"）
    let len2 = expandAroundCenter(i, i + 1);

    // 取两种情况中的最大长度
    let currentMax = Math.max(len1, len2);

    // 如果找到了更长的回文子串，更新起始位置和最大长度
    if (currentMax > maxLen) {
      maxLen = currentMax;
      // 计算新的起始位置：当前中心 i 减去 半径长度的一半（向下取整）
      start = i - Math.floor((currentMax - 1) / 2);
    }
  }
  console.log(start, maxLen);
  // 截取并返回最长回文子串
  return s.substring(start, start + maxLen);
};
console.log(longestPalindrome("babad"));
