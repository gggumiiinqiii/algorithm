/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 双指针反转字符串原地修改数组
 * 不开辟额外的数组
 */
var reverseString = function (s) {
  const length = s.length;
  let left = 0,
    right = length - 1;
  let = temp = "";
  while (left < right) {
    // temp = s[right];
    // s[right] = s[left];
    // s[left] = temp;
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  console.log(s);
  return s;
};
reverseString(["h", "e", "l", "l", "o"]);
