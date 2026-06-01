// 1-1 2-1 3-2 4-3 5-5 6-8 7-13
function fb(n) {
  if (n == 1 || n == 2) return 1;
  return fb(n - 1) + fb(n - 2);
}
console.log(fb(7));

function maopao(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      //最小的移到最前
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log(arr);
}
maopao([1, 2, 3, 7, 8, 3, 2, 1]);
