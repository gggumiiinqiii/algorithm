/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (!nums.length) {
    return [];
  } else if (nums.length == 1) {
    return [`${nums[0]}`];
  }
  let sign = "->";
  let result = [];
  let preIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    //最后一条数据
    if (nums[i + 1] !== nums[i] && nums[i + 1] - nums[i] == 1) {
      continue;
    } else if (i == preIndex) {
      result.push(`${nums[preIndex]}`);
      preIndex = i + 1;
    } else {
      result.push(`${nums[preIndex]}${sign}${nums[i]}`);
      preIndex = i + 1;
    }
  }
  console.log(result);
  return result;
};
module.exports = summaryRanges;
