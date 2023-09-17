function minOperations(s: string): number {
  let countEven = [0, 0];
  let countOdd = [0, 0];

  for (let i = 0; i < s.length; i++) {
    const val = Number(s[i]);
    if (i % 2 === 0) {
      countEven[val]++;
    } else {
      countOdd[val]++;
    }
  }

  return (
    Math.min(countEven[0], countOdd[0]) + Math.min(countEven[1], countOdd[1])
  );
}
