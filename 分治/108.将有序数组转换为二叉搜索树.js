/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const TreeNode = require("../测试用例/二叉树/tree");
var sortedArrayToBST = function (nums) {
  if (nums.length == 0) {
    return null;
  }
  //中间的元素作为根节点
  let middle = nums.length >>> 1;
  let tree = new TreeNode(nums[middle]);
  tree.left = sortedArrayToBST(nums.slice(0, middle));
  tree.right = sortedArrayToBST(nums.slice(middle + 1));
  return tree;
};
module.exports = sortedArrayToBST;
