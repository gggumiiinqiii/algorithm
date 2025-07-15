/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 * 如果index是size的倍数的时候新增一个数组
 */
var chunk = function (arr, size) {
  console.log(arr, size);
  let result = [];
  let count = 0;
  arr.forEach((item, index) => {
    if (index % size == 0) {
      count++;
      result.push([item]);
    } else {
      let length = result.length;
      result[length - 1].push(item);
    }
  });
  console.log(result);
  return result;
};
chunk([1, 2, 3, 4, 5], 3);
