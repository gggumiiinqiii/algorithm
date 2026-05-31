//计算d乘freq(d)的总和，freq(d)表示数字d在n中出现的次数
// https://leetcode.cn/contest/weekly-contest-504/problems/maximum-number-of-items-from-sale-i/description/
var digitFrequencyScore = function (n) {
  console.log(n);
  let map = new Map();
  let result = [];
  while (n > 0) {
    let res = n % 10;
    if (map.has(res)) {
      map.set(res, map.get(res) + 1);
    } else {
      map.set(res, 1);
      result.push(res);
    }
    n = Math.floor(n / 10);
  }
  console.log(result, map);
  let sum = result.reduce((a, b) => a + b * map.get(b), 0);
  console.log(sum);
  return sum;
};
digitFrequencyScore(123456);
