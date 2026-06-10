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
import { TreeNode, arrayToTree } from "../测试用例/二叉树/arrayToTree";
/*
 * Encodes a tree to a single string.
 * null定义为n,如果当前节点不是最后一层，而且是叶子节点，就补null
 */
function serialize(root: TreeNode | null): string {
  if (root === null) return "";
  let result = [];
  let queue: TreeNode[] = [root];
  //,是因为有负数
  result.push(queue[0].val + ",");
  //bfs
  while (queue.length > 0) {
    let node = queue.shift();
    if (node?.left) {
      result.push(node.left.val + ",");
      queue.push(node.left);
    } else {
      result.push("n,");
    }
    if (node?.right) {
      result.push(node.right.val + ",");
      queue.push(node.right);
    } else {
      result.push("n,");
    }
  }
  //移除最后的n
  let length = result.length;
  let lastN = 0;

  for (let i = length - 1; i >= 0; i--) {
    if (result[i] !== "n,") {
      lastN = i + 1;
      break;
    }
  }

  return result.slice(0, lastN).join("");
}

/*
 * Decodes your encoded data to tree.
 * bfs
 */
function deserialize(data: string): TreeNode | null {
  if (data === "") return null;
  //因为加了,所以需要移除最后一位的空字符串
  let arr = data
    .split(",")
    .slice(0, -1)
    .map((item) => (item === "n" ? null : Number(item)));
  console.log("11", arr, data);
  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;
  //一定是一个左子树，一个右子树
  while (i < arr.length) {
    const currentNode: TreeNode = queue.shift() as TreeNode;
    if (i < arr.length) {
      if (arr[i] !== null && arr[i] !== undefined) {
        currentNode.left = new TreeNode(arr[i]);
        queue.push(currentNode?.left);
      }
      i++;
    }
    if (i < arr.length) {
      if (arr[i] !== null && arr[i] !== undefined) {
        currentNode.right = new TreeNode(arr[i]);
        queue.push(currentNode?.right);
      }
      i++;
    }
  }
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
let b = arrayToTree([1, 2, 3, null, null, 4, 5]);
b = arrayToTree([1, 2, 3, null, null, 4, 5]);
console.log(deserialize(serialize(b)));
