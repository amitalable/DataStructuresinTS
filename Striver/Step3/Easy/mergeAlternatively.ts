function mergeAlternately(word1: string, word2: string): string {
  let i = 0;
  let newStr = "";

  while (i < word1.length && i < word2.length) {
    newStr += word1[i] + word2[i++];
  }

  while (i < word1.length) {
    newStr += word1[i++];
  }

  while (i < word2.length) {
    newStr += word2[i++];
  }

  return newStr;
}
