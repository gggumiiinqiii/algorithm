/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * //局部最优，
 */
var canPlaceFlowers = function (flowerbed, n) {
  let maxFLower = 0;
  let i = 0;

  while (i < flowerbed.length) {
    //如果当前是0,就种花，然后跳转到下下个计算
    if (flowerbed[i] == 0) {
      if ((flowerbed[i + 1] || 0) == 0 && (flowerbed[i - 1] || 0) == 0) {
        maxFLower++;
        i = i + 2;
        continue;
      }
    }
    i++;
  }
  console.log(maxFLower);
  return n <= maxFLower;
};
canPlaceFlowers([1, 0, 0, 0, 1], 1);
canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2);
canPlaceFlowers([0, 0, 1, 0, 1], 1);
canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2); //true
