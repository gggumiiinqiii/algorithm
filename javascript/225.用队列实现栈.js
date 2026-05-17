var MyStack = function () {
  this.queue = [];
};

// 入栈
MyStack.prototype.push = function (x) {
  let len = this.queue.length;
  this.queue.push(x);
  // 前面所有元素移到队尾
  for (let i = 0; i < len; i++) {
    this.queue.push(this.queue.shift());
  }
};

// 出栈
MyStack.prototype.pop = function () {
  return this.queue.shift();
};

// 取栈顶
MyStack.prototype.top = function () {
  return this.queue[0];
};

// 是否为空
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};
