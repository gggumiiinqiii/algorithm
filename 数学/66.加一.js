/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const result = [];
  const length = digits.length;
  let shouleJingWei = 0;
  for (let i = length - 1; i >= 0; i--) {
    // 需要进位
    if (digits[i] + 1 == 10 && (i == length - 1 || shouleJingWei)) {
      shouleJingWei = 1;
      result.unshift(0);
      //末尾而且不需要进位
    } else if (digits[i] + 1 < 10 && i == length - 1) {
      shouleJingWei = 0;
      result.unshift(digits[i] + 1);
      //首位不需要进位
    } else if (digits[i] + 1 < 10 && shouleJingWei) {
      shouleJingWei = 0;
      result.unshift(digits[i] + 1);
      // 不需要进位
    } else {
      shouleJingWei = 0;
      result.unshift(digits[i]);
    }
  }
  if (shouleJingWei == 1) {
    result.unshift(1);
  }
  console.log(result);
  return result;
};
module.exports = plusOne;
