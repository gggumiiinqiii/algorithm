/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const numberMap = new Map();
  numberMap.set("I", 1);
  numberMap.set("V", 5);
  numberMap.set("X", 10);
  numberMap.set("L", 50);
  numberMap.set("C", 100);
  numberMap.set("D", 500);
  numberMap.set("M", 1000);
  let sarr = s.split("");
  let sum = 0;
  for (let i = 0; i < sarr.length; i++) {
    if (sarr[i] == "I" && sarr[i + 1] == "V") {
      sum += 4;
      i++;
    } else if (sarr[i] == "I" && sarr[i + 1] == "X") {
      sum += 9;
      i++;
    } else if (sarr[i] == "X" && sarr[i + 1] == "L") {
      sum += 40;
      i++;
    } else if (sarr[i] == "X" && sarr[i + 1] == "C") {
      sum += 90;
      i++;
    } else if (sarr[i] == "C" && sarr[i + 1] == "D") {
      sum += 400;
      i++;
    } else if (sarr[i] == "C" && sarr[i + 1] == "M") {
      sum += 900;
      i++;
    } else {
      sum += numberMap.get(sarr[i]);
    }
  }
  console.log(sum);
  return sum;
};
module.exports = romanToInt;
