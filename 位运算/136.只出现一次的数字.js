/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //   let object = {};
  //   for (let item of nums) {
  //     if (Object.hasOwn(object, item)) {
  //       object[item]++;
  //     } else {
  //       object[item] = 1;
  //     }
  //   }
  //   let result = "";
  //   Object.keys(object).forEach((key) => {
  //     if (object[key] == 1) {
  //       result = Number(key);
  //     }
  //   });
  //   return result;
  let result = 0; // 初始化一个结果变量
  for (let num of nums) {
    // 遍历数组中的每一个数字
    result ^= num; // 将当前数字和 result 做按位异或操作
  }
  return result; // 返回最终的结果
};
module.exports = singleNumber;
