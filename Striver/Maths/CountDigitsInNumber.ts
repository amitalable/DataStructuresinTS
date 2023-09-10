//https://www.codingninjas.com/studio/problems/count-digits_8416387
function countDigitsInNumber(n: number): number {
  let temp = n,
    count = 0;
  while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
  }
  return count;
}
