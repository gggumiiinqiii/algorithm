/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const buildTree = require("../二叉树/105.从前序与中序遍历序列构造二叉树");
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 指针划过一维有效数组的计算问题
 */
var findMode = function (root) {
  let res = [];
  let base = null;
  let count = 0;
  let maxCount = 0;

  // 更新统计状态的辅助函数
  const update = (val) => {
    if (val === base) {
      count++;
    } else {
      base = val;
      count = 1;
    }

    if (count === maxCount) {
      res.push(base);
    } else if (count > maxCount) {
      maxCount = count;
      res = [base]; // 清空过去不合格的众数，只保留当前最厉害的
    }
  };
  let gg = [];
  // 标准中序遍历,
  const traverse = (node) => {
    if (!node) return;
    traverse(node.left); // 左
    gg.push(node.val);
    update(node.val); // 根
    traverse(node.right); // 右
  };

  traverse(root);
  console.log(gg);
  return res;
};

let a = buildTree([6, 4, 4, 5, 8, 7, 9], [3, 4, 5, 6, 7, 8, 9]);
console.log(a);
console.log(findMode(a));
