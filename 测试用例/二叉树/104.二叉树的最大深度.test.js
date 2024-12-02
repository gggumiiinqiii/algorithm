const maxDepth = require("../../二叉树/104.二叉树的最大深度");
const TreeNode = require("./tree");
const a = new TreeNode(3);
a.left = new TreeNode(9);
a.right = new TreeNode(20);
a.right.left = new TreeNode(15);
a.right.right = new TreeNode(7);
console.log(maxDepth(a));
