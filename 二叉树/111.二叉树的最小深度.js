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
 * @return {number}
 */

var dfsminDepth = function (root) {
  if (!root) return 0;
  //左子树为空，就去右子数找
  if (!root.left) return dfsminDepth(root.right) + 1;
  //右子树为空，就去左子树找
  if (!root.right) return dfsminDepth(root.left) + 1;
  // 3. 左右都不为空，取两边较小值
  return Math.min(dfsminDepth(root.left), dfsminDepth(root.right)) + 1;
};
var bfsminDepth = function (root) {
  if (!root) return 0;
  // 使用队列进行层序遍历[节点，当前深度]
  let queue = [[root, 1]];
  while (queue.length > 0) {
    let [node, depth] = queue.shift();
    if (!node.left && !node.right) {
      return depth;
    }
    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
};
let b = buildTree([1, 2, 3, 4, 4, 3, 2], [4, 3, 4, 2, 3, 1, 2]);
let c = buildTree([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
let d = buildTree([-9, -3, 4, -6, 2, 4, -5, 0], [-3, -6, 4, -9, -5, 4, 2, 0]);
let g = buildTree([1, 2, 3, 3], [2, 3, 1, 3]);
console.log(g);
console.log(dfsminDepth(g));
