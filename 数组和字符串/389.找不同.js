/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sum = 0,
    tsum = 0;
  for (let i of s) {
    sum += i.charCodeAt();
  }
  for (let j of t) {
    tsum += j.charCodeAt();
  }
  return String.fromCharCode(tsum - sum);
};
