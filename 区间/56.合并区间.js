var merge = function (intervals) {
  if (intervals.length == 0) {
    return [];
  } else if (intervals.length == 1) {
    return intervals;
  }
  //排序得时间复杂度是nlogn
  const sortIntervals = intervals.slice().sort((a, b) => a[0] - b[0]);
  let result = [];
  result.push(sortIntervals[0].slice());
  for (let i = 1; i < sortIntervals.length; i++) {
    //判断是否重叠
    if (
      sortIntervals[i][1] >= result[result.length - 1][1] &&
      sortIntervals[i][0] <= result[result.length - 1][1]
    ) {
      result[result.length - 1][1] = sortIntervals[i][1];
    } else if (sortIntervals[i][1] <= result[result.length - 1][1]) {
      continue;
    } else {
      result.push(sortIntervals[i]);
    }
  }
  // console.log(sortIntervals)
  console.log(result);
  return result;
};
module.exports = merge;
