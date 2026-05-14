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
 * 前序就是根、左、右
 */
var pretorderTraversal = function (root) {
  //   //递归写法
  //   const result = [];
  //   function traves(node) {
  //     if (!node) return;
  //     result.push(node.val);
  //     traves(node.left);
  //     traves(node.right);
  //   }
  //   traves(root);
  //   return result;
  //迭代写法 先进后出
  if (!root) return [];
  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    // 压就是根右左
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};

let b = buildTree([1, 2, 3, 4, 4, 3, 2], [4, 3, 4, 2, 3, 1, 2]);
console.log(pretorderTraversal(b));
