/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) {
    return 0;
  }
  const queue = [[beginWord, 1]];
  const visited = new Set();
  visited.add(beginWord);
  while (queue.length > 0) {
    const [currnet, step] = queue.shift();
    // console.log(currnet);
    if (currnet == endWord) {
      return step;
    }
    for (let i = 0; i < currnet.length; i++) {
      //这里要遍历全部的单词，比遍历字符集好
      for (let charCode = 97; charCode <= 122; charCode++) {
        const next =
          currnet.slice(0, i) +
          String.fromCharCode(charCode) +
          currnet.slice(i + 1);
        if (wordSet.has(next) && !visited.has(next)) {
          visited.add(next);
          queue.push([next, step + 1]);
          wordSet.delete(next);
        }
      }
    }
  }
  return 0;
};
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
// console.log(ladderLength("hit", "hot", ["hot", "hit"]));
module.exports = ladderLength;
