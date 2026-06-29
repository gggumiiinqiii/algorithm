function mergeAlternately(word1: string, word2: string): string {
  const word1Length = word1.length;
  const word2Length = word2.length;
  let maxLeng = word1Length > word2Length ? word1Length : word2Length;
  let str = "";
  for (let i = 0; i < maxLeng; i++) {
    str = str + (word1[i] || "") + (word2[i] || "");
  }
  return str;
}
mergeAlternately("abcd", "pq");
