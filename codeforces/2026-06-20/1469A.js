const readline = require("readline");

function solve(s) {
  const n = s.length;
  // 长度必须是偶数
  if (n % 2 === 1) return "NO";

  let low = 0; // 当前可能的最小未匹配开括号数
  let high = 0; // 当前可能的最大未匹配开括号数

  for (const char of s) {
    if (char === "(") {
      low++;
      high++;
    } else if (char === ")") {
      low--;
      high--;
    } else if (char === "?") {
      low--; // 当作 )，开括号减少
      high++; // 当作 (，开括号增加
    }

    // 未匹配数不能为负（把已经<0的低值钳制到0）
    if (low < 0) low = 0;

    // 最大可能值都 <0，说明 ) 太多，不可能合法
    if (high < 0) return "NO";
  }

  // 0 必须在 [low, high] 范围内
  return low === 0 ? "YES" : "NO";
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

  const N = Number(lines[0]);
  for (let i = 1; i <= N; i++) {
    console.log(solve(lines[i]));
  }
}

// 直接运行时执行 main
if (require.main === module) {
  main();
}
