/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let result = candies.map((item) => item + extraCandies >= max);
  return result;
};
kidsWithCandies([2, 3, 5, 1, 3], 3);
