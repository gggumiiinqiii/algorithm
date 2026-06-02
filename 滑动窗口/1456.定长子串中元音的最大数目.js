/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 不要一次次的遍历k去找，先遍历一遍k，找出一个值，然后依次右移，
 * 如果移入的这个值是元音count就加一，移出的这个值是元音count就减一，然后和max进行最大值的比较
 */
var maxVowels = function (s, k) {
  const vowels = "aeiou";
  let set = new Set(["a", "e", "i", "o", "u"]);
  let n = s.length;
  let left = 0;
  let right = left + k;
  let count = 0;
  //前3个
  for (let i = left; i < right; i++) {
    if (set.has(s[i])) {
      count++;
    }
  }
  let max = count; //定义为最大
  for (let i = right; i < n; i++) {
    if (set.has(s[left])) {
      count--;
    }
    if (set.has(s[right])) {
      count++;
    }
    left++;
    right++;
    max = Math.max(max, count);
  }
  return max;
  console.log(max);
};
maxVowels("abciiidef", 3);
maxVowels("leetcode", 2);
maxVowels("tryhard", 4);
