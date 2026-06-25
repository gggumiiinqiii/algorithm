/** 统计主要元素子数组数目 — 双指针 O(n²) */
function countMajoritySubarrays(nums, target) {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let cnt = 0; // 变换后的累加和：target → +1，其他 → -1
    for (let j = i; j < n; j++) {
      //等于target就+1，不等于就-1，然后计算cnt》0 ans就++
      cnt += nums[j] === target ? 1 : -1;
      console.log(cnt, j);
      if (cnt > 0) ans++; // target 是当前子数组的主要元素
    }
  }

  return ans;
}

/** ⭐ 进阶：O(n log n) — 前缀和 + 离散化 + 树状数组（BIT）
 *  问题等价于统计 P[i] < P[j]（i < j）的对数 */
function countMajoritySubarraysOptimal(nums, target) {
  const n = nums.length;
  const prefix = [0];
  for (const num of nums) {
    prefix.push(prefix[prefix.length - 1] + (num === target ? 1 : -1));
  }

  // 离散化
  const sorted = [...new Set(prefix)].sort((a, b) => a - b);
  const comp = new Map();
  sorted.forEach((v, i) => comp.set(v, i + 1)); // 1-indexed for BIT

  // 树状数组
  const bit = new Array(sorted.length + 2).fill(0);
  const add = (i, v) => {
    while (i < bit.length) {
      bit[i] += v;
      i += i & -i;
    }
  };
  const sum = (i) => {
    let s = 0;
    while (i) {
      s += bit[i];
      i -= i & -i;
    }
    return s;
  };

  let ans = 0;
  for (const p of prefix) {
    const idx = comp.get(p);
    ans += sum(idx - 1); // 前面有多少个比当前小的前缀和
    add(idx, 1);
  }

  return ans;
}

// 测试
// console.log(countMajoritySubarrays([1, 1, 1, 1], 1)); // 10
// console.log(countMajoritySubarrays([1, 1, 2], 1));   // 4
console.log(countMajoritySubarrays([1, 2, 1], 1)); // 3 [1][1][1,2,1]
