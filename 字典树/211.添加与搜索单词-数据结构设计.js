class WordDictionary {
  constructor() {
    this.words = new Set();
  }

  // 添加一个单词
  addWord(word) {
    this.words.add(word);
  }

  // 搜索单词
  search(word) {
    // 如果包含该单词，返回 true
    if (this.words.has(word)) {
      return true;
    }

    // 如果有 . 需要进行模糊匹配
    for (let w of this.words) {
      if (w.length === word.length && this.isMatch(w, word)) {
        return true;
      }
    }
    return false;
  }

  // 辅助函数，判断两个单词是否匹配
  isMatch(w, word) {
    for (let i = 0; i < w.length; i++) {
      if (word[i] !== "." && word[i] !== w[i]) {
        return false;
      }
    }
    return true;
  }
}

// 测试用例
let dictionary = new WordDictionary();
dictionary.addWord("bad");
dictionary.addWord("mad");
dictionary.addWord("pad");

console.log(dictionary.search("bad")); // true
console.log(dictionary.search(".ad")); // true
console.log(dictionary.search("b..")); // true
console.log(dictionary.search("abc")); // false
