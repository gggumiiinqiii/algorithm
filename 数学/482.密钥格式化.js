/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  let cleanStr = s.replace(/-/g, "").toUpperCase();
  if (cleanStr.length === 0) return "";
  let result = "";
  //第一组的长度，如果能被k整除，第一组就是K，否则就是余数
  let firstCroupLen = cleanStr.length % k || k;
  result += cleanStr.slice(0, firstCroupLen);
  for (let i = firstCroupLen; i < cleanStr.length; i = i + k) {
    result = result + "-" + cleanStr.slice(i, i + k);
  }
  return result;
  console.log(result);
};
licenseKeyFormatting("5F3Z-2e-9-w", 4);
