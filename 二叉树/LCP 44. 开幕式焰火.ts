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
 * bfs和dfs
 */

import TreeNode from "../测试用例/二叉树/tree";
import buildTree from "./105.从前序与中序遍历序列构造二叉树";

function numColor(root: TreeNode | null): number {
  let set = new Set();
  function dfs(node: TreeNode | null) {
    if (!node) return;
    set.add(node.val);
    dfs(node?.left);
    dfs(node?.right);
  }
  //   dfs(root);
  function bfs(node: TreeNode | null) {
    if (!node) return;
    let queue = [node];
    while (queue.length) {
      let fir = queue.pop();
      set.add(fir?.val);
      fir?.left && queue.push(fir.left);
      fir?.right && queue.push(fir.right);
    }
  }
  bfs(root);
  return set.size;
}
let b = buildTree([1, 2, 3, 4, 4, 3, 2], [4, 3, 4, 2, 3, 1, 2]);
console.log(numColor(b));
