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
 * 树形DP
 */

import { TreeNode, arrayToTree } from "../测试用例/二叉树/arrayToTree";
//
function rob(root: TreeNode | null): number {
  //第一层3 第二层5  第三层7
  let result: number[] = [];

  function dfs(node: TreeNode | null): number[] {
    if (node === null) {
      return [0, 0];
    }
    let left = dfs(node.left);
    let right = dfs(node.right);
    //抢当前节点
    let rob = node.val + left[1] + right[1];
    //不抢当前节点
    let skip = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return [rob, skip];
  }
  result = dfs(root);
  console.log(result);
  return Math.max(...result);
}
let b = arrayToTree([3, 2, 3, null, 3, null, 1]);
console.log(rob(b));
