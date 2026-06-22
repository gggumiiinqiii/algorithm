function maxNumberOfBalloons(text: string): number {
  if (text.length < 7) return 0;
  const word = "balloon";
  // b a l*2 o n
  let count = Infinity;
  let wordMap = new Map();
  for (let word of text) {
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      wordMap.set(word, 1);
    }
  }
  let wordLength = 0;
  for (let [key, value] of wordMap) {
    if (word.includes(key)) {
      count = Math.min(count, value);
      if (key == "l" || key == "o") {
        count = Math.min(count, Math.floor(value / 2));
      }
      wordLength++;
    }
  }
  //wordLength一定要是5

  return wordLength == 5 ? count : 0;
}
console.log(maxNumberOfBalloons("ballon"));
