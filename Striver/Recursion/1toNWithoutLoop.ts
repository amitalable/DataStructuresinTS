function oneToNWithoutLoop(n: number) {
  if (n === 0) {
    return;
  }

  oneToNWithoutLoop(n - 1);
  console.log(n);
}

oneToNWithoutLoop(5);
