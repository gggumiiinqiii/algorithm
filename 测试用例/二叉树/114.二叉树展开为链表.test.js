const flatten = require("../../二叉树/114.二叉树展开为链表");
const buildTree = require("../../二叉树/106.从中序与后序遍历序列构造二叉树");
let a = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
flatten(a);
