var MyQueue = function () {
  // 入栈：专门接收新元素
  this.inStack = [];
  // 出栈：专门用于弹出、查看队首元素
  this.outStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // 入队直接压入入栈
  this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 核心：如果出栈为空，把入栈的所有元素倒进来
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
  // 弹出出栈栈顶 = 队列队首
  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
  // 查看栈顶 = 队列队首
  return this.outStack[this.outStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // 两个栈都为空，队列才为空
  return this.inStack.length === 0 && this.outStack.length === 0;
};
