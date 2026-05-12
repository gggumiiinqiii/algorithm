// https://ac.nowcoder.com/acm/contest/132781/C
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  const pointsArr = lines[1].split(" ").map(Number);
  // 前缀和数组，pref[i] = 前 i 个元素的和
  const pref = [0];
  for (let i = 0; i < pointsArr.length; i++) {
    pref.push(pref[i] + pointsArr[i]);
  }
  const results = [];
  for (let i = 2; i < lines.length; i++) {
    const [l, r] = lines[i].split(" ").map(Number);
    // O(1) 区间求和
    results.push(pref[r] - pref[l - 1]);
  }

  process.stdout.write(results.join("\n") + "\n");
});
