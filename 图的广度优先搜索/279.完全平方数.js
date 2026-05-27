/**
 * @param {number} n
 * @return {number}
 * 动态规划(完全背包问题)
 * BFS(广度优先搜索)
 * 数学定理法(任何一个正整数都可以被表示为至多四个正整数的平方和)
 * n=4^a(8b+7) 才必须用4个平方数相加
 */
var numSquares = function (n) {
  function isSqrt(n) {
    let sqN = Math.sqrt(n);
    return sqN == Math.floor(sqN);
  }
  function Fff(n) {
    while (n % 4 == 0) {
      n /= 4;
    }
    if (n % 8 == 7) {
      return true;
    } else {
      return false;
    }
  }
  function tg(n) {
    for (let i = 0; i < n; i++) {
      if (isSqrt(n - i ** 2)) {
        return true;
      }
    }
    return false;
  }
  //当前数是完全平方数
  if (isSqrt(n)) {
    return 1;
  } else if (Fff(n)) {
    return 4;
  } else if (tg(n)) {
    return 2;
  } else {
    return 3;
  }
};
/**
 * 完全背包问题，所有小于等于N的完全平方数，这些物品可以被无限次使用
 * @param {*} n
 * 一个大问题变成几个小问题
 */
function numSquares1(n) {
  // dp[i]表示和为i的完全平方数的最少数量

  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    //枚举所有的完全平方数
    for (let j = 1; j * j <= i; j++) {
      //取到当前值和减去一个平方数+1的较小者
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  console.log(dp);
  return dp[n];
}
function DFSnumSquares1(n) {
  // 预计算所有小于等于 n 的完全平方数
  const squares = [];
  for (let i = 1; i * i <= n; i++) {
    squares.push(i * i);
  }

  const queue = [n];
  // 【关键优化】使用 Set 记录已经入队的节点，防止重复入队
  const visited = new Set([n]);
  let steps = 0;

  while (queue.length > 0) {
    steps++;
    const size = queue.length;

    // 按层遍历
    for (let i = 0; i < size; i++) {
      const curr = queue.shift();

      for (const sq of squares) {
        if (sq > curr) break; // 剪枝：如果平方数大于当前值，直接跳出

        const next = curr - sq;
        if (next === 0) return steps; // 找到目标，直接返回步数

        // 【核心防超时逻辑】只有当该状态未被访问过时，才入队并标记
        if (!visited.has(next)) {
          visited.add(next); // 入队即标记！
          queue.push(next);
        }
      }
    }
  }
  return -1;
}
console.log(numSquares1(13));
