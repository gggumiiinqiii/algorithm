/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 将字典转换为 Set，查找速度更快
  const wordSet = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);

  // 空字符串可以拆分
  dp[0] = true;

  // 遍历字符串的每个位置
  for (let i = 1; i <= s.length; i++) {
    // 在当前位置 i 查找可以拆分的字串
    for (let j = 0; j < i; j++) {
      // 如果 dp[j] 是 true 并且 s[j...i] 在字典中
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break; // 找到就可以提前结束内层循环
      }
    }
  }

  // 返回最终结果
  return dp[s.length];
};
module.exports = wordBreak;
