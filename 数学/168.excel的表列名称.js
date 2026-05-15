/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = "";
  const A = "A".charCodeAt(0); //65

  while (columnNumber > 0) {
    // 先减1
    columnNumber--;
    const remainder = columnNumber % 26;
    result = String.fromCharCode(A + remainder) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};
console.log(convertToTitle(703));
