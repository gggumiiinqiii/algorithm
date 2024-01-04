/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = [];
  let cur = []; //存储当前行的单词
  let num_of_letters = 0; //记录当前行所有单词的字符总数

  for (const word of words) {
    // cur.length是空格大于maxWidth证明在把个单词加上会超出长度
    if (num_of_letters + word.length + cur.length > maxWidth) {
      //补入单词的空格
      for (let i = 0; i < maxWidth - num_of_letters; i++) {
        // i是当前需要插入空格的位置，cur.length-1是当前行单词的数量减去1表示可以插入空格的数量 ||1是 为0的验证
        // 天才才会想得到的算法
        cur[i % (cur.length - 1 || 1)] += " ";
      }
      result.push(cur.join(""));
      cur = [];
      num_of_letters = 0;
    }
    cur.push(word);
    num_of_letters += word.length;
  }
  console.log(cur);
  // padEnd是往右补' '的方法
  result.push(cur.join(" ").padEnd(maxWidth));
  //console.log(result);
  return result;
};
module.exports = fullJustify;
