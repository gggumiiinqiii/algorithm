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
var buildTree = function (inorder, postorder) {
  if (postorder.length == 0 || inorder.length == 0) {
    return null;
  }
  // console.log(postorder[postorder.length - 1])
  const root = new TreeNode(postorder[postorder.length - 1]);
  const rootInorderIndex = inorder.indexOf(postorder[postorder.length - 1]);

  const leftInorder = inorder.slice(0, rootInorderIndex);
  const rightInorder = inorder.slice(rootInorderIndex + 1);

  const leftPostorder = postorder.slice(0, leftInorder.length);
  const rightPoster = postorder.slice(leftInorder.length, postorder.length - 1);

  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPoster);
  return root;
};
module.exports = buildTree;
