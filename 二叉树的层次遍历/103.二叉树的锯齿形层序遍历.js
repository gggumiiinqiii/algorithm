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
var zigzagLevelOrder = function (root) {
  if (root == null) {
    return [];
  }
  let queue = [root];
  let result = [];
  let count = 1;
  while (queue.length > 0) {
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
    count++;
  }
  result.map((item, index) => {
    if (index % 2 == 0) {
      return item;
    } else {
      return item.reverse();
    }
  });
  return result;
};
module.exports = zigzagLevelOrder;
