/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let maSet = new Map();
  //依次计数统计有几个相同的字符串
  for (let i = 0; i < magazine.length; i++) {
    maSet.set(magazine[i], (maSet.get(magazine[i]) ?? 0) + 1);
  }
  console.log(maSet);
  for (let i = 0; i < ransomNote.length; i++) {
    if (!maSet.get(ransomNote[i])) {
      return false;
    } else {
      maSet.set(ransomNote[i], maSet.get(ransomNote[i]) - 1);
    }
  }
  return true;
};
module.exports = canConstruct;
