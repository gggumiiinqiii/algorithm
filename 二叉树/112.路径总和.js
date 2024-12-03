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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  //找到所有业主节点，一层一层递归，记录每一层的值,判断是否是叶子节点
  if (!root) {
    return false;
  }
  let flag = false;
  if (root && root.left == null && root.right == null) {
    if (root.val == targetSum) flag = true;
  }
  function recurise(root, targetSum, current) {
    //叶子节点
    if (root && root.left == null && root.right == null) {
      console.log(root.val, current);
      if (Number(root.val) + current == targetSum) {
        flag = true;
        return;
      }
    } else {
      root?.left && recurise(root.left, targetSum, root.val + current);
      root?.right && recurise(root.right, targetSum, root.val + current);
    }
  }
  recurise(root.left, targetSum, root.val);
  recurise(root.right, targetSum, root.val);

  return flag;
};
module.exports = hasPathSum;
