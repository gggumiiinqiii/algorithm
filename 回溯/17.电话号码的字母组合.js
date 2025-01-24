/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let CMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let length = digits.length;
  if (length == 0) {
    return [];
  }
  let data = [];
  for (let i = 0; i < length; i++) {
    data.push(CMap[digits[i]]);
  }
  let result = [];
  function combime(...chunks) {
    function helper(chunkIndex, pre) {
      let chunk = chunks[chunkIndex];
      let last = length - 1 == chunkIndex ? true : false;
      console.log(last);
      for (let item of chunk) {
        let cur = pre + item;
        if (last) {
          result.push(cur);
        } else {
          helper(chunkIndex + 1, cur);
        }
      }
    }

    helper(0, "");
  }
  combime(...data);
  // result = result.map((item) => item.join(""));
  return result;
};
module.exports = letterCombinations;
