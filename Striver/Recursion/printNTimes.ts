function printNTimes(n: number) {
  if (n === 0) {
    return;
  }
  printNTimes(n - 1);
  process.stdout.write("Hello World ");
}

printNTimes(5);
