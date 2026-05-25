/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let setNum = [...new Set(nums)];
  setNum.sort((a, b) => b - a);
  if (setNum.length < 3) {
    return setNum[0];
  } else {
    return setNum[2];
  }
  console.log(setNum);
};
thirdMax([4, 3, 2, 1, 2, 3, 5]);
