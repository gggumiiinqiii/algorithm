/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { arrayToTree, TreeNode } from "../测试用例/二叉树/arrayToTree";

function convertBST(root: TreeNode | null): TreeNode | null {
  let num = 0;
  //先遍历右子树，在遍历左子树，逆向的中序遍历
  function inorder(node: TreeNode | null) {
    if (!node) return;
    inorder(node.right);
    node.val = node.val + num;
    num = node.val;
    inorder(node.left);
  }
  inorder(root);
  return root;
}
let b = arrayToTree([
  4,
  1,
  6,
  0,
  2,
  5,
  7,
  null,
  null,
  null,
  3,
  null,
  null,
  null,
  8,
]);
console.log(convertBST(b));
