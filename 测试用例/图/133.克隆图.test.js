const cloneGraph = require("../../图/133.克隆图");
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
// 创建图的节点
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.neighbors = [node2, node3];
node2.neighbors = [node1];
node3.neighbors = [node1];

const clonedGraph = cloneGraph(node1);
console.log(clonedGraph);

// [[2,4],[1,3],[2,4],[1,3]]
