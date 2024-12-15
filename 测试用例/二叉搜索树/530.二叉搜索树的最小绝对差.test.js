const getMinimumDifference = require("../../二叉搜索树/530.二叉搜索树的最小绝对差");
const buildTree = require("../../二叉树/106.从中序与后序遍历序列构造二叉树");
let a = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
console.log(getMinimumDifference(a));
