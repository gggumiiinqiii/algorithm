/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const TreeNode = require("../测试用例/二叉树/tree");
const buildTree = require("./105.从前序与中序遍历序列构造二叉树");
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 后序就是左、右、根
 */
var postorderTraversal = function (root) {
  const result = [];
  function traves(node) {
    if (!node) return;
    traves(node.left);
    traves(node.right);
    result.push(node.val);
  }
  traves(root);
  return result;
};
let b = buildTree([1, 2, 3, 4, 4, 3, 2], [4, 3, 4, 2, 3, 1, 2]);
console.log(postorderTraversal(b));
