/**
 * @param {number[]} nums
 * @return {number[]}
 * 最大公约数大于1就是非互质数
 */
var replaceNonCoprimes = function (nums) {
  //最大公约数
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  //最小公倍数
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  const res = [];
  for (let num of nums) {
    res.push(num);
    while (res.length >= 2) {
      const [secondLast, last] = res.slice(-2);
      if (gcd(secondLast, last) > 1) {
        res.pop();
        res.pop();
        res.push(lcm(secondLast, last));
      } else {
        break;
      }
    }
  }

  return res;
};
replaceNonCoprimes([2, 2, 1, 1, 3, 3, 3]);
