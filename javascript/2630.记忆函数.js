/**
 * @param {Function} fn
 * @return {Function}
 * ^\s*\*\s? 替换/*的注释
 * ^匹配一行的开头
 * \s* 匹配0个或者多个空白字符
 * \* 匹配一个星号，*是元字符
 * \s? 匹配0个或者1个空白字符
 * 返回一个记忆函数，它不会被相同的输入调用两次，而是会返回一个缓存的值和computed差不多
 * cache.get(a).get(b) -> result
 */
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    let curr = cache;
    //处理JSON.stringify 会处理{} {} 变成相同的参数，遍历最后一层可以解决这个问题
    for (const arg of args) {
      if (!curr.has(arg)) {
        curr.set(arg, new Map());
      }
      curr = curr.get(arg);
    }
    if (curr.has("result")) {
      return curr.get("result");
    }
    const result = fn(...args);
    curr.set("result", result);
    return result;
  };
}

let callCount = 0;
const memoized = memoize((obj) => {
  callCount++;
  return Object.keys(obj).length;
});

const a = {};
const b = {};

console.log(memoized(a)); // callCount: 1
console.log(memoized(a)); // callCount: 1（缓存命中）
console.log(memoized(b)); // callCount: 2（不同引用）
console.log(callCount); // 输出 2
