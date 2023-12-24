const maxProfit = require("../../数组和字符串/122.买卖股票得最佳时机2");
/**
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
 * 返回 你能获得的 最大 利润 。
 */
console.time("xxx");
maxProfit([7, 1, 5, 3, 6, 4]); //7
maxProfit([1, 2, 3, 4, 5]); //4
maxProfit([7, 6, 4, 3, 1]); //0
// xxx: 2.721s
// xxx: 4.73ms

console.timeEnd("xxx");
