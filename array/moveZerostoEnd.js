function moveZerosToEnd(arr) {
  let nonZeroPointer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroPointer] = arr[i];
      nonZeroPointer++;
    }
  }

  while (nonZeroPointer < arr.length) {
    arr[nonZeroPointer] = 0;
    nonZeroPointer++;
  }

  return arr;
}

const array = [0, 1, 0, 3, 12];
const modifiedArray = moveZerosToEnd(array);
console.log(modifiedArray);
