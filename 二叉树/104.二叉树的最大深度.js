var maxDepth = function (root) {
  // 边界情况处理：如果根节点为空，则返回0
  if (!root) {
    return 0;
  }

  // 递归计算左右子树的深度，并返回较大值加上1
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
module.exports = maxDepth;
