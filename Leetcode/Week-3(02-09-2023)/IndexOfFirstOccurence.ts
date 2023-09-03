//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
function strStr(haystack: string, needle: string): number {
  if (needle === "") {
    return 0;
  }

  const n = haystack.length;
  const m = needle.length;

  for (let i = 0; i <= n - m; i++) {
    if (haystack.substring(i, i + m) === needle) {
      return i;
    }
  }

  return -1;
}
