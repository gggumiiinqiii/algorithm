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
  let chargeMap = {};
  let result = [];
  //统计字符数{a:1,b:2},这个比用map下面少了一层findIndex的计算少了不少时间复杂度
  for (let word of words) {
    if (!(word in chargeMap)) {
      chargeMap[word] = 0;
    }
    chargeMap[word]++;
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
  let cloneChargeMap = JSON.parse(JSON.stringify(chargeMap));
  let stringArr = [];
  let sumString = "";
  for (let i = 0; i < stringLength; i++) {
    sumString += string[i];
    if ((i + 1) % oneWordLength == 0) {
      stringArr.push(sumString);
      sumString = "";
    }
  }
  //console.log(cloneChargeMap);
  for (let i = 0; i < stringArr.length; i++) {
    if (cloneChargeMap[stringArr[i]] >= 1) {
      cloneChargeMap[stringArr[i]]--;
    }
  }
  let sum = 0;
  Object.keys(cloneChargeMap).forEach((key) => {
    sum += cloneChargeMap[key];
  });
  //等于0就是子串
  return sum == 0;
}
module.exports = findSubstring;
