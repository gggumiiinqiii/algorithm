/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxSum = -Infinity; // 初始化全局最大路径和为负无穷

  // 定义辅助函数
  const maxGain = (node) => {
    if (node === null) {
      return 0;
    }
    const left = Math.max(maxGain(node.left), 0);
    const right = Math.max(maxGain(node.right), 0);

    const current = node.val + left + right;
    maxSum = Math.max(maxSum, current);
    return node.val + Math.max(left, right);
  };

  // 调用辅助函数计算最大路径和
  maxGain(root);

  return maxSum;
};
module.exports = maxPathSum;
