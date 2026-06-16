//双重for循环超时了
function pairSums1(nums: number[], target: number): number[][] {
  let results: number[][] = [];
  let n = nums.length;
  let shouldSkip: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    //已经被取走的j
    if (!shouldSkip.includes(i)) {
      for (let j = n - 1; j > i; j--) {
        if (nums[i] + nums[j] == target && !shouldSkip.includes(j) && i !== j) {
          results.push([nums[i], nums[j]]);
          shouldSkip.push(j);
          break;
        }
      }
    }
  }

  return results;
}
/**
 * 统计每个数出现的次数，遍历整个map
 *
 * @param nums
 * @param target
 * @returns
 */
function pairSums(nums: number[], target: number): number[][] {
  const map = new Map();
  let results: number[][] = [];
  //统计次数
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [num, count] of map) {
    const complement = target - num;
    //complement >= num 防止重复生成[5,6][6,5]
    if (map.has(complement) && complement >= num) {
      let pairCount;

      if (complement == num) {
        pairCount = Math.floor(count / 2);
      } else {
        pairCount = Math.min(count, map.get(complement));
      }
      for (let i = 0; i < pairCount; i++) {
        results.push([num, complement]);
      }
    }
  }
  return results;
}
pairSums([5, 6, 5], 11);
pairSums([5, 6, 5, 6], 11);
pairSums([-2, -1, 0, 3, 5, 6, 7, 9, 13, 14], 12);
pairSums([5, 5, 6, 5, 5, 6], 11);
pairSums([5, 6, 3, -6, 2, 1, 1, 0, 8, 0], 2);
