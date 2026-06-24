function reverseWords(s: string): string {
  let sarr: string[] = s.split(" ");
  function reverseString(str: string): string {
    let gg = "";
    let n = str.length;
    for (let i = n - 1; i >= 0; i--) {
      gg += str[i];
    }
    return gg;
  }
  let arr = [];
  arr = sarr.map((item) => {
    return reverseString(item);
  });
  return arr.join(" ");
}
console.log(reverseWords("Let's take LeetCode contest"));
