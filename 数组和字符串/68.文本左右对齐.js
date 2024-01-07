/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = [];
  let cur = [];
  let num_of_letters = 0;
  for (const word of words) {
    if (num_of_letters + word.length + cur.length > maxWidth) {
      for (let i = 0; i < maxWidth - num_of_letters; i++) {
        cur[i % (cur.length - 1 || 0)] += " ";
      }
      cur = [];
      num_of_letters = 0;
    }
    cur.push(word);
    num_of_letters += word.length;
  }
  result.push();
  return result;
};
module.exports = fullJustify;
