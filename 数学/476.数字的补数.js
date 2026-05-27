/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let s = [];
  while (num > 0) {
    let gg = num % 2;
    s.push(gg);
    num = Math.floor(num / 2);
  }
  s = s.map((item) => item ^ 1);
  let sum = 0;
  s.forEach((item, index) => {
    sum += item * 2 ** index;
  });
  return sum;
};
console.log(findComplement(5));
