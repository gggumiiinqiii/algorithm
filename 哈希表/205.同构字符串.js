/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let g = new Map();
  for (let i = 0; i < s.length; i++) {
    g.set(s[i], t[i]);
  }
  console.log(g, new Set(t));
  //映射关系和去重后后的t的长度是一样的
  if (g.size !== new Set(t).size) {
    return false;
  }
  //然后依次遍历s，对s映射后的值与t进行比较
  for (let i = 0; i < s.length; i++) {
    if (g.get(s[i]) !== t[i]) {
      return false;
    }
  }
  return true;
};
module.exports = isIsomorphic;
