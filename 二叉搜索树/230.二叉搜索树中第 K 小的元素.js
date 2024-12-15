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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  if (root == null) {
    return null;
  }

  let inArray = [];
  //二叉搜索树的中序遍历就是升序排列
  function inOrder(root) {
    if (root == null) {
      return;
    }
    inOrder(root.left);
    inArray.push(root.val);
    inOrder(root.right);
  }
  inOrder(root);
  return inArray[k - 1];
};
module.exports = kthSmallest;
