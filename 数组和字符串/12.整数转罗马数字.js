/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  //   const numberMap = new Map();
  //   numberMap.set("I", 1);
  //   numberMap.set("V", 5);
  //   numberMap.set("X", 10);
  //   numberMap.set("L", 50);
  //   numberMap.set("C", 100);
  //   numberMap.set("D", 500);
  //   numberMap.set("M", 1000);

  //   numberMap.set("IV", 4);
  //   numberMap.set("IX", 9);
  //   numberMap.set("XL", 40);
  //   numberMap.set("XC", 90);
  //   numberMap.set("CD", 400);
  //   numberMap.set("CM", 900);
  let roomArr = [];
  while (num >= 1000) {
    num -= 1000;
    roomArr.push("M");
  }
  while (num >= 900) {
    num -= 900;
    roomArr.push("CM");
  }
  while (num >= 500) {
    num -= 500;
    roomArr.push("D");
  }
  while (num >= 400) {
    num -= 400;
    roomArr.push("CD");
  }
  while (num >= 100) {
    num -= 100;
    roomArr.push("C");
  }
  while (num >= 90) {
    num -= 90;
    roomArr.push("XC");
  }
  while (num >= 50) {
    num -= 50;
    roomArr.push("L");
  }
  while (num >= 40) {
    num -= 40;
    roomArr.push("XL");
  }
  while (num >= 10) {
    num -= 10;
    roomArr.push("X");
  }
  while (num >= 9) {
    num -= 9;
    roomArr.push("IX");
  }
  while (num >= 5) {
    num -= 5;
    roomArr.push("V");
  }
  while (num >= 4) {
    num -= 4;
    roomArr.push("IV");
  }
  while (num >= 1) {
    num -= 1;
    roomArr.push("I");
  }
  console.log(roomArr.join(""));
  return roomArr.join("");
};
module.exports = intToRoman;
