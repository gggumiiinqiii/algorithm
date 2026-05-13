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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 最终判断高度是否为 -1
  return getHeight(root) !== -1;
};

function getHeight(node) {
  // 基准情形：空节点高度为 0
  if (!node) return 0;

  // 递归获取左子树高度
  let leftHeight = getHeight(node.left);
  if (leftHeight === -1) return -1; // 左子树已经不平衡了

  // 递归获取右子树高度
  let rightHeight = getHeight(node.right);
  if (rightHeight === -1) return -1; // 右子树已经不平衡了

  // 核心：判断当前节点是否平衡
  // 如果左右高度差 > 1，标记为 -1
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  // 否则返回该节点的真实高度
  return Math.max(leftHeight, rightHeight) + 1;
}
let b = buildTree([1, 2, 3, 4, 4, 3, 2], [4, 3, 4, 2, 3, 1, 2]);
console.log(isBalanced(b));
// const a = new TreeNode(3);
// a.left = new TreeNode(9);
// a.right = new TreeNode(20);
// a.right.left = new TreeNode(15);
// a.right.right = new TreeNode(7);
// console.log(isBalanced(a));
