function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowels = "aeiou";
  let n = words.length;
  let qn = queries.length;
  let pre = new Array(n + 1).fill(0);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let wlength = words[i].length;
    if (
      vowels.includes(words[i][0]) &&
      vowels.includes(words[i][wlength - 1])
    ) {
      sum++;
    }
    pre[i + 1] = sum;
  }
  let totalArr = new Array(qn).fill(0);
  for (let i = 0; i < qn; i++) {
    totalArr[i] = pre[queries[i][1] + 1] - pre[queries[i][0]];
  }
  console.log(pre);
  console.log(totalArr);
  return totalArr;
}
vowelStrings(
  ["aba", "bcb", "ece", "aa", "e"],
  [
    [0, 2],
    [1, 4],
    [1, 1],
  ],
);
