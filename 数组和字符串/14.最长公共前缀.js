/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let normal = strs[0];
  for (let i = 0; i < strs.length; i++) {
    normal = qianzui(normal, strs[i]);
  }
  console.log(normal);
  return normal;
};
function qianzui(str1, str2) {
  let cc = "";
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == str2[i]) {
      cc = cc + str1[i];
    } else {
      break;
    }
  }
  return cc;
}
//公共字符串
function findContinuousIntersection(str1, str2) {
  let maxLength = 0;
  let endIndex = 0;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      let k = 0;
      while (
        i + k < str1.length &&
        j + k < str2.length &&
        str1[i + k] === str2[j + k]
      ) {
        k++;
      }

      if (k > maxLength) {
        maxLength = k;
        endIndex = i + k;
      }
    }
  }

  return str1.substring(endIndex - maxLength, endIndex);
}

// console.log(result); // ["c"]
module.exports = longestCommonPrefix;
