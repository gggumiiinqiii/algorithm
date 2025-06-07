/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  //设置map
  let collectMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (collectMap.has(nums[i])) {
      collectMap.set(nums[i], collectMap.get(nums[i]) + 1);
    } else {
      collectMap.set(nums[i], 1);
    }
  }
  //map重大到小排序
  const sortedDesc = new Map(
    [...collectMap.entries()].sort((a, b) => b[1] - a[1])
  );
  //   console.log(sortedDesc);
  let sortArr = [...sortedDesc].map((item) => {
    return item[0];
  });
  //slice取出数值
  //   console.log(sortArr.slice(0, k));
  //   console.log(nums, k);
  return sortArr.slice(0, k);
};
topKFrequent([1, 1, 1, 2, 2, 3], 2);
// module.exports = topKFrequent;
