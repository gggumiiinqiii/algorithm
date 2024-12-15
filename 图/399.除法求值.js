/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  //构建图
  const graph = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);

    graph.get(a).push([b, value]);
    graph.get(b).push([a, 1 / value]);
  }
  console.log(graph);
  const result = [];
  for (const [start, end] of queries) {
    // 如果 start 或者 end 不在图中，结果是 -1
    if (!graph.has(start) || !graph.has(end)) {
      result.push(-1);
      continue;
    }
    // DFS 来查找从 start 到 end 的路径
    const visited = new Set();
    function dfs(node, target, acc) {
      if (node == target) return acc;
      visited.add(node);
      for (const [neighbor, value] of graph.get(node)) {
        if (!visited.has(neighbor)) {
          const result = dfs(neighbor, target, acc * value);
          if (result !== -1) return result;
        }
      }
      return -1;
    }
    result.push(dfs(start, end, 1));
  }
  return result;
};
module.exports = calcEquation;

// 解释：
// 图的构建：

// 我们用一个 Map 来表示图，每个变量是一个节点，边的权重表示除法结果。例如，如果 a / b = 2.0，则我们在图中添加边 (a, b) 权重为 2.0 和 (b, a) 权重为 1 / 2.0。
// DFS 查找路径：

// 对于每个查询，使用 DFS 来查找从 start 到 end 的路径，计算出路径上的积。如果找到了路径，就返回路径积的值，否则返回 -1。
// 查询结果：

// 对于每一个查询 (start, end)，如果 start 或 end 不在图中，返回 -1。
// 否则，调用 DFS 查找路径。
