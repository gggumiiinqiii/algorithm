/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */
class _Node {
  val: number;
  children: _Node[];

  constructor(val?: number, children?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

function maxDepth(root: _Node | null): number {
  //   if (!root) return 0;
  //   let queue: any[] = [[root, 1]];
  //   let maxDep = 0;
  //   console.log(root);
  //   while (queue.length > 0) {
  //     let [node, depth] = queue.shift();
  //     maxDep = Math.max(maxDep, depth);
  //     if (node.children.length !== 0) {
  //       node.children.forEach((item: any) => {
  //         queue.push([item, depth + 1]);
  //       });
  //     }
  //   }
  //   return maxDep;

  //dfs
  if (!root) return 0;
  let max = 0;
  for (const child of root.children) {
    max = Math.max(max, maxDepth(child));
  }
  return max + 1;
}

let b = new _Node(1);
b.children = [new _Node(3), new _Node(2), new _Node(4)];
b.children[0].children = [new _Node(5), new _Node(6)];
console.log(maxDepth(b));
