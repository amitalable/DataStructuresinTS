//https://leetcode.com/problems/roman-to-integer/submissions/
function romanToInt(s: string): number {
  const roman: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let intValue: number = 0;
  for (let i = 0; i < s.length; i++) {
    const romanAlpha = s[i];
    const romanAlphaNext = s[i + 1];
    if (
      (romanAlpha === "I" &&
        (romanAlphaNext === "V" || romanAlphaNext === "X")) ||
      (romanAlpha === "X" &&
        (romanAlphaNext === "L" || romanAlphaNext === "C")) ||
      (romanAlpha === "C" && (romanAlphaNext === "D" || romanAlphaNext === "M"))
    )
      intValue -= roman[s[i]];
    else intValue += roman[s[i]];
  }
  return intValue;
}
