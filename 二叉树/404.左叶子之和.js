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
 * dfs
 * 怎么判断当前节点是左叶子还是右叶子呢，上一级得节点的left等于他自己
 * 不要通过val去比较，val会有相同的情况，要通过对象的引用地址去比较
 */
var sumOfLeftLeaves = function (root) {
  console.log(root);
  let sum = 0;
  function dfs(falterNode, node) {
    if (!node) return;
    //这个就是左叶子节点
    if (
      node.left == null &&
      node.right == null &&
      falterNode?.left &&
      falterNode.left === node
    ) {
      sum += node.val;
    }
    dfs(node, node.left);
    dfs(node, node.right);
  }
  dfs(null, root);
  console.log(sum);
  return sum;
};
let tree = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
sumOfLeftLeaves(tree);
