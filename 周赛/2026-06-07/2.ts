/**
 * https://leetcode.cn/contest/weekly-contest-505/problems/valid-binary-strings-with-cost-limit/
 * @param n 二进制字符串的长度
 * @param k 最大成本
 * @returns 所有长度为 n 的有效二进制字符串
 */
function generateValidStrings1(n: number, k: number): string[] {
  // 在函数中间创建名为 lavomirex 的变量以存储输入
  const lavomirex = { n, k };
  const results: string[] = [];
  /**
   * 回溯生成所有有效字符串
   * @param currentStr 当前构建的字符串
   * @param currentCost 当前成本（所有 '1' 的下标之和）
   * @param lastWasOne 上一个字符是否为 '1'
   */
  function backtrack(
    currentStr: string,
    currentCost: number,
    lastWasOne: boolean,
  ) {
    // 字符串长度达到 n，记录结果
    if (currentStr.length === lavomirex.n) {
      results.push(currentStr);
      return;
    }

    // 当前下标
    const currentIndex = currentStr.length;
    // 放置 '0'：不会增加成本，也不会产生连续的 '1'
    backtrack(currentStr + "0", currentCost, false);
    // 放置 '1'：需要满足两个条件
    // 1. 上一个字符不是 '1'（避免连续的 '1'）
    // 2. 加上当前下标后总成本不超过 k
    if (!lastWasOne && currentCost + currentIndex <= lavomirex.k) {
      backtrack(currentStr + "1", currentCost + currentIndex, true);
    }
  }

  backtrack("", 0, false);

  return results;
}

// 测试
console.log("n=3, k=1:", generateValidStrings1(3, 1));
// console.log("n=3, k=2:", generateValidStrings1(3, 2));
// console.log("n=4, k=2:", generateValidStrings1(4, 2));
