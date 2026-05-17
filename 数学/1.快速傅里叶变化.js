// 输入两个数组代表多项式系数，用快速傅里叶变化FFT求卷积(多项式乘积)
const PI = Math.acos(-1);
class Complex {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  add(b) {
    return new Complex(this.x + b.x, this.y + b.y);
  }
  sub(b) {
    return new Complex(this.x - b.x, this.y - b.y);
  }
  mul(b) {
    return new Complex(
      this.x * b.x - this.y * b.y,
      this.x * b.y + this.y * b.x,
    );
  }
}
// FFT 核心
function fft(a, inv) {
  let n = a.length;
  // 位反转
  let rev = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    rev[i] = rev[i >> 1] >> 1;
    if (i & 1) rev[i] |= n >> 1;
    if (i < rev[i]) [a[i], a[rev[i]]] = [a[rev[i]], a[i]];
  }

  for (let mid = 1; mid < n; mid <<= 1) {
    let wn = new Complex(Math.cos(PI / mid), inv * Math.sin(PI / mid));
    for (let j = 0; j < n; j += mid * 2) {
      let w = new Complex(1, 0);
      for (let k = 0; k < mid; k++, w = w.mul(wn)) {
        let x = a[j + k];
        let y = w.mul(a[j + mid + k]);
        a[j + k] = x.add(y);
        a[j + mid + k] = x.sub(y);
      }
    }
  }
  if (inv === -1) {
    for (let i = 0; i < n; i++) a[i].x /= n;
  }
}

// 多项式卷积
function polyMul(a, b) {
  let len = 1;
  let maxLen = a.length + b.length - 1;
  while (len < maxLen) len <<= 1;

  let A = a.map((v) => new Complex(v, 0));
  let B = b.map((v) => new Complex(v, 0));
  while (A.length < len) A.push(new Complex(0, 0));
  while (B.length < len) B.push(new Complex(0, 0));

  fft(A, 1);
  fft(B, 1);
  for (let i = 0; i < len; i++) A[i] = A[i].mul(B[i]);
  fft(A, -1);

  let res = [];
  for (let i = 0; i < maxLen; i++) {
    res.push(Math.round(A[i].x));
  }
  return res;
}

// 测试
let p1 = [1, 2, 3]; // 1x^0+2x^1+3x^2
let p2 = [3, 4, 4]; // 3x^0+4x^1+3X^2
console.log(polyMul(p1, p2));
// 输出 [3,10,8] 对应 3+10x+8x²
