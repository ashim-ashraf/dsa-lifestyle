var count = 0;
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
  count++;
  return true
}

// An optimized version of Bubble Sort
function bubbleSort(arr, n) {
  var swapped;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++){
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = true;
      }
    }
    if (swapped == false)
      break;
  }
}

function selectionSort(arr, n) {
  console.log("selection sort");
  var i, j , minIndex;

  for (i=0 ; i<n-1; i++){
    minIndex=i;
    for (j=i+1 ; j<n; j++){
      if(arr[j]< arr[minIndex]){
        minIndex=j;
        swap(arr,minIndex, i)
      }
    }
  }
}

/* Function to print an array */
function printArray(arr, size) {
  var i;
  for (i = 0; i < size; i++) console.log(arr[i] + " ");
  console.log("\n");
}

// Driver program to test above functions
arr = [2, 3, 1, 5, 7, 3, 2];
var n = arr.length;

selectionSort(arr, n);
printArray(arr, n);
console.log("count : ", count)


