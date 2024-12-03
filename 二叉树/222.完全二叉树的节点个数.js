/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (root === null) {
    return 0;
  }
  let count = 1;
  function helpCountNodes(root) {
    if (root === null) {
      return;
    }
    if (root.left) {
      count++;
      helpCountNodes(root.left);
    }
    if (root.right) {
      count++;
      helpCountNodes(root.right);
    }
  }
  helpCountNodes(root);
  return count;
};
module.exports = countNodes;
