/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let length = nums.length;
  let firstIndex = 0;
  let secondIndex = length - 1;
  let sortnums = JSON.parse(JSON.stringify(nums)).sort((a, b) => a - b);
  let find = false;
  while (firstIndex < secondIndex) {
    if (sortnums[firstIndex] + sortnums[secondIndex] < target) {
      firstIndex++;
    } else if (sortnums[firstIndex] + sortnums[secondIndex] > target) {
      secondIndex--;
    } else {
      find = true;
      break;
    }
  }
  //console.log(sortnums, firstIndex, secondIndex);
  let truefirstIndex = nums.indexOf(sortnums[firstIndex]);
  let trueSecondIndex = nums.lastIndexOf(sortnums[secondIndex]);
  console.log([truefirstIndex, trueSecondIndex], find);
  return [truefirstIndex, trueSecondIndex];
};
module.exports = twoSum;
