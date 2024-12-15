/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();
  const visited = new Array(numCourses).fill(0); // 0: 未访问, 1: 正在访问, 2: 已访问

  // 构建图
  // 学了课程prereq之后可以学习那些课程
  for (let [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) {
      graph.set(prereq, []);
    }
    graph.get(prereq).push(course);
  }
  console.log(graph);
  // 深度优先搜索
  function dfs(course) {
    // 如果课程正在访问中，说明有环
    if (visited[course] === 1) return false;
    // 如果课程已访问完成，直接返回 true
    if (visited[course] === 2) return true;

    // 标记课程为正在访问
    visited[course] = 1;

    // 遍历当前课程的所有依赖课程
    if (graph.has(course)) {
      for (let nextCourse of graph.get(course)) {
        if (!dfs(nextCourse)) {
          return false;
        }
      }
    }

    // 标记课程已访问完成
    visited[course] = 2;
    return true;
  }

  // 对所有课程进行 DFS
  for (let i = 0; i < numCourses; i++) {
    if (visited[i] === 0 && !dfs(i)) {
      return false;
    }
  }

  return true;
};

module.exports = canFinish;

// 解释：
// 图的构建：
// 我们使用 Map 来构建课程依赖图（邻接表），graph.get(prereq) 返回的是课程 prereq 所依赖的所有课程。
// DFS 搜索：
// visited 数组用于标记每个课程的访问状态：
// 0：课程未被访问过。
// 1：课程正在访问中（在递归栈中），这表示当前课程的前置课程还在探索中。
// 2：课程已访问完成，表示当前课程的所有前置课程都已处理完成，且没有发现环。
// 在 DFS 中，如果某个课程的前置课程正在被访问（即 visited[course] === 1），那么就发现了一个环，返回 false。
// 如果某个课程已经访问过且没有发现环（即 visited[course] === 2），直接返回 true。
// 如果当前课程没有被访问过，则开始进行 DFS 探索。
// 检查所有课程：
// 我们需要对所有课程进行 DFS 搜索。如果某个课程返回 false，说明图中有环，无法完成所有课程，返回 false。
// 返回结果：
// 如果 DFS 搜索过程中没有发现环，则返回 true，表示可以完成所有课程。
