function isMirror(leftNode, rightNode) {
  if (leftNode === null && rightNode === null) {
    return true;
  }
  if (leftNode === null || rightNode === null) {
    return false;
  }
  return (
    leftNode.val === rightNode.val &&
    isMirror(leftNode.right, rightNode.left) &&
    isMirror(leftNode.left, rightNode.right)
  );
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }
  return isMirror(root.left, root.right);
};
module.exports = isSymmetric;
