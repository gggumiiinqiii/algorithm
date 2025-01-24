/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  function backtrack(current, left, right) {
    if (current.length === 2 * n) {
      res.push(current);
      return;
    }
    if (left < n) {
      backtrack(current + "(", left + 1, right);
    }
    if (right < left) {
      backtrack(current + ")", left, right + 1);
    }
  }
  backtrack("", 0, 0);
  return res;
};
module.exports = generateParenthesis;
