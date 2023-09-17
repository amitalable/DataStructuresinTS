function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let minimumIndex = -1;
  let minimumDist = Number.MAX_VALUE;

  for (let i = 0; i < points.length; i++) {
    const [a, b] = points[i];
    if (a !== x && b !== y) continue;

    const distance = Math.abs(x - a) + Math.abs(y - b);
    if (minimumDist <= distance) continue;

    minimumDist = distance;
    minimumIndex = i;
  }

  return minimumIndex;
}
