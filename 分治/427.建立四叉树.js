/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
class Node {
  constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }
}

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
  const n = grid.length;

  // 判断当前区域是否都是同一个值
  const isSame = (x0, y0, length) => {
    const val = grid[x0][y0];
    for (let i = x0; i < x0 + length; i++) {
      for (let j = y0; j < y0 + length; j++) {
        if (grid[i][j] !== val) {
          return false;
        }
      }
    }
    return true;
  };

  const build = (x0, y0, length) => {
    if (isSame(x0, y0, length)) {
      // 是叶子节点
      return new Node(grid[x0][y0] === 1, true, null, null, null, null);
    }

    const half = length / 2;

    const topLeft = build(x0, y0, half);
    const topRight = build(x0, y0 + half, half);
    const bottomLeft = build(x0 + half, y0, half);
    const bottomRight = build(x0 + half, y0 + half, half);

    return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
  };

  return build(0, 0, n);
};
module.exports = construct;
