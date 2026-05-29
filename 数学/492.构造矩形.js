/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  // L*W == area,L>=W
  // L W L-W是最小小
  let obj = {
    min: Infinity,
    result: [],
  };
  for (let i = 1; i <= area; i++) {
    for (let j = 1; j <= i && i * j <= area; j++) {
      if (i * j === area) {
        if (i - j <= obj.min) {
          obj.min = i - j;
          obj.result = [i, j];
        }
      }
    }
  }
  return obj.result;
};
constructRectangle(122122);
