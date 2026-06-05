function findWords(words: string[]): string[] {
  let keyboards = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let map = new Map();
  keyboards.forEach((item, index) => {
    for (let i of item) {
      map.set(i, index);
    }
  });
  //   console.log(map);
  const results = [];
  const n = words.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let length = words[i].length;
    for (let word of words[i]) {
      //里面每一个数字累计
      sum += map.get(word.toLocaleLowerCase());
    }
    //如果累加后的和等于第一个数*字符的长度就证明实在第一行
    if (sum == length * map.get(words[i][0].toLocaleLowerCase())) {
      results.push(words[i]);
    }
  }
  return results;
}
//  一个单词只能匹配其中一种模式——要么全部字母来自第一行（qwertyuiop），要么全部来自第二行（asdfghjkl），要么全部来自第三行（zxcvbnm）。如果字母跨行，就不匹配。
function findWordsReg(words: string[]): string[] {
  return words.filter((word) =>
    /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i.test(word),
  );
}
console.log(findWordsReg(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWordsReg(["Dad"]));
