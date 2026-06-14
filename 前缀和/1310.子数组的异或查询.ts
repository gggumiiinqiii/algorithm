function xorQueries(arr: number[], queries: number[][]): number[] {
  let n = arr.length;
  let qn = queries.length;
  let pre = new Array(n + 1).fill(0);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum ^ arr[i];
    pre[i + 1] = sum;
  }
  let totlArr = new Array(qn).fill(0);
  for (let i = 0; i < qn; i++) {
    totlArr[i] = pre[queries[i][1] + 1] ^ pre[queries[i][0]];
  }
  console.log(pre);
  console.log(totlArr);
  return totlArr;
}

xorQueries(
  [1, 3, 4, 8],
  [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 3],
  ],
);
// xorQueries(
//   [4, 8, 2, 10],
//   [
//     [2, 3],
//     [1, 3],
//     [0, 0],
//     [0, 3],
//   ],
// );
