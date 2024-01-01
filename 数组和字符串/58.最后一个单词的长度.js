/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let cc = s;
  cc.trim();
  let ccarr = cc.split(" ");
  let filterSpace = ccarr.filter((item) => Boolean(item));
  let length = filterSpace.length;
  console.log(filterSpace[length - 1].length);
  return filterSpace[length - 1].length;
};
module.exports = lengthOfLastWord;
