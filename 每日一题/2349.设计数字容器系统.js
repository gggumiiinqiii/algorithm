// 原生 JS 实现最小堆
function MinHeap() {
  this.data = [];
}

MinHeap.prototype.isEmpty = function () {
  return this.data.length === 0;
};

MinHeap.prototype.front = function () {
  return this.data[0];
};

MinHeap.prototype.enqueue = function (val) {
  this.data.push(val);
  this._siftUp(this.data.length - 1);
};

MinHeap.prototype.dequeue = function () {
  if (this.data.length === 0) return undefined;
  const top = this.data[0];
  const last = this.data.pop();
  if (this.data.length > 0) {
    this.data[0] = last;
    this._siftDown(0);
  }
  return top;
};

MinHeap.prototype._siftUp = function (i) {
  const a = this.data;
  while (i > 0) {
    const p = (i - 1) >> 1;
    if (a[p] <= a[i]) break;
    [a[p], a[i]] = [a[i], a[p]];
    i = p;
  }
};

MinHeap.prototype._siftDown = function (i) {
  const a = this.data;
  const n = a.length;
  while (true) {
    let smallest = i;
    const l = i * 2 + 1;
    const r = i * 2 + 2;
    if (l < n && a[l] < a[smallest]) smallest = l;
    if (r < n && a[r] < a[smallest]) smallest = r;
    if (smallest === i) break;
    [a[i], a[smallest]] = [a[smallest], a[i]];
    i = smallest;
  }
};

// NumberContainers 主类
var NumberContainers = function () {
  this.nums = new Map(); // index -> number
  this.heaps = new Map(); // number -> MinHeap of indices
};

NumberContainers.prototype.change = function (index, number) {
  this.nums.set(index, number);
  if (!this.heaps.has(number)) {
    this.heaps.set(number, new MinHeap());
  }
  this.heaps.get(number).enqueue(index);
};

NumberContainers.prototype.find = function (number) {
  if (!this.heaps.has(number)) return -1;
  const heap = this.heaps.get(number);
  while (!heap.isEmpty() && this.nums.get(heap.front()) !== number) {
    heap.dequeue(); // 懒删除
  }
  return heap.isEmpty() ? -1 : heap.front();
};

/**
 * 示例：
 * var nc = new NumberContainers();
 * nc.change(2, 10);
 * nc.change(1, 10);
 * console.log(nc.find(10)); // 1
 * nc.change(1, 5);
 * console.log(nc.find(10)); // 2
 * console.log(nc.find(5));  // 1
 */
var nc = new NumberContainers();
nc.change(2, 10);
nc.change(1, 10);
console.log(nc.find(10)); // 1
nc.change(1, 5);
console.log(nc.find(10)); // 2
