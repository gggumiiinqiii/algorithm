/**
 * @param {number} turnedOn
 * @return {string[]}
 * 亮灯数量
 * 8 4 2 1
 * 32 16 8 4 2 1
 * "8:00"
 */
var readBinaryWatch = function (turnedOn) {
  //上面累加最大11 最多3个
  //下面累加最大59 最多5个
  if (turnedOn > 8) return [];
  let result = [];
  //1个灯遍历hour不遍历minus,遍历minus不遍历hour
  //2个灯C(4,2)遍历6次hour不遍历minus，C(6,2)遍历15次不遍历hour，遍历一次hour，遍历一次minus(双重for循环)
  //3个灯，2个灯c(4,2)遍历6次hour，遍历一次minus，遍历一次hour，遍历c(6,2)遍历15次minus，遍历C(6,3)20次minus
  //4个灯
  //5个灯
  //6个灯
  //7个灯
  //8个灯
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      //找到有几个1
      const hBits = h.toString("2").split("1").length - 1;
      const mBits = m.toString("2").split("1").length - 1;
      if (hBits + mBits === turnedOn) {
        const minusStr = m < 10 ? "0" + m : m;
        result.push(`${h}:${minusStr}`);
      }
    }
  }
  return result;
};
console.log(readBinaryWatch(7));
