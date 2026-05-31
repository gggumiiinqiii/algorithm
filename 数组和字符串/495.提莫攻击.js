/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 * 第一次全部加上，遇到右边比左边小于duration的时候，再用持续时间减去(右边的-左边的)那段重复计算的时间
 * 最后一次直接抛出
 * //速度太慢了
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let result = 0;
  let left = 0;
  let n = timeSeries.length;
  while (left < n) {
    let first = timeSeries[left];
    result = result + duration;
    if (left == n) {
      break;
    }
    //如果存在重复，就把重复的去掉
    if (timeSeries[left + 1] - first < duration) {
      result = result - (duration - (timeSeries[left + 1] - first));
    }
    left++;
  }
  console.log(result);
  return result;
};
findPoisonedDuration([1, 2], 2);
