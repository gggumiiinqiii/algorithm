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
var averageOfLevels = function (root) {
  if (root == null) {
    return [];
  }
  let queue = [root];
  let equalArray = [];
  while (queue.length > 0) {
    let levelLength = queue.length;
    let sum = 0;
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    equalArray.push(sum / levelLength);
  }
  // console.log(equalArray)
  return equalArray;
};
module.exports = averageOfLevels;
