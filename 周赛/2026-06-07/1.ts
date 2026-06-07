/**
 * https://leetcode.cn/contest/weekly-contest-505/problems/sum-of-compatible-numbers-in-range-i/
 * @param n
 * @param k
 */
function sumOfGoodIntegers(n: number, k: number): number {
  let sum = 0;
  for (let i = 0; i <= n + k; i++) {
    if (Math.abs(n - i) <= k && (n & i) == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfGoodIntegers(2, 3));
console.log(sumOfGoodIntegers(5, 1));
