/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 * Promise.race 竞速返回最快的promise 不管是成功还是失败
 * all 返回一个promise，只要有一个失败就失败
 * allSettle 返回一个promise.数组 输出每一个promise的值
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    const timeout = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });
    const original = fn(...args);
    return Promise.race([original, timeout]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
const a = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  });
});
const b = new Promise((res, rej) => {
  rej(2);
});
Promise.race([a, b]);
