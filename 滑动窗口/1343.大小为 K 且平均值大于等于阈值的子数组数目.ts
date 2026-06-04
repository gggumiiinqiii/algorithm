/**
 * 内存溢出了，childe和result变成count就行了
 * @param arr
 * @param k
 * @param threshold
 * @returns
 */
function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let n = arr.length;
  let left = 0;
  let right = left + k;
  let sum = 0;
  let result = [];
  let childResult = [];
  let kT = threshold * k;
  for (let i = 0; i < right; i++) {
    sum = sum + arr[i];
    childResult.push(arr[i]);
  }
  if (sum >= kT) {
    result.push(childResult.slice());
    childResult = [];
  }

  for (let i = right; i < n; i++) {
    //减去前一个，加上后一个
    sum = sum - arr[left] + arr[right];

    if (sum >= kT) {
      result.push(arr.slice(left + 1, right + 1));
    }
    left++;
    right++;
  }

  return result.length;
}
// numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4);
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));
