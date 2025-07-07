/**
 * @param {Array} arr
 * @return {Generator}
 * 数组扁平化，然后yield一个一个shift的数值
 */
var inorderTraversal = function* (arr) {
  let arr1 = arr.flat(Infinity);
  while (arr1.length > 0) {
    yield arr1.shift();
  }
};

const gen = inorderTraversal([1, [2, 3]]);
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
