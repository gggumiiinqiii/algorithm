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
 */
var BSTIterator = function (root) {
  this.stack = [];
  this._leftmostInorder(root);
};

/**
 * Helper function to push all left nodes to the stack.
 * @param {TreeNode} root
 */
BSTIterator.prototype._leftmostInorder = function (root) {
  while (root !== null) {
    this.stack.push(root);
    root = root.left;
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  // Topmost node in the stack is the next smallest element
  let topmostNode = this.stack.pop();

  // If the node has a right child, push all the leftmost nodes of the right subtree
  if (topmostNode.right !== null) {
    this._leftmostInorder(topmostNode.right);
  }

  return topmostNode.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
