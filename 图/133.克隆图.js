/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();
  function dfs(node) {
    if (map.has(node)) return map.get(node);
    const cloneNode = new Node(node.val);
    map.set(node, cloneNode);
    for (const neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode;
  }
  //深度优先搜索
  return dfs(node);
};
module.exports = cloneGraph;
// 解释：
// 深度优先搜索（DFS）：
// 该解法使用 DFS 来遍历原图中的每个节点。
// 如果一个节点已经被克隆（即存在于 map 中），我们就直接返回该节点的克隆版本。
// 如果一个节点没有被克隆过，则创建一个新的节点并将其加入到 map 中。
// 然后继续递归处理该节点的邻居，克隆它们并将克隆的邻居加入当前节点的邻居列表中。
// Map 存储：

// map 用于记录每个原节点和它克隆节点之间的映射。这样可以避免多次克隆同一个节点。
// 时间复杂度：

// 时间复杂度是 O(N)，其中 N 是图中节点的数量。每个节点只会被访问一次。
// 空间复杂度：

// 空间复杂度是 O(N)，用于存储每个节点的克隆。
