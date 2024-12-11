const zigzagLevelOrder = require("../../二叉树的层次遍历/103.二叉树的锯齿形层序遍历");
const buildTree = require("../../二叉树/106.从中序与后序遍历序列构造二叉树");
let a = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
console.log(zigzagLevelOrder(a));
