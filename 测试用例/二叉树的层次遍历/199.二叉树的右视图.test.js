const rightSideView = require("../../二叉树的层次遍历/199.二叉树的右视图");
const buildTree = require("../../二叉树/106.从中序与后序遍历序列构造二叉树");
let a = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
console.log(rightSideView(a));
