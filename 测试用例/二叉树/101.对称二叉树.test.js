const isSymmetric = require("../../二叉树/101.对称二叉树");
const TreeNode = require("./tree");
const a = new TreeNode(3);
a.left = new TreeNode(1);
a.left.right = new TreeNode(2);
a.right = new TreeNode(1);
a.right.left = new TreeNode(2);
// a.right.left = new TreeNode(15);
// a.right.right = new TreeNode(7);
console.log(a);
console.log(isSymmetric(a));
