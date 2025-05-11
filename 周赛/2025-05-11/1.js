/**100670. 不同字符数量最多为 K 时的最少删除数
 * 存map，map排序，然后根据k slice计算k后面的数据
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function (s, k) {
  let map = new Map();
  for (let item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  if (map.size == k) {
    return 0;
  }

  let value = Array.from(map.values()).sort((a, b) => b - a);
  value = value.slice(k);
  let count = 0;
  count = value.reduce((pre, cur) => {
    return (pre += cur);
  }, 0);

  return count;
};
minDeletion("yyyzzggggggggaaaa", 2);
