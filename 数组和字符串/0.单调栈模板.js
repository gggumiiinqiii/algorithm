/**
 * 寻找数组中左侧或者右侧第一个更大或更小的元素
 * @param {*} nums
 * @returns
 */
function monotonickStackTemplate(nums) {
  const n = nums.length;
  const result = new Array(n).fill(0);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      const preIndex = stack.pop();
      result[preIndex] = nums[i]; //记录答案
    }
    stack.push(i);
  }
  return result;
}
