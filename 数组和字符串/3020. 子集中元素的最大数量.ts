/**
 * 3020. 子集中元素的最大数量
 * https://leetcode.cn/problems/find-the-maximum-number-of-elements-in-subset/
 *
 * 从数组 nums 中选出一个子集，子集中的元素可以排列成回文模式：
 * [x, x², x⁴, ..., x^(k/2), x^k, x^(k/2), ..., x⁴, x², x]
 * 其中 k 是非负的 2 的幂。返回子集中元素数量的最大值。
 *
 * 核心思路：
 * 1. 模式是对称的，中间元素出现 1 次，其余成对出现（每对 +2）
 * 2. 以 x 为基数不断平方：x → x² → x⁴ → ...
 * 3. cnt[x] >= 2 时可以继续扩展（长度 +2）
 * 4. cnt[x] == 1 时成为中间元素（长度 +1，停止）
 * 5. cnt[x] == 0 时回退（长度 -1，停止）
 * 6. x = 1 特殊处理：1 的任何次幂都是 1，取最大奇数个
 *
 * 时间复杂度：O(n log log U)，U = max(nums)
 * 空间复杂度：O(n)
 *
 * @param {number[]} nums - 正整数数组
 * @return {number} - 子集中元素的最大数量
 */
function maximumLength(nums: number[]): number {
  // 统计每个数字的出现次数
  const cnt = new Map<number, number>();
  for (const x of nums) {
    cnt.set(x, (cnt.get(x) || 0) + 1);
  }

  // 特判 x = 1：1 的任何次幂始终为 1，取最大奇数个
  let ans = cnt.get(1) || 0;
  if (ans > 0 && ans % 2 === 0) {
    ans--; // 需要中间元素，奇数个才能有中心
  }
  cnt.delete(1);

  // 枚举每个数字作为基数 x
  for (const [x] of cnt) {
    let res = 0;
    let cur: number = x;

    // 成对扩展：出现次数 >= 2 时可以对称放置，长度 +2
    while (cnt.has(cur) && (cnt.get(cur) || 0) > 1) {
      res += 2;
      cur = cur * cur; // 平方：x → x² → x⁴ → ...
    }

    if (cnt.has(cur)) {
      // 恰好出现 1 次，作为中间元素
      res += 1;
    } else {
      // 没有出现，需要回退（上一轮的中间元素也不存在）
      res -= 1;
    }

    ans = Math.max(ans, res);
  }

  return ans;
}

// 测试用例
console.log(maximumLength([5, 4, 1, 2, 2])); // 3 → 选 {4,2,2} 排列为 [2,4,2]
console.log(maximumLength([1, 3, 2, 4])); // 1 → 任意单个元素
console.log(maximumLength([1, 1])); // 1 → 两个 1 只能取奇数个
console.log(maximumLength([1, 1, 1])); // 3 → 三个 1 可排列为 [1,1,1]
console.log(maximumLength([2, 2, 4, 4, 16, 16])); // 5 → [2,4,16,4,2]