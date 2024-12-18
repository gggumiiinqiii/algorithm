/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * 一次基因变化就意味着这个基因序列中的一个字符发生了变化。
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  // 如果目标基因不在基因池中，直接返回 -1
  if (!bank.includes(end)) {
    return -1;
  }

  // BFS 队列，存储当前基因和步数
  const queue = [[start, 0]];
  const visited = new Set();
  visited.add(start);

  // 基因字符集
  const chars = ["A", "C", "G", "T"];

  // 开始 BFS
  while (queue.length > 0) {
    const [current, steps] = queue.shift();

    // 如果当前基因是目标基因，返回转换步数
    if (current === end) {
      return steps;
    }

    // 遍历基因池，尝试修改当前基因序列的每一位字符
    for (let i = 0; i < current.length; i++) {
      for (let char of chars) {
        console.log(current[i], char);
        // 如果当前字符不是目标字符，进行修改
        if (current[i] !== char) {
          const next = current.slice(0, i) + char + current.slice(i + 1);

          // 如果修改后的基因序列在基因池中且没有访问过，则加入队列
          if (bank.includes(next) && !visited.has(next)) {
            visited.add(next);
            queue.push([next, steps + 1]);
          }
        }
      }
    }
  }

  // 如果遍历完了所有路径，仍然没有找到目标基因
  return -1;
};
console.log(minMutation("AACCGGTT", "AACCGGTA", '["AACCGGTA"]'));
// @lc code=end
module.exports = minMutation;
