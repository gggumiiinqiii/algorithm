/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let res = [];
  let hashMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    //字符串变成数组排序再变成字符串
    let sortedStr = strs[i].split("").sort().join("");
    console.log(sortedStr);
    if (hashMap.has(sortedStr)) {
      // 已存在分组
      res[hashMap.get(sortedStr)].push(strs[i]);
    } else {
      // 新分组
      hashMap.set(sortedStr, res.length);
      res.push([strs[i]]);
    }
  }
  console.log(res, hashMap);
  return res;
};
module.exports = groupAnagrams;
