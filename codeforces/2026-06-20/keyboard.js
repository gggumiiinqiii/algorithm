/**
 * Bessie 的一维键盘问题
 *
 * 键盘上有 N 个键，每个键有一个不同的大写字母。
 * 需要构造一个字符串，使得每个字符恰好出现 K 次。
 * 按下第 i 个键时，会同时按下第 i+1 个键 → 产生 S[i-1]S[i]
 * 可以单独按下第一个键 → S[0]，或单独按下最后一个键 → S[N-1]
 *
 * 目标：可以构造出的字典序最小的字符串。
 *
 * 解法：
 *   尝试两种策略（i=0 和 i=1）：
 *   - i=0：从偶数索引 (0,2,4...) 取长度为 2 的子串
 *          （如果 N 为奇数，最后一个子串可能长度为 1）
 *   - i=1：先加入单个 S[0]，再从奇数索引 (1,3,5...) 取长度为 2 的子串
 *   每种策略：将子串按字典序排序，每个子串重复 K 次，
 *   取两种结果中字典序较小的那个。
 */

const readline = require('readline');

function solve(N, K, S) {
    // ans 初始化为比任何大写字母字符串都大的值
    let ans = '{';  // '{' ASCII 123，刚好在 'Z' (90) 之后

    for (let i = 0; i < 2; i++) {
        const tmp = [];

        // i=1 时，先加入单独按下第一个键产生的字符
        if (i === 1) {
            tmp.push(S[0]);
        }

        // 从位置 i, i+2, i+4, ... 取子串
        // 每个子串长度为 2（一个键对），
        // 如果到达末尾则最后一个子串可能长度为 1
        for (let j = i; j < N; j += 2) {
            const len = Math.min(2, N - j);
            tmp.push(S.substring(j, j + len));
        }

        // 按字典序排序
        tmp.sort();

        // 构建字符串：每个子串重复 K 次
        let cur = '';
        for (const x of tmp) {
            cur += x.repeat(K);
        }

        // 保留字典序更小的结果
        if (cur < ans) {
            ans = cur;
        }
    }

    return ans;
}

// 主函数：读取输入并输出答案
async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const lines = [];
    for await (const line of rl) {
        lines.push(line.trim());
    }

    const [N, K] = lines[0].split(' ').map(Number);
    const S = lines[1];

    console.log(solve(N, K, S));
}

// 直接运行时执行 main
if (require.main === module) {
    main();
}

module.exports = { solve };
