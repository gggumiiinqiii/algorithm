/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 大数问题
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0; //进位数值，存0或者1
  const res = [];
  while (i >= 0 || j >= 0 || carry > 0) {
    const n1 = i >= 0 ? num1[i] - "0" : 0;
    const n2 = j >= 0 ? num2[j] - "0" : 0;
    const sum = n1 + n2 + carry;
    res.push(sum % 10);
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return res.reverse().join("");
};
console.log(addStrings("93338527022279222222287", "85731737104263"));
