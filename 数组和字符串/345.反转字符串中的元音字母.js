/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  const length = s.length;
  let sArr = s.split("");
  let left = 0,
    right = length - 1;
  while (left < right) {
    //左边是，右边不是
    if (vowels.includes(sArr[left]) && !vowels.includes(sArr[right])) {
      right--;
      //左边不是，右边是
    } else if (!vowels.includes(sArr[left]) && vowels.includes(sArr[right])) {
      left++;
      //都是
    } else if (vowels.includes(sArr[left]) && vowels.includes(sArr[right])) {
      [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
      left++;
      right--;
      //都不是
    } else {
      left++;
      right--;
    }
  }
  return sArr.join("");
};
reverseVowels("A man, a plan, a canal: Panama");
