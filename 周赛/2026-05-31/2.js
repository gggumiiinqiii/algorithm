// https://leetcode.cn/contest/weekly-contest-504/problems/maximum-number-of-items-from-sale-i/description/
/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function (items, budget) {
  const n = items.length;
  const factor = items.map((x) => x[0]);
  const price = items.map((x) => x[1]);

  // 预处理：激活物品 i 的总贡献 = 1（自身）+ 能被 factor_i 整除的其他物品数
  const contrib = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && factor[j] % factor[i] === 0) {
        contrib[i]++; // factor_i 能整除 factor_j，购买 i 可免费拿 j
      }
    }
  }

  const minPrice = Math.min(...price);

  // 0-1 背包：dp[j] = 花费恰好 j 时，激活物品能获得的最大数量
  // 每种物品的"首次购买"是 0-1 选择（激活后得 contrib[i] 个），选或不选
  const dp = new Array(budget + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const p = price[i];
    const v = contrib[i];
    for (let j = budget; j >= p; j--) {
      dp[j] = Math.max(dp[j], dp[j - p] + v);
    }
  }
  console.log(dp);
  // 剩余预算全买最便宜的单品，每个贡献 1（额外购买不触发免费）
  let ans = 0;
  for (let j = 0; j <= budget; j++) {
    ans = Math.max(ans, dp[j] + Math.floor((budget - j) / minPrice));
  }

  return ans;
};

console.log(
  maximumSaleItems(
    [
      [6, 2],
      [2, 6],
      [3, 4],
    ],
    9,
  ),
);

console.log(
  maximumSaleItems(
    [
      [1073, 48],
      [956, 11],
      [658, 38],
      [829, 20],
      [47, 1],
      [237, 21],
      [1095, 15],
      [1335, 4],
      [533, 19],
      [506, 5],
      [252, 9],
      [803, 2],
      [1451, 17],
      [629, 1],
      [195, 39],
      [1023, 18],
      [654, 32],
      [1242, 23],
      [184, 26],
      [423, 19],
      [958, 37],
      [1416, 27],
      [39, 35],
      [309, 33],
      [557, 17],
      [71, 5],
      [1309, 24],
      [847, 6],
      [1442, 36],
      [483, 31],
      [829, 9],
      [927, 26],
      [51, 24],
      [1076, 15],
      [1296, 24],
      [252, 21],
      [1417, 50],
      [1175, 11],
      [531, 21],
      [68, 19],
      [1438, 30],
      [471, 30],
      [1139, 27],
      [491, 48],
      [1024, 29],
      [1351, 9],
      [387, 14],
      [523, 28],
      [1101, 22],
      [724, 31],
      [1211, 43],
      [772, 44],
      [90, 24],
      [926, 38],
      [239, 33],
      [1065, 42],
      [682, 14],
      [870, 41],
      [825, 5],
      [737, 40],
      [28, 6],
      [1493, 8],
      [94, 7],
      [332, 12],
      [482, 44],
      [298, 42],
      [572, 14],
      [1073, 40],
      [1451, 38],
      [1067, 1],
      [1278, 30],
      [442, 40],
      [118, 13],
      [1025, 28],
      [480, 51],
      [1178, 35],
      [1146, 18],
      [143, 36],
      [86, 44],
      [1187, 31],
      [1213, 24],
      [540, 30],
      [381, 34],
      [580, 7],
      [813, 43],
      [851, 35],
    ],
    52,
  ),
);
