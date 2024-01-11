/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let result = [];
  let wordLength = words[0].length; // 单个单词的长度
  let totalLength = wordLength * words.length; // 子串的总长度

  if (s.length < totalLength) {
    return result; // 如果字符串长度小于子串的总长度，直接返回空结果
  }

  let wordMap = {};

  // 统计单词出现次数，存储在哈希表中
  for (let word of words) {
    if (!(word in wordMap)) {
      wordMap[word] = 0;
    }
    wordMap[word]++;
  }
  console.log(wordMap);
  for (let i = 0; i < wordLength; i++) {
    let left = i;
    let right = i;
    let currentMap = {};
    let count = 0;

    // 滑动窗口
    while (right + wordLength <= s.length) {
      let currentWord = s.substring(right, wordLength);
      right += wordLength;

      // 如果当前单词不在给定单词列表中，重置窗口和计数
      if (!(currentWord in wordMap)) {
        currentMap = {};
        left = right;
        count = 0;
      } else {
        // 更新当前窗口内单词的出现次数和计数
        if (!(currentWord in currentMap)) {
          currentMap[currentWord] = 0;
        }
        currentMap[currentWord]++;
        count++;

        // 移动左边界，确保窗口内单词数量不超过给定单词列表
        while (currentMap[currentWord] > wordMap[currentWord]) {
          let leftWord = s.substring(left, wordLength);
          currentMap[leftWord]--;
          left += wordLength;
          count--;
        }

        // 如果窗口内单词数量等于给定单词列表长度，记录结果
        if (count === words.length) {
          result.push(left);
        }
      }
    }
  }

  return result;
};

module.exports = findSubstring;
