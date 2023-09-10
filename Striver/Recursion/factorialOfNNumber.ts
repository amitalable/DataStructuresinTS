function factorialOfNNumber(n: number) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorialOfNNumber(n - 1);
}

console.log(factorialOfNNumber(4));
