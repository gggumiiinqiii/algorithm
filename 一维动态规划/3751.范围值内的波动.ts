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
export function totalWaviness_brute(num1: number, num2: number): number {
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
// 解法二：数位 DP（适用于大范围，如 num2 可达 10^9+）
// ──────────────────────────────────────────────
// 核心思想：f(N) = [0, N] 范围内所有数字的波动值之和
// 答案 = f(num2) - f(num1 - 1)
// 数位 DP 从高位向低位逐位构造数字，状态包括：
//   - pos:  当前处理到第几位（从左往右，从 0 开始）
//   - prev: 前一位数字（-1 表示不存在）
//   - prev2: 前两位数字（-1 表示不存在）
//   - tight: 是否紧贴上限 N
//   - started: 是否已开始放置非零数字（处理前导零）
// 在放置第 pos 位的数字 d 时，可以判断 prev（即第 pos-1 位）是否为峰/谷

function countWavinessUpTo(N: number): number {
  if (N < 100) return 0;

  // 提取 N 的各个数位（高位在前）
  const digits: number[] = [];
  let temp = N;
  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  digits.reverse();
  const n = digits.length;

  // memo 缓存：key = "pos,prev,prev2,tight,started" → [count, sum]
  // count = 子树中能构造出的数字个数
  // sum   = 这些数字的波动值之和
  const memo = new Map<string, [number, number]>();

  function dfs(
    pos: number,
    prev: number,
    prev2: number,
    tight: boolean,
    started: boolean
  ): [number, number] {
    if (pos === n) return [1, 0]; // 1 种完成方式（当前已确定的数位序列），波动值 0

    const key = `${pos},${prev},${prev2},${tight ? 1 : 0},${started ? 1 : 0}`;
    if (memo.has(key)) return memo.get(key)!;

    const limit = tight ? digits[pos] : 9;
    let totalCount = 0;
    let totalSum = 0;

    for (let d = 0; d <= limit; d++) {
      const nextTight = tight && d === limit;
      const nextStarted = started || d > 0;

      // 判断 prev（前一个确定的数位）是否为峰/谷
      // 需要 prev 和 prev2 都存在（即至少已有两个前导数字）
      let add = 0;
      if (nextStarted && prev !== -1 && prev2 !== -1) {
        if (
          (prev > prev2 && prev > d) || // 峰
          (prev < prev2 && prev < d)    // 谷
        ) {
          add = 1;
        }
      }

      const nextPrev = nextStarted ? d : -1;
      const nextPrev2 = nextStarted ? prev : -1;

      const [cnt, sum] = dfs(pos + 1, nextPrev, nextPrev2, nextTight, nextStarted);
      totalCount += cnt;
      // add=1 说明 prev 这个数位是峰/谷，这个贡献要算到子树中**每一个**完成的数字里
      totalSum += add * cnt + sum;
    }

    memo.set(key, [totalCount, totalSum]);
    return [totalCount, totalSum];
  }

  return dfs(0, -1, -1, true, false)[1];
}

export function totalWaviness_dp(num1: number, num2: number): number {
  return countWavinessUpTo(num2) - countWavinessUpTo(num1 - 1);
}

// ──────────────────────────────────────────────
// ──────────────────────────────────────────────
// 默认使用数位 DP（可处理大范围）
// ──────────────────────────────────────────────
export function totalWaviness(num1: number, num2: number): number {
  return totalWaviness_dp(num1, num2);
}

// ──────────────────────────────────────────────
// 测试
// ──────────────────────────────────────────────
console.log(totalWaviness(1434874, 29196624)); // 3
console.log(totalWaviness(198, 202)); // 3
// console.log(totalWaviness(4848, 4848)); // 2
// console.log(totalWaviness(1, 100)); // 0
