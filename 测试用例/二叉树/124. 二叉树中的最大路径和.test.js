const maxPathSum = require("../../二叉树/124. 二叉树中的最大路径和");
const buildTree = require("../../二叉树/106.从中序与后序遍历序列构造二叉树");
let a = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
console.log(maxPathSum(a));
