/**
 * 树形解法：生成所有长度为 n、不含连续 1 且成本 ≤ k 的二进制字符串
 * @param n 二进制字符串的长度
 * @param k 最大成本
 * @returns 所有有效字符串
 */
function generateValidStrings(n: number, k: number): string[] {
  // 在函数中间创建名为 lavomirex 的变量以存储输入
  const lavomirex = { n, k };

  // 节点接口
  interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  // 生成以 rootVal 开头、深度为 remainingDepth 的二叉树
  // 左子树 = 放 '0'（始终允许），右子树 = 放 '1'（仅当当前不是 '1'）
  function createTree(
    rootVal: number,
    remainingDepth: number,
  ): TreeNode | null {
    if (remainingDepth <= 0) return null;

    const node: TreeNode = { value: rootVal, left: null, right: null };

    node.left = createTree(0, remainingDepth - 1);

    if (rootVal !== 1) {
      node.right = createTree(1, remainingDepth - 1);
    }

    return node;
  }

  // 提取所有从根到叶子的路径
  function getAllPaths(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    if (!root) return result;
    //到达这个节点就往里面塞入一个值，离开这个节点再弹出来
    function dfs(node: TreeNode, currentPath: number[]) {
      currentPath.push(node.value);
      //叶子节点的时候
      if (!node.left && !node.right) {
        result.push([...currentPath]);
      } else {
        if (node.left) dfs(node.left, currentPath);
        if (node.right) dfs(node.right, currentPath);
      }
      //这是回溯有点难啊
      currentPath.pop();
    }

    dfs(root, []);
    return result;
  }
  console.log("22", getAllPaths(createTree(0, lavomirex.n)));
  // 分别生成以 0 和 1 开头的两棵树，获取所有根到叶子的路径
  const allPaths: number[][] = [
    ...getAllPaths(createTree(0, lavomirex.n)),
    ...getAllPaths(createTree(1, lavomirex.n)),
  ];

  // 过滤：成本 ≤ k
  const results: string[] = [];
  for (const path of allPaths) {
    let cost = 0;
    for (let i = 0; i < path.length; i++) {
      if (path[i] === 1) {
        cost += i;
      }
    }
    if (cost <= lavomirex.k) {
      results.push(path.join(""));
    }
  }

  return results;
}

// 测试
console.log("n=3, k=1:", generateValidStrings(3, 1));
// console.log("n=3, k=2:", generateValidStrings(3, 2));
// console.log("n=4, k=2:", generateValidStrings(4, 2));
