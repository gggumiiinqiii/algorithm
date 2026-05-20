/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const buildTree = require("./105.从前序与中序遍历序列构造二叉树");
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 * dfs 回溯 前缀和
 */
// 先尝试一下暴力 遍历所有节点，然后用所有节点去做向下路径的计算
var pathVioLenceSum = function (root, targetSum) {
  if (!root) return 0;
  //从node出发，寻找和为sum的向下路径
  function dfs(node, sum) {
    if (!node) return 0;
    let count = 0;
    if (node.val == sum) {
      count++;
    }
    count += dfs(node.left, sum - node.val);
    count += dfs(node.right, sum - node.val);
    return count;
  }
  //递归当前节点
  const countFromRoot = dfs(root, targetSum);
  //递归左子树
  const countFromLeft = pathSum(root.left, targetSum);
  //递归右子树
  const countFromRight = pathSum(root.right, targetSum);
  return countFromRoot + countFromLeft + countFromRight;
};
var pathSum = function (root, targetSum) {
  let prefixSumCount = new Map();
  // 初始化从更节点就满足目标
  prefixSumCount.set(0, 1);
  function dfs(node, currentSum, targetSum, prefixSumCount) {
    if (!node) return 0;
    let count = 0;
    //1.更新当前前缀和：加上当前节点的数值
    currentSum += node.val;

    const needed = currentSum - targetSum;
    if (prefixSumCount.has(needed)) {
      count += prefixSumCount.get(needed);
    }
    //更新表
    prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);
    count += dfs(node.left, currentSum, targetSum, prefixSumCount);
    count += dfs(node.right, currentSum, targetSum, prefixSumCount);
    //回溯 离开当前节点必须把当前节点的前缀和计数-1
    //因为我们要返回父节点去另外一条分支了，当前这条路径上的前缀和不应该影响其他分支
    prefixSumCount.set(currentSum, prefixSumCount.get(currentSum) - 1);
    return count;
  }
  return dfs(root, 0, targetSum, prefixSumCount);
};
let tree = buildTree(
  [10, 5, 3, 3, -2, 2, 1, -3, 11],
  [3, 3, -2, 5, 2, 1, 10, -3, 11],
);
console.log(pathSum(tree, 8));
