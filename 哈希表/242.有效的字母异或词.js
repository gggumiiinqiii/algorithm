/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //   console.log(s.split("").sort().join(""));
  //   console.log(t.split("").sort().join(""));
  //   console.log(s.split("").sort().join("") == t.split("").sort().join(""));
  //   return s.split("").sort().join("") == t.split("").sort().join("");
  if (s.length != t.length) {
    return false;
  }
  let sMap = new Map();
  let tMap = new Map();
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    sMap.set(t[i], (sMap.get(t[i]) || 0) - 1);
  }
  //等于0就返回true
  return !Array.from(sMap).some((item) => item[1] != 0);
  console.log(sMap);
  console.log(tMap);
  console.log(result);
};
module.exports = isAnagram;
