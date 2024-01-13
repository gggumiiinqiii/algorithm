/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) {
    return "";
  }

  let left = 0;
  let right = 0;
  let tMap = new Map();
  let requiredChars = t.length; // 需要匹配的 t 中的唯一字符数
  let minLen = Infinity; //最小长度
  let minSub = ""; //最小子串

  // 初始化 t 中字符的频率映射
  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }
  console.log(tMap);
  while (right < s.length) {
    let rightChar = s[right];

    // 更新 t 中当前字符的计数
    if (tMap.has(rightChar)) {
      tMap.set(rightChar, tMap.get(rightChar) - 1);
      if (tMap.get(rightChar) >= 0) {
        requiredChars--;
      }
    }
    console.log(right, tMap);
    // 检查是否找到了 t 中的所有字符,这个while好难啊
    while (requiredChars === 0) {
      // 更新最小窗口
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minSub = s.slice(left, right + 1);
      }

      // 移动左指针以找到更小的窗口
      let leftChar = s[left];
      console.log("sgag", tMap, leftChar, tMap.has(leftChar));
      if (tMap.has(leftChar)) {
        tMap.set(leftChar, tMap.get(leftChar) + 1);
        if (tMap.get(leftChar) > 0) {
          requiredChars++;
        }
      }

      left++;
    }
    right++;
  }
  console.log(minSub);
  return minSub;
};

module.exports = minWindow;
