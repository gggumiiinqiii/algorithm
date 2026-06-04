/**
 * https://leetcode.cn/problems/total-waviness-of-numbers-in-range-i/description/?envType=daily-question&envId=2026-06-04
 *
 * 波动值 = 峰值 + 谷值
 * 峰值：数位严格大于相邻两个数位
 * 谷值：数位严格小于相邻两个数位
 * 首尾数位不算，< 3 位的数字波动值为 0
 *
 * 约束：1 <= num1 <= num2 <= 10^5
 *
 * @param num1 范围起始
 * @param num2 范围结束
 */

// ──────────────────────────────────────────────
// 解法一：暴力枚举（最直接，适合 10^5 的数据范围）
// ──────────────────────────────────────────────
function totalWaviness_brute(num1: number, num2: number): number {
  let total = 0;
  for (let i = Math.max(101, num1); i <= num2; i++) {
    total += getWaviness(i);
  }
  return total;
}

/** 计算单个数字的波动值（字符串法） */
function getWaviness(n: number): number {
  const s = String(n);
  let count = 0;
  for (let i = 1; i < s.length - 1; i++) {
    const cur = +s[i];
    const left = +s[i - 1];
    const right = +s[i + 1];
    if ((cur > left && cur > right) || (cur < left && cur < right)) {
      count++;
    }
  }
  return count;
}

/** 计算单个数字的波动值（取模法，无字符串转换） */
function getWaviness_mod(n: number): number {
  if (n < 100) return 0;

  let prev = n % 10; // 最右边数位
  let tmp = Math.floor(n / 10);
  let curr = tmp % 10; // 中间偏右数位
  tmp = Math.floor(tmp / 10);

  let count = 0;
  while (tmp > 0) {
    const next = tmp % 10; // 再左边一个数位
    // 检查 curr 是否为峰或谷（prev 是右邻，next 是左邻）
    if ((curr > prev && curr > next) || (curr < prev && curr < next)) {
      count++;
    }
    // 整体向左平移一个数位
    prev = curr;
    curr = next;
    tmp = Math.floor(tmp / 10);
  }
  return count;
}

// ──────────────────────────────────────────────
// 解法二：一维 DP + 前缀和（"一维动态规划"）
// ──────────────────────────────────────────────
// dp[i] = 数字 i 的波动值
// prefix[i] = [0, i] 范围内所有数字的波动值之和
// 递推：prefix[i] = prefix[i - 1] + dp[i]
// 答案：prefix[num2] - prefix[num1 - 1]

function totalWaviness_dp(num1: number, num2: number): number {
  const MAX = 100000;
  const dp = new Array<number>(MAX + 1).fill(0);

  // 1. 递推计算每个数字的波动值
  for (let i = 101; i <= MAX; i++) {
    dp[i] = getWaviness_mod(i);
  }
  console.log(dp);
  // 2. 前缀和
  const prefix = new Array<number>(MAX + 1).fill(0);
  for (let i = 1; i <= MAX; i++) {
    prefix[i] = prefix[i - 1] + dp[i];
  }

  return prefix[num2] - prefix[num1 - 1];
}

// ──────────────────────────────────────────────
// 统一导出：默认用暴力枚举即可
// ──────────────────────────────────────────────
function totalWaviness(num1: number, num2: number): number {
  return totalWaviness_brute(num1, num2);
}

// ──────────────────────────────────────────────
// 测试
// ──────────────────────────────────────────────
console.log(totalWaviness(120, 130)); // 3
// console.log(totalWaviness(198, 202)); // 3
// console.log(totalWaviness(4848, 4848)); // 2
// console.log(totalWaviness(1, 100)); // 0
