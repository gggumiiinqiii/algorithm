// https://codeforces.com/gym/106495/problem/j
// 题目：从 1~N 中选 3 个数，和为偶数的方案数

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
  if (line.trim() !== "") {
    lines.push(line.trim());
  }
});

rl.on("close", () => {
  // ---- 读取输入 ----
  //join是数组变成字符串,split是根据\s+空格分割成数组
  const input = lines.join(" ").split(/\s+/);
  let idx = 0;

  const T = parseInt(input[idx++]); // 测试数据组数
  const MOD = 1000000007n; // 取模（BigInt 末尾加 n）
  const results = [];

  // ---- 核心思路 ----
  // 1~N 中，偶数个数 = N/2（向下取整），奇数个数 = N - 偶数个数
  // 三个数的和为偶数 => 要么 3 个偶数，要么 1 个偶数 + 2 个奇数
  //
  // 组合数公式：
  //   C(n, k) = n*(n-1)*...*(n-k+1) / k!
  //   比如 C(E, 3) = E*(E-1)*(E-2) / 6    （从 E 个偶数里选 3 个）

  for (let i = 0; i < T; i++) {
    const N = BigInt(input[idx++]); // BigInt 防止大数溢出

    // 偶数个数 E，奇数个数 O
    const E = N / 2n; // JS 整数除法会向下取整，跟 floor(N/2) 一致
    const O = N - E; // 剩下的就是奇数

    // ---- 情况 1：三个偶数 ----
    // 从 E 个偶数中选 3 个：C(E, 3) = E*(E-1)*(E-2) / 6
    let case1 = 0n;
    if (E >= 3n) {
      case1 = (E * (E - 1n) * (E - 2n)) / 6n;
    }

    // ---- 情况 2：一个偶数 + 两个奇数 ----
    // 先选 1 个偶数 C(E,1) = E
    // 再选 2 个奇数 C(O,2) = O*(O-1)/2
    // 两者相乘：E * O*(O-1)/2
    let case2 = 0n;
    if (E >= 1n && O >= 2n) {
      case2 = E * ((O * (O - 1n)) / 2n);
    }

    // ---- 结果 ----
    const total = (case1 + case2) % MOD;
    results.push(total.toString()); // BigInt 转字符串输出
  }

  // ---- 输出 ----
  process.stdout.write(results.join("\n") + "\n");
});
