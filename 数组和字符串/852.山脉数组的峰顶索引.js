/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid + 1]) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
};
module.exports = peakIndexInMountainArray;
