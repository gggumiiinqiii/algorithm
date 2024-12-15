/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // 1. 创建邻接表
  const graph = new Map();
  //学这门课的前置课程需要学几门课
  const inDegree = new Array(numCourses).fill(0); // 记录每个节点的入度
  const result = [];

  // 构建图的邻接表和入度数组
  for (let [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) {
      graph.set(prereq, []);
    }
    graph.get(prereq).push(course);
    inDegree[course]++;
  }
  console.log(graph);
  console.log(inDegree);
  // 2. 使用队列保存入度为 0 的课程
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  // 3. BFS 过程，拓扑排序
  while (queue.length > 0) {
    const course = queue.shift();
    result.push(course);

    // 更新邻居课程的入度
    if (graph.has(course)) {
      for (const neighbor of graph.get(course)) {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
  }

  // 4. 如果结果中的课程数量等于 numCourses，说明没有环
  return result.length === numCourses ? result : [];
};
module.exports = findOrder;
