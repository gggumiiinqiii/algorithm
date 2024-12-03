const connect = require("../../二叉树/117.填充每个节点的下一个右侧节点指针");
const buildTree = require("../../二叉树/106.从中序与后序遍历序列构造二叉树");
let a = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
console.log(connect(a));
