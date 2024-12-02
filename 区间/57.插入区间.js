/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const newArr = intervals.slice().concat([newInterval]);
  newArr.sort((a, b) => a[0] - b[0]);
  if (newArr.length == 0) {
    return [];
  } else if (newArr.length == 1) {
    return newArr;
  }
  const result = [newArr[0].slice()];
  for (let i = 1; i < newArr.length; i++) {
    //判断是否合并
    if (
      newArr[i][0] <= result[result.length - 1][1] &&
      newArr[i][1] >= result[result.length - 1][1]
    ) {
      result[result.length - 1][1] = newArr[i][1];
      // 用来处理test的case1
    } else if (newArr[i][1] <= result[result.length - 1][1]) {
      continue;
    } else {
      result.push(newArr[i]);
    }
  }
  console.log(result);
  return result;
};
module.exports = insert;
