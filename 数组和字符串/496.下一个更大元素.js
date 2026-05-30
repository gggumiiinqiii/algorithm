/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  //nums1的数字在num2中的位置，如果后面有比这个数大的值返回这个值，否则返回-1
  // nums1是,nums2的子集
  const map = new Map();
  nums2.forEach((item, index) => {
    map.set(item, index);
  });
  let nm2 = nums2.length;
  let result = [];
  nums1.forEach((item) => {
    let num2Index = map.get(item);
    for (let i = num2Index; i < nm2; i++) {
      if (nums2[i] > item) {
        result.push(nums2[i]);
        break;
      }
      if (i == nm2 - 1 && nums2[i] <= item) {
        result.push(-1);
      }
    }
  });
  return result;
};
var nextGreaterElement2 = function (nums1, nums2) {
  const map = new Map(); //记录元素 -> 它的下一个更大元素
  const stack = []; //单调递减栈，存储尚未找到下一个更大元素的候选值
  for (let num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  return nums1.map((num) => map.get(num) || -1);
};
console.log(nextGreaterElement2([4, 1, 2], [1, 3, 4, 2]));
