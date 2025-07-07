/**
 * @param {number[][]} events
 * @return {number}
 * 贪心+最小堆
 * 参加已经开始，而且结束最早的会议
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._siftUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = last;
      this._siftDown(0);
    }
    return min;
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  _siftUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  _siftDown(i) {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

var maxEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);

  const heap = new MinHeap();
  let res = 0;
  let day = 1;
  let i = 0;
  const n = events.length;

  // 找最大结束时间，作为终止条件
  const maxDay = Math.max(...events.map((e) => e[1]));

  for (day = 1; day <= maxDay; day++) {
    // 加入今天开始的所有会议
    while (i < n && events[i][0] === day) {
      heap.insert(events[i][1]);
      i++;
    }

    // 清理已经过期的会议
    while (heap.size() && heap.peek() < day) {
      heap.extractMin();
    }
    console.log(heap);
    // 选择参加一个会议
    if (heap.size()) {
      heap.extractMin(); // 参加结束最早的会议
      res++;
    }
  }

  return res;
};

module.exports = maxEvents;
