/**
 * @param {number} n
 * @return {boolean}
 * 巴什博弈
 */
var canWinNim = function (n) {
  return n % (3 + 1) !== 0;
};
canWinNim(4);
