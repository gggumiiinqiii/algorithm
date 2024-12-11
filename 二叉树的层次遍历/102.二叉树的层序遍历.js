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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) {
    return [];
  }
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    console.log(1, queue);
    let levelLength = queue.length;
    let levelArr = [];
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      levelArr.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(levelArr);
  }
  return result;
};
module.exports = levelOrder;
