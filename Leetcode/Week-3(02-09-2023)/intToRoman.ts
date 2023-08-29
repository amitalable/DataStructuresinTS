// https://leetcode.com/problems/integer-to-roman/submissions/
function intToRoman(num: number): string {
  const numeralValues: number[] = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
  ];
  const numeralSymbols: string[] = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let romanValue = "";
  let i = 0;

  while (num > 0) {
    const div = Math.floor(num / numeralValues[i]);
    num -= div * numeralValues[i];
    romanValue += numeralSymbols[i++].repeat(div);
  }

  return romanValue;
}
