/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIndex = 0;
  let sLength = s.length;

  if (sLength == 0) {
    return true;
  }
  for (let i = 0; i < t.length; i++) {
    if (sLength == 0) {
      return true;
    }
    if (s[sIndex] == t[i]) {
      sLength--;
      sIndex++;
    }
  }
  console.log(sLength == 0);
  return sLength == 0;
};
module.exports = isSubsequence;
