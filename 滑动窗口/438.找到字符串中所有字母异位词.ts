/**
 * 异或位的子串，组合
 * @param s
 * @param p
 * 定义一个need数组26位，index表示字母的所应，value表示字母出现的次数('a'.charCodeAt(0)===97)
 * 维护一个滑动窗口定义一个window数组26位，先把right一直累加维护上去，当出现right-left=p.length的时候，计算need和window的值是否完全相等，相等就登记当前的索引，同时移除left的值
 */
function findAnagrams(s: string, p: string): number[] {
  const need = new Array(26).fill(0);
  const window = new Array(26).fill(0);
  const result: number[] = [];
  const n = s.length;
  const aCode = "a".charCodeAt(0); //97
  //统计p中每个字母的频率
  for (const ch of p) {
    need[ch.charCodeAt(0) - aCode]++;
  }
  //   console.log(need);
  let left = 0,
    right = 0;
  while (right < n) {
    // 扩大窗口
    const rIdx = s.charCodeAt(right) - aCode;
    window[rIdx]++;
    right++;

    // 窗口大小等于 p.length 时，检查是否匹配
    if (right - left === p.length) {
      if (window.every((v, i) => v === need[i])) {
        result.push(left);
      }
      // 缩小窗口
      const lIdx = s.charCodeAt(left) - aCode;
      window[lIdx]--;
      left++;
    }
  }
  return result;
}
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
