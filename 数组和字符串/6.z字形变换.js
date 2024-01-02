/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const result = []; // 用于存储最终结果的数组
  const depulate = numRows + numRows - 2; // 每个完整重复段的长度

  for (let i = 0; i < numRows; i++) {
    let j = i;
    while (j < s.length) {
      result.push(s[j]); // 将当前字符添加到结果数组中
      const nextJ = j + depulate - 2 * i;

      // 如果不是第一行和最后一行，并且下一个字符的索引在字符串长度范围内，将下一个字符添加到结果数组中
      if (i !== 0 && i !== numRows - 1 && nextJ < s.length) {
        result.push(s[nextJ]);
      }

      j += depulate; // 移动到下一个重复段的起始位置
    }
  }

  const resultString = result.join(""); // 将结果数组转换为字符串
  console.log(resultString);
  return resultString;
};

module.exports = convert;
