/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
function maxIceCream(costs: number[], coins: number): number {
  const costsSort = costs.sort((a, b) => a - b);
  let i = 0;
  let count = 0;
  while (coins > 0) {
    coins = coins - costsSort[i];
    if (coins >= 0) {
      count++;
      i++;
    }
  }
  return count;
}
console.log(maxIceCream([1, 3, 2, 4, 1], 7));
