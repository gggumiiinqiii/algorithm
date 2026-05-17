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
 * @return {string[]}
 * dfs深度优先搜索
 * 一个全局结果列表，一个临时列表
 */
var binaryTreePaths = function (root) {
  let allPath = [];
  let tempPath = [];
  function dfs(node) {
    if (!node) return;
    tempPath.push(node.val);
    if (node.left == null && node.right == null) {
      allPath.push(tempPath.join("->"));
    } else {
      dfs(node.left);
      dfs(node.right);
    }
    //最关键的一步回溯
    tempPath.pop();
  }
  dfs(root);
  return allPath;
};
let b = buildTree([1, 2, 5, 3], [2, 5, 1, 3]);
console.log(binaryTreePaths(b));
