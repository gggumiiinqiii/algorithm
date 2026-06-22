const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];
rl.on("line", (line) => {
  lines.push(line);
  if (lines.length === 2) {
    // N 和 K 是一行，S 是一行，共 2 行
    rl.close(); // 主动关闭，立即触发 close 事件
  }
});
rl.on("close", () => {
  const [N, K] = lines[0].trim().split(" ").map(Number);
  const S = lines[1].trim(); // 键盘字符串

  // 你的解题逻辑...

  console.log(N, K, S); // 用 console.log，不要用 process.stdout.write
});
