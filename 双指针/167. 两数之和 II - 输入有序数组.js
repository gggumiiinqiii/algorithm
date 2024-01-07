/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let length = numbers.length;
  let firstIndex = 0;
  let secondIndex = length - 1;

  while (firstIndex < secondIndex) {
    if (numbers[firstIndex] + numbers[secondIndex] > target) {
      secondIndex--;
    } else if (numbers[firstIndex] + numbers[secondIndex] < target) {
      firstIndex++;
    } else {
      break;
    }
  }
  console.log([firstIndex + 1, secondIndex + 1]);
  return [firstIndex + 1, secondIndex + 1];
};
module.exports = twoSum;
