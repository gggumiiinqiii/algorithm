/**
 * @param {number[]} nums
 * @return {number}
 */
//排序找到不同的输出
var missingNumber1 = function (nums) {
  const length = nums.length;
  const numsSrot = nums.sort((a, b) => a - b);
  console.log(numsSrot);
  const Arr = Array.from({ length: length + 1 }).map((item, index) => index);
  console.log(Arr);
  let result = 0;
  for (let i = 0; i < Arr.length; i++) {
    if (numsSrot[i] !== Arr[i]) {
      result = Arr[i];
      break;
    }
  }
  return result;
};
//求和首项加尾项 乘于项数，除于2
var missingNumber = function (nums) {
  const length = nums.length;
  const Numssum = nums.reduce((pre, cur) => pre + cur);
  const totalSum = ((1 + length) * length) / 2;
  console.log(Numssum, totalSum);
  return totalSum - Numssum;
};
console.log(missingNumber([3, 0, 1]));
