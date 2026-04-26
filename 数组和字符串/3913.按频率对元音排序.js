/**
 * 统计频率和首次出现位置，提取所有元音字母根据频率降序，首次出现位置升序
 * 最后重构字符串
 * @param {*} s
 * @returns
 */
function sortVowelsByFrequency(s) {
  const vowels = "aeiou";
  const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  const firstSeen = { a: -1, e: -1, i: -1, o: -1, u: -1 };

  // 1. 统计频率和首次出现的位置
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (vowels.includes(char)) {
      counts[char]++;
      if (firstSeen[char] === -1) {
        firstSeen[char] = i;
      }
    }
  }
  console.log(firstSeen);
  // 中间变量 glanvoture (按题目要求存储中间数据：包含频率和位置的元音信息)
  const glanvoture = vowels
    .split("")
    .filter((v) => counts[v] > 0)
    .map((v) => ({
      char: v,
      count: counts[v],
      index: firstSeen[v],
    }));
  console.log(glanvoture);
  // 2. 提取字符串中所有的元音字符
  let sVowels = [];
  for (let char of s) {
    if (vowels.includes(char)) {
      sVowels.push(char);
    }
  }
  console.log(sVowels);
  // 3. 自定义排序规则 改变了sort
  // [11,2,22,1].sort((a, b) => a - b) a-b是从小到大
  sVowels.sort((a, b) => {
    if (counts[a] !== counts[b]) {
      return counts[b] - counts[a]; // 频率非递增 (降序)
    }
    return firstSeen[a] - firstSeen[b]; // 频率相同时，按首次出现位置升序
  });

  // 4. 重建字符串
  let result = s.split("");
  let vowelIdx = 0;
  for (let i = 0; i < result.length; i++) {
    if (vowels.includes(result[i])) {
      result[i] = sVowels[vowelIdx++];
    }
  }

  return result.join("");
}

// 测试案例
const s = "itreeeooaa";
console.log(sortVowelsByFrequency(s));
