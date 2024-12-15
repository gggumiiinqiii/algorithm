const kthSmallest = require("../../二叉搜索树/230.二叉搜索树中第 K 小的元素");
const buildTree = require("../../二叉树/106.从中序与后序遍历序列构造二叉树");
let a = buildTree([1, 2, 3, 4], [1, 2, 4, 3]);
console.log(a);
console.log(kthSmallest(a, 1));
