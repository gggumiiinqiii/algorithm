/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  function backTrack(start, path) {
    if (path.length == k) {
      //浅拷贝
      res.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      console.log("i", i);
      path.push(i);
      backTrack(i + 1, path);
      path.pop();
    }
  }
  backTrack(1, []);
  console.log(",", res);
  return res;
};
module.exports = combine;
