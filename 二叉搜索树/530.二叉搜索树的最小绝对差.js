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
var getMinimumDifference = function (root) {
  if (root == null) {
    return null;
  }
  let minResult = Infinity;
  let preArray = [];
  function preOrder(root) {
    if (root == null) {
      return;
    }
    preOrder(root.left);
    preArray.push(root.val);
    preOrder(root.right);
  }
  preOrder(root);
  for (let i = 0; i < preArray.length - 1; i++) {
    minResult =
      Math.abs(preArray[i] - preArray[i + 1]) < minResult
        ? Math.abs(preArray[i] - preArray[i + 1])
        : minResult;
  }
  return minResult;
};
module.exports = getMinimumDifference;
