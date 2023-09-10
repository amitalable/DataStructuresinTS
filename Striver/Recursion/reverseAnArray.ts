function reverseAnArray(arr: any[]) {
  if (arr.length === 0) {
    return arr;
  }

  return [arr.pop(), ...reverseAnArray(arr)];
}

console.log(reverseAnArray([1, 2, 3, 4, 5]));
