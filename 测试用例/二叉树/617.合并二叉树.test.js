const mergeTrees = require("../../二叉树/617.合并二叉树");
const TreeNode = require("./tree");
const a = new TreeNode(1);
a.left = new TreeNode(3);
a.right = new TreeNode(2);
a.left.left = new TreeNode(5);

const b = new TreeNode(2);
b.left = new TreeNode(1);
b.left.right = new TreeNode(4);
b.right = new TreeNode(3);
b.right.right = new TreeNode(7);

mergeTrees(a, b);
