/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let row = 0,
    currentRowCoins = 0;
  while (n > currentRowCoins) {
    currentRowCoins++;
    n -= currentRowCoins;
    row++;
    console.log(n, currentRowCoins, row);
  }
  return row;
};
console.log(arrangeCoins(5));
