/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let t = 0,
    flag = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " " && flag) {
      t++;
      flag = 0; //加锁
    }
    if (s[i] == " ") {
      flag = 1; //解锁
    }
  }
  console.log("tt", t);
  return t;
};
countSegments('"Hello, my name is John"');
countSegments(", , , , ,   ablg,asg  ,ag");
