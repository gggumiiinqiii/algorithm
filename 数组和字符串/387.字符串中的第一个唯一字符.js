/**
 * @param {string} s
 * @return {number}
 * 遍历字符串，map存首值得索引和个数，
 * 遍历map找到第一个count为1得数值，返回他得index
 */
var firstUniqChar = function (s) {
  console.log(s);
  let length = s.length;
  const map = new Map();
  for (let i = 0; i < length; i++) {
    if (map.has(s[i])) {
      let item = map.get(s[i]);
      item.count++;
      map.set(s[i], item);
    } else {
      map.set(s[i], { count: 1, index: i });
      console.log(s[i]);
    }
  }
  console.log(map);
  for (let val of map) {
    if (val[1].count == 1) {
      return val[1].index;
    }
  }
  return -1;
};
function firstUniqChar1(s) {
  for (let i in s) {
    console.log(s[i]);
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
}
console.log(firstUniqChar1("loveleetcode"));
