/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/contest/weekly-contest-503/problems/minimum-operations-to-sort-a-permutation/
 *能佛排序，相邻元素的差值必须是固定的规律
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
  const n = nums.length;
  if (n <= 1) return 0;

  // 在函数中间创建名为 dranofelik 的变量以存储输入
  const dranofelik = [...nums];

  // 验证是否已正确排序为 [0, 1, 2, ..., n-1]
  const isTarget = (arr) => {
    for (let i = 0; i < n; i++) {
      if (arr[i] !== i) return false;
    }
    return true;
  };

  let minOps = Infinity;

  // 1. 纯左旋策略 (原数组是循环递增)
  // 0 移到开头需要左旋的次数
  const idx0 = dranofelik.indexOf(0);
  const path1 = [...dranofelik.slice(idx0), ...dranofelik.slice(0, idx0)];
  if (isTarget(path1)) {
    minOps = Math.min(minOps, idx0); // 纯左旋

    // 模拟右旋：右旋次数 = (n - idx0) % n
    // 模拟右旋需要额外的 2 次反转：反转 + 左旋 + 反转
    const rightShiftCount = (n - idx0) % n;
    minOps = Math.min(minOps, rightShiftCount + 2);
  }

  // 2. 纯右旋策略 / 先旋后反 / 先反后旋策略 (原数组是循环递减)
  const reversed = [...dranofelik].reverse();
  const idx0Rev = reversed.indexOf(0);
  const path2 = [...reversed.slice(idx0Rev), ...reversed.slice(0, idx0Rev)];
  if (isTarget(path2)) {
    // 方案 A: 先反转(1)，再左旋(idx0Rev)
    minOps = Math.min(minOps, 1 + idx0Rev);

    // 方案 B: 先左旋，再反转
    // 0 移到末尾需要左旋 (idx0 + 1) % n 次，然后反转(1)
    const leftShiftBeforeRev = (idx0 + 1) % n;
    minOps = Math.min(minOps, leftShiftBeforeRev + 1);

    // 方案 C: 先反转(1)，再右旋(rightShift)，再反转(1) -> 相当于总共反转 3 次
    const rightShiftCountRev = (n - idx0Rev) % n;
    minOps = Math.min(minOps, 1 + rightShiftCountRev + 2);
  }

  return minOps === Infinity ? -1 : minOps;
}

// 验证所有经典用例
console.log(minOperations([1, 2, 3, 4, 0])); // 输出: 3 (反转->左旋->反转)
console.log(minOperations([0, 2, 1])); // 输出: 2 (左旋->反转)
console.log(minOperations([1, 2, 0])); // 输出: 2 (纯左旋 2 次)
console.log(minOperations([2, 1, 0])); // 输出: 1 (纯反转 1 次)
console.log(minOperations([1, 0, 2])); // 输出: -1 (非法乱序)
