/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let length = s.length; //字符串的长度
  let oneWordLength = words[0].length; //一个单词的长度
  let stringLength = words.length * oneWordLength; //子串的长度
  let left = 0;
  let right = 0;
  let chargeMap = new Map();
  let result = [];
  for (let i = 0; i < words.length; i++) {
    chargeMap.set(i, words[i]);
  }

  while (right < length) {
    if (right >= stringLength - 1) {
      let isstring = isSubstring(
        s.slice(left, right + 1),
        chargeMap,
        oneWordLength,
        stringLength
      );
      if (isstring) {
        result.push(left);
      }
      left++;
    }
    right++;
  }
  console.log(result);
  return result;
};
function isSubstring(string, chargeMap, oneWordLength, stringLength) {
  let cloneChargeMap = new Map(chargeMap);
  let stringArr = [];
  let sumString = "";
  for (let i = 0; i < stringLength; i++) {
    sumString += string[i];
    if ((i + 1) % oneWordLength == 0) {
      stringArr.push(sumString);
      sumString = "";
    }
  }

  for (let i = 0; i < cloneChargeMap.size; i++) {
    let index = stringArr.findIndex((item) => item == cloneChargeMap.get(i));
    if (index !== -1) {
      stringArr.splice(index, 1);
    }
  }

  //等于0就是子串
  return stringArr.length == 0;
}
module.exports = findSubstring;
