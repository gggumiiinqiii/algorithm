var hIndex = function (citations) {
  console.log(citations);
  let length = citations.length;
  let h = length;
  // 从末尾遍历
  while (h > 0) {
    let count = 0;
    for (let i = 0; i < length; i++) {
      if (citations[i] >= h) {
        count++;
      }
    }
    if (count == h) {
      break;
    } else if (count > h) {
      break;
    }
    h--;
  }
  console.log(h);
  return h;
};
module.exports = hIndex;
