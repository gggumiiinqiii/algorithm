/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  // i 3和5的倍数 FizzBuzz
  // i 3的倍数 Fizz
  // i 5的倍数 Buzz
  // i i
  let result = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result[i] = "FizzBuzz";
    } else if (i % 3 == 0) {
      result[i] = "Fizz";
    } else if (i % 5 == 0) {
      result[i] = "Buzz";
    } else {
      result[i] = String(i);
    }
  }
  return result.slice(1);
};
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
