/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let sarr = s.split(" ");
  let ssMap = new Map();
  if (pattern.length !== sarr.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    ssMap.set(pattern[i], sarr[i]);
  }
  if (ssMap.size !== new Set(sarr).size) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (ssMap.get(pattern[i]) !== sarr[i]) {
      return false;
    }
  }

  console.log(ssMap);
  return true;
};
module.exports = wordPattern;
