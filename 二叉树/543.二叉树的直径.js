/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const buildTree = require("./105.从前序与中序遍历序列构造二叉树");
/**
 * @param {TreeNode} root
 * @return {number}
 * 所有节点中左右子树的最大深度和
 */

var diameterOfBinaryTree = function (root) {
  let max = 0;
  //返回当前节点的最长深度
  function deep(node) {
    if (!node) return 0;
    let left = deep(node.left);
    let right = deep(node.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }
  deep(root);
  return max;
};
let b = buildTree([1, 2, 4, 5, 3, 4], [4, 2, 5, 1, 3, 4]);
console.log(diameterOfBinaryTree(b));
