/**
 * @param {string} s
 * @return {boolean}
 * 暴力，遍历所有可能的子串长度，并且n%i==0,后续每个长度为i的子串都与
 */
var repeatedSubstringPattern = function (s) {
  let n = s.length;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i == 0) {
      let base = s.slice(0, i);
      console.log(base);
      let flag = true;
      for (let j = i; j < n; j = j + i) {
        if (base != s.slice(j, j + i)) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return true;
      }
    }
  }
  return false;
};
//重复子串，掐头去尾里面必然有一个s
var repeatedSubstringPattern1 = function (s) {
  let t = s + s;
  return t.slice(1, t.length - 1).includes(s);
};
var repeatedSubstringPattern2 = function (s) {
  const n = s.length;
  const next = new Array(n).fill(0);

  // 构建 Next 数组
  for (let i = 1; i < n; i++) {
    let j = next[i - 1];
    while (j > 0 && s[i] !== s[j]) j = next[j - 1];
    if (s[i] === s[j]) j++;
    next[i] = j;
  }

  // 核心判断逻辑
  const len = next[n - 1];
  return len > 0 && n % (n - len) === 0;
};
console.log(repeatedSubstringPattern("abcabcabcabc"));
