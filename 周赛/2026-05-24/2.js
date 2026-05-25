/**
 * @param {string} password
 * @return {number}
 * https://leetcode.cn/contest/weekly-contest-503/problems/password-strength/
 * a-z 1分
 * A-Z 2分
 * 0-9 3分
 * !@#$ 5分
 */
var passwordStrength = function (password) {
  let mapCount = new Map();
  for (let item of password) {
    if (/[a-z]/.test(item)) {
      mapCount.set(item, 1);
    } else if (/[A-Z]/.test(item)) {
      mapCount.set(item, 2);
    } else if (/[0-9]/.test(item)) {
      mapCount.set(item, 3);
    } else if (/[!@#$]/.test(item)) {
      mapCount.set(item, 5);
    }
  }
  let sum = 0;
  for (let key of mapCount) {
    sum += key[1];
  }
  return sum;
};
console.log(passwordStrength("vqztn2Z"));
