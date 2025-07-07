/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * g 孩子的胃口 s每个饼干的尺寸
 * 只有当一块饼干的尺寸 大于或等于 一个孩子的胃口值，这个孩子才会满意。每个孩子最多只能分到一块饼干。
 * 请你尽可能满足更多的孩子，并返回最多可以满足多少孩子。
 */
var findContentChildren = function (g, s) {
  //从小到大排序
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0, //孩子
    j = 0; //饼干
  //只有当前的饼干满足了当前的孩子，孩子索引才加加
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i++; //孩子吃到了饼干
    }
    j++; // 不管是否满足都换下一个饼干
  }

  return i;
};
findContentChildren([1, 2, 3], [1, 1]);
