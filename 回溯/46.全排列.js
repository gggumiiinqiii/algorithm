/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  function backtrack(path) {
    if (path.length === nums.length) {
      res.push([...path]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      backtrack(path);
      path.pop();
    }
  }
  backtrack([]);
  console.log("11", res);
  return res;
};
module.exports = permute;
