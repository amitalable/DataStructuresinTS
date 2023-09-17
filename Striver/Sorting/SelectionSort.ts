const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let min = Infinity,
      minIndex = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        minIndex = j;
        min = arr[j];
      }
    }
    if (arr[i] > arr[minIndex]) {
      let x = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = x;
    }
  }

  return arr;
};

console.log(selectionSort([4, 2, 3, 4, 5, 6]));
