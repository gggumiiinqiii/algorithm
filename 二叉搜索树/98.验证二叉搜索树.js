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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (root == null) {
    return false;
  }
  let isBST = true;
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
  for (let i = 0; i < inArray.length - 1; i++) {
    if (inArray[i] >= inArray[i + 1]) {
      isBST = false;
      break;
    }
  }
  return isBST;
};
module.exports = isValidBST;
