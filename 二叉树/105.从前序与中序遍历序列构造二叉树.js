/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const TreeNode = require("../测试用例/二叉树/tree");
var buildTree = function (preorder, inorder) {
  if (preorder.length == 0 || inorder.length == 0) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  //中序遍历中根节点的索引
  const rootInorderIndex = inorder.indexOf(preorder[0]);
  //中序遍历的左子树
  const leftInorder = inorder.slice(0, rootInorderIndex);
  //中序遍历的右子树
  const rightInorder = inorder.slice(rootInorderIndex + 1);
  //先序遍历的左子树，1+中序遍历的长度 左边等于，右边小于
  const leftPreorder = preorder.slice(1, leftInorder.length + 1);
  //先序遍历的右子树
  const rightPreorder = preorder.slice(leftInorder.length + 1);
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  return root;
};
module.exports = buildTree;
