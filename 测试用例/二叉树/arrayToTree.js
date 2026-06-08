const TreeNode = require("./tree");

/**
 * 将 LeetCode 风格的层序遍历数组构建为一棵二叉树
 * @param {(number|null)[]} arr - 层序遍历数组, null 表示空节点, 如 [3,2,3,null,3,null,1]
 * @return {TreeNode|null}
 */
function arrayToTree(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const currentNode = queue.shift();

    // 左子节点
    if (i < arr.length) {
      if (arr[i] !== null && arr[i] !== undefined) {
        currentNode.left = new TreeNode(arr[i]);
        queue.push(currentNode.left);
      }
      i++;
    }

    // 右子节点
    if (i < arr.length) {
      if (arr[i] !== null && arr[i] !== undefined) {
        currentNode.right = new TreeNode(arr[i]);
        queue.push(currentNode.right);
      }
      i++;
    }
  }

  return root;
}

module.exports = { arrayToTree, TreeNode };
