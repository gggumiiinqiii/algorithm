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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let rightView = [];
  while (queue.length > 0) {
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      //如果是当前层级的最后一个节点，就添加到rightView中
      if (i == levelLength - 1) {
        rightView.push(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return rightView;
};
module.exports = rightSideView;
