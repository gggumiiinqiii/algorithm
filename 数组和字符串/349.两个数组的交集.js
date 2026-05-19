/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let n1Set = new Set(nums1);
  let n2Set = new Set(nums2);
  let result = [];
  if (n1Set.size > n2Set.size) {
    //遍历短的数组
    n2Set.forEach((item) => {
      n1Set.has(item) && result.push(item);
    });
  } else {
    n1Set.forEach((item) => {
      n2Set.has(item) && result.push(item);
    });
  }
  console.log(result);
  return result;
};
intersection([1, 2, 2, 1], [2, 2]);
