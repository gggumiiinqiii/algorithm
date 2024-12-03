/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root.val === p.val || root.val === q.val) {
    //console.log('12123', root)
    console.log("111");
    return root;
  }

  // 递归遍历左子树和右子树
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 如果左子树和右子树都找到p或q，那么当前节点就是最近公共祖先
  if (left !== null && right !== null) {
    return root;
  }

  return left !== null ? left : right;
};
module.exports = lowestCommonAncestor;
