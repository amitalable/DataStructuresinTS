function sumOfNNumbers(n: number) {
  if (n === 0) {
    return n;
  }

  return n + sumOfNNumbers(n - 1);
}

const res = sumOfNNumbers(100);
console.log(res);
