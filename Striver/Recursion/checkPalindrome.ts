function checkPalindrome(s: string): boolean {
  let s1 = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (s1.length <= 1) {
    return true;
  }

  if (s1[0] === s1[s1.length - 1]) {
    return checkPalindrome(s1.substring(1, s1.length - 1));
  }

  return false;
}

console.log(checkPalindrome(""));
