// https://codeforces.com/contest/260/problem/C
function main() {
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  console.log("input", input);
  let idx = 0;

  const n = parseInt(input[idx++]);
  let x = parseInt(input[idx++]) - 1;
  const nums = Array.from({ length: n }, () => parseInt(input[idx++]));
  console.log("input1", nums);
  const mn = Math.min(...nums);

  for (let i = 0; i < n; i++) {
    nums[i] -= mn;
  }

  let total = mn * n;

  while (nums[x] > 0) {
    nums[x] -= 1;
    total += 1;
    x = (x - 1 + n) % n;
  }

  nums[x] = total;

  console.log(nums.join(" "));
}

main();
