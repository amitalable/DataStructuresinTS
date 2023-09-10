function nTo1WithoutLoop(n: number) {
  if (n === 0) {
    return;
  }
  process.stdout.write(`${n}`);
  nTo1WithoutLoop(n - 1);
}
nTo1WithoutLoop(5);
