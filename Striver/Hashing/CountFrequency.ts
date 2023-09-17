function countFrequency(n: number, m: number, arr: number[]): number[] {
  const hashMap = new Array(n + 1).fill(0);

  for (const num of arr) {
    if (num <= m) {
      hashMap[num] = (hashMap[num] ?? 0) + 1;
    }
  }

  return hashMap.slice(1);
}
