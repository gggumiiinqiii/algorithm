// https://ac.nowcoder.com/acm/contest/132781/B
// 题目：判断字符串是否等于校训拼音 "chengyi qiuzhen duxue qiangji"

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const TARGET = "chengyi qiuzhen duxue qiangji";
let lines = [];

rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  const T = parseInt(lines[0].trim());
  const results = [];
  for (let i = 1; i <= T; i++) {
    results.push(lines[i].trim() === TARGET ? "YES" : "NO");
  }
  process.stdout.write(results.join("\n") + "\n");
});
