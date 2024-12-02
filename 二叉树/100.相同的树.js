var isSameTree = function (p, q) {
  if (p === q) {
    return true;
  }
  if (p?.val !== q?.val) {
    return false;
  }
  if (!isSameTree(p.left, q.left)) return false;
  if (!isSameTree(p.right, q.right)) return false;

  return true;
};
module.exports = isSameTree;
