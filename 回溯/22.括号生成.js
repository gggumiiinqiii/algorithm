/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  console.log(n);
  let left = "(";
  let right = ")";
  const res = [];
  function backtrack() {
    for (let i = 0; i < n; i++) {}
  }
  backtrack();
  return res;
};
module.exports = generateParenthesis;
