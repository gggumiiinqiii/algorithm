/**
 * 异或位的子串，组合
 * @param s
 * @param p
 */
function findAnagrams(s: string, p: string): number[] {
  let n = s.length;
  let left = 0;
  let right = p.length;
  let result: number[] = [];
  let map = new Map();
  for (let item of p) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  function isXor(a: string, i: number) {
    let copiedMap = new Map(map); // 或
    for (let item of a) {
      if (copiedMap.get(item)) {
        copiedMap.set(item, copiedMap.get(item) - 1);
      } else {
        return -1;
      }
    }

    for (let item of copiedMap.values()) {
      if (item !== 0) {
        return -1;
      }
    }
    return i;
  }
  for (let i = 0; i <= n - right; i++) {
    if (isXor(s.slice(i, i + right), i) !== -1) {
      result.push(i);
    }
  }
  return result;
}
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
