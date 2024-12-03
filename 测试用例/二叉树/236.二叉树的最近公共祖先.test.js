const lowestCommonAncestor = require("../../二叉树/236.二叉树的最近公共祖先");
const buildTree = require("../../二叉树/106.从中序与后序遍历序列构造二叉树");
let a = buildTree([2, 1, 2], [2, 2, 1]);
console.log(a);
console.log(lowestCommonAncestor(a, buildTree([1], [1]), buildTree([1], [1])));
