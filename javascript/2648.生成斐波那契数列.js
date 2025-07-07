/**
 * @return {Generator<number>}
 * 0 1 1 2 3 5 8 13 21 34
 * 循环一直累加，yield打断点厉害
 * [a,b]=[b,a+b]
 */
var fibGenerator = function* () {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
function fb(number) {
  if (number == 1 || number == 2) {
    return 1;
  }
  return fb(number - 1) + fb(number - 2);
}
console.log(fb(9));
