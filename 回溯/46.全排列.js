/**
 * @param {number[]} nums
 * @return {number[][]}
 * DFS，想象成一棵树，通过一个Set来记录那些数字已经被选择过了
 */
var permute = function (nums) {
  const res = [];
  const path = [];
  const used = new Array(nums.length).fill(false);
  let cout = 0;
  function backTrack() {
    //结束条件
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      path.push(nums[i]);
      used[i] = true;

      backTrack();
      //原路返回 2pop的时候，是在i++这一步
      path.pop();
      used[i] = false;
    }
  }
  backTrack();

  return res;
};
module.exports = permute;
