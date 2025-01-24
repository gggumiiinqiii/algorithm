/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  function backtrack(start, path, remaining) {
    if (remaining == 0) {
      //    console.log("11", path);
      res.push([...path]);
      return;
    }
    if (remaining < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);

      backtrack(i, path, remaining - candidates[i]);
      path.pop();
    }
  }
  backtrack(0, [], target);
  return res;
};
module.exports = combinationSum;
